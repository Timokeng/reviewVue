const Foo = {template: '<div>Foo</div>'}
const Bar = {template: '<div>Bar</div>'}
const User = {template: '<div>User: {{$route.params.id}}</div>'}

const routes = [
    {path: '/foo', component: Foo},
    {path: '/bar', component: Bar},
    {path: '/user/:id', component: User}
]

const router = new VueRouter({
    routes
})

var myMixin = {
    computed: {
        getParams: function(){
            return this.$route.params;
        }
    },
    methods: {
        goBack: function(){
            window.history.length > 1? this.$router.go(-1) : this.$router.push('/')
        }
    }
}

var vm = new Vue({
    mixins: [myMixin],
    router,
    updated: function(){
        console.log(this.$route);
    }
}).$mount('#app');