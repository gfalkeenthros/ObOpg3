Vue.createApp({
    data() {
        return {
            nameList: [],
        }
    },
    methods: {
        addToName() {
            this.nameList = []
            this.nameList.push(this.name)
            this.nameList.push(this.name.toLowerCase())
            this.nameList.push(this.name.toUpperCase())
        },
    },
}).mount("#app")