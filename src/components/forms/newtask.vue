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
            <md-select v-model="form.nodes" name="nodes" id="nodes" multiple>
                <template v-for="node in nodes">
                    <md-option :key="node.id" :value="node.id">{{node.name}}</md-option>
                </template>
            </md-select>
            <span class="md-error" v-if="!$v.form.nodes.required">请选择需要分配的节点</span>
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
    ipRangeStrCheck
} from "../../utils/ip-check.js"

import { validationMixin } from 'vuelidate'
import {
    required,
    email,
    minLength,
    maxLength
} from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],
    data(){
        return {
            form:{
                name: "",
                target: "",
                plugins: [],
                nodes: []
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
                    console.log(ipRangeStrCheck(value))
                    return !(ipRangeStrCheck(value) === ipRangeStrCheckResult.ERROR_STRING 
                        || ipRangeStrCheck(value) === ipRangeStrCheckResult.ERROR_IP)
                },
                isRangeOk(value){
                    return !(ipRangeStrCheck(value) === ipRangeStrCheckResult.ERROR_RANGE)
                },
            },
            plugins:{
            },
            nodes: {
                required(value){
                    return  value.length > 0
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
            console.log(this.$v.form.target)
            this.$v.$touch()
            // this.$emit("submit")
        }
    }
}
</script>

<style lang="scss" scoped>
.md-layout-item{
    margin: 0 10px;
}
</style>

