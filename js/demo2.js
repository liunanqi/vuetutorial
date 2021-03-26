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