<template>
  <div class="Logo">
    <ul class="Words">
      <li class="Words-line">
        <p>&nbsp;</p>
        <p>Jaime</p>
      </li>
      <li class="Words-line">
        <p>Jaime</p>
        <p>Velasco</p>
      </li>
      <li class="Words-line">
        <p>Velasco</p>
        <p>Web</p>
      </li>
      <li class="Words-line">
        <p>Web</p>
        <p>Developer</p>
      </li>
      <li class="Words-line">
        <p>Developer</p>
        <p>mexico</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    msg: String
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  $total-lines: 4;
  $left-offset: 10px;
  $clip-height: 17px;
  $line-height: $clip-height - 2px;

  .Words {
   margin: 0;
   padding: 7px 0;
   font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
   font-size: 15px;
   font-weight: 900;
   letter-spacing: -2px;
   text-transform: uppercase;
   // Sort out nasty text fuzz
   transform: translate3d(0, 0, 0);
   -webkit-font-smoothing: antialiased;
   -webkit-font-kerning: normal;
   -webkit-text-size-adjust: 100%;
  }

  .Words-line {
   height: $clip-height;
   overflow: hidden;
   position: relative;

   // Change the perspective of each alternating line
   &:nth-child(odd) {
     transform: skew(60deg, -30deg) scaleY(.66667);
     background-color: darkGrey;
     width: 85px;
     color: white;
   }
   &:nth-child(even) {
     transform: skew(0deg, -30deg) scaleY(1.33333);
     background-color: lightGrey;
     width: 85px;
   }

   // Loop over the total lines and apply a left offset
   @for $i from 1 through $total-lines+1 {
     &:nth-child(#{$i}) {
       left: $left-offset * $i;
     }
   }
  }
  p {
   height: $clip-height;
   line-height: $line-height;
   padding: 0 5px;
   transition: all .7s ease-in-out;
   transform: translate3d(0, 0, 0);
   vertical-align: top;
   white-space: nowrap;
  }
  /*
  ** The hover interaction
  */
  .Words:hover {
   p {
     transform: translate3d(0, -($clip-height), 0);
   }
  }

</style>
