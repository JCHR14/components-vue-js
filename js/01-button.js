Vue.component('button-counter', {
    template: '<button @click="count++" >{{count}}</button>',
    data() {
        return {
            count:0
        }
    },
})

new Vue({
    el: '#app'
})