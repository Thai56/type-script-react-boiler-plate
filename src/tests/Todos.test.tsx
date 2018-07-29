import 'jsdom-global/register'; //at the top of file , even  , before importing react
import * as React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Input from '@material-ui/core/Input';
import Todos from '../containers/Todos';

describe('Todos ', () => {
    let wrapper;
    let instance;

    beforeEach(() => {
        wrapper = mount(<Todos />);
    });

    afterEach(() => {
        wrapper = null;
    });

    it('should render', () => expect(wrapper).to.exist);

    describe('Input ', () => {
        it('should render an input ', () => {
            expect(wrapper.find('input')).to.exist;
        });

        it('should change the state when name changed ', () => {
            const instance = wrapper.find('TodosContainer').instance();

            instance.changeName({ target: { value: 'abc' } });
            
            expect(instance.state.name).to.equal('abc');
        });
    });

    describe('Button', () => {
        it('should render a button ', () => {
            expect(wrapper.find('Button').text()).to.equal('Add Todo');
        });

        it('should not add todo when there is no name ', () => {
            const instance = wrapper.find('TodosContainer').instance();
            expect(instance.state.name).to.equal('');
            instance.addTodo();
            expect(instance.state.todos.length).to.equal(0);
        });

        it('should add a todo when pressed ', () => {
            const instance = wrapper.find('TodosContainer').instance();
            instance.state.name = 'abc';
            instance.addTodo();
            expect(instance.state.todos.length).to.equal(1);
        });
    });
});
