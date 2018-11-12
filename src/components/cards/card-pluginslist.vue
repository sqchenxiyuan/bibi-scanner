<template>
    <md-card>
        <md-table>
            <md-table-row>
                <md-table-head md-numeric width="50px">插件编号</md-table-head>
                <md-table-head>插件名称</md-table-head>
                <md-table-head>插件简介</md-table-head>
                <md-table-head style="width:100px">操作</md-table-head>
            </md-table-row>
            <template v-for="plugin in plugins">
                <md-table-row :key="plugin.id">
                    <md-table-cell md-numeric width="50px">{{plugin.id}}</md-table-cell>
                    <md-table-cell>{{plugin.name}}</md-table-cell>
                    <md-table-cell>{{plugin.description}}</md-table-cell>
                    <md-table-cell>
                        <md-button class="md-primary">详情</md-button>
                    </md-table-cell>
                </md-table-row>
            </template>
        </md-table>
    </md-card>
</template>

<script>
export default {
    data(){
        return {
            plugins:[
                {id: "poc-1", name: "插件1", description:"扫描XXX脆弱性"},
                {id: "poc-2", name: "插件2", description:"扫描XXX脆弱性"},
                {id: "poc-3", name: "插件3", description:"扫描XXX脆弱性"},
                {id: "poc-4", name: "插件4", description:"扫描XXX脆弱性"},
                {id: "poc-5", name: "插件5", description:"扫描XXX脆弱性"},
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