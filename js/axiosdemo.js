Vue.createApp({
  data () {
    return {
      info: null
    }
  },
  mounted () {
    console.log('axios start...\n')
    axios
      .get('https://www.runoob.com/try/ajax/json_demo.json')
      .then(response => (this.info = response.data.sites))
      .catch(function (error) { // 请求失败处理
        console.log('error...\n')
        console.log(error);
      });
  }
}).mount("#app")