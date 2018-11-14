<template>
    <div class="md-layout" style="padding-top: 20px;">
        <NodeCard v-for="node in nodes" :key="node.id" :node="node" class="md-layout-item" style="min-width: 275px; max-width: 375px; margin: 0 10px 10px 0;"></NodeCard>
    </div>
</template>

<script>
import { queryNodes } from "@/interfaces/nodes.js";

import NodeCard from "../components/cards/card-node.vue"

export default {
    data(){
        return {
            nodes:[]
        }
    },
    created(){
        this.getNodes()
    },
    methods:{
        getNodes(){
            queryNodes().then(res => {
                this.nodes = res.data.data.nodes
            })
        }
    },
    components:{
        NodeCard
    }
}
</script>