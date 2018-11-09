<template>
    <md-card class="md-layout md-alignment-center-center">
        <md-button class="bi-button md-layout-item md-raised md-primary" @click="newTaskDialogVisiable = true">添加任务</md-button>
        <md-button class="bi-button md-layout-item md-raised md-primary" @click="newNodeDialogVisiable = true">添加节点</md-button>
        <md-button class="bi-button md-layout-item md-raised md-primary" @click="newPluginDialogVisiable = true">添加插件</md-button>
        <md-dialog :md-active.sync="newTaskDialogVisiable" style="width: 80vw;max-height: initial;">
            <md-dialog-title>添加新任务</md-dialog-title>
            <md-content style="padding: 20px">
                <NewTaskForm @cancel="newTaskDialogVisiable = false" @submit="newTaskDialogVisiable = false"></NewTaskForm>
            </md-content>
        </md-dialog>
        <md-dialog :md-active.sync="newNodeDialogVisiable" style="width: 80vw;max-height: initial;">
            <md-dialog-title>添加新节点</md-dialog-title>
            <md-content style="padding: 20px">
                <NewNodeForm @cancel="newNodeDialogVisiable = false" @submit="newNodeDialogVisiable = false"></NewNodeForm>
            </md-content>
        </md-dialog>
        <md-dialog :md-active.sync="newPluginDialogVisiable" style="width: 80vw;max-height: initial;">
            <md-dialog-title>添加新插件</md-dialog-title>
            <md-content style="padding: 20px">
                <NewPluginForm @cancel="newPluginDialogVisiable = false" @submit="newPluginDialogVisiable = false"></NewPluginForm>
            </md-content>
        </md-dialog>
    </md-card>
</template>

<script>
import NewTaskForm from "../components/forms/newtask.vue"
import NewNodeForm from "../components/forms/newnode.vue"
import NewPluginForm from "../components/forms/newplugin.vue"

export default {
    data:()=>{
        return {
            newTaskDialogVisiable: false,
            newNodeDialogVisiable: false,
            newPluginDialogVisiable: false
        }
    },
    methods:{
    },
    components: {
        NewTaskForm,
        NewNodeForm,
        NewPluginForm
    }
}
</script>

<style lang="scss" scoped>
.bi-button{
    height: 100px;
}

.md-dialog {
    max-width: 768px;
}
</style>
