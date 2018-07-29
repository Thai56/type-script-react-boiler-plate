"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var constants_1 = require("../constants/constants");
var Todo = function (_a) {
    var _b = _a.todo, id = _b.id, name = _b.name, status = _b.status, update = _a.update;
    return (React.createElement("div", { onClick: function () { return update(id); }, style: { backgroundColor: constants_1.Colors[constants_1.Statuses[status]] } },
        React.createElement("b", null, name)));
};
exports.default = Todo;
