<template>
  <div id="todos">
    <h1>Todo Items</h1>
    <ul>
      <li v-for="todo in uncompletedTasks" v-bind:key="todo.task" v-on:click="removeTodo(todo)">
        {{ todo.task }}
      </li>
    </ul>
    <input v-model="taskToAdd">
    <button v-on:click="addTodo">Add task</button>
    <div>
      <h1>Completed</h1>
      <ul>
        <li v-for="todo in completedTasks" v-bind:key="todo.task">
          {{ todo.task }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      taskToAdd: '',
      todos: [
        {
          task: "Grocery shopping",
          completed: false
        },
        {
          task: "Laundry",
          completed: false
        }
      ]
    }
  },
  computed: {
    completedTasks: function() {
      return this.todos.filter(function(task) {
        return task.completed
      })
    },
    uncompletedTasks: function() {
      return this.todos.filter(function(task) {
        return !task.completed
      })
    }
  },
  methods: {
    addTodo: function() {
      this.todos.push({
        task: this.taskToAdd,
        completed: false
      })
    },
    removeTodo: function(todo) {
      todo.completed = !todo.completed
    }
  }
}
</script>
