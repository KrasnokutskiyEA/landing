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
      this.$set(this, 'mobileNav', !this.mobileNav)
    },

    checkScreen () {
      this.windowWidth = window.innerWidth

      if (this.windowWidth <= 640) {
        this.$set(this, 'mobile', true)
        return
      }

      this.$set(this, 'mobile', false)
      this.$set(this, 'mobileNav', false)
    }
  }
}
</script>

<template>
  <header :class="{'scrolled-nav': scrollPosition}" class="bg-green-400 z-30 w-screen fixed transition-all">
    <nav class="flex flex-row px-12 py-2 relative justify-between">
      <div class="branding">
        <img src="@/assets/images/corona.svg" class="w-10" alt="">
      </div>

      <ul v-show="mobile === false" class="desktop-nav border flex flex-row items-center">
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

      <!-- menu button burger -->
      <MenuBtn
        v-show="mobile"
        :is-opened-menu="mobileNav"
        class="absolute right-12 z-50"
        @toggle-menu-button="toggleMobileNav"
      />
      <!-- -->

      <transition name="mobile-nav">
        <ul v-if="mobileNav" class="dropdown-nav border absolute top-0 left-0 z-40 w-screen h-screen">
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
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter,
.mobile-nav-leave-to {
  transform: translateX(-100%);
}
</style>
