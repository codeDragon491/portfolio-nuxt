<template>
  <div class="page">
    <h1>Work</h1>
    <WorkCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
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
      await store.dispatch('works/fetchEvents')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again later.'
      })
    }
  },
  components: { WorkCard },
  computed: mapState({
    events: (state) => state.works.events
  })
}
</script>
