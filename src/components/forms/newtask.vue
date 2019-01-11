<template>
    <form @submit.prevent="">
        <md-field :class="getValidationClass('name')">
            <label for="name">任务名称</label>
            <md-input id="name" name="name" v-model="form.name"></md-input>
            <span class="md-error" v-if="!$v.form.name.required">请输入任务名称</span>
        </md-field>
        <md-field :class="getValidationClass('target')">
            <label>扫描目标</label>
            <md-input id="target" name="target" v-model="form.target"></md-input>
            <span class="md-error" v-if="!$v.form.target.required">输入扫描目标IP范围</span>
            <span class="md-error" v-else-if="!$v.form.target.isStringOk">输入有效的目标字符串</span>
            <span class="md-error" v-else-if="!$v.form.target.isRangeOk">输入合理的IP范围</span>
        </md-field>
        <div class="md-layout">
            <md-field class="md-layout-item" style="margin-left:0" :class="getValidationClass('startPort')">
                <label>起始端口</label>
                <md-input id="startPort" name="target" v-model="form.startPort"></md-input>
                <span class="md-error" v-if="!$v.form.startPort.required">输入扫描起始端口</span>
                <span class="md-error" v-else-if="!$v.form.startPort.isPortNumber">输入有效的起始端口</span>
            </md-field>
            <md-field class="md-layout-item" style="margin-right:0" :class="getValidationClass('endPort')">
                <label>结束端口</label>
                <md-input id="endPort" name="target" v-model="form.endPort"></md-input>
                <span class="md-error" v-if="!$v.form.endPort.required">输入扫描结束端口</span>
                <span class="md-error" v-else-if="!$v.form.endPort.isPortNumber">输入有效的结束端口</span>
                <span class="md-error" v-else-if="!$v.form.endPort.isBigger">结束端口必须大于等于起始端口</span>
            </md-field>
        </div>
        <md-field>
            <label>扫描插件</label>
            <md-select v-model="form.plugins" name="plugins" id="plugins" placeholder="请选择扫描的插件(非必选)" multiple>
                <template v-for="plugin in plugins">
                    <md-option :key="plugin.id" :value="plugin.id">{{plugin.name}}</md-option>
                </template>
            </md-select>
        </md-field>
        <md-field :class="getValidationClass('plugins')">
            <label>扫描节点</label>
            <md-select v-model="form.nodeId" name="nodes" id="nodes">
                <template v-for="node in nodes">
                    <md-option :key="node.id" :value="node.id">{{node.name}}</md-option>
                </template>
            </md-select>
            <span class="md-error" v-if="!$v.form.nodeId.required">请选择需要分配的节点</span>
        </md-field>
        <md-card-actions>
            <md-button class="md-primary" @click="cancel">取消</md-button>
            <md-button class="md-primary" @click="submit">确认</md-button>
        </md-card-actions>
    </form>
</template>

<script>
import {
    ipRangeStrCheckResult,
    ipRangeStrCheck,
    getIPRange
} from "../../utils/ip-check.js"

import { validationMixin } from 'vuelidate'
import {
    required
} from 'vuelidate/lib/validators'
import { createTask } from "@/interfaces/tasks.js"

export default {
    mixins: [validationMixin],
    data(){
        return {
            form:{
                name: "",
                target: "",
                startPort: 0,
                endPort: 65535,
                plugins: [],
                nodeId: ""
            }
        }
    },
    validations: {
        form: {
            name: {
                required
            },
            target: {
                required,
                isStringOk(value){
                    return !(ipRangeStrCheck(value) === ipRangeStrCheckResult.ERROR_STRING 
                        || ipRangeStrCheck(value) === ipRangeStrCheckResult.ERROR_IP)
                },
                isRangeOk(value){
                    return !(ipRangeStrCheck(value) === ipRangeStrCheckResult.ERROR_RANGE)
                },
            },
            plugins:{
            },
            nodeId: {
                required
            },
            startPort:{
                required,
                isPortNumber(value){
                    return 0 <= value && value <= 65535
                }
            },
            endPort:{
                required,
                isPortNumber(value){
                    return 0 <= value && value <= 65535
                },
                isBigger(value){
                    return value >= this.form.startPort
                }
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
        getValidationClass (fieldName) {
            const field = this.$v.form[fieldName]

            if (field) {
                return {
                    'md-invalid': field.$invalid && field.$dirty
                }
            }
        },
        cancel(){
            this.$emit("cancel")
        },
        submit(){
            this.$v.$touch()
            if (!this.$v.$invalid) {
                this.createTask()
            }
        },
        createTask(){
            let form = this.form
            createTask({
                name: form.name,
                startIP: getIPRange(form.target).from,
                endIP: getIPRange(form.target).to,
                plugins: form.plugins,
                nodeId: form.nodeId,
                startPort: parseInt(form.startPort),
                endPort: parseInt(form.endPort)
            }).then(res => {
                this.$router.push("/tasks")
                this.$emit("submit")
            }).catch(err => {
                alert("创建失败")
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.md-layout-item{
    margin: 0 10px;
}
</style>

