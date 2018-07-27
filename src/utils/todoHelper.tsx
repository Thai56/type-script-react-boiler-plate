import { Statuses } from '../constants/constants';

export type FilterTodosType = {
    TODO: any[];
    IN_PROGRESS: any[];
    FINISHED: any[];
};

export class TodoHelper {
    public static generateRandomId = () => {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };

    public static filterTodos = (todos: any[]): FilterTodosType => {
        const defaultMap = {
            TODO: [],
            IN_PROGRESS: [],
            FINISHED: [],
        };

        if (!todos.length) {
            return defaultMap;
        }

        return todos.reduce((cache, todo) => { 
            cache[todo.status].push(todo);

            return cache;
        }, defaultMap); 
    }

    public static assignNewStatus = (status) => {
        switch (status) {
            case Statuses[1]:
                return Statuses[2];
            case Statuses[2]:
                return Statuses[3];
            case Statuses[3]:
                return;
        }
    }
}