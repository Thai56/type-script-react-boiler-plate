import * as React from 'react';

export interface ITodoProps {
    key: number;
    todo: {
        id: string,
        name: string,
        status: string,
    };
    update: (id: string) => void;
}

enum Colors {
    TODO = 'blue',
    IN_PROGRESS = 'yellow',
    FINISHED = 'green',
}

const Todo: React.SFC<ITodoProps> = ({ todo: { id, name, status }, update }) => {
    return (
        <div style={{ backgroundColor: Colors[status] }} onClick={() => update(id)}>
            <b>{name}</b>
        </div>
    );
};

export default Todo;

