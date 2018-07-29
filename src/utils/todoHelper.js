"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../constants/constants");
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
    TodoHelper.filterTodos = function (todos) {
        var _a;
        var defaultMap = (_a = {},
            _a[constants_1.Statuses[1]] = [],
            _a[constants_1.Statuses[2]] = [],
            _a[constants_1.Statuses[3]] = [],
            _a[constants_1.Statuses[4]] = [],
            _a);
        return !todos.length
            ? defaultMap
            : todos.reduce(function (cache, todo) {
                cache[todo.status].push(todo);
                return cache;
            }, defaultMap);
    };
    TodoHelper.assignNewStatus = function (status) {
        switch (status) {
            case constants_1.Statuses[1]:
                return constants_1.Statuses[2];
            case constants_1.Statuses[2]:
                return constants_1.Statuses[3];
            case constants_1.Statuses[3]:
                return constants_1.Statuses[4];
            default: return constants_1.Statuses[0];
        }
    };
    return TodoHelper;
}());
exports.TodoHelper = TodoHelper;
