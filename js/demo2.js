Vue.createApp({
    data() {
        return {
            content: '',
            setMeal: '真空套餐  帝王套餐  夏日套餐 学生套餐',
            isShowMeal: false
        }
    },
    methods: {
        welcomeBtnClick() {
            this.content = "欢迎你的光临，贵宾一位！"
        },
        byeBtnClick() {
            this.content = "欢迎下次光临，真空套餐下次8折优惠"
        },
        showOrHideBtnClick() {
            this.isShowMeal = !this.isShowMeal
        }
    },
    template: `<div>
                    <div>{{content}}</div>
                    <button v-on:click="welcomeBtnClick">有顾客来</button>&nbsp;
                    <button v-on:click="byeBtnClick">顾客离开</button>
                    <div>
                        <div v-if="isShowMeal" >{{setMeal}}</div>
                        <button v-on:click="showOrHideBtnClick">显示/隐藏套餐</button>
                    </div>
               </div>`
}).mount("#app")