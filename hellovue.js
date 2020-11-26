var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })
  
  var app2 = new Vue({
el: '#app-2',
data: {
  info: '页面加载于 ' + new Date().toLocaleString()
}
})

var app3 = new Vue({
el: '#app-3',
data: {
  seen: true
}
})

var app4 = new Vue({
el: '#app-4',
data: {
  todos: [
    { text: '学习 JavaScript' },
    { text: '学习 Vue' },
    { text: '整个大项目' }
  ]
}
})

var app5 = new Vue({
  el: '#app-5',
  data: {
      message: 'Hello Vue,js'
  },
  methods: {
      reverseMessage:function() {
          this.message = this.message.split('').reverse().join('')
      }
  }
}
)

var app6 = new Vue({
    el:'#app-6',
    data: {
        message:'Hello model S!!!'
    }
})

Vue.component('todo-item',{
    props:['todo'],
    template:'<li>{{ todo.action + \' \' + todo.text}}</li>'
})
var app7 = new Vue({
    el:'#app-7',
    data:{
        bookList:[
            {id:1, text:'Harry Potter', action:'burned'},
            {id:2, text:'Ghost in the Shell', action:'finished'},
            {id:3, text:'Sherlock Holmes', action:'lost'}
        ]
    }
})