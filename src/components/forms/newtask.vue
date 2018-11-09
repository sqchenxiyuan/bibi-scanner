<template>
    <form @submit.prevent="">
        <md-field>
            <label for="taskname">任务名称</label>
            <md-input id="taskname" name="taskname" v-model="form.taskname"></md-input>
        </md-field>
        <md-field>
            <label>扫描目标</label>
            <md-input id="target" name="target" v-model="form.target"></md-input>
        </md-field>
        <md-field>
            <label>扫描插件</label>
            <md-select v-model="form.plugins" name="plugins" id="plugins" multiple>
                <template v-for="plugin in plugins">
                    <md-option :key="plugin.id" :value="plugin.id">{{plugin.name}}</md-option>
                </template>
            </md-select>
        </md-field>
        <md-card-actions>
            <md-button class="md-primary" @click="cancle">取消</md-button>
            <md-button class="md-primary" @click="submit">确认</md-button>
        </md-card-actions>
    </form>
</template>

<script>
export default {
    data(){
        return {
            form:{
                taskname: "",
                target: "",
                plugins: [],
            },
            plugins:[
                {name: "漏洞1", id:1},
                {name: "漏洞2", id:2},
                {name: "漏洞3", id:3},
                {name: "漏洞4", id:4},
                {name: "漏洞5", id:5},
                {name: "漏洞6", id:6},
                {name: "漏洞7", id:7},
                {name: "漏洞8", id:8},
                {name: "漏洞9", id:9},
            ]
        }
    },
    methods:{
        cancle(){
            this.$emit("cancle")
        },
        submit(){
            this.$emit("submit")
        }
    }
}
</script>

<style lang="scss" scoped>
.md-layout-item{
    margin: 0 10px;
}
</style>

