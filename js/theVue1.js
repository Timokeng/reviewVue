Vue.component('item-model', {
    props: ['item'],
    template: '<li>{{item.text}}</li>'
})

var vue = new Vue({
    el: "#app",
    data: {
      message1: "Hello Vue!",
      message2: "页面加载于 " + new Date().toLocaleString(),
      show: false,
      items: [
          {id: 0, text: "动态渲染"},
          {id: 1, text: "动态绑定"},
          {id: 2, text: "v-if"}
      ]  
    },
    methods: {
        reverseMessage: function() {
            this.message1 = this.message1.split('').reverse().join('');
        }
    }
})