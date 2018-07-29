"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var Input_1 = __importDefault(require("@material-ui/core/Input"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var react_jss_1 = __importDefault(require("react-jss"));
var Todo_1 = __importDefault(require("../components/Todo"));
var todoHelper_1 = require("../utils/todoHelper");
var constants_1 = require("../constants/constants");
var todoStyles_1 = __importDefault(require("../styles/todoStyles"));
;
var TodosDisplayer = function (_a) {
    var todos = _a.todos, update = _a.update;
    return !todos.length
        ? null
        : todos.map(function (todo, i) { return React.createElement(Todo_1.default, { key: i, todo: todo, update: update }); });
};
var TodosContainer = /** @class */ (function (_super) {
    __extends(TodosContainer, _super);
    function TodosContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            todos: [],
            name: '',
        };
        _this.addTodo = function () {
            if (!_this.state.name)
                return;
            var newTodo = {
                id: todoHelper_1.TodoHelper.generateRandomId(),
                name: _this.state.name,
                status: constants_1.Statuses[1],
            };
            _this.setState(function () { return ({
                todos: _this.state.todos.concat([newTodo]),
            }); }, _this.resetName);
        };
        _this.changeName = function (e) {
            return _this.setState({ name: e.target.value });
        };
        _this.removeCallback = function (id) {
            return function () { return _this.setState(function () { return ({
                todos: _this.state.todos.filter(function (todo) { return todo.id !== id; }),
            }); }); };
        };
        _this.resetName = function () { return _this.setState(function () { return ({ name: '' }); }); };
        _this.updateTodo = function (id) {
            var todos = _this.state.todos;
            var newTodos = todos.map(function (todo, i) {
                if (todo.id === id) {
                    todo.status = todoHelper_1.TodoHelper.assignNewStatus(todo.status);
                }
                return todo;
            });
            _this.setState(function () { return ({ todos: newTodos }); });
        };
        return _this;
    }
    TodosContainer.prototype.render = function () {
        var classes = this.props.classes;
        var filteredTodos = todoHelper_1.TodoHelper.filterTodos(this.state.todos);
        return (React.createElement("div", null,
            React.createElement(Input_1.default, { id: "todo-input", onChange: this.changeName, value: this.state.name }),
            React.createElement(Button_1.default, { color: "primary", onClick: this.addTodo, variant: "contained" }, "Add Todo"),
            React.createElement("section", { className: classes.todosContainer },
                React.createElement("div", { className: classes.todosWrapper },
                    React.createElement(Typography_1.default, { variant: "display1", gutterBottom: true }, constants_1.Statuses[1]),
                    React.createElement(TodosDisplayer, { todos: filteredTodos[constants_1.Statuses[1]], update: this.updateTodo })),
                React.createElement("div", { className: classes.todosWrapper },
                    React.createElement(Typography_1.default, { variant: "display1", gutterBottom: true }, constants_1.Statuses[2]),
                    React.createElement(TodosDisplayer, { todos: filteredTodos[constants_1.Statuses[2]], update: this.updateTodo })),
                React.createElement("div", { className: classes.todosWrapper },
                    React.createElement(Typography_1.default, { variant: "display1", gutterBottom: true }, constants_1.Statuses[3]),
                    React.createElement(TodosDisplayer, { todos: filteredTodos[constants_1.Statuses[3]], update: this.updateTodo })))));
    };
    return TodosContainer;
}(React.Component));
exports.TodosContainer = TodosContainer;
exports.default = react_jss_1.default(todoStyles_1.default)(TodosContainer);
