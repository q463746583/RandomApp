

class RandomApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
    this.title = "RandomApp";
    this.subtitle = "Make your selection by Random";
    this.onRemoveAll = this.onRemoveAll.bind(this);
    this.onAddOption = this.onAddOption.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }


  // componentDidMount() {
  //   const json = localStorage.getItem('options');
  //   const options = JSON.parse(json);
  //   this.setState(()=> ({options}));
  // };

  onRemove(o) {
    this.setState(prevState => {
      return {
        options: prevState.options.filter(option => {
          return option !== o;
        })
      };
    });
  }

  onRemoveAll() {
    this.setState(() => ({ options: [] }));
  }

  onAddOption(option) {
    if (!option) {
      return "Please enter valid value!";
    } else if (this.state.options.includes(option)) {
      return "The selection has existed!";
    }

    this.setState(prevState => {
      return {
        options: prevState.options.concat([option])
      };
    });
  }

  render() {
    return (
      <div>
        <Header title={this.title} subtitle={this.subtitle} />
        <Action options={this.state.options} />
        <Options
          options={this.state.options}
          onRemoveAll={this.onRemoveAll}
          onRemove={this.onRemove}
        />
        <AddOption onAddOption={this.onAddOption} />
      </div>
    );
  }
}

const Header = props => {
  return (
    <div>
      <p>Title : {props.title} </p>
      <p>Subtitle : {props.subtitle} </p>
    </div>
  );
};

class Action extends React.Component {
  constructor(props) {
    super(props);
    this.randomPick = this.randomPick.bind(this);
  }

  randomPick() {
    const randomNo = Math.floor(Math.random() * this.props.options.length);
    console.log("I am here");
    alert(this.props.options[randomNo]);
  }

  render() {
    return (
      <button
        disabled={this.props.options.length === 0}
        onClick={this.randomPick}>
        {" "}
        What should I do?{" "}
      </button>
    );
  }
}

const Options = props => {
  return (
    <p>
      Options: <br />
      <button onClick={props.onRemoveAll}> Remove All </button>
      {props.options.map(option => {
        return (
          <Option key={option} option={option} onRemove={props.onRemove} />
        );
      })}
    </p>
  );
};

const Option = props => {
  return (
    <li>
      {" "}
      {props.option}
      <button
        onClick={e => {
          props.onRemove(props.option);
        }}>
        Remove
      </button>
    </li>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
    this.state = {
      error: undefined
    };
  }

  formSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.onAddOption(option);
    e.target.elements.option.value = "";

    this.setState(() => {
      return { error };
    });
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <input type="text" name="option" />
        <button> Add Option </button>
        {this.state.error && <p>{this.state.error}</p>}
      </form>
    );
  }
}

ReactDOM.render(<RandomApp />, document.getElementById("app"));
