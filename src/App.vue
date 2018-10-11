<template>
  <div id="app">
    <div class="nav">
      <div class="logo">
        <h1>ChainSmoke</h1>
      </div>
      <div class="navbar">
        <ul>
          <li><router-link tag="a" to="/">Home</router-link></li>
          <li><router-link tag="a" to="/about">About</router-link></li>
        </ul>
        <ul>
          <router-link tag="a" to="/register"><li class="regbut">Register</li></router-link>
          <li><router-link tag="a" to="/login">Log In</router-link></li>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>
