var app = Vue.createApp({
    data() {
      return{
        message: 'Hello Vue!'
      }
    }
}).mount("#app")
  
var app2 = Vue.createApp({
  data() {
    return{
      info: '页面加载于 ' + new Date().toLocaleString()
    }
  }
}).mount("#app-2")

var app3 = Vue.createApp({
  data(){
    return {
      seen: true
    }
  }
}).mount("#app-3")

var app4 = Vue.createApp({
  data() {
    return {
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个大项目' }
      ]
    }
  }
}).mount("#app-4")

var app5 = Vue.createApp({
  data(){
    return{
      message: 'Hello Vue,js'
    }
  },
  methods: {
    reverseMessage() {
        this.message = this.message.split('').reverse().join('')
    }
  }
}).mount("#app-5")

var app6 = Vue.createApp({
    data() {
      return{
        message:'model S'
      }
    }
}).mount("#app-6")

var app7 = Vue.createApp({
    data(){
        return{
          bookList:[
            {id:1, text:'Harry Potter', action:'burned'},
            {id:2, text:'Ghost in the Shell', action:'finished'},
            {id:3, text:'Sherlock Holmes', action:'lost'}
          ]
        }
    }
}).component('book-item',{
  props:['action', 'bookname'],
  template:'<li>{{ action + \' the \' + bookname }}</li>'
}).mount("#app-7")
