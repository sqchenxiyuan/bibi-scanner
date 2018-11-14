<template>
    <md-card class="task-container" @click.native="go2detail">
        <md-card-header>{{task.name}}</md-card-header>
        <md-card-content>
            <div class="md-layout md-alignment-center-left">
                <div class="md-layout-item" style="max-width: 70px">状态</div>
                <div class="md-layout-item">
                    <el-tag v-if="task.progress === 1" size="mini" type="success">{{statusName(task.status)}}</el-tag>
                    <el-tag v-else-if="task.progress === 0" size="mini" type="info">{{statusName(task.status)}}</el-tag>
                    <el-tag v-else size="mini">{{statusName(task.status)}}</el-tag>
                </div>
            </div>
            <div class="md-layout md-alignment-center-left">
                <div class="md-layout-item" style="max-width: 70px">进度</div>
                <div class="md-layout-item" style="height: 5px">
                    <md-progress-bar md-mode="determinate" :md-value="task.progress * 100"></md-progress-bar>
                </div>
            </div>
            <div class="md-layout">
                <div class="md-layout-item" style="max-width: 70px">创建时间</div>
                <div class="md-layout-item">{{timeTranslate(task.createtime)}}</div>
            </div>
        </md-card-content>
    </md-card>
</template>

<script>
import moment from "moment"

const TaskStatus = {}
TaskStatus.WAITING = 0
TaskStatus.RUNNING = 1
TaskStatus.FINSHED = 2

export default {
    props:{
        task:Object
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
        },
        timeTranslate(time){
            return moment(time).format("YYYY-MM-DD")
        },
        go2detail(){
            console.log(123)
            this.$router.push({
                name: "task-detail",
                params: {
                    taskId: this.task.id
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~@cssvar";

.task-container{
    overflow: hidden;

    &:hover{
        cursor: pointer;
    }
}
</style>
