var mixin = {
    created: function(){
        this.hello()
    },
    data: function(){
        return {
            message: 'mixin',
            foo: 'abc'
        }
    },
    methods: {
        hello: function(){
            console.log("hello mixin")
        }
    },
    computed: {
        mes: function(){
            return this.foo + ' ' + this.bar;
        }
    }
}

var vm = new Vue({
    el: '#app',
    mixins: [mixin],
    data: {
        message: 'world',
        bar: 'ohh'
    },
    created: function(){
        console.log(this.$data)
    }
})