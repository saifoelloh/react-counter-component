"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CustomCounter = exports.Counter = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Counter = () => {
  const [count, setCount] = _react.default.useState(0);

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, count), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "increment"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => setCount(count - 1)
  }, "decrement"));
};

exports.Counter = Counter;

const CustomCounter = _ref => {
  let {
    initialValue = 0,
    stepper = 1
  } = _ref;

  const [count, setCount] = _react.default.useState(initialValue);

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, count), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => setCount(count + stepper)
  }, "increment"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => setCount(count - stepper)
  }, "decrement"));
};

exports.CustomCounter = CustomCounter;
var _default = Counter;
exports.default = _default;