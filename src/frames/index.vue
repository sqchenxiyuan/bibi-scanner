<template>
    <div class="page-container">
        <md-tabs class="md-primary" md-sync-route>
            <md-tab style="wdith: 100px" md-disabled></md-tab>
            <md-tab id="tab-home" md-label="主页" to="/"></md-tab>
            <md-tab id="tab-tasks" md-label="任务" to="/tasks"></md-tab>
            <md-tab id="tab-nodes" md-label="节点" to="/nodes"></md-tab>
            <md-tab id="tab-plugins" md-label="插件" to="/plugins"></md-tab>
        </md-tabs>
        <router-view></router-view>
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
  .md-app {
    min-height: 350px;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

.nav-item{
    &:hover{
        cursor: pointer;
        color: blue;
        // background: #000;
    }
}
</style>
