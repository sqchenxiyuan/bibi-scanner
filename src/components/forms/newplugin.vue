<template>
    <form @submit.prevent="">
        <md-field>
            <label>插件文件</label>
            <md-file id="file" name="file" v-model="form.file" accept=".zip"/>
        </md-field>
        <md-card-actions>
            <md-button class="md-primary" @click="cancel">取消</md-button>
            <md-button class="md-primary" @click="submit">确认</md-button>
        </md-card-actions>
    </form>
</template>

<script>
export default {
    data(){
        return {
            form:{
                file: null
            }
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

