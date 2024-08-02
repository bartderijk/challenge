import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: JSON.parse(localStorage.getItem('todos') || '[]'),
  }),
  actions: {
    addTodo(text: any) {
      const todo = { id: Date.now(), text };
      this.todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    removeTodo(index: any) {
      this.todos.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
  },
});

