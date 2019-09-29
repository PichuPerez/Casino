class Casino extends React.Component {
  constructor() {
    super();
    this.state = {
      fruits: ["🍇", "🍒", "🥝"],
      clicks: 0,
      winner: false
    };
    this.spinMachine = this.spinMachine.bind(this);
    this.reset = this.reset.bind(this);
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
  reset() {
    this.setState({
      clicks: 0,
      winner: false
    });
    this.refs.machine.spinMachine();
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
          win={this.state.winner}
          winner={this.winner.bind(this)}
          clicks={this.state.clicks}
          fruits={this.state.fruits}
        />
        {this.state.winner ? (
          <div className="container text-center">
            <button
              type="button"
              className="btn btn-info btn-lg"
              onClick={this.reset}
            >
              Jugar otra vez
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
