<template>
    <form @submit.prevent="">
        <md-field>
            <label for="taskname">节点名称</label>
            <md-input id="nodename" name="nodename" v-model="form.nodename"></md-input>
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
                taskname: "",
            },
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

