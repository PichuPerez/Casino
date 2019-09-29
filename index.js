class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Casino />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
