Vue.component('post',{
    props: ['mes'],
    template: `
        <div>
            <div>{{mes.title}}</div>
            <div>{{mes.article}}</div>
        </div>
    `
})

var ComponentA = {
    template:'<h1>Ohhhhhh!</h1>'
}

var vm = new Vue({
    el: '#app',
    data: {
        message: {
            title: 'Hello World!',
            article: 'Hello Vue!'
        }
    },
    components: {
        'component-a': ComponentA
    }
})