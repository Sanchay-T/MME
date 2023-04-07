"use strict";
"use es6";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.oneOfListInvariant = void 0;

var _invariant = _interopRequireDefault(require("../utils/invariant"));

const oneOfListInvariant = (potentialVar, potentialVarName, listOfOptions) =>
  (0, _invariant.default)(
    listOfOptions.indexOf(potentialVar) > -1,
    `Expected %s to be one of ${listOfOptions.toString()} but got %s`,
    potentialVarName,
    potentialVar
  );

exports.oneOfListInvariant = oneOfListInvariant;
