let planComponent = {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            required: true
        },
        selectedPlan:{
            type :  String
        }
    },
    computed:{
        isSelected(){
            return this.name === this.selectedPlan
        }
    },
    methods: {
        select(){
            this.$emit('select', this.name);
        }
    },
}

let planPickerComponent = {
    template: '#plan-picker-template',
    components : {
        plan : planComponent

    },
    data() {
        return {
            plans: [
                { id: 1, title: 'My journey with Vue' },
                { id: 2, title: 'Blogging with Vue' },
                { id: 3, title: 'Why Vue is so fun' }
            ],
            selectedPlan : null,
        }
    },
    methods: {
        selectPlan(plan){
            this.selectedPlan = plan
        }
    },
}

new Vue({
    el: '#app',
    components :{
        planPicker: planPickerComponent
    },
})