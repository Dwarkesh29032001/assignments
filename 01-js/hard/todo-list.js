/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    // Initialize the todos array to store the list of todos
    this.todos = [];
  }

  // Adds a new todo to the list
  add(todo) {
    this.todos.push(todo);
  }

  // Removes a todo from the list by its index
  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    }
  }

  // Updates a todo at a given index
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }

  // Returns all todos
  getAll() {
    return this.todos;
  }

  // Returns a todo at a given index
  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    }
    return null;
  }

  // Clears all todos from the list
  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
