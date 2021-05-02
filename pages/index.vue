<script>
export default {
  data () {
    return {
      img: 'https://res.cloudinary.com/dfsb9sgvt/image/upload/f_auto,q_auto/hero.jpg',
      imgs: `
        https://res.cloudinary.com/dfsb9sgvt/image/upload/c_scale,w_320,f_auto,q_auto/hero.jpg 320w,
        https://res.cloudinary.com/dfsb9sgvt/image/upload/c_scale,w_480,f_auto,q_auto/hero.jpg 480w,
        https://res.cloudinary.com/dfsb9sgvt/image/upload/c_scale,w_768,f_auto,q_auto/hero.jpg 768w,
        https://res.cloudinary.com/dfsb9sgvt/image/upload/c_scale,w_1024,f_auto,q_auto/hero.jpg 1024w,
        https://res.cloudinary.com/dfsb9sgvt/image/upload/c_scale,w_1280,f_auto,q_auto/hero.jpg 1280w,
        https://res.cloudinary.com/dfsb9sgvt/image/upload/c_scale,w_1800,f_auto,q_auto/hero.jpg 1800w,
      `
    }
  },

  head () {
    return {
      link: [
        {
          rel: 'preload',
          as: 'image',
          href: this.img,
          imagesrcset: this.imgs
        }
      ]
    }
  }
}
</script>

<template>
  <div>
    <!--
    <h1 class="pt-6 text-green-500 font-playfair italic font-bold text-6xl">
      Custom Made
    </h1>
    -->

    <img
      :srcset="imgs"
      :src="img"
      width="100%"
      alt="Hero image"
    >
  </div>
</template>

<style>
</style>
