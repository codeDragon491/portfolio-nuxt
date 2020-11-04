<template>
  <div class="page">
    <h1>Works</h1>
    <WorkCard
      v-for="(work, index) in works"
      :key="index"
      :work="work"
      :data-index="index"
    />
  </div>
</template>
<script>
import WorkCard from '@/components/WorkCard.vue'
import { mapState } from 'vuex'
export default {
  head() {
    return {
      title: 'Works',
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
