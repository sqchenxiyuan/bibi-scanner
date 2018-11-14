<template>
    <md-card class="node-container">
        <md-card-header>{{node.name}}</md-card-header>
        <md-card-content>
            <div class="md-layout">
                <div class="md-layout-item" style="max-width: 50px">ID</div>
                <div class="md-layout-item">{{node.id}}</div>
            </div>
            <div class="md-layout">
                <div class="md-layout-item" style="max-width: 50px">
                    Key
                    <i v-if="viewKey" class="btn-key-view el-icon-circle-close-outline" @click="viewKey = !viewKey"></i>
                    <i v-else class="btn-key-view el-icon-view" @click="viewKey = !viewKey"></i>
                </div>
                <div class="md-layout-item">
                    {{viewKey ? node.secretkey : "********************************"}}
                </div>
            </div>
            <md-divider></md-divider>
            <div>活跃信息</div>
            <div class="md-layout">
                <div class="md-layout-item" style="max-width: 50px">状态</div>
                <div class="md-layout-item">
                    <el-tag v-if="node.active" size="mini" type="success">活跃</el-tag>
                    <el-tag v-else size="mini" type="info">静默</el-tag>
                </div>
            </div>
            <div class="md-layout">
                <div class="md-layout-item" style="max-width: 50px">时间</div>
                <div class="md-layout-item">{{node.lastactivetime ? timeTranslate(node.lastactivetime) : "未知"}}</div>
            </div>
            <div class="md-layout md-alignment-center-left">
                <div class="md-layout-item" style="max-width: 50px">地址</div>
                <div class="md-layout-item">{{node.lastactivetime ? node.lastactivehost + ":" + node.lastactiveport: "未知"}}</div>
            </div>
        </md-card-content>
    </md-card>
</template>

<script>
import moment from "moment"

export default {
    data(){
        return {
            viewKey: false
        }
    },
    props:{
        node:Object
    },
    methods:{
        timeTranslate(time){
            return moment(time).format("YYYY-MM-DD HH:mm:ss")
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~@cssvar";
.node-container{

    &:hover{
        cursor: pointer;
    }
}

.btn-key-view{
    &:hover{
        cursor: pointer;
        color: $color-primary;
    }
}
</style>
