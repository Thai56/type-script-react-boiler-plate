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
var Colors;
(function (Colors) {
    Colors["TODO"] = "blue";
    Colors["IN_PROGRESS"] = "yellow";
    Colors["FINISHED"] = "green";
})(Colors || (Colors = {}));
var Todo = function (_a) {
    var _b = _a.todo, name = _b.name, status = _b.status;
    return (React.createElement("div", { style: { backgroundColor: Colors[status] } },
        React.createElement("b", null, name)));
};
exports.default = Todo;
