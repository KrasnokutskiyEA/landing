<script>
export default {
  name: 'Header',

  data () {
    return {
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null
    }
  },

  beforeMount () {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },

  methods: {
    toggleMobileNav () {
      this.mobileNav = !this.mobileNav
    },

    checkScreen () {
      this.windowWidth = window.innerWidth

      if (this.windowWidth <= 768) {
        this.mobile = true
        return
      }

      this.mobile = false
      this.mobileNav = false
    }
  }
}
</script>

<template>
  <header :class="{'scrolled-nav': scrollPosition}" class="bg-green-400 z-50 w-screen fixed transition-all">
    <nav class="flex-row px-12 py-0 relative">
      <div class="branding">
        <img src="@/assets/images/corona.svg" class="w-10" alt="">
      </div>

      <ul v-show="!mobile" class="navigation">
        <li>
          <NuxtLink to="/contacts">
            contacts
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/about">
            about
          </NuxtLink>
        </li>
      </ul>

      <div class="icon absolute">
        <div v-show="mobile" :class="{'icon-active': mobileNav }" class="w-5 h-5 bg-green-800" @click="toggleMobileNav" />
      </div>

      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <NuxtLink to="/contacts">
              contacts
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/about">
              about
            </NuxtLink>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<style lang="scss" scoped>

</style>
