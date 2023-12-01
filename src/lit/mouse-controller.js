export default class MouseController {
  host = null;
  pos = { x: 0, y: 0 };

  _onMouseMove = ({ clientX, clientY }) => {
    this.pos = { x: clientX, y: clientY };
    this.host.requestUpdate();
  };

  constructor(host) {
    this.host = host;
    host.addController(this);
  }

  hostConnected() {
    console.log('hostConnected');
    window.addEventListener('mousemove', this._onMouseMove);
  }

  hostDisconnected() {
    console.log('hostDisconnected');
    window.removeEventListener('mousemove', this._onMouseMove);
  }
}
