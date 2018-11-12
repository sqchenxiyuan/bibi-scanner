<template>
    <div class="taskinfo-container">
        <md-card>
            <md-card-header>
                <div class="md-title">任务A</div>
            </md-card-header>
            <md-card-content>
                <div class="md-layout">
                    <div class="md-layout-item md-layout">
                        <div class="md-layout-item" style="min-width: 100px;max-width:100px">任务状态:</div>
                        <div class="md-layout-item">运行中</div>
                    </div>
                    <div class="md-layout-item md-layout">
                        <div class="md-layout-item" style="min-width: 100px;max-width:100px">创建时间:</div>
                        <div class="md-layout-item">2018-4-4</div>
                    </div>
                    <div class="md-layout-item md-layout">
                        <div class="md-layout-item" style="min-width: 100px;max-width:100px">完成时间:</div>
                        <div class="md-layout-item">2018-4-4</div>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item md-layout">
                        <div class="md-layout-item" style="min-width: 100px;max-width:100px">扫描目标:</div>
                        <div class="md-layout-item">127.0.0.1</div>
                    </div>
                    <div class="md-layout-item md-layout">
                        <div class="md-layout-item" style="min-width: 100px;max-width:100px">扫描插件:</div>
                        <div class="md-layout-item">1,2,3,4,5,</div>
                    </div>
                    <div class="md-layout-item md-layout"></div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item md-layout md-size-66 md-alignment-center-left">
                        <div class="md-layout-item" style="min-width: 100px;max-width:100px">扫描进度:</div>
                        <div class="md-layout-item" style="height: 5px">
                            <md-progress-bar md-mode="determinate" :md-value="50"></md-progress-bar>
                        </div>
                    </div>
                    <div class="md-layout-item md-layout">
                        <div class="md-layout-item">50%</div>
                    </div>
                </div>
                <div class="md-layout">
                    <div class="md-layout-item md-layout">
                        <div class="md-layout-item" style="min-width: 100px;max-width:100px">主机数目:</div>
                        <div class="md-layout-item">112</div>
                    </div>
                    <div class="md-layout-item md-layout">
                        <div class="md-layout-item" style="min-width: 100px;max-width:100px">端口数目:</div>
                        <div class="md-layout-item">46545</div>
                    </div>
                    <div class="md-layout-item md-layout">
                        <div class="md-layout-item" style="min-width: 100px;max-width:100px">危险:</div>
                        <div class="md-layout-item">11000</div>
                    </div>
                </div>
            </md-card-content>
        </md-card>
        <!-- <md-card style="margin-top: 20px;"> -->
            <!-- <md-card-header>
                <div class="md-title">详情</div>
            </md-card-header> -->
            <!-- <md-card-content> -->
                <md-app md-waterfall md-mode="fixed" style="margin-top: 20px;height: 90vh;">
                    <md-app-drawer md-permanent="full">
                        <md-toolbar class="md-transparent" md-elevation="0">
                            主机列表
                        </md-toolbar>
                        <md-list>
                            <md-list-item>
                                <span class="md-list-item-text">127.0.0.1</span>
                            </md-list-item>
                            <md-list-item>
                                <span class="md-list-item-text">127.0.0.2</span>
                            </md-list-item>
                            <md-list-item>
                                <span class="md-list-item-text">127.0.0.3</span>
                            </md-list-item>
                            <md-list-item>
                                <span class="md-list-item-text">127.0.0.4</span>
                            </md-list-item>
                        </md-list>
                    </md-app-drawer>

                    <md-app-toolbar class="md-primary">
                        <span class="md-title">127.0.0.1</span>
                    </md-app-toolbar>

                    <md-app-content>
                        <el-collapse>
                            <el-collapse-item name="80">
                                <template slot="title">
                                    :80
                                </template>
                                无安全风险
                            </el-collapse-item>
                            <el-collapse-item name="27017">
                                <template slot="title">
                                    :27017<span style="display:inline-block;width:16px;"></span>1x<i class="el-icon-warning"></i>
                                </template>
                                <div>未授权访问：mongodb未授权访问 from 插件A</div>
                            </el-collapse-item>
                        </el-collapse>
                    </md-app-content>
                </md-app>
                <div style="height: 10vh;"></div>
            <!-- </md-card-content>
        </md-card> -->
    </div>
</template>

<style lang="scss" scoped>
.taskinfo-container{
    padding-top: 20px;
}
.md-app {
    max-height: 400px;
    border: 1px solid rgba(#000, .12);
}

// Demo purposes only
.md-drawer {
    width: 200px;
    max-width: calc(100vw - 125px);
}

.md-list-item-text{
    &:hover{
        cursor: pointer;
    }
}
</style>
