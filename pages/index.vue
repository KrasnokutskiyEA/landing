<script>
export default {
  data () {
    return {
      par1: 'c_scale,w_320,f_auto,q_auto',
      par2: 'c_scale,w_480,f_auto,q_auto',
      par3: 'c_scale,w_768,f_auto,q_auto',
      par4: 'c_scale,w_1024,f_auto,q_auto',
      par5: 'c_scale,w_1280,f_auto,q_auto',
      par6: 'c_scale,w_1800,f_auto,q_auto'
    }
  }
}
</script>

<template>
  <div>
    <h1 class="pt-6 text-green-500 font-playfair italic font-bold text-6xl">
      Custom Made
    </h1>

    <!--
    <img
      src="~/assets/images/thumbnail.jpg"
      decoding="async"
      data-srcset="
      https://res.cloudinary.com/dfsb9sgvt/image/upload/c_scale,w_320,f_auto,q_auto/hero.jpg 320w,
      https://res.cloudinary.com/dfsb9sgvt/image/upload/c_scale,w_480,f_auto,q_auto/hero.jpg 480w,
      https://res.cloudinary.com/dfsb9sgvt/image/upload/c_scale,w_768,f_auto,q_auto/hero.jpg 768w,
      https://res.cloudinary.com/dfsb9sgvt/image/upload/c_scale,w_1024,f_auto,q_auto/hero.jpg 1024w,
      https://res.cloudinary.com/dfsb9sgvt/image/upload/c_scale,w_1280,f_auto,q_auto/hero.jpg 1280w,
      https://res.cloudinary.com/dfsb9sgvt/image/upload/c_scale,w_1800,f_auto,q_auto/hero.jpg 1800w,
      "
      data-src="https://res.cloudinary.com/dfsb9sgvt/image/upload/f_auto,q_auto/hero.jpg"
      width="100%"
      height="100%"
      alt="Hero image"
      class="lazyload"
    >
    -->

    <img
      decoding="async"
      :srcset="`
        https://res.cloudinary.com/dfsb9sgvt/image/upload/${par1}/hero.jpg 320w,
        https://res.cloudinary.com/dfsb9sgvt/image/upload/${par2}/hero.jpg 480w,
        https://res.cloudinary.com/dfsb9sgvt/image/upload/${par3}/hero.jpg 768w,
        https://res.cloudinary.com/dfsb9sgvt/image/upload/${par4}/hero.jpg 1024w,
        https://res.cloudinary.com/dfsb9sgvt/image/upload/${par5}/hero.jpg 1280w,
        https://res.cloudinary.com/dfsb9sgvt/image/upload/${par6}/hero.jpg 1800w,
      `"
      src="https://res.cloudinary.com/dfsb9sgvt/image/upload/f_auto,q_auto/hero.jpg"
      width="100%"
      alt="Hero image"
    >
  </div>
</template>

<style>
</style>
