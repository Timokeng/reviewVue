Vue.component('blog-post',{
    props: ['title'],
    template: '<div>{{title}}</div>'
})

var vm = new Vue({
    el: "#app",
    data: {
        awesome: true,
        ok: true,
        items: [
            {message: 'Bar'},
            {message: 'Foo'}
        ],
        count: 0,
        posts: [
            {id:1, message: 'Bar'},
            {id:2, message: 'Foo'},
            {id:3, message: 'Kiki'}
        ]
    }
})