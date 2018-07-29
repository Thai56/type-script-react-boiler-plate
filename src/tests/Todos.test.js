"use strict";
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
require("jsdom-global/register"); //at the top of file , even  , before importing react
var React = __importStar(require("react"));
var chai_1 = require("chai");
var enzyme_1 = require("enzyme");
var Todos_1 = __importDefault(require("../containers/Todos"));
describe('Todos ', function () {
    var wrapper;
    var instance;
    beforeEach(function () {
        wrapper = enzyme_1.mount(React.createElement(Todos_1.default, null));
    });
    afterEach(function () {
        wrapper = null;
    });
    it('should render', function () { return chai_1.expect(wrapper).to.exist; });
    describe('Input ', function () {
        it('should render an input ', function () {
            chai_1.expect(wrapper.find('input')).to.exist;
        });
        it('should change the state when name changed ', function () {
            var instance = wrapper.find('TodosContainer').instance();
            instance.changeName({ target: { value: 'abc' } });
            chai_1.expect(instance.state.name).to.equal('abc');
        });
    });
    describe('Button', function () {
        it('should render a button ', function () {
            chai_1.expect(wrapper.find('Button').text()).to.equal('Add Todo');
        });
        it('should not add todo when there is no name ', function () {
            var instance = wrapper.find('TodosContainer').instance();
            chai_1.expect(instance.state.name).to.equal('');
            instance.addTodo();
            chai_1.expect(instance.state.todos.length).to.equal(0);
        });
        it('should add a todo when pressed ', function () {
            var instance = wrapper.find('TodosContainer').instance();
            instance.state.name = 'abc';
            instance.addTodo();
            chai_1.expect(instance.state.todos.length).to.equal(1);
        });
    });
});
