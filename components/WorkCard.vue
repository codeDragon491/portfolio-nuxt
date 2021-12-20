<template>
  <nuxt-link ref="workCard" class="work-card" :to="'/work/' + work.id">
  <style>
    :root {
      --image-height: {{ imageHeight - 27 + 'px' }};
    }
  </style>
    <div class="shadow">
      <h4 class="title">
        {{ work.title }}
      </h4>
      <div class="work-cover">
        <img ref="workCoverImage" :src="work.image">
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  name: 'WorkCard',
  props: {
    work: Object
  },
  data(){ return {
    imageHeight: null
  }
  },
  computed: {
    parsedDate() {
      const workDate = new Date(this.work.date)
      return workDate.toDateString()
    }
  },
  methods: {
    heightWorkCoverImage (event) {
      let image = event.target;
      this.imageHeight = image.clientHeight;
      // console.log(this.imageHeight)
      //this.$refs.workCardImage.clientHeight;
    }
  }
}
</script>
<style scoped>
.work-card {
  position: relative;
  height: 11rem;
  margin-bottom: 1.25rem;
}
.work-cover img {
  height: 100%;
}
@media screen and (min-width: 414px) {
  .work-card {
    height: var(--image-height);
  }
  .work-cover img {
    height: auto;
  }
}
@media screen and (min-width: 768px) {
  .work-card {
    height: 12rem;
    flex: 0 0 48.5%;
  }
  .work-cover img {
    height: 100%;
  }
}
@media screen and (min-width: 1024px) {
  .work-card {
  height: 11rem;
  flex: 0 0 32%;
  max-width: 32%;
  }
}
.work-cover::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, #ebebeb, #d93337);
    opacity: 0.5;
    mix-blend-mode: hard-light;
    transform: skew(15deg) translateX(-50%);
    z-index: 10;
}
.work-cover{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    overflow: hidden;
}
.title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  margin: 0.75rem 1rem;
  color: white;
  text-decoration: none;
  letter-spacing: 0.15em;
}
.title:after {
  content: "";
  width: 0;
  height: 2px;
  left: 0;
  bottom: 0;
  position: absolute;
  background: #fff;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
}
.shadow {
  height: 100%;
  transition: all 0.2s linear;
  cursor: pointer;
}
.shadow:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.shadow:hover .title:after{
  width: 100%;
  left: 0;
}
a {
  text-decoration: none;
}
</style>
