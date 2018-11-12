<template>
    <md-card>
        <md-card-header>{{node.name}}</md-card-header>
        <md-card-content>
            <div class="md-layout">
                <div class="md-layout-item" style="max-width: 70px">活跃时间</div>
                <div class="md-layout-item">{{timeTranslate(node.lastactivetime)}}</div>
            </div>
            <div class="md-layout md-alignment-center-left">
                <div class="md-layout-item" style="max-width: 70px">活跃地址</div>
                <div class="md-layout-item">{{node.lastactiveip}}:{{node.lastactiveport}}</div>
            </div>
        </md-card-content>
    </md-card>
</template>

<script>
import moment from "moment"

export default {
    props:{
        node:Object
    },
    methods:{
        timeTranslate(time){
            return moment(time).format("YYYY-MM-DD")
        }
    }
}
</script>