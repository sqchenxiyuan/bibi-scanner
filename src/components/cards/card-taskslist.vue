<template>
    <md-card>
        <md-table style="table-layout:fixed;">
            <md-table-row>
                <md-table-head md-numeric width="50px">序号</md-table-head>
                <md-table-head>任务名称</md-table-head>
                <md-table-head>任务创建时间</md-table-head>
                <md-table-head>任务状态</md-table-head>
                <md-table-head>任务进度</md-table-head>
                <md-table-head style="width:100px">操作</md-table-head>
            </md-table-row>

            <template v-for="task in tasks">
                <md-table-row :key="task.id">
                    <md-table-cell md-numeric width="50px">{{task.id}}</md-table-cell>
                    <md-table-cell>{{task.name}}</md-table-cell>
                    <md-table-cell>{{new Date(task.createtime)}}</md-table-cell>
                    <md-table-cell>{{statusName(task.status)}}</md-table-cell>
                    <md-table-cell>
                        <md-progress-spinner :class="task.process < 100 ? 'md-accent' : ''" :md-diameter="30" :md-stroke="3" :md-value="task.process"></md-progress-spinner>
                    </md-table-cell>
                    <md-table-cell>
                        <md-button class="md-primary">详情</md-button>
                    </md-table-cell>
                </md-table-row>
            </template>
        </md-table>
    </md-card>
</template>

<script>
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
    methods:{
        statusName(taskStatus){
            switch(taskStatus){
                case TaskStatus.WAITING: return "等待中"
                case TaskStatus.RUNNING: return "扫描中"
                case TaskStatus.FINSHED: return "已完成"
                default:
                    return "未知"
            }
        }
    }
}
</script>
