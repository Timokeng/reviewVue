Vue.component('button-component', {
    data: function(){
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count += 1">You have clicked {{count}} times</button>'
})

Vue.component("blog-post", {
    props: ['title'],
    template: '<p>{{title}}</p>'
})

Vue.component('custom-input', {
    props: ['value'],
    template: `
        <input 
            :value = 'value'
            @input = '$emit("input", $event.target.value)'
            placeholder = "Pleace input something"
        >
    `
})

var vm = new Vue({
    el: '#app',
    data: {
        posts: [
            {id: 1, title: "Learn Html"},
            {id: 2, title: "Learn Vue"},
            {id: 3, title: "Just do it"}
        ],
        searchText: ''
    }
})