<template>
    <div class="md-layout" style="padding-top: 20px;">
        <TaskCard v-for="task in tasks" :key="task.id" :task="task" class="md-layout-item" style="min-width: 200px; max-width: 300px; margin: 0 10px 10px 0;"></TaskCard>
    </div>
</template>

<script>
import { queryTasks } from "@/interfaces/tasks.js"

import TaskCard from "../components/cards/card-task.vue"

const TaskStatus = {}
TaskStatus.WAITING = 0
TaskStatus.RUNNING = 1
TaskStatus.FINSHED = 2

export default {
    data(){
        return {
            tasks:[]
        }
    },
    created(){
        this.getTasks()
    },
    methods:{
        getTasks(){
            queryTasks().then(res => {
                this.tasks = res.data.tasks
            })
        },
    },
    components:{
        TaskCard
    }
}
</script>
