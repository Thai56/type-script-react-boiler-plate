import * as React from 'react';
import { Statuses, Colors } from '../constants/constants';

export interface ITodoProps {
    key: number;
    todo: {
        id: string,
        name: string,
        status: string,
    };
    update: (id: string) => void;
}

const Todo: React.SFC<ITodoProps> = ({ todo: { id, name, status }, update }) => {
    return (
        <div
            onClick={() => update(id)}
            style={{ backgroundColor: Colors[Statuses[status]] }}
        >
            <b>{name}</b>
        </div>
    );
};

export default Todo;

