import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  currencyData: {
    title: string;
    value: string;
    abbreviation: string;
  } | null;
}

const initialState: ModalState = {
  isOpen: false,
  currencyData: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{
        title: string;
        value: string;
        abbreviation: string;
      }>,
    ) => {
      state.isOpen = true;
      state.currencyData = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.currencyData = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
