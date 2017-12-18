(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Outro = exports.PaperIntro = exports.rosOptions = exports.options = exports.Intro = exports.compile = undefined;

var _markdownToJsx = __webpack_require__(16);

var _markdownToJsx2 = _interopRequireDefault(_markdownToJsx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compile = exports.compile = function compile(mdText) {
  return function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var overrides = Object.assign({}, props.overrides, {
      p: { component: 'div', props: { className: 'p' } }
    });

    return (0, _markdownToJsx.compiler)(mdText.trim(), { overrides: overrides });
  };
};

var Intro = exports.Intro = compile('\n### Introduction\nI\'ve lately been thinking a lot about Ideologies and how [Political Philosophy](https://en.wikipedia.org/wiki/Political_philosophy) is thought about and taught. It seems like the conventional thinking about political philosophy is that one should label themselves with the ideas of some long-dead political philosopher. \n\nYet I\'ve found you can gain a much deeper understanding of the viewpoints they hold simply by talking and asking them questions regarding their views. In a certain since, you can understand someone\'s _true_ political viewpoints as the answers to the questions you ask them. I wonder if I were to ask 100 people each 100 multiple choice questions regarding their underlying political philosophy, what would the answers look like? How would that break down compared to how they label themselves?\n\nBut of course, what you gain in depth of viewpoints you lose in succinctness. It\'s hard to fit the nuance of 100 answers into a word or a sentence or a few words.\n\nThis quick project has two goals. The first is to experiment with educational mediums for political philosophy inspired by Benadict Evans "explorable explanations" and the brilliant distil.pub journal. And the second is to explore representing some of the ideas of political philosophy and ideologies as broken down into their pieces and visually reassembled. \n\nMoving off that second one: So how am I approaching taking ideas at the heart of political philosophy and breaking them down into configurable statements? Basically, poorly. For this proof-of-concept, I randomly chose [Rousseau](https://plato.stanford.edu/entries/rousseau/), dove through this ideas, and did my best to interpret and get to the heart of his ideas. \n\nRousseau\'s hypothetical responses are represented in yellow in the visulization below. Drag the the underlined phrases to represent your own ideology in red.\n\n');

var options = exports.options = {
  HumanNature: ["morally good", "amoral", "morally bad"],
  WhichSociety: ["all", "all, especially, modern", "modern"],
  SocietyEffect: ["negatively", "positively and negatively affects", "positively"],
  OrganizedState: ["unnecessary", " unfortunate but inevitable", "neutral", "necessary"],
  StateMorality: ["evil", "entity", "good"],
  StateAffairs: ["nothing", "exclusively protection from violence", "the minimum possible for society to exist", "as a counterweight to other spheres of power", "as the sole authority in society ", " as the sole authority and moral and social center of society"],
  CitizenRepresent: ["exclusively themselves", "", "a republic", "a singular leader"],
  LeaderChange: ["constantly changing", "regularly rotating", "rarely challenged", "long-term", "life-long"],
  LeaderNumber: ["group", "single figure"],
  LegitImplication: ["implied", "acting", "explicit"],
  LegitMeans: ["inherent or religious means", "monopoly on legitimate violence", "consent of elites", "consent of citizenry", "consent of every citizen"],
  NationGen: ["exclusively homogeneous", "homogeneous", "heterogenous", "actively heterogenous"],
  ReligionStatus: ["required", "encouraged", "protected", "allowed", "discouraged", "outlawed"],
  AtheismStatus: ["required", "encouraged", "protected", "allowed", "discouraged", "outlawed"],
  WomenStatus: ["equal", "mostly equal", "highly controlled"]
};

var rosOptions = exports.rosOptions = {
  AtheismStatus: 5,
  CitizenRepresent: 0,
  HumanNature: 0,
  LeaderChange: 0,
  LeaderNumber: 0,
  LegitImplication: 1,
  LegitMeans: 3.7,
  NationGen: 0,
  OrganizedState: 1,
  ReligionStatus: 1,
  SocietyEffect: 0,
  StateAffairs: 1,
  StateMorality: 0,
  WhichSociety: 1.4,
  WomenStatus: 2
};

var PaperIntro = exports.PaperIntro = compile('\nHuman beings, by nature, are <HumanNature />. The additional influence of <WhichSociety /> society <SocietyEffect /> affects them on this accord. \n\nThe organized state is viewed as a(n) <OrganizedState /> <StateMorality />. The affairs of the state should exist as <StateAffairs />. \n\nCitizens should be represented by <CitizenRepresent /> in the affairs of the state. These affairs should be overseen by a <LeaderChange /> <LeaderNumber />. \n\nStates fundamentally gain their legitimacy from <LegitImplication /> <LegitMeans />.\n\nCulturally, a nation should be <NationGen />. Religion should be <ReligionStatus />. Atheism must be <AtheismStatus />. Women should have <WomenStatus /> status. \n\n\n');

var Outro = exports.Outro = compile('\n### Final Thoughts:\n  \nFrom the beginning, I\'ve approached this essay as an interactive experience. The content is sparse. But I hope it\'s piqued your interest. Shoutout to my Modern Political Thought professor (Fall 2017, Northeastern University) for indulging me in this outrageous "essay".  \n\n');

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(6);

var _App = __webpack_require__(7);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);

  // Hot Module Replacement
  if (false) {
    module.hot.accept('./App', function () {
      render(require('./App').default);
    });
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactStaticRoutes = __webpack_require__(8);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

__webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'nav',
        { style: { display: 'none' } },
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/' },
          'Home'
        ),
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/about' },
          'About'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'content karla ' },
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      )
    )
  );
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(9);

var _Home = __webpack_require__(10);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var templateMap = {
  t_0: _Home2.default
};
var templateTree = { c: { "modpol": { t: "t_0" } } };

var getTemplateForPath = function getTemplateForPath(path) {
  var parts = path === '/' ? ['/'] : path.split('/').filter(function (d) {
    return d;
  });
  var cursor = templateTree;
  try {
    parts.forEach(function (part) {
      cursor = cursor.c[part];
    });
    return templateMap[cursor.t];
  } catch (e) {
    return false;
  }
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Template = getTemplateForPath(props.location.pathname);
          if (!Template) {
            Template = getTemplateForPath('404');
          }
          return Template && _react2.default.createElement(Template, props);
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Paper = __webpack_require__(11);

var _Paper2 = _interopRequireDefault(_Paper);

var _content = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = { opacity: 0 }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.state.opacity === 0) setTimeout(function () {
        return _this2.setState({ opacity: 1 });
      }, 1);
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'karla', style: { opacity: this.state.opacity, transition: 'opacity .1s ease-in-out' } },
        _react2.default.createElement(
          'div',
          { className: 'container grid-md' },
          _react2.default.createElement(
            'div',
            { className: 'columns' },
            _react2.default.createElement(
              'div',
              { className: 'col-12' },
              _react2.default.createElement(
                'h2',
                null,
                'Visualizing Philosophy Philosphy'
              ),
              _react2.default.createElement(_content.Intro, null)
            )
          )
        ),
        _react2.default.createElement(_Paper2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'container grid-md' },
          _react2.default.createElement(
            'div',
            { className: 'columns' },
            _react2.default.createElement(
              'div',
              { style: { height: 600 }, className: 'col-12' },
              _react2.default.createElement(_content.Outro, null)
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = (0, _reactStatic.getSiteProps)(function () {
  return _react2.default.createElement(Home, null);
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); // https://www.npmjs.com/package/react-sticky


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSticky = __webpack_require__(12);

var _reactMotion = __webpack_require__(13);

var _ramda = __webpack_require__(2);

var R = _interopRequireWildcard(_ramda);

var _Draggable = __webpack_require__(14);

var _Draggable2 = _interopRequireDefault(_Draggable);

var _content = __webpack_require__(3);

var _D3Container = __webpack_require__(17);

var _D3Container2 = _interopRequireDefault(_D3Container);

var _d3PrettyRadar = __webpack_require__(18);

var _d3PrettyRadar2 = _interopRequireDefault(_d3PrettyRadar);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var D3Container = (0, _D3Container2.default)(_d3PrettyRadar2.default);

var rosChart = {
  name: 'Rousseau',
  axes: R.pipe(R.toPairs, R.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        axis = _ref2[0],
        value = _ref2[1];

    return { axis: axis, value: (value + 1) * 100 };
  }))(_content.rosOptions)
};

var Paper = function (_React$Component) {
  _inherits(Paper, _React$Component);

  function Paper() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, Paper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = Paper.__proto__ || Object.getPrototypeOf(Paper)).call.apply(_ref3, [this].concat(args))), _this), _this.state = R.map(function (I) {
      return { prevI: 0, I: 0 };
    })(_content.options), _this.updateOption = function (oKey) {
      return function (nextState) {
        var newState = function newState(state) {
          return _defineProperty({}, oKey, Object.assign(state[oKey], nextState));
        };

        if (nextState) _this.setState(newState);
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Paper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log('rendered!', this.state);
      var optionComponents = R.mapObjIndexed(function (val, key) {
        return { component: _Draggable2.default, props: _extends({
            key: key,
            handleDrag: _this2.updateOption(key),
            options: _content.options[key]
          }, _this2.state[key]) };
      }, _content.options);

      var chartData = [rosChart, {
        name: 'user',
        axes: R.pipe(R.toPairs, R.map(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              axis = _ref6[0],
              value = _ref6[1].I;

          return { axis: axis, value: (value + 1) * 100 };
        }))(this.state)
      }];

      return _react2.default.createElement(
        _reactSticky.StickyContainer,
        { className: 'container grid-lg', style: { marginTop: '2rem' } },
        _react2.default.createElement(
          'div',
          { className: 'columns col-oneline' },
          _react2.default.createElement(
            'div',
            { className: 'column col-4', style: { width: '36%' } },
            _react2.default.createElement(_reactSticky.Sticky, { children: function children(_ref7) {
                var style = _ref7.style;
                return _react2.default.createElement(
                  'div',
                  { style: _extends({}, style) },
                  _react2.default.createElement(D3Container, { data: chartData, options: {
                      w: style.width || 340,
                      h: style.width || 340,
                      levels: 5,
                      roundStrokes: true,
                      margin: { top: 10, right: 10, bottom: 10, left: 10 },
                      maxValue: 400
                    } })
                );
              } })
          ),
          _react2.default.createElement('div', { className: 'column divider-vert' }),
          _react2.default.createElement(
            'div',
            { className: 'column col-7' },
            _react2.default.createElement(_content.PaperIntro, { overrides: optionComponents })
          )
        )
      );
    }
  }]);

  return Paper;
}(_react2.default.Component);
/*

<Motion style={{width: spring(percent)}} children={({width})=> (
  <DummyChart width={width} />
)} />
*/


exports.default = Paper;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-sticky");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-motion");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactClickdrag = __webpack_require__(15);

var _reactClickdrag2 = _interopRequireDefault(_reactClickdrag);

var _ramda = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lineStyle = function lineStyle(style) {
  return _extends({
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderBottom: '2px solid #d1d3d6',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  }, style);
};

var Underlinable = function (_React$Component) {
  _inherits(Underlinable, _React$Component);

  function Underlinable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Underlinable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Underlinable.__proto__ || Object.getPrototypeOf(Underlinable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      I: 0,
      prevI: 0
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Underlinable, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var dataDrag = nextProps.dataDrag,
          options = nextProps.options;

      console.log(dataDrag.isMouseDown, this.props.dataDrag.isMouseDown);
      var prevI = nextProps.prevI !== this.props.prevI ? nextProps.prevI : this.state.prevI;
      var I = nextProps.I !== this.props.I ? nextProps.I : this.state.I;

      var within = function within(n) {
        return (0, _ramda.clamp)(0, options.length - 1)(n);
      };

      if (dataDrag.isMouseDown) {
        this.setState(dataDrag.isMoving ? { I: within(prevI + dataDrag.moveDeltaX / 10) } : { prevI: I });
      }

      if (!dataDrag.isMouseDown && this.props.dataDrag.isMouseDown) {
        this.props.handleDrag(this.state);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var options = this.props.options;
      var I = this.state.I;

      var roundI = Math.round(I);

      var percent = I === 0 ? 0 : I === options.length - 1 ? 100 : I * 100 / options.length - 1;

      return _react2.default.createElement(
        'div',
        { tabIndex: '0', className: 'no-select-hover', style: { display: 'inline', position: 'relative', cursor: 'col-resize' } },
        options[roundI],
        _react2.default.createElement('div', { style: lineStyle({}) }),
        _react2.default.createElement('div', { style: lineStyle({
            width: percent + '%',
            borderBottom: '2px solid #333'
          }) })
      );
    }
  }]);

  return Underlinable;
}(_react2.default.Component);

var DragUnderlineable = (0, _reactClickdrag2.default)(Underlinable, { touch: true });
exports.default = DragUnderlineable;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-clickdrag");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("markdown-to-jsx");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (d3Fn) {
  return function (_React$PureComponent) {
    _inherits(D3Container, _React$PureComponent);

    function D3Container() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, D3Container);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = D3Container.__proto__ || Object.getPrototypeOf(D3Container)).call.apply(_ref, [this].concat(args))), _this), _this.renderD3 = null, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(D3Container, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.renderD3 = d3Fn(this.refs.mountpoint);
        window.reloadD3 = function () {
          return _this2.renderD3(_this2.props.data, _this2.props.options);
        };

        this.renderD3(this.props.data, this.props.options);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.renderD3(this.props.data, this.props.options);
      }
    }, {
      key: "render",
      value: function render() {
        var style = this.props.style;

        return _react2.default.createElement("div", { style: style, ref: "mountpoint" });
      }
    }]);

    return D3Container;
  }(_react2.default.PureComponent);
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _d = __webpack_require__(19);

var d3 = _interopRequireWildcard(_d);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// import { scaleLinear, scaleOrdinal, schemeCategory10} from 'd3-scale'


var max = Math.max;
var sin = Math.sin;
var cos = Math.cos;
var HALF_PI = Math.PI / 2;

exports.default = function (parentEl) {
  return function (data, options) {
    var parent_selector = parentEl;

    var wrap = function wrap(text, width) {
      text.each(function () {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.4,
            // ems
        y = text.attr("y"),
            x = text.attr("x"),
            dy = parseFloat(text.attr("dy")),
            tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");

        while (word = words.pop()) {
          line.push(word);
          tspan.text(line.join(" "));
          if (tspan.node().getComputedTextLength() > width) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
          }
        }
      });
    }; //wrap

    var cfg = {
      w: 600, //Width of the circle
      h: 600, //Height of the circle
      margin: { top: 20, right: 20, bottom: 20, left: 20 }, //The margins of the SVG
      levels: 3, //How many levels or inner circles should there be drawn
      maxValue: 0, //What is the value that the biggest circle will represent
      labelFactor: 1.25, //How much farther than the radius of the outer circle should the labels be placed
      wrapWidth: 60, //The number of pixels after which a label needs to be given a new line
      opacityArea: 0.35, //The opacity of the area of the blob
      dotRadius: 4, //The size of the colored circles of each blog
      opacityCircles: 0.1, //The opacity of the circles of each blob
      strokeWidth: 2, //The width of the stroke around each blob
      roundStrokes: false, //If true the area and stroke will follow a round path (cardinal-closed)
      color: d3.scaleOrdinal(["#EDC951", "#00A0B0", "#00A0B0", "#CC333F"]), //Color function,
      format: '',
      unit: '',
      legend: false
    };

    //Put all of the options into a variable called cfg
    if ('undefined' !== typeof options) {
      for (var i in options) {
        if ('undefined' !== typeof options[i]) {
          cfg[i] = options[i];
        }
      } //for i
    } //if

    //If the supplied maxValue is smaller than the actual one, replace by the max in the data
    // var maxValue = max(cfg.maxValue, d3.max(data, function(i){return d3.max(i.map(function(o){return o.value;}))}));
    var maxValue = 0;
    for (var j = 0; j < data.length; j++) {
      for (var _i = 0; _i < data[j].axes.length; _i++) {
        data[j].axes[_i]['id'] = data[j].name;
        if (data[j].axes[_i]['value'] > maxValue) {
          maxValue = data[j].axes[_i]['value'];
        }
      }
    }
    maxValue = max(cfg.maxValue, maxValue);

    var allAxis = data[0].axes.map(function (i, j) {
      return i.axis;
    }),
        //Names of each axis
    total = allAxis.length,
        //The number of different axes
    radius = Math.min(cfg.w / 2, cfg.h / 2),
        //Radius of the outermost circle
    Format = d3.format(cfg.format),
        //Formatting
    angleSlice = Math.PI * 2 / total; //The width in radians of each "slice"

    //Scale for the radius
    var rScale = d3.scaleLinear().range([0, radius]).domain([0, maxValue]);

    /////////////////////////////////////////////////////////
    //////////// Create the container SVG and g /////////////
    /////////////////////////////////////////////////////////
    var parent = d3.select(parent_selector);

    //Remove whatever chart with the same id/class was present before
    parent.select("svg").remove();

    //Initiate the radar chart SVG
    var svg = parent.append("svg").attr("width", cfg.w + cfg.margin.left + cfg.margin.right).attr("height", cfg.h + cfg.margin.top + cfg.margin.bottom).attr("class", "radar");

    //Append a g element
    var g = svg.append("g").attr("transform", "translate(" + (cfg.w / 2 + cfg.margin.left) + "," + (cfg.h / 2 + cfg.margin.top) + ")");

    /////////////////////////////////////////////////////////
    ////////// Glow filter for some extra pizzazz ///////////
    /////////////////////////////////////////////////////////

    //Filter for the outside glow
    var filter = g.append('defs').append('filter').attr('id', 'glow'),
        feGaussianBlur = filter.append('feGaussianBlur').attr('stdDeviation', '2.5').attr('result', 'coloredBlur'),
        feMerge = filter.append('feMerge'),
        feMergeNode_1 = feMerge.append('feMergeNode').attr('in', 'coloredBlur'),
        feMergeNode_2 = feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    /////////////////////////////////////////////////////////
    /////////////// Draw the Circular grid //////////////////
    /////////////////////////////////////////////////////////

    //Wrapper for the grid & axes
    var axisGrid = g.append("g").attr("class", "axisWrapper");

    //Draw the background circles
    axisGrid.selectAll(".levels").data(d3.range(1, cfg.levels + 1).reverse()).enter().append("circle").attr("class", "gridCircle").attr("r", function (d) {
      return radius / cfg.levels * d;
    }).style("fill", "#CDCDCD").style("stroke", "#CDCDCD").style("fill-opacity", cfg.opacityCircles).style("filter", "url(#glow)");

    //Text indicating at what % each level is
    // axisGrid.selectAll(".axisLabel")
    //    .data(d3.range(1,(cfg.levels+1)).reverse())
    //    .enter().append("text")
    //    .attr("class", "axisLabel")
    //    .attr("x", 4)
    //    .attr("y", d => -d * radius / cfg.levels)
    //    .attr("dy", "0.4em")
    //    .style("font-size", "10px")
    //    .attr("fill", "#737373")
    //    .text(d => Format(maxValue * d / cfg.levels) + cfg.unit);

    /////////////////////////////////////////////////////////
    //////////////////// Draw the axes //////////////////////
    /////////////////////////////////////////////////////////

    //Create the straight lines radiating outward from the center
    var axis = axisGrid.selectAll(".axis").data(allAxis).enter().append("g").attr("class", "axis");
    //Append the lines
    axis.append("line").attr("x1", 0).attr("y1", 0).attr("x2", function (d, i) {
      return rScale(maxValue * 1.1) * cos(angleSlice * i - HALF_PI);
    }).attr("y2", function (d, i) {
      return rScale(maxValue * 1.1) * sin(angleSlice * i - HALF_PI);
    }).attr("class", "line").style("stroke", "white").style("stroke-width", "2px");

    //Append the labels at each axis
    // axis.append("text")
    //   .attr("class", "legend")
    //   .style("font-size", "11px")
    //   .attr("text-anchor", "middle")
    //   .attr("dy", "0.35em")
    //   .attr("x", (d,i) => rScale(maxValue * cfg.labelFactor) * cos(angleSlice * i - HALF_PI))
    //   .attr("y", (d,i) => rScale(maxValue * cfg.labelFactor) * sin(angleSlice * i - HALF_PI))
    //   .text(d => d)
    //   .call(wrap, cfg.wrapWidth);

    /////////////////////////////////////////////////////////
    ///////////// Draw the radar chart blobs ////////////////
    /////////////////////////////////////////////////////////

    //The radial line function
    var radarLine = d3.radialLine().curve(d3.curveLinearClosed).radius(function (d) {
      return rScale(d.value);
    }).angle(function (d, i) {
      return i * angleSlice;
    });

    if (cfg.roundStrokes) {
      radarLine.curve(d3.curveCardinalClosed);
    }

    //Create a wrapper for the blobs
    var blobWrapper = g.selectAll(".radarWrapper").data(data).enter().append("g").attr("class", "radarWrapper");

    //Append the backgrounds
    blobWrapper.append("path").attr("class", "radarArea").attr("d", function (d) {
      return radarLine(d.axes);
    }).style("fill", function (d, i) {
      return cfg.color(i);
    }).style("fill-opacity", cfg.opacityArea).on('mouseover', function (d, i) {
      //Dim all blobs
      parent.selectAll(".radarArea").transition().duration(200).style("fill-opacity", 0.1);
      //Bring back the hovered over blob
      d3.select(this).transition().duration(200).style("fill-opacity", 0.7);
    }).on('mouseout', function () {
      //Bring back all blobs
      parent.selectAll(".radarArea").transition().duration(200).style("fill-opacity", cfg.opacityArea);
    });

    //Create the outlines
    blobWrapper.append("path").attr("class", "radarStroke").attr("d", function (d, i) {
      return radarLine(d.axes);
    }).style("stroke-width", cfg.strokeWidth + "px").style("stroke", function (d, i) {
      return cfg.color(i);
    }).style("fill", "none").style("filter", "url(#glow)");

    //Append the circles
    // blobWrapper.selectAll(".radarCircle")
    //   .data(d => d.axes)
    //   .enter()
    //   .append("circle")
    //   .attr("class", "radarCircle")
    //   .attr("r", cfg.dotRadius)
    //   .attr("cx", (d,i) => rScale(d.value) * cos(angleSlice * i - HALF_PI))
    //   .attr("cy", (d,i) => rScale(d.value) * sin(angleSlice * i - HALF_PI))
    //   .style("fill", (d,i) => { console.log(d.id, i); return cfg.color(d.id)})
    //   .style("fill-opacity", 0.8);

    /////////////////////////////////////////////////////////
    //////// Append invisible circles for tooltip ///////////
    /////////////////////////////////////////////////////////
    var tooltip = g.append("text").attr("class", "tooltip").attr('x', 0).attr('y', 0).style("font-size", "12px").style('display', 'none').attr("text-anchor", "middle").attr("dy", "0.35em");

    //Wrapper for the invisible circles on top
    var blobCircleWrapper = g.selectAll(".radarCircleWrapper").data(data).enter().append("g").attr("class", "radarCircleWrapper");

    //Append a set of invisible circles on top for the mouseover pop-up
    blobCircleWrapper.selectAll(".radarInvisibleCircle").data(function (d) {
      return d.axes;
    }).enter().append("circle").attr("class", "radarInvisibleCircle").attr("r", cfg.dotRadius * 1.5).attr("cx", function (d, i) {
      return rScale(d.value) * cos(angleSlice * i - HALF_PI);
    }).attr("cy", function (d, i) {
      return rScale(d.value) * sin(angleSlice * i - HALF_PI);
    }).style("fill", "none").style("pointer-events", "all").on("mouseover", function (d, i) {
      tooltip.attr('x', this.cx.baseVal.value - 10).attr('y', this.cy.baseVal.value - 10).transition().style('display', 'block').text(Format(d.value / 10));
    }).on("mouseout", function () {
      tooltip.transition().style('display', 'none').text('');
    });

    if (cfg.legend !== false && _typeof(cfg.legend) === "object") {
      var legendZone = svg.append('g');
      var names = data.map(function (el) {
        return el.name;
      });
      if (cfg.legend.title) {
        var title = legendZone.append("text").attr("class", "title").attr('transform', "translate(" + cfg.legend.translateX + "," + cfg.legend.translateY + ")").attr("x", cfg.w - 70).attr("y", 10).attr("font-size", "12px").attr("fill", "#404040").text(cfg.legend.title);
      }
      var legend = legendZone.append("g").attr("class", "legend").attr("height", 100).attr("width", 200).attr('transform', "translate(" + cfg.legend.translateX + "," + (cfg.legend.translateY + 20) + ")");
      // Create rectangles markers
      legend.selectAll('rect').data(names).enter().append("rect").attr("x", cfg.w - 65).attr("y", function (d, i) {
        return i * 20;
      }).attr("width", 10).attr("height", 10).style("fill", function (d, i) {
        return cfg.color(i);
      });
      // Create labels
      legend.selectAll('text').data(names).enter().append("text").attr("x", cfg.w - 52).attr("y", function (d, i) {
        return i * 20 + 9;
      }).attr("font-size", "11px").attr("fill", "#737373").text(function (d) {
        return d;
      });
    }
    return svg;
  };
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("d3");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=app.static.3b44514c.js.map