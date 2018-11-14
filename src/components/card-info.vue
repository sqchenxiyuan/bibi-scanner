<template>
    <md-card style="padding-bottom: 20px">
        <p>
            <span class="md-display-1">bibi扫猫器</span>
            <span class="md-caption">系统数据</span>
        </p>
        <div class="md-layout" style="margin-top: 50px">
            <div class="md-layout-item">
                <span class="md-subheading">任务数目:</span>
                <span class="md-subheading"><el-tag>{{sysinfo.numberOfTasks}}</el-tag></span>
            </div>
            <div class="md-layout-item">
                <span class="md-subheading">节点数目:</span>
                <span class="md-subheading"><el-tag type="success">{{sysinfo.numberOfNodes}}</el-tag></span>
            </div>
            <div class="md-layout-item">
                <span class="md-subheading">插件数目:</span>
                <span class="md-subheading"><el-tag type="info">{{sysinfo.numberOfPlugins}}</el-tag></span>
            </div>
        </div>
    </md-card>
</template>

<script>
export default {
    computed:{
        sysinfo(){
            return this.$store.state.sysinfo
        }
    }
}
</script>
