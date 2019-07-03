<template>
  <nav>
    <ul class="mainmenu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><a>Work</a>
        <ul class="submenu">
          <li><router-link to="/mobiletech">MobiletechRx</router-link></li>
          <li><router-link to="/global">Global</router-link></li>
        </ul>
      </li>
      <li><a href="">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
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
