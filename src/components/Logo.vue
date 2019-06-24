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
        <p>&nbsp;</p>
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
<style scoped lang="scss">

  $total-lines: 4;
  $left-offset: .6rem;
  $clip-height: 1rem;
  $line-height: $clip-height - .05rem;

  .Logo {
     margin: 0 auto;
     // position: relative;
     // right: 20px;
  }

  .Words {
   margin: 0;
   padding: 2px 0;
   font-size: 7px;
   font-weight: 900;
   letter-spacing:-1px;
   text-transform: uppercase;
   // Sort out nasty text fuzz
   transform: translate3d(0, 0, 0);
   -webkit-font-smoothing: antialiased;
   -webkit-font-kerning: normal;
   -webkit-text-size-adjust: 100%;
  }

  .Words-line {
   height: 11px;
   overflow: hidden;
   position: relative;

   // Change the perspective of each alternating line
   &:nth-child(odd) {
     transform: skew(60deg, -30deg) scaleY(.66667);
     background-color: darkGrey;
     width: 40px;
     color: white;
   }
   &:nth-child(even) {
     transform: skew(0deg, -30deg) scaleY(1.33333);
     background-color: lightGrey;
     width: 40px;
   }

   // Loop over the total lines and apply a left offset
   @for $i from 1 through $total-lines+1 {
     &:nth-child(#{$i}) {
       left: 7px * $i;
     }
   }
  }
  p {
   height: $clip-height;
   line-height: $clip-height;
   padding: 0px 2px;
   transition: all .7s ease-in-out;
   transform: translate3d(0, 0, 0);
   vertical-align: top;
   white-space: nowrap;
  }
  .Words:hover {
   p {
     transform: translate3d(0, -($clip-height), 0);
   }
  }

  @media screen and (min-width: 700px) {
    // .Logo {
    //    margin: 0;
    //    right: 0px;
    // }
    .Words {
     padding: 7px;
     font-size: 15px;
     letter-spacing:-2px;
    }

    .Words-line {
      height: $clip-height;

      &:nth-child(odd) {
        width: 85px;
      }
      &:nth-child(even) {
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
     padding: 0px 5px;
    }
  }

</style>
