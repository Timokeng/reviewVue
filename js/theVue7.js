var ComponentA = {
    template: `
        <div>
            <header>
                <slot name="header">123</slot>
            </header>
            <article>
                <slot>456</slot>
            </article>
            <footer>
                <slot name="footer">789</slot>
            </footer>
        </div>
    `
}

var ComponentB = {
    data: function(){
        return {
            user: {
                id: 1,
                name: "MrJ"
            }
        }
    },
    template: `
        <div>
            <slot v-bind:user="user">
                {{user.id}}
            </slot>
        </div>
    `,
}

var vm = new Vue({
    el: '#app',
    data: {
        chooseComponent: 'component-a'
    },
    components: {
        ComponentA,
        ComponentB
    }
})
