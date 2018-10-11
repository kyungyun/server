<template>
    <div class="main">
        <div class="header2">
            <Block v-for="block in blockchain"
                :key="block.index" 
                v-bind="block">
            </Block>
            <AddCard/>

            <button @click="RequestBlockchainSync">async</button>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapState,mapActions } from "vuex";
import AddCard from "@/components/Add/AddCard.vue";
import Block from "@/components/Block/Block.vue";

export default {
    computed: {
        ...mapState({
            blockchain: state => state.blockchain
        })
    },
    components: {
        AddCard,
        Block
    },
    methods: mapActions([
        'RequestBlockchainSync'
    ]),
    
    created: () => {
    }
}
</script>

<style scoped>
</style>