<template>
  <div class="page">
    <transition name="fade" mode="out-in">
      <img
        class="resume_unzoomed shadow"
        v-if="unzoomed"
        key="unzoomed"
        @click="toggleZoom"
        src="~/assets/img/Julia Trefas.png"
      />
      <img
        class="resume_zoomed"
        v-if="zoomed"
        key="zoomed"
        @click="toggleZoom"
        src="~/assets/img/Julia Trefas.png"
      />
    </transition>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Profile',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Where you can read about Julia's profile"
        }
      ]
    }
  },
  data() {
    return {
      unzoomed: true,
      zoomed: false
    }
  },
  mounted() {
    // animate work list
    let controller = new this.$ScrollMagic.Controller()

    let resumeTl = new this.$GSAP.TimelineLite()

    resumeTl.from('.resume_unzoomed', 1.5, {
      opacity: 0,
      y: 50,
      ease: 'power1'
    }, '-=1.5')

  let resumeScene = new this.$ScrollMagic.Scene({
    duration: 0,
    offset: 0,
  })
  .setTween(resumeTl)
  .addTo(controller)
  },
  methods: {
    toggleZoom() {
      this.unzoomed = !this.unzoomed
      this.zoomed = !this.zoomed
    }
  }
}
</script>
<style>
.resume_zoomed {
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}
.resume_unzoomed {
  cursor: pointer;
}
</style>
