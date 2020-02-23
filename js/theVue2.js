var vm = new Vue({
    el: '#app',
    data: {
        msg: "页面加载于 " + new Date().toLocaleString(),
        rawHtml: "<span style='color:red'>This should be red</span>",
        isButtonDisabled: false,
        dynamicattribute: 'id',
        id: 'the1',
        msg2: "Hello Vue!",
        firstName: 'Tony',
        lastName: 'Lee'
    },
    computed: {
        reverseMsg: function(){
            return this.msg2.split("").reverse().join("");
        },
        fullName: {
            get: function(){
                return this.firstName + ' ' + this.lastName;
            },
            set: function(newVal){
                var fullName = newVal.split(" ");
                this.firstName = fullName[0];
                this.lastName = fullName[fullName.length - 1];
            }
        }
    },
    watch: {
        msg2: function(newVal, oldVal){
            console.log(oldVal);
        }
    }
})