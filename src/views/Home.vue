<template>
  <div class="main">
    <div class="header">
    <h2>CHAIN SMOKE</h2>
      <p>for everything blockchain</p>
    </div>
    <div class="buttons">
        <router-link tag="a" to="/personal">
          <div class="butleft">
            <h3>Personal</h3>
          </div>
        </router-link>
        <router-link tag="a" to="/">
          <div class="butright">
            <h3>Business</h3>
          </div>
        </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from '@/components/Counter.vue'

export default {
  name: 'home',
  components: {
    Counter
  }
}
</script>
