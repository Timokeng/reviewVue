var vm = new Vue({
    el: '#app',
    data: {
        isActive: true,
        errorClass: false,
        dynamicClass: {
            active: true,
            errorClass: false
        },
        styleData: {
            color: "red",
            fontSize: "18px"
        },
        show: true
    },
    computed: {
        computedClass: function(){
            return {
                active: this.isActive && !this.errorClass,
                errorClass: this.errorClass
            }
        }
    }
})