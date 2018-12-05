"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RandomApp = function (_React$Component) {
  _inherits(RandomApp, _React$Component);

  function RandomApp(props) {
    _classCallCheck(this, RandomApp);

    var _this = _possibleConstructorReturn(this, (RandomApp.__proto__ || Object.getPrototypeOf(RandomApp)).call(this, props));

    _this.state = {
      options: []
    };
    _this.title = "RandomApp";
    _this.subtitle = "Make your selection by Random";
    _this.onRemoveAll = _this.onRemoveAll.bind(_this);
    _this.onAddOption = _this.onAddOption.bind(_this);
    _this.onRemove = _this.onRemove.bind(_this);
    return _this;
  }

  // componentDidMount() {
  //   const json = localStorage.getItem('options');
  //   const options = JSON.parse(json);
  //   this.setState(()=> ({options}));
  // };

  _createClass(RandomApp, [{
    key: "onRemove",
    value: function onRemove(o) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return option !== o;
          })
        };
      });
    }
  }, {
    key: "onRemoveAll",
    value: function onRemoveAll() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: "onAddOption",
    value: function onAddOption(option) {
      if (!option) {
        return "Please enter valid value!";
      } else if (this.state.options.includes(option)) {
        return "The selection has existed!";
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat([option])
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: this.title, subtitle: this.subtitle }),
        React.createElement(Action, { options: this.state.options }),
        React.createElement(Options, {
          options: this.state.options,
          onRemoveAll: this.onRemoveAll,
          onRemove: this.onRemove
        }),
        React.createElement(AddOption, { onAddOption: this.onAddOption })
      );
    }
  }]);

  return RandomApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      "Title : ",
      props.title,
      " "
    ),
    React.createElement(
      "p",
      null,
      "Subtitle : ",
      props.subtitle,
      " "
    )
  );
};

var Action = function (_React$Component2) {
  _inherits(Action, _React$Component2);

  function Action(props) {
    _classCallCheck(this, Action);

    var _this2 = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));

    _this2.randomPick = _this2.randomPick.bind(_this2);
    return _this2;
  }

  _createClass(Action, [{
    key: "randomPick",
    value: function randomPick() {
      var randomNo = Math.floor(Math.random() * this.props.options.length);
      console.log("I am here");
      alert(this.props.options[randomNo]);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        {
          disabled: this.props.options.length === 0,
          onClick: this.randomPick },
        " ",
        "What should I do?",
        " "
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function Options(props) {
  return React.createElement(
    "p",
    null,
    "Options: ",
    React.createElement("br", null),
    React.createElement(
      "button",
      { onClick: props.onRemoveAll },
      " Remove All "
    ),
    props.options.map(function (option) {
      return React.createElement(Option, { key: option, option: option, onRemove: props.onRemove });
    })
  );
};

var Option = function Option(props) {
  return React.createElement(
    "li",
    null,
    " ",
    props.option,
    React.createElement(
      "button",
      {
        onClick: function onClick(e) {
          props.onRemove(props.option);
        } },
      "Remove"
    )
  );
};

var AddOption = function (_React$Component3) {
  _inherits(AddOption, _React$Component3);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this3 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this3.formSubmit = _this3.formSubmit.bind(_this3);
    _this3.state = {
      error: undefined
    };
    return _this3;
  }

  _createClass(AddOption, [{
    key: "formSubmit",
    value: function formSubmit(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.onAddOption(option);
      e.target.elements.option.value = "";

      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { onSubmit: this.formSubmit },
        React.createElement("input", { type: "text", name: "option" }),
        React.createElement(
          "button",
          null,
          " Add Option "
        ),
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(RandomApp, null), document.getElementById("app"));
