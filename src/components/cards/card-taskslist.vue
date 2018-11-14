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
                    <md-table-cell>{{timeTranslate(task.createtime)}}</md-table-cell>
                    <md-table-cell>{{statusName(task.status)}}</md-table-cell>
                    <md-table-cell>
                        <el-progress type="circle" :width="50" 
                            :status="task.progress === 1 ? 'success' : '' "
                            :percentage="parseFloat((task.progress * 100).toFixed(2))"></el-progress>
                    </md-table-cell>
                    <md-table-cell>
                        <md-button class="md-primary" @click="go2TaskDetail(task)">详情</md-button>
                    </md-table-cell>
                </md-table-row>
            </template>
        </md-table>
    </md-card>
</template>

<script>
import { queryTasks } from "../../interfaces/tasks.js"

import moment from "moment"

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
                this.tasks = res.data.data.tasks
            })
        },
        statusName(taskStatus){
            switch(taskStatus){
                case TaskStatus.WAITING: return "等待中"
                case TaskStatus.RUNNING: return "扫描中"
                case TaskStatus.FINSHED: return "已完成"
                default:
                    return "未知"
            }
        },
        timeTranslate(time){
            return moment(time).format("YYYY-MM-DD HH:mm:ss")
        },
        go2TaskDetail(task){
            this.$router.push({
                name: "task-detail",
                params: {
                    taskId: task.id
                }
            })
        }
    }
}
</script>
