<template>
  <div class="page">
    <h1 id="title">Hello! This is Simple Studio.</h1>
    <transition name="fade" mode="out-in">
      <div @mouseover="toggleText" class="home-intro">
       <iframe width="100%" height="1030" frameborder="0"
        src="https://observablehq.com/embed/@codedragon491/voronoi-stippling/4?cells=image"></iframe>
      </div>
      <div v-if="textShown" @mouseleave="toggleText" class="home-intro">
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
//import * as d3 from 'd3'
export default {
  head() {
    return {
      title: 'Home'
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
  props: {
    navbarHasMounted: Boolean
  },
  mounted() {
    if (this.navbarHasMounted === true) {
      let matrixTitle = $("#title").splitText({'type':'letters','animation':'matrix'})
      matrixTitle.animate()
      console.log("no timeout", this.navbarHasMounted)
    } else {
      console.log("in timeout", this.navbarHasMounted)

    let matrixTitle = $("#title").splitText({'type':'letters','animation':'matrix'})
    matrixTitle.animate()
    }
  },
  methods: {
    toggleText() {
      this.textShown = !this.textShown
    }
  }
}
</script>
<style lang="scss">
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
.home-intro {
  margin-top: 100px;
}
footer {
  display: none;
}
</style>






























