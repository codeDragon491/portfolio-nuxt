<template>
  <div>
    <div class="event-header">
      <span class="eyebrow"> @{{ event.time }} on {{ event.date }} </span>
      <h1 class="title">
        {{ event.title }}
      </h1>
      <h5>Organized by {{ event.organizer ? event.organizer.name : '' }}</h5>
      <h5>Category: {{ event.category }}</h5>
    </div>

    <span name="map">
      <h2>Location</h2>
    </span>

    <address>{{ event.location }}</address>

    <h2>Event details</h2>
    <p>{{ event.description }}</p>

    <h2>
      Attendees
      <span class="badge -fill-gradient">
        {{ event.attendees ? event.attendees.length : 0 }}
      </span>
    </h2>
    <ul class="list-group">
      <li
        v-for="(attendee, index) in event.attendees"
        :key="index"
        class="list-item"
      >
        <b>{{ attendee.name }}</b>
      </li>
    </ul>
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
      await store.dispatch('works/fetchEvent', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again later.'
      })
    }
  },
  /*computed: {
    id() {
      return this.$route.params.id
    }
  },*/
  computed: mapState({
    event: (state) => state.works.event
  }),
  head() {
    return {
      title: 'Work' + this.event.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Where you can read about Julia's work" + this.event.title
        }
      ]
    }
  }
}
</script>
