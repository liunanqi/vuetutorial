var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
})

var data = {
    newTodoText: '',
    visitCount: 0,
    hideCompletedTodos: false,
    todos: [],
    error: null
  }

var vm = new Vue({
    //options
    data : data
})