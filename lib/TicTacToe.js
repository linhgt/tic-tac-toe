"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("./components/button/Button.jsx"));
var _mainMenuModule = _interopRequireDefault(require("./main-menu.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import X_ICON from "./assets/images/ic_blue_x.svg";
// import O_ICON from "./assets/images/ic_yellow_o.svg";

var TicTacToe = function TicTacToe() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _mainMenuModule["default"]['container']
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _mainMenuModule["default"]['game-menu']
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _mainMenuModule["default"]['game-menu__header']
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/assets/images/ic_blue_x.svg",
    alt: "X"
  }), /*#__PURE__*/_react["default"].createElement("img", {
    src: "/assets/images/ic_yellow_o.svg",
    alt: "O"
  }))));
};
var _default = TicTacToe;
exports["default"] = _default;