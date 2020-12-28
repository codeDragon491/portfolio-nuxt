<template>
  <div class="#">
    <header class="work-header">
      <h3>{{work.title}}</h3>
      <h1>{{work.headline}}</h1>
      <p>{{work.description}}</p>
      <Arrow/>
      <div :style="backgroundImage" class="work-cover"></div>
    </header>
    <main>
      <section class="work-section">
        <h2>Assignmnent</h2>
        <p>{{work.assignment}}</p>
      </section>
      <section class="work-section">
        <h2>Solution</h2>
        <p>{{work.assignment}}</p>
      </section>
    </main>
  </div>
</template>
<script>
import Arrow from '@/components/Arrow.vue';
import { mapState } from 'vuex'
export default {
  components: { Arrow },
  async fetch({ store, params, error }) {
    try {
      await store.dispatch('works/fetchWork', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch work at this time. Please try again later.'
      })
    }
  },
  computed: mapState({
    work: (state) => state.works.work,
    backgroundImage () {
        return 'background-image: ' + "url(" + this.work.backgroundImage + ")";
      },
    /*id() {
      return this.$route.params.id
    }*/
  }),
  head() {
    return {
      title: this.work.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Where you can read about Julia's work" + this.work.title
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.work-header {
  margin-top: 150px;
  height: calc(100vh - 150px);
  color: white;
  h3 {
  margin:  0 0 1.5rem 0;
  }
  h1 {
  margin: 0 0 1rem 0; 
  text-transform: uppercase;
  font-size: 10vw;
  line-height: 10vw;
  }
  p {
  margin: 0;
  font-size: 1.25rem;
  max-width: 56ch;
  line-height: 1.7;
  }
}
.work-cover {
    position: absolute;
    background-size: cover;
    left: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: -10;
}
.work-cover::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, #313131, #090909);
    mix-blend-mode: hard-light;
    opacity: 0.5;
    z-index: 10;
}
@media only screen and (min-width: 1024px){
  .work-header {
    margin: 150px auto 0;
    h1 { 
    font-size: 60px;
    line-height: 60px; 
  }
  }
}
@media only screen and (min-width: 1280px){
  .work-header {
    width: 70%;
  }
}
.work-section {
  margin: 7rem 0;
  padding: 0 65px;
  h2, p {
    width: 50%;
    margin: 0 auto;
  }
  p {
      font-size: 1.25rem;
  }
}
</style>
