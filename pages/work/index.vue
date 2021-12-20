<template>
  <div class="page">
    <!--<h1 id="title">Work</h1>-->
    <div class="work-list">
      <WorkCard
      v-for="(work, index) in works"
      :key="index"
      :work="work"
      :data-index="index"
      />
    </div>
  </div>
</template>
<script>
import WorkCard from '@/components/WorkCard.vue'
import { mapState } from 'vuex'
export default {
  head() {
    return {
      title: 'Work',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Where you can see Julia´s work'
        }
      ]
    }
  },
  mounted(){
    //animate texts on the page
    setTimeout(function(){
    let matrixTitle = $("#title").splitText({'type':'letters','animation':'matrix'})
    matrixTitle.animate()
    }, 1000)

    // animate work list
    let controller = new this.$ScrollMagic.Controller()

    let workListTl = new this.$GSAP.TimelineLite()

    workListTl.to('.work-list', 1.5, {
      opacity: 1,
      ease: 'power1'
    }, 1.5)
    .from('.work-list', 1.5, {
      y: 50,
      ease: 'power1'
    }, 1.5, '-=1.5')

  let workListScene = new this.$ScrollMagic.Scene({
    duration: 0,
    offset: 0,
  })
  .setTween(workListTl)
  .addTo(controller)
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('works/fetchWorks')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch works at this time. Please try again later.'
      })
    }
  },
  components: { WorkCard },
  computed: mapState({
    works: (state) => state.works.works
  })
}
</script>
<style lang="scss">
.page {
  max-width: 750px;
  display: flex;
  flex-direction: column;
}
@media only screen and (min-width: 1024px){
  .page {
    max-width: 984px;
    /*width: calc(100% - 15rem);*/
  }
}
@media only screen and (min-width: 1228px){
  .page {
    max-width: 1006px;
    /*width: calc(100% - 15rem);*/
  }
}
/*@media only screen and (min-width: 1920px){
  .page {
    width: 60%;
  }
}*/
h1 {
    margin-top: 0;
    align-self: center;
}
.work-list{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;
}
@media screen and (min-width: 768px){
  .work-list {
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5rem;
  }
}
h1#title {
  color: black;
  opacity: 0;
}
h1.isSplit {
  .letter-measure{
    color: black !important;
  }
  opacity: 1;
}
</style>
