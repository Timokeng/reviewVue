var ComponentA = {
    template: `
        <div>
            <header>
                <slot name="header"></slot>
            </header>
            <article>
                <slot></slot>
            </article>
            <footer>
                <slot name="footer"></slot>
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

    },
    components: {
        ComponentA,
        ComponentB
    }
})
