<template>
    <form @submit.prevent="">
        <md-field>
            <label for="taskname">任务名称</label>
            <md-input id="taskname" name="taskname" v-model="form.taskname"></md-input>
            <span class="md-error" v-if="!$v.form.taskname.required">请输</span>
        </md-field>
        <md-field>
            <label>扫描目标</label>
            <md-input id="target" name="target" v-model="form.target"></md-input>
            <span class="md-error" v-if="!$v.form.target.required">输入密码</span>
        </md-field>
        <md-field>
            <label>扫描插件</label>
            <md-select v-model="form.plugins" name="plugins" id="plugins" multiple>
                <template v-for="plugin in plugins">
                    <md-option :key="plugin.id" :value="plugin.id">{{plugin.name}}</md-option>
                </template>
            </md-select>
        </md-field>
        <md-field>
            <label>扫描节点</label>
            <md-select v-model="form.nodes" name="nodes" id="nodes" multiple>
                <template v-for="node in nodes">
                    <md-option :key="node.id" :value="node.id">{{node.name}}</md-option>
                </template>
            </md-select>
        </md-field>
        <md-card-actions>
            <md-button class="md-primary" @click="cancel">取消</md-button>
            <md-button class="md-primary" @click="submit">确认</md-button>
        </md-card-actions>
    </form>
</template>

<script>
import {
    required,
    email,
    minLength,
    maxLength
} from 'vuelidate/lib/validators'

export default {
    data(){
        return {
            form:{
                taskname: "",
                target: "",
                plugins: [],
                nodes: []
            }
        }
    },
    validations: {
        form: {
            taskname: {
                required
            },
            target: {
                required
            },
            plugins:{
                required
            },
            nodes: {
                required
            }
        }
    },
    computed:{
        plugins(){
            return this.$store.state.pluginsinfo.plugins
        },
        nodes(){
            return this.$store.state.nodesinfo.nodes
        }
    },
    methods:{
        cancel(){
            this.$emit("cancel")
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

