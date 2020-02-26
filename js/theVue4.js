var vm = new Vue({
    el: '#app',
    data: {
        counter: 0,
        name: "Vue",
        str1: '',
        str2:'',
        picked: '',
        checked: null,
        checkeds: [],
        select: ''
    },
    methods: {
        greet: function(){
            alert(`Hello ${this.name}!`);
            if(event){
                console.log(event.target.tagName);
            }
        }
    }
})