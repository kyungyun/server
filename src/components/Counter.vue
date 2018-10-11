<template>
  <div>
    {{count}}
  </div>
</template>

<script>
import store from '../store';

export default {

  computed: {    
    count : () => {
      return store.state.count;
    }
  },
  created: () => {
    store.commit('increment');
  }
}
</script>
