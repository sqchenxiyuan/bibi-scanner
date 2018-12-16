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
                <div class="md-layout-item" style="word-break: break-all;">
                    {{viewKey ? node.key : "********************************"}}
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
                <div class="md-layout-item">{{node.active ? timeTranslate(node.lastActivetime) : "未知"}}</div>
            </div>
            <div class="md-layout md-alignment-center-left">
                <div class="md-layout-item" style="max-width: 50px">地址</div>
                <div class="md-layout-item">{{node.active ? ipTranslate(node.ip) + ":" + node.port: "未知"}}</div>
            </div>
        </md-card-content>
        <md-card-actions>
            <md-button @click="pingNode">Ping</md-button>
            <md-button style="color:red" @click="deleteActive = true">删除</md-button>
        </md-card-actions>
        <md-dialog-confirm
            :md-active.sync="deleteActive"
            md-title="确认删除该节点?"
            md-content="确认删除该节点?删除该节点后,属于该节点的未完成的任务会被删除!"
            md-confirm-text="确认"
            md-cancel-text="取消"
            @md-cancel="deleteActive = false"
            @md-confirm="deleteNode" />
        <md-progress-bar v-if="processing" md-mode="indeterminate" style="position:absolute;top: 0;left:0;right:0"></md-progress-bar>
    </md-card>
</template>

<script>
import ip from "ip"
import moment from "moment"
import { pingNode } from "@/interfaces/nodes.js"

export default {
    data(){
        return {
            viewKey: false,
            
            processing: false,

            deleteActive: false
        }
    },
    props:{
        node:Object
    },
    methods:{
        timeTranslate(time){
            return moment(time).format("YYYY-MM-DD HH:mm:ss")
        },
        ipTranslate(ipnum){
            return ip.fromLong(ipnum)
        },
        pingNode(){
            this.processing = true
            pingNode({
                nodeId: this.node.id
            }).then(res => {
                this.node.active = res.data.active
                this.node.lastActivetime = res.data.lastActivetime
            }).catch(err => {
                this.node.active = 0
            }).then(_ => {
                this.processing = false
            })
        },
        deleteNode(){
            this.processing = true

            setTimeout(_ => {
                this.processing = false
                //TODO:删除节点
            }, 1500)
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
