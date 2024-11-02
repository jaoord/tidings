import { reactive } from 'vue'

const store = reactive({
    posts: [
        {
            id: 1,
            title: "Homelessness on the rise",
            description: "This is an article about people living on the streets",
            date: new Date()
        },
        {
            id: 2,
            title: "A fire burnt down a whole block",
            description: "This is an article about a huge house fire",
            date: new Date()
        },
        {
            id: 3,
            title: "A thief was caught",
            description: "This is an article about a thief",
            date: new Date()
        }
    ]
})

export default store