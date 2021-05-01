Vue.component('todo-item',{
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})

var app = new Vue({
    el: '#app',
    data: {
        message: "Hello World!",
        message2: "Time: " + new Date().toLocaleString(),
        seen: true,
        todos: [
            {id: 1, text:"学习 js"},
            {id: 2, text:"学习 Vue"},
            {id: 3, text:"整个牛项目"}
        ],
        cla: "active"
    },
    computed: {
        reverseMes: function(){
            return this.message.split("").reverse().join("");
        }
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split("").reverse().join("");
        }
    }
})