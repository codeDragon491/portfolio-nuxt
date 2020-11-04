<template>
  <div>
    <div class="work-header">
    </div>

    <h2>Work details</h2>
    <p>description</p>
  </div>
</template>
<script>
//import WorkService from '@/services/WorkService.js'
import { mapState } from 'vuex'
export default {
  /*async asyncData({ error, params }) {
    // with promise
    try {
      const { data } = await WorkService.getEvent(params.id)

      return {
        event: data
      }
    } catch (e) {
      error({
        statusCode: 503,
        message:
          'Unable to fetch event ' + params.id + '. Please try again later.'
      })
    }
  },*/
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
  /*computed: {
    id() {
      return this.$route.params.id
    }
  },*/
  computed: mapState({
    work: (state) => state.works.work
  }),
  head() {
    return {
      title: 'Work' + this.work.title,
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
