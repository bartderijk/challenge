<script setup lang="ts">
import AddTodo from './components/AddTodo.vue';
import TodoList from './components/TodoList.vue';
</script>

<template>
  
  <div id="app" class="p-6 max-w-lg mx-auto">
    <div id="header">
      <h1 class="text-3xl font-bold underline !text-red-500">
        Todo list
      </h1>
    </div>
    <AddTodo />
    <TodoList />
  </div>
</template>

<style>  
#header {
  color: hotpink;
  text-align: center;
  margin: 29px auto;
}
</style>
