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
var Todo_1 = __importDefault(require("../components/Todo"));
var todoHelper_1 = require("../utils/todoHelper");
;
var TodosDisplayer = function (_a) {
    var todos = _a.todos;
    return !todos.length
        ? null
        : todos.map(function (todo, i) { return React.createElement(Todo_1.default, { key: i, todo: todo }); });
};
var Statuses;
(function (Statuses) {
    Statuses[Statuses["TODO"] = 1] = "TODO";
    Statuses[Statuses["IN_PROGRESS"] = 2] = "IN_PROGRESS";
    Statuses[Statuses["FINISHED"] = 3] = "FINISHED";
})(Statuses = exports.Statuses || (exports.Statuses = {}));
;
var TodosContainer = /** @class */ (function (_super) {
    __extends(TodosContainer, _super);
    function TodosContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            todos: [],
            name: '',
        };
        _this.addTodo = function () {
            var newTodo = {
                id: todoHelper_1.TodoHelper.generateRandomId(),
                name: _this.state.name,
                status: Statuses[1],
            };
            _this.setState(function () { return ({
                todos: _this.state.todos.concat([newTodo]),
            }); }, _this.resetName);
        };
        _this.changeName = function (e) {
            return _this.setState(function () { return ({ name: e.target.value }); });
        };
        _this.resetName = function () {
            return _this.setState(function () { return ({ name: '' }); });
        };
        _this.updateTodo = function (status) {
            var todoToChange = _this.state.todos;
            // TODO: add this functionality using lodash.
        };
        return _this;
    }
    TodosContainer.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("input", { onChange: this.changeName }),
            React.createElement("button", { onClick: this.addTodo }, "Add Todo"),
            React.createElement(TodosDisplayer, { todos: this.state.todos })));
    };
    return TodosContainer;
}(React.Component));
exports.default = TodosContainer;
/* Using Formik below but may be over-kill for this project */
//
// type formikProps = {
//   values: { name: string, status: string, id: string }
//   errors: {},
//   touched: {},
// }
//
// const InnerForm = ({
//   values,
//   touched,
//   errors,
//   dirty,
//   isSubmitting,
//   handleChange,
//   handleBlur,
//   handleSubmit,
//   handleReset,
// }) => {
//   console.log('values ', values);
//  return (
//    <form onSubmit={handleSubmit}>
//      <input
//        id="name"
//        type="input"
//        value={values.name}
//        onChange={handleChange}
//      />
//      <button
//       onClick={handleSubmit}
//       disabled={isSubmitting}
//      >
//       Submit
//       </button>
//    </form>
//  );
// }
//
// const EnhancedForm = withFormik({
//   mapPropsToValues: () => ({ name: '', todos: [] }),
//   validationSchema: yup.object().shape({
//     name: yup.string().required(),
//   }),
//   handleSubmit: (values, { setStatus, resetForm, setSubmitting, setErrors}) => {
//     console.groupCollapsed('_Submitting!');
//     console.log('values', values);
//     console.groupEnd();
//     setStatus({
//        todos: [
//          ...values.todos,
//          { name: values.name, status: 'backlog' },
//         ],
//         name: values.name,
//       })
//   },
//   displayName: 'Basic Form',
// })(InnerForm);
//
// export class Todos extends React.Component<{}, TodosState> {
//   state = {
//     todos: [],
//     name: '',
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Todo Container</h1>
//         <div>Todos go here</div>
//         <EnhancedForm />
//       </div>
//     );
//   }
// }
