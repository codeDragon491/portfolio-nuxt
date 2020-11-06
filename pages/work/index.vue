<template>
  <div class="page">
    <h1>Work</h1>
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
<style scoped>
.page {
  display: flex;
  flex-direction: column;
}
@media only screen and (min-width: 1024px){
  .page {
    width: 1006px;
    /*width: calc(100% - 15rem);*/
  }
}
h1{
      align-self: center;
}
.work-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
