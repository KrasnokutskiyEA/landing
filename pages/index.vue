<template>
  <div>
    <h1 class="pt-6 text-green-500 font-playfair italic font-bold text-6xl">
      Custom Made
    </h1>

    <img
      src="~/assets/images/thumbnail.jpg"
      data-src="https://res.cloudinary.com/dfsb9sgvt/image/upload/f_auto,q_auto/bkg_1_gfoads.jpg"
      sizes="(max-width: 1800px) 100vw, 1800px"
      data-srcset="
      https://res.cloudinary.com/dfsb9sgvt/image/upload/c_scale,w_320,f_auto,q_auto/bkg_1_gfoads.jpg 320w,
      https://res.cloudinary.com/dfsb9sgvt/image/upload/c_scale,w_480,f_auto,q_auto/bkg_1_gfoads.jpg 480w,
      https://res.cloudinary.com/dfsb9sgvt/image/upload/c_scale,w_768,f_auto,q_auto/bkg_1_gfoads.jpg 768w,
      https://res.cloudinary.com/dfsb9sgvt/image/upload/c_scale,w_1024,f_auto,q_auto/bkg_1_gfoads.jpg 1024w,
      https://res.cloudinary.com/dfsb9sgvt/image/upload/c_scale,w_1280,f_auto,q_auto/bkg_1_gfoads.jpg 1280w,
      https://res.cloudinary.com/dfsb9sgvt/image/upload/c_scale,w_1800,f_auto,q_auto/bkg_1_gfoads.jpg 1800w,
      "
      width="100%"
      alt="An image example with Cloudinary"
      class="lazyload"
    >
  </div>
</template>

<style>
</style>
