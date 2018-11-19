<template>
    <form @submit.prevent="">
        <md-field :class="getValidationClass('name')">
            <label for="name">节点名称</label>
            <md-input id="name" name="name" v-model="form.name"></md-input>
            <span class="md-error" v-if="!$v.form.name.required">请输入节点名称</span>
        </md-field>
        <md-card-actions>
            <md-button class="md-primary" @click="cancel">取消</md-button>
            <md-button class="md-primary" @click="submit">确认</md-button>
        </md-card-actions>
    </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
    required,
} from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],
    data(){
        return {
            form:{
                name: "",
            },
        }
    },
    validations: {
        form: {
            name: {
                required
            },
        }
    },
    methods:{
        getValidationClass(fieldName) {
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

