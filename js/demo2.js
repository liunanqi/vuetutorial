Vue.createApp({
    data() {
        return {
            inputValue:'',
            list:[]
        }
    },
    methods: {
        handleAddItem() {
            this.list.push(this.inputValue)
            this.inputValue = ''
        }
    },
    template: `<div>
                    <input v-model="inputValue" />
                    <button v-on:click="handleAddItem">add item</button>
                    <ul>
                        <li v-for="(item, index) of list">[{{index}}]{{item}}</li>
                    </ul>
               </div>`
}).mount("#app")