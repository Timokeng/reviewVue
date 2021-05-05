const Root = {template: '<div>The root</div>'}
const Foo = {template: '<div>The foo</div>'};
const Bar = {template: '<div>The bar</div>'};

const routes = [
    {path: '/', component: Root},
    {path: '/foo', component: Foo},
    {path: '/bar', component: Bar}
];

const router = new VueRouter({
    routes
});

var vm = new Vue({
    el: '#app',
    router: router,
    data: function(){
        return {
            message: '',
        }
    },
    computed: {
        username: function(){
            return 1
            //return this.$route.params.username
        }
    },
    methods: {
        goBack: function(){
            window.history.length > 1? this.$router.go(-1) : this.$router.push('/')
        }
    },
    filters: {
        filter1: function(val){
            if(!val) return ''
            val = val.toString();
            return val.charAt(0).toUpperCase() + val.slice(1);
        }
    }
})