import * as React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import injectSheet from 'react-jss'

import Todo from '../components/Todo';

import { TodoHelper } from '../utils/todoHelper';
import { Statuses } from '../constants/constants';
import styles from '../styles/todoStyles';

export interface ITodosDisplayerProps {
  todos?: any[];
  update: (id: string) => void;
};

const TodosDisplayer: React.SFC<ITodosDisplayerProps> = ({ todos, update }): null | any => {
  return !todos.length
    ? null
    : todos.map((todo, i) => <Todo key={i} todo={todo} update={update} />);
};

interface TodosProps {
  classes: any;
}

type TodosState = {
  todos: object[],
  name: string,
};

class TodosContainer extends React.Component<TodosProps> {
  state = {
    todos: [],
    name: '',
  };

  render() {
    const { classes } = this.props;
    const filteredTodos = TodoHelper.filterTodos(this.state.todos);

    return (
      <div>
        <Input value={this.state.name} onChange={this.changeName} />
        <Button
          color="primary"
          onClick={this.addTodo}
          variant="contained"
        >
          Add Todo
         </Button>

        <section className={classes.todosContainer}>
          <div className={classes.todosWrapper}>
            <Typography variant="display1" gutterBottom>
              {Statuses[1]}
            </Typography>
            <TodosDisplayer todos={filteredTodos[Statuses[1]]} update={this.updateTodo} />
          </div>

          <div className={classes.todosWrapper}>
            <Typography variant="display1" gutterBottom>
              {Statuses[2]}
            </Typography>
            <TodosDisplayer todos={filteredTodos[Statuses[2]]} update={this.updateTodo} />
          </div>

          <div className={classes.todosWrapper}>
            <Typography variant="display1" gutterBottom>
              {Statuses[3]}
            </Typography>
            <TodosDisplayer todos={filteredTodos[Statuses[3]]} update={this.updateTodo} />
          </div>
        </section>

      </div>
    );
  }

  addTodo = (): void => {
    if (!this.state.name) return;

    const newTodo = {
      id: TodoHelper.generateRandomId(),
      name: this.state.name,
      status: Statuses[1],
    };

    this.setState(() => ({
      todos: [...this.state.todos, newTodo],
    }), this.resetName);
  }

  changeName = (e: React.ChangeEvent<HTMLInputElement>): void =>
    this.setState({ name: e.target.value });

  removeCallback = (id: string): () => void =>
    () => this.setState(() => ({
      todos: this.state.todos.filter(todo => todo.id !== id),
    }));

  resetName = (): void => this.setState(() => ({ name: '' }));

  updateTodo = (id: string): void => {
    const { todos } = this.state;
    const newTodos = todos.map((todo: { id: string, status: string }, i: number) => {

      if (todo.id === id) {
        todo.status = TodoHelper.assignNewStatus(todo.status);
      }

      return todo;
    });

    this.setState(() => ({ todos: newTodos }));
  }
}

export default injectSheet(styles)(TodosContainer);