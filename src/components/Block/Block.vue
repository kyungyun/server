<template>
    <a-card class="mine is-valid mine-shadow">
        <a-input addonBefore="DATA" v-model="inputData">
            <a-icon slot="prefix" type="file-text" />
        </a-input>
        <p>index: {{index}}</p>
        <p>hash: {{hash}}</p>
        <p>previousHash: {{previousHash}}</p>
        <p>timestamp: {{timestamp}}</p>
    </a-Card>
</template>

<script>
export default {
    props: {
        index: Number,
        hash: String,
        previousHash: String,
        data: String,
        timestamp:Number
    },
    data: function () {
        return { 
            inputData: this.data 
        }
    }
}
</script>

<style scoped>
@import '../Add/AddCard.css';

</style>

