<template>
    <div class="index-container">
        <div class="md-layout md-gutter">
            <InfoCard class="md-layout-item"></InfoCard>
            <ControlerCard class="md-layout-item" style="margin: 0 10px;"></ControlerCard>
        </div>
    </div>
</template>

<script>
import InfoCard from "../components/card-info.vue"
import ControlerCard from "../components/card-controler.vue"

export default {
    components:{
        InfoCard,
        ControlerCard
    }
}
</script>


<style lang="scss" scoped>

.index-container{
    padding: 20px 0;
}
</style>
