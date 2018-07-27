"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoHelper = /** @class */ (function () {
    function TodoHelper() {
    }
    TodoHelper.generateRandomId = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    return TodoHelper;
}());
exports.TodoHelper = TodoHelper;
