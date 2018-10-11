<template>
  <a-input addonBefore="DATA" v-model="data"  >
    <a-icon slot="prefix" type="file-text" />
  </a-input>
</template>

<script>


export default {
  data: function() {
    return {
      data: ""
    }
  },
  methods: {
    getData: function() {
      return this.data;
    }
  }
}
</script>

<style scoped>
</style>