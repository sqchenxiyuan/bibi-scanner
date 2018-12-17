<template>
    <md-card>
        <md-table>
            <md-table-row>
                <md-table-head md-numeric width="50px">插件编号</md-table-head>
                <md-table-head>插件名称</md-table-head>
                <!-- <md-table-head>插件作者</md-table-head> -->
                <md-table-head>插件简介</md-table-head>
                <!-- <md-table-head style="width:100px">操作</md-table-head> -->
            </md-table-row>
            <template v-for="plugin in plugins">
                <md-table-row :key="plugin.id">
                    <md-table-cell md-numeric width="50px">
                        <div style="max-width:100px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">
                            {{plugin.id}}
                        </div>
                    </md-table-cell>
                    <md-table-cell>{{plugin.name}}</md-table-cell>
                    <!-- <md-table-cell>{{plugin.author}}</md-table-cell> -->
                    <md-table-cell>{{plugin.description}}</md-table-cell>
                    <!-- <md-table-cell>
                        <md-button class="md-accent" @click="try2deletePlugin(plugin)">删除</md-button>
                    </md-table-cell> -->
                </md-table-row>
            </template>
        </md-table>
         <md-dialog-confirm
            :md-active.sync="deleteActive"
            md-title="确认删除该插件?"
            md-content="确认删除该插件?删除该插件,只是不再看到,但是在结果报告中依然看的到插件!"
            md-confirm-text="确认"
            md-cancel-text="取消"
            @md-cancel="deleteActive = false"
            @md-confirm="deletePlugin" />
    </md-card>
</template>

<script>
export default {
    data(){
        return {
            deletingPlugin: null,
            deleteActive: false
        }
    },
    computed:{
        plugins(){
            return this.$store.state.pluginsinfo.plugins
        }
    },
    methods:{
        try2deletePlugin(plugin){
            this.deletingPlugin = plugin
            this.deleteActive = true
        },
        deletePlugin(){
            //TODO: 删除插件
        }
    }
}
</script>