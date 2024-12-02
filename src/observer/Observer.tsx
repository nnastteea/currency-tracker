class Observer {
  private observers: { [key: string]: Function[] } = {};

  subscribe(event: string, callback: Function) {
    if (!this.observers[event]) {
      this.observers[event] = [];
    }
    this.observers[event].push(callback);
  }

  unsubscribe(event: string, callback: Function) {
    if (this.observers[event]) {
      this.observers[event] = this.observers[event].filter(
        (obs) => obs !== callback,
      );
    }
  }

  notify(event: string, data?: any) {
    if (this.observers[event]) {
      this.observers[event].forEach((callback) => callback(data));
    }
  }
}

export default new Observer();
