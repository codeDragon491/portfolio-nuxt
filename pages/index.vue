<template>
  <div class="page">
    <h1>Hello! This is Simple Studio.</h1>
    <transition name="fade" mode="out-in">
      <div v-if="!textShown" @mouseover="toggleText" id="observablehq-786759ef">
        <div class="observablehq-script"></div>
        <div class="observablehq-data"></div>
        <div class="observablehq-n"></div>
        <div class="observablehq-height"></div>
      </div>
      <div v-if="textShown" @mouseleave="toggleText">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </transition>
  </div>
</template>
<script>
//import { Runtime, Inspector } from '@observablehq/runtime'
//import define from '@codedragon491/voronoi-stippling/index.js'
//const runtime = new Runtime()
//const main = runtime.module(define, Inspector.into(document.body))
//const main = runtime.module(define)
/*const main = runtime.module(define, (name) => {
  console.log('name')
  if (name === 'chart') {
    return new Inspector(
      document.body.appendChild(document.createElement('DIV'))
    )
  }
})*/
/*import {
  Runtime,
  Inspector
} from 'https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js'
import define from 'https://api.observablehq.com/@codedragon491/voronoi-stippling.js?v=3'*/
/*new Runtime().module(define, (name) => {
  if (name === 'script')
    return Inspector.into('#observablehq-786759ef .observablehq-script')()
  if (name === 'data')
    return Inspector.into('#observablehq-786759ef .observablehq-data')()
  if (name === 'n')
    return Inspector.into('#observablehq-786759ef .observablehq-n')()
  if (name === 'height')
    return Inspector.into('#observablehq-786759ef .observablehq-height')()
})*/

//import WorkService from '@/services/WorkService.js'
import * as d3 from 'd3'
export default {
  head() {
    return {
      title: 'Profile'
    }
  },
  /* asyncData({ $axios, error }) {
    // with promise
    return $axios
      .get('http://localhost:3004/events')
      .then((response) => {
        return {
          events: response.data
        }
      })
      .catch((e) => {
        error({
          statusCode: 503,
          message: 'Unable to fetch events at this time.Please try again later.'
        })
      })
  }, */
  /*async asyncData({ error }) {
    // with promise
    try {
      const { data } = await WorkService.getEvents()
      return {
        events: data
      }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again later.'
      })
    }
  },*/
  data() {
    return {
      textShown: false
    }
  },
  methods: {
    toggleText() {
      this.textShown = !this.textShown
    }
  }
}
</script>
