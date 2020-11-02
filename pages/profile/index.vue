<template>
  <div class="page">
    <transition name="fade">
      <img
        class="resume_unzoomed"
        v-if="unzoomed"
        key="unzoomed"
        @click="toggleZoom"
        src="~/assets/Julia Trefas.png"
      />
      <img
        class="resume_zoomed"
        v-if="zoomed"
        key="zoomed"
        @click="toggleZoom"
        src="~/assets/Julia Trefas.png"
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
