<template>
    <div class="page-container">
        <md-tabs class="md-elevation-1" md-sync-route md-alignment="centered">
            <md-tab id="tab-home" md-label="主页" to="/"></md-tab>
            <md-tab id="tab-tasks" md-label="任务列表" to="/tasks"></md-tab>
            <md-tab id="tab-nodes" md-label="节点列表" to="/nodes"></md-tab>
            <md-tab id="tab-plugins" md-label="插件列表" to="/plugins"></md-tab>
            <md-tab v-if="$route.name === 'task-detail'" id="tab-task-detail" md-label="任务详情" :to="$route.path"></md-tab>
        </md-tabs>
        <div class="md-layout md-alignment-top-center">
            <div class="md-layout-item md-size-80">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data: () => ({
      menuVisible: false
    }),
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
