<template>
  <div class="page">
      <img
        class="resume_unzoomed"
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
  mounted(){
    // animate work list
    let controller = new this.$ScrollMagic.Controller()

    let resumeTl = new this.$GSAP.TimelineLite()

    resumeTl.to('.resume_unzoomed', 1.5, {
      opacity: 1,
      ease: 'power1'
    }, 0.5)
    .from('.resume_unzoomed', 1.5, {
      y: 50,
      ease: 'power1'
    }, 0.5, '-=1.5')

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
  opacity: 0;
  cursor: pointer;
}
</style>
