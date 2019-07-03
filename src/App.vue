<template>
  <div id="app">
    <header class="header">
      <Logo />
    </header>
    <Navigation class="sidebar"/>
    <article class="content">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </article>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Navigation from '@/components/Navigation.vue'
require('@/assets/reset.css')

export default {
  name: 'App',
  components: {
    Logo,
    Navigation
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fff;
  color: #444;
  width: 100vw;
  height: 100vh;
  margin: 0px;
  display: grid;
  grid-gap: 0px;
  grid-template-rows: 1fr 10fr 1fr;
  font-size: 17px;
}


@media screen and (max-width: 700px) {
  .sidebar {
    display: none;
  }
}

@media screen and (min-width: 700px) {

/* no grid support? */
.sidebar {
  float: left;
  width: 19.1489%;
}

.content {
  float: right;
  width: 79.7872%;
}

#app {
  margin: 0 auto;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr 10fr 1fr;
}

.header, .footer {
  grid-column: 1 / -1;
  /* needed for the floated layout */
  clear: both;
}

}

#app > * {
  border: #444 1px solid;
  // color: #fff;
  padding: 20px;
  font-size: 150%;
  /* needed for the floated layout*/
  margin-bottom: 10px;
}

/* We need to set the widths used on floated items back to auto, and remove the bottom margin as when we have grid we have gaps. */
@supports (display: grid) {
  #app > * {
    width: auto;
    margin: 0;
  }
}


.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
