import * as React from 'react';

interface HomeProps {
  name: string,
  age: number,
};

export class Home extends React.Component<HomeProps, {}> { // first param props, second state
  render() {
    return (
      <div>
      hello there, {this.props.name}, you are {this.props.age}, right?
      </div>
    ); 
  }
}
