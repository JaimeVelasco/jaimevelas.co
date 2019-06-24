<template>
  <div id="app">
    <header class="header">
      <Logo />
    </header>
    <aside class="sidebar">
      <Sidebar />
    </aside>
    <article class="content">
      <h1>2 column, header and footer</h1>
      <p>This example uses line-based positioning, to position the header and footer, stretching them across the grid.</p>
      <router-view/>
    </article>
    <footer class="footer">My footer</footer>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Sidebar from '@/components/Sidebar.vue'
require('@/assets/reset.css')

export default {
  name: 'App',
  components: {
    Logo,
    Sidebar
  }
}
</script>

<style scoped lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // margin: 40px;
  background-color: #fff;
  color: #444;
  width: 100vw;
  height: 100vh;
  margin: 0px;
  display: grid;
  grid-gap: 0px;
}

h1, p {
  margin: 0 0 1em 0;
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
  grid-template-rows: 150px 10fr 1fr;
}

.header, .footer {
  grid-column: 1 / -1;
  /* needed for the floated layout */
  clear: both;
}

}

#app > * {
  border: #444 1px solid;
  color: #fff;
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
</style>
