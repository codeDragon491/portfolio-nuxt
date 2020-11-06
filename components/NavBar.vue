<template>
  <div class="nav">
    <nuxt-link to="/" class="brand">
      <img src="~/assets/SimpleStudio-transparent.png" />
    </nuxt-link>
    <nav>
      <nuxt-link class="nav-item" to="/">
        Home
      </nuxt-link>
      <nuxt-link class="nav-item" to="/profile">
        Profile
      </nuxt-link>
      <nuxt-link class="nav-item" to="/work">
        Work
      </nuxt-link>
      <nuxt-link class="nav-item" to="/">
        Contact
      </nuxt-link>
    </nav>
    <div id="trigger"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    //window.addEventListener('scroll', this.handleScroll)
    /*gsap.from('.brand', {
      duration: 0.5,
      opacity: 0,
      scale: 0,
      rotation: 180,
      ease: 'power1'
    })*/
    let controller = new this.$ScrollMagic.Controller()
    let brandTl0 = new this.$GSAP.TimelineLite()
    let brandTl1 = new this.$GSAP.TimelineLite()
    let brand = '.brand'
    brandTl0.from(brand, 1, {
      opacity: 0,
      scale: 0,
      rotation: 360,
      ease: 'power1'
    })
    brandTl1.to(brand, 0.5, {
      opacity: 1,
      scale: 1,
      rotation: 360,
      ease: 'power1'
    })

    let brandScene1 = new this.$ScrollMagic.Scene({
      duration: 0, // the scene should last for a scroll distance of 100px
      offset: 150
      //triggerElement: '#trigger',
      //triggerHook: 0
    })
      .setTween(brandTl1)
      //.addIndicators()
      .addTo(controller)

    let brandScene0 = new this.$ScrollMagic.Scene({
      duration: 0, // the scene should last for a scroll distance of 100px
      offset: 0
    })
      .setTween(brandTl0)
      //.addIndicators()
      .addTo(controller)
  }
}
</script>
<style scoped>
.brand {
  width: 10%;
  font-weight: 700;
  font-size: 1.5em;
  text-decoration: none;
}
.nav {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  z-index: 1;
  /*background: linear-gradient(#000000ff, #00000000);*/
}
.nav nav {
  font-size: 20px;
  margin-right: 1rem;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 12px;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  border-bottom: solid 2px inherit;
}
.nav a {
  display: inline-block;
   margin-left: 1rem;
}
#trigger {
  display: none;
  margin-top: 300px;
}
</style>
