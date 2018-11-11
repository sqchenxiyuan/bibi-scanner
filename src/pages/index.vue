<template>
    <div class="index-container">
        <div class="md-layout md-gutter">
            <InfoCard class="md-layout-item" style="margin-right: 10px;"></InfoCard>
            <ControlerCard class="md-layout-item"></ControlerCard>
        </div>
        <div class="md-layout md-gutter" style="margin-top: 20px">
            <span class="md-title">任务状态</span>
        </div>
        <div class="md-layout md-gutter" style="margin-top: 10px">
            <md-content class="md-layout-item tasks-statu md-elevation-2 wait">
                <p class="count">1</p>
                <p class="info-text md-title">等待中</p>
            </md-content>
            <md-content class="md-layout-item tasks-statu md-elevation-2 process">
                <p class="count">12</p>
                <p class="info-text md-title">进行中</p>
            </md-content>
            <md-content class="md-layout-item tasks-statu md-elevation-2 success">
                <p class="count">999</p>
                <p class="info-text md-title">已完成</p>
            </md-content>
        </div>
        <div class="md-layout md-gutter" style="margin-top: 20px">
            <span class="md-title">任务列表</span>
        </div>
        <div class="md-layout md-gutter" style="margin-top: 10px">
            <TasksListCard class="md-layout-item"></TasksListCard>
        </div>
    </div>
</template>

<script>
import InfoCard from "../components/card-info.vue"
import ControlerCard from "../components/card-controler.vue"
import TasksListCard from "../components/cards/card-taskslist.vue"

export default {
    components:{
        InfoCard,
        ControlerCard,
        TasksListCard
    }
}
</script>


<style lang="scss" scoped>
@import "~@cssvar";

.index-container{
    padding: 20px 0;
}

.tasks-statu{
    cursor: pointer;
    position: relative;
    margin-right: 20px;
    text-align: center;
    transition: color .3s;

    &:last-child{
        margin-right: 0;
    }

    &.wait{
        color: $color-info;
    }
    
    &.process{
        color: $color-primary;
    }

    &.success{
        color: $color-success;
    }

    &:hover{
        color: black;
    }

    .count{
        font-size: 50px;
        font-weight: 400;
    }
}
</style>
