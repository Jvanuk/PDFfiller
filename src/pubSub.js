class Emitter {
	constructor() {
  	this.listeners = [];
  };

  on(eventName, func) {
  	if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(func);
  }

  emit(eventName, data) {
    if (!this.listeners[eventName]) {
      return;
    }

    for (const eventHandler of this.listeners[eventName]) {
      eventHandler(data);
    }
  }
}

const emitter = new Emitter();
const SHOT_TAKEN_EVENT = 'shotTaken';
emitter.on(SHOT_TAKEN_EVENT, (parts) => console.log('Shots taken in: ', parts));
emitter.emit(SHOT_TAKEN_EVENT, ['Left Arm', 'Spine']);
