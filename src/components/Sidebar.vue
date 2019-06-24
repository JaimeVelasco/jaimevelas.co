<template>
  <nav>
  <ul class="mainmenu">
    <li><router-link to="/about">About</router-link></li>
    <li><a href="">Work</a>
      <ul class="submenu">
        <li><a href="">MobiletechRx</a></li>
        <li><a href="">Global The Source</a></li>
        <li><a href="">Wickley Interactive</a></li>
      </ul>
    </li>
    <li><a href="">Contact</a></li>
  </ul>
</nav>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
/* make ALL links (main and submenu) have padding and background color */
.mainmenu a {
  display: block;
  text-decoration: none;
  padding: 10px;
  color: #000;
}

.mainmenu a:hover {
    background-color: lightGrey;
}

.mainmenu li:hover .submenu {
  display: block;
  max-height: 200px;
}

.submenu {
  overflow: hidden;
  max-height: 0;
  -webkit-transition: all 0.5s ease-out;
  a {
    background-color: #999;
  }
  .submenu a:hover {
    background-color: #666;
  }
}
</style>
