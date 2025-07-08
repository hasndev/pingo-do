import { signal, effect, runInInjectionContext, computed } from '@angular/core';

export interface Todo {
    id: number,
    title: string,
    description: string;
    completed: boolean;
}

export type Filter = 'all' | 'completed' | 'active';

export const filter = signal<Filter>('all');

export const filteredTodos = computed(() => {
    const current = filter();
    const list = todos();

    if (current === 'completed') return list.filter(t => t.completed);
    if (current === 'active') return list.filter(t => !t.completed);
    return list;
});

function loadFromStorage(): Todo[] {
    try {
        const data = localStorage.getItem('pingodos');
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

export const todos = signal<Todo[]>(loadFromStorage());

export function addTodo(title: string, description: string) {
    const todo: Todo = {
        id: Date.now(),
        title,
        description,
        completed: false
    };
    todos.update(t => [todo, ...t]);
}

export function toggleTodo(id: number) {
    todos.update(t =>
        t.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    );
}

export function deleteTodo(id: number) {
    todos.update(t => t.filter(todo => todo.id !== id));
}