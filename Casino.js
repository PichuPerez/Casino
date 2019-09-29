class Casino extends React.Component {
  constructor() {
    super();
    this.state = {
      fruits: "",
      clicks: 0,
      winner: false
    };
    this.spinMachine = this.spinMachine.bind(this);
  }
  spinMachine() {
    this.refs.machine.spinMachine();
    this.setState({
      clicks: this.state.clicks + 1
    });
  }
  winner() {
    this.setState({
      winner: true
    });
  }
  render() {
    return (
      <div>
        <div className="container jumbotron text-center">
          <h1>Bienvenido al Casino </h1>
          <h1>🎰</h1>
          <hr></hr>
          <h3 className="text-center font-weight-normal">
            Da click en el boton para probar tu suerte 🍀
          </h3>
          <button className="btn btn-info btn-block" onClick={this.spinMachine}>
            Quiero probar mi suerte
          </button>
          <h3 className="text-center font-weight-normal">
            Llevas {this.state.clicks} intentos
          </h3>
          <h3 className="text-center font-weight-normal"></h3>
        </div>
        <Machine
          ref="machine"
          winner={this.winner.bind(this)}
          clicks={this.state.clicks}
        />
      </div>
    );
  }
}
