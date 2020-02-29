var ComponentA = {
    props: ['id', 'text'],
    inheritAttrs: false,
    template: '<p v-bind=$attrs>{{id}}-{{text}}</p>'
}

var ComponentB = {
    props: ['title'],
    inheritAttrs: true,
    template: '<button @click="changeTitle">{{title}}</button>',
    methods: {
        changeTitle: function(){
            var newVal = this.title == 'title1' ? 'title2':'title1'; 
            this.$emit('update:title', newVal)
        }
    }
}

Vue.component('base-checkbox', {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: ['checked'],
    template:`
        <input
            type='checkbox'
            v-bind:checked='checked'
            v-on:change='$emit("change", $event.target.checked)'
        >
    `
})

var vm = new Vue({
    el: '#app',
    data: {
        post: {
            id: 1,
            text: 'article'
        },
        checked: false,
        title: 'title1'
    },
    components: {
        'component-a': ComponentA,
        'component-b': ComponentB
    }
})