<template>
  <ul>
    <li 
      v-for="(todo, index) in todos" 
      :key="todo.id" 
      class="bg-white p-4 rounded shadow mb-2 flex justify-between items-center"
    >
      <p v-html="todo.text"></p>
      <button 
        @click="removeTodo(index)" 
        class="bg-red-500 text-white px-2 py-1 rounded"
      >
        Remove
      </button>
    </li>
  </ul>
</template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useTodoStore } from '../stores/todoStore';
  
  
      const todoStore = useTodoStore();
      const todos = computed(() => todoStore.todos);
  
      const removeTodo = (index: any) => {
        todoStore.removeTodo(index);
      };
  </script>
  