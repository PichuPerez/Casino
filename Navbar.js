class Navbar extends React.Component {
  render() {
    let date = new Date().toString();
    return (
      <div>
        <div className="navbar navbar-dark bg-dark">
          <h4 className="text-white h4">CASINO</h4>
          <span className="text-white">{date}</span>
        </div>
      </div>
    );
  }
}
