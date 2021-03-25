var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
})

var htmlTest = new Vue({
    el:'#htmlTest',
    data: {
        rawHtml: '<span style="color:red">This is red.</span>'
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