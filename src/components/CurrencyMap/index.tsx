import React from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { connect } from "react-redux";
import Phone from "@assets/Phone.svg";
import Place from "@assets/Place.svg";
import { banks, VITEBSK_COORDS } from "@constants/Constants";
import { getCityCoordinates } from "@helpers/getCityCoordinates";
import { fetchlocation } from "@store/locationSlice";

import { Bank, BankMapProps, BankMapState, RootState } from "./interfaces";
import * as S from "./styles";

import "mapbox-gl/dist/mapbox-gl.css";

class BankMap extends React.Component<BankMapProps, BankMapState> {
  constructor(props: BankMapProps) {
    super(props);
    this.state = {
      selectedBank: null,
      viewState: VITEBSK_COORDS,
    };
  }

  componentDidMount() {
    this.fetchUserLocation();
  }

  fetchUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.handleGeolocationSuccess,
        this.handleGeolocationError,
        { enableHighAccuracy: true },
      );
    }
  };

  handleGeolocationSuccess = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;
    console.log("Coordinates:", latitude, longitude);
    this.props.fetchLocation({ latitude, longitude });
  };

  handleGeolocationError = (error: GeolocationPositionError) => {
    console.error("Geolocation error:", error.message);
  };

  setSelectedBank = (bank: Bank | null) => {
    this.setState({ selectedBank: bank });
  };

  handleMapMove = (event: any) => {
    this.setState({ viewState: event.viewState });
  };

  componentDidUpdate(prevProps: BankMapProps) {
    if (prevProps.userCity !== this.props.userCity) {
      const { userCity } = this.props;
      if (userCity) {
        const cityCoordinates = getCityCoordinates(userCity);
        if (cityCoordinates) {
          this.setState({ viewState: cityCoordinates });
        }
      }
    }
  }

  render() {
    const { selectedCurrency, userCity } = this.props;
    const { selectedBank, viewState } = this.state;

    const cityBanks = userCity
      ? banks.filter((bank) => bank.city === userCity)
      : [];

    const filteredBanks = cityBanks.filter((bank) =>
      bank.currencies.includes(selectedCurrency),
    );

    return (
      <>
        <Map
          {...viewState}
          style={{ width: "100%", height: "400px" }}
          mapStyle="mapbox://styles/mapbox/outdoors-v11"
          mapboxAccessToken={process.env.REACT_APP_API_KEY_FOR_MAP}
          onMove={this.handleMapMove}
          attributionControl={false}
        >
          {filteredBanks.map((bank) => (
            <Marker
              key={bank.name}
              longitude={bank.coordinates[0]}
              latitude={bank.coordinates[1]}
              onClick={() => this.setSelectedBank(bank)}
            >
              <S.MarkerCircle />
            </Marker>
          ))}

          {selectedBank && (
            <Popup
              longitude={selectedBank.coordinates[0]}
              latitude={selectedBank.coordinates[1]}
              closeButton={true}
              closeOnClick={false}
              onClose={() => this.setSelectedBank(null)}
              anchor="bottom"
            >
              <S.InfoContainer>
                <S.HeadText>{selectedBank.name}</S.HeadText>
                <S.InfoItem>
                  <S.Icon src={Place} alt="bank address" />
                  <S.InfoText>{selectedBank.description}</S.InfoText>
                </S.InfoItem>
                <S.InfoItem>
                  <S.Icon src={Phone} alt="phone number" />
                  <S.InfoText>{selectedBank.telephone}</S.InfoText>
                </S.InfoItem>
              </S.InfoContainer>
            </Popup>
          )}
        </Map>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  userCity: state.location.userCity,
  status: state.location.status,
});

const mapDispatchToProps = {
  fetchLocation: fetchlocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(BankMap);
