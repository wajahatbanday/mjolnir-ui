"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var common_1 = require("../common");
var config_1 = require("../config");
exports.Box = styled_components_1.default.div.withConfig(config_1.configStyle)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  ", ";\n"])), common_1.systemStyles);
var templateObject_1;
