Vue.createApp({
    data() {
        return {
            firstName:'',
            lastName:'',
            fullName:''
        }
    },
    methods: {
        addItem() {
            if(this.firstName && this.lastName) {
                this.fullName = 'Hello,' + this.firstName + ' ' + this.lastName + '!'
            }
        }
    }
}).mount("#app")

const watchExample = Vue.createApp({
    data() {
        return {
            question:'',
            answer:'Questions usually contain a question mark. ;-)'
        }
    },
    watch: {
        question(newQ, oldQ) {
            if(newQ.indexOf('?') > -1) {
                this.getAnswer()
            }
        }
    },
    methods: {
        getAnswer() {
            this.answer = 'Thinking...'
            axios
            .get('https://yesno.wtf/api')
            .then(response => {
                this.answer = response.data.answer
            })
            .catch(error => {
                this.answer = 'Error! Could not reach the API. ' + error
            })
        }
    }
}).mount('#watch-example')

const app = Vue.createApp({
    data() {
      return {
        newTodoText: '',
        todos: [
          {
            id: 1,
            title: 'Do the dishes'
          },
          {
            id: 2,
            title: 'Take out the trash'
          },
          {
            id: 3,
            title: 'Mow the lawn'
          }
        ],
        nextTodoId: 4
      }
    },
    methods: {
      addNewTodo() {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      }
    }
  })
  
  app.component('todo-item', {
    template: `
      <li>
        {{ title }}
        <button @click="$emit('remove')">Remove</button>
      </li>
    `,
    props: ['title'],
    emits: ['remove']
  })
  
  app.mount('#todo-list-example')