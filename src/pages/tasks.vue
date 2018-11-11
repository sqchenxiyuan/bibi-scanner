<template>
    <div class="md-layout" style="padding-top: 20px;">
        <TaskCard v-for="task in tasks" :key="task.id" :task="task" class="md-layout-item" style="width: 300px; margin: 0 10px 10px 0;"></TaskCard>
    </div>
</template>

<script>
import TaskCard from "../components/cards/card-task.vue"

const TaskStatus = {}
TaskStatus.WAITING = 0
TaskStatus.RUNNING = 1
TaskStatus.FINSHED = 2

export default {
    data(){
        return {
            tasks:[
                {id: 1, name: "任务1", createtime:Date.now(), status: TaskStatus.WAITING, process: 0 },
                {id: 2, name: "任务2", createtime:Date.now(), status: TaskStatus.RUNNING, process: 20 },
                {id: 3, name: "任务3", createtime:Date.now(), status: TaskStatus.RUNNING, process: 10 },
                {id: 4, name: "任务4", createtime:Date.now(), status: TaskStatus.FINSHED, process: 100 },
                {id: 5, name: "任务5", createtime:Date.now(), status: TaskStatus.FINSHED, process: 100 },
            ]
        }
    },
    components:{
        TaskCard
    }
}
</script>
