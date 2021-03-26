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