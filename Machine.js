class Machine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: false,
      fruits: this.props.fruits
    };
  }
  spinMachine() {
    //let fruits = ["🍇", "🍒", "🥝"];
    let fruits = this.props.fruits;
    let f1 = Math.floor(Math.random() * 3);
    let f2 = Math.floor(Math.random() * 3);
    let f3 = Math.floor(Math.random() * 3);

    let newFruits = [fruits[f1], fruits[f2], fruits[f3]];
    this.setState({ fruits: newFruits });
    if (newFruits[0] === newFruits[1] && newFruits[1] === newFruits[2]) {
      this.props.winner();
      this.setState({
        winner: true
      });
    }
  }

  render() {
    let renderFruits = this.state.fruits.map(fruit => (
      <p className="col h1">{fruit}</p>
    ));

    return (
      <div className="text-center  container">
        <div className="row ">{renderFruits}</div>
        {this.props.clicks > 0 ? (
          <div className="container text-center">
            {this.props.win ? (
              <p className="h1 ">GANASTE!!!! 🎉</p>
            ) : this.props.clicks < 10 ? (
              <p className="h1">Sigue intentando 😕</p>
            ) : (
              <p className="h1">Hoy no es tu dia de suerte 😰 </p>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
