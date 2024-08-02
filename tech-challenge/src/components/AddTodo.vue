<template>
    <div class="mb-4">
      <input 
        type="text" 
        v-model="newTodo" 
        placeholder="Add a new task" 
        class="border p-2 rounded w-full mb-2"
      />
      <button 
        @click="addTodo" 
        class="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
      <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useTodoStore } from '../stores/todoStore';
  
      const newTodo = ref('');
      const error = ref('');
      const todoStore = useTodoStore();
  
      const addTodo = () => {
        if (newTodo.value.trim() === '') {
          error.value = 'Please enter a task';
          return;
        }
        todoStore.addTodo(newTodo.value);
        newTodo.value = '';
        error.value = '';
    }
  </script>
  
  