"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configStyle = void 0;
var acceptedDOMProps = [
    "style",
    "height",
    "width",
    "children",
    "variant",
    "onClick",
    "onKeyDown",
    "onChange",
    "id",
    "onFocus",
    "onBlur",
    "type",
    "name",
    "value",
    "cols",
    "rows",
    "placeholder",
    "zIndex",
    "cursor",
    "dangerouslySetInnerHTML",
    "disabled",
    "list",
];
exports.configStyle = {
    shouldForwardProp: function (prop) {
        return acceptedDOMProps.includes(prop);
    },
};
