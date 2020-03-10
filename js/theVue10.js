const Foo1 = {template: '<div>Foo1</div>'}
const Foo2 = {template: '<div>Foo2</div>'}
const Bar = {template: '<di>Bar</di>'}
const User = {template: `
    <div class="user">
        <div>User</div>
        <router-view></router-view>
    </div>
`}
const Post = {template: '<div>Post</div>'}
const Id = {template: '<div>{{$route.params.id}}</div>'}

const routes = [
    {
        path: '/foo',
        name: 'foo',
        components: {
            default: Foo1,
            a: Foo2
        }
    },
    {path: '/bar', name: 'bar', component: Bar},
    {
        path: '/user',
        component: User,
        children: [
            {path: 'post', name: 'post', component: Post},
            {path: 'id/:id', name: 'id', component: Id}
        ]
    }
]

let router = new VueRouter({
    routes
})

let vm = new Vue({
    router
}).$mount('#app')