<template>
    <div class="taskinfo-container">
        <md-card>
            <md-card-header>
                <div class="md-title">{{task.name}}</div>
            </md-card-header>
            <md-card-content>
                <div class="md-layout">
                    <div class="md-layout-item md-layout">
                        <div class="md-layout-item" style="min-width: 100px;max-width:100px">任务状态:</div>
                        <div class="md-layout-item">{{statusName(task.status)}}</div>
                    </div>
                    <div class="md-layout-item md-layout">
                        <div class="md-layout-item" style="min-width: 100px;max-width:100px">创建时间:</div>
                        <div class="md-layout-item">{{timeTranslate(task.createtime)}}</div>
                    </div>
                    <div class="md-layout-item md-layout">
                        <div class="md-layout-item" style="min-width: 100px;max-width:100px">完成时间:</div>
                        <div class="md-layout-item">{{task.completetime ? timeTranslate(task.completetime) : "????-??-?? ??:??:??"}}</div>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item md-layout">
                        <div class="md-layout-item" style="min-width: 100px;max-width:100px">扫描目标:</div>
                        <div class="md-layout-item">{{targetRange(task.startIP, task.endIP)}}</div>
                    </div>
                    <div class="md-layout-item md-layout">
                        <div class="md-layout-item" style="min-width: 100px;max-width:100px">扫描起始端口:</div>
                        <div class="md-layout-item">{{task.startPort}}</div>
                    </div>
                    <div class="md-layout-item md-layout">
                        <div class="md-layout-item" style="min-width: 100px;max-width:100px">结束端口:</div>
                        <div class="md-layout-item">{{task.endPort}}</div>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item md-layout">
                        <div class="md-layout-item" style="min-width: 100px;max-width:100px">扫描插件:</div>
                        <div class="md-layout-item">
                            <el-tag size="mini" v-for="plugin in task.plugins" :key="plugin" class="md-primary">
                                {{pluginName(plugin)}}
                            </el-tag>
                        </div>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item md-layout md-size-66 md-alignment-center-left">
                        <div class="md-layout-item" style="min-width: 100px;max-width:100px">扫描进度:</div>
                        <div class="md-layout-item" style="height: 5px">
                            <md-progress-bar md-mode="determinate" :md-value="task.progress * 100"></md-progress-bar>
                        </div>
                    </div>
                    <div class="md-layout-item md-layout">
                        <div class="md-layout-item">{{(task.progress * 100).toFixed(2)}}%</div>
                    </div>
                </div>
                <div v-if="task.scanResult" class="md-layout">
                    <div class="md-layout-item md-layout">
                        <div class="md-layout-item" style="min-width: 100px;max-width:100px">主机数目:</div>
                        <div class="md-layout-item">{{task.scanResult.numberOfHosts}}</div>
                    </div>
                    <div class="md-layout-item md-layout">
                        <div class="md-layout-item" style="min-width: 100px;max-width:100px">端口数目:</div>
                        <div class="md-layout-item">{{task.scanResult.numberOfPorts}}</div>
                    </div>
                    <div class="md-layout-item md-layout">
                        <div class="md-layout-item" style="min-width: 100px;max-width:100px">危险:</div>
                        <div class="md-layout-item">{{task.scanResult.numberOfWarnings}}</div>
                    </div>
                </div>
            </md-card-content>
        </md-card>
        <!-- <md-card style="margin-top: 20px;"> -->
            <!-- <md-card-header>
                <div class="md-title">详情</div>
            </md-card-header> -->
            <!-- <md-card-content> -->
                <md-app v-if="task.scanResult" md-waterfall md-mode="fixed" style="margin-top: 20px;height: 90vh;">
                    <md-app-drawer md-permanent="full">
                        <md-toolbar class="md-transparent" md-elevation="0">
                            主机列表
                        </md-toolbar>
                        <md-list>
                            <md-list-item v-for="host in task.scanResult.hosts" :key="host.host" @click="selectHost(host.host)">
                                <span class="md-list-item-text">{{host.host}}</span>
                            </md-list-item>
                        </md-list>
                    </md-app-drawer>

                    <md-app-toolbar class="md-primary">
                        <span class="md-title">{{activeHost}}</span>
                    </md-app-toolbar>

                    <md-app-content>
                        <el-collapse :key="activeHost">
                            <el-collapse-item v-for="port in activeHostData.ports" :key="port.port" :name="port.port">
                                <template slot="title">
                                    :{{port.port}}
                                    <span v-if="port.numberOfWarnings" style="display:inline-block;width:16px;"></span>
                                    <template v-if="port.numberOfWarnings > 0">
                                        {{port.numberOfWarnings}}x<i class="el-icon-warning"></i>
                                    </template>
                                </template>
                                <template v-if="port.numberOfWarnings === 0">
                                    未发现安全风险
                                </template>
                                <template v-else>
                                    <div v-for="warning in port.warnings">{{warning.description}} from 
                                        <el-tag size="mini" class="md-primary">
                                            {{pluginName(warning.plugin)}}
                                        </el-tag>
                                    </div>
                                </template>
                            </el-collapse-item>
                        </el-collapse>
                    </md-app-content>
                </md-app>
                <div style="height: 10vh;"></div>
            <!-- </md-card-content>
        </md-card> -->
    </div>
</template>

<script>
import moment from "moment"
import ip from "ip"

import { getTaskDetail } from  "@/interfaces/tasks"


export default {
    data(){
        return {
            task: {
                name: "任务名称",
                status: 0,
                createtime: 0,
                completetime: 0,
                startIP: 0,
                endIP: 0,
                plugins: [],

                scanResult:null,
            },
            activeHost: "",
        }
    },
    computed:{
        pluginsIdMap(){
            return this.$store.getters.pluginsIdMap
        },
        activeHostData(){
            console.log(123)
            if(!this.task.scanResult) return void(0)
            let data = this.task.scanResult.hosts.find(host => host.host === this.activeHost)
            return data
        }
    },
    created(){
        getTaskDetail({
            taskId:this.$route.params.taskId
        }).then(res => {
            this.task = res.data.task

            if(this.task.scanResult){
                if(this.task.scanResult.hosts.length > 0){
                    this.activeHost = this.task.scanResult.hosts[0].host
                }
            }
        }).catch(err => {
            alert("获取数据失败")
        })
    },
    methods:{
        statusName(status){
            switch (status){
                case 0: return "等待中"
                case 1: return "扫描中"
                case 2: return "已完成"
            }
        },
        pluginName(pluginId){
            if(this.pluginsIdMap.has(pluginId)){
                return this.pluginsIdMap.get(pluginId).name
            } else {
                return pluginId
            }
        },
        timeTranslate(time){
            return moment(time).format("YYYY-MM-DD HH:mm:ss")
        },
        targetRange(start, end){
            if(start === end){
                return ip.fromLong(start)
            } else {
                return ip.fromLong(start) + "-" + ip.fromLong(end)

            }
        },
        selectHost(host){
            this.activeHost = host
            console.log(host)
        }
    }
}
</script>


<style lang="scss" scoped>
.taskinfo-container{
    padding-top: 20px;
}
.md-app {
    max-height: 400px;
    border: 1px solid rgba(#000, .12);
}

// Demo purposes only
.md-drawer {
    width: 200px;
    max-width: calc(100vw - 125px);
}

.md-list-item-text{
    &:hover{
        cursor: pointer;
    }
}
</style>
