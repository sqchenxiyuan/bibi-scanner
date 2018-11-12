<template>
    <div class="md-layout" style="padding-top: 20px;">
        <NodeCard v-for="node in nodes" :key="node.id" :node="node" class="md-layout-item" style="width: 300px; margin: 0 10px 10px 0;"></NodeCard>
    </div>
</template>

<script>
import NodeCard from "../components/cards/card-node.vue"

export default {
    data(){
        return {
            nodes:[
                {id: 1, name: "节点1", lastactivetime:Date.now(), lastactiveip: "127.0.0.1", lastactiveport: 8888 },
                {id: 2, name: "节点2", lastactivetime:Date.now(), lastactiveip: "127.0.0.1", lastactiveport: 8888 },
                {id: 3, name: "节点3", lastactivetime:Date.now(), lastactiveip: "127.0.0.1", lastactiveport: 8888 },
                {id: 4, name: "节点4", lastactivetime:Date.now(), lastactiveip: "127.0.0.1", lastactiveport: 8888 },
                {id: 5, name: "节点5", lastactivetime:Date.now(), lastactiveip: "127.0.0.1", lastactiveport: 8888 },
                {id: 6, name: "节点6", lastactivetime:Date.now(), lastactiveip: "127.0.0.1", lastactiveport: 8888 },
            ]
        }
    },
    components:{
        NodeCard
    }
}
</script>