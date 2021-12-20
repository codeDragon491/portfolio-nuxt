<template>
  <div class="page">
    <h1 id="title">Hello! This is Simple Studio.</h1>
    <transition name="fade" mode="out-in">
      <div v-if="!textShown" key="1" @mouseover="toggleText" class="home-intro">
        <img class="julia-voronoi-stippling" alt="julia-voronoi-stippling" src="~/assets/img/julia-voronoi-stippling.png">
      </div>
      <div v-else key="2" @mouseleave="toggleText" class="home-intro">
        <p>
          I am a versatile frontend developer with a design sense who enjoys working with many different aspects of frontend development,
          such as the UI and App layer, performance optimization, responsive design, cross-browser compatibility, animations, and overall
          is passionate about problem-solving while bringing designs to life or turning business requirements into excellent technical solutions. 
          <br><br>
          I have worked with most of the popular Javascript frameworks but my favorite is Vue.
          <br><br>
          I strive for quality and maintainability in the work I do, and I am the kind of developer that cares greatly about delivering a result that respects the intentions of a design team.
          <br><br>
          Eventually, I am very enthusiastic about frontend development and always looking to progress.
        </p>
      </div>
    </transition>
  </div>
</template>
<script>
/* import {Runtime, Inspector} from "@observablehq/runtime";
import define from 'https://api.observablehq.com/d/6c38a28793cfac80@400.tgz?v=3'
new Runtime().module(define, (name) => {
  if (name === 'script')
    return Inspector.into('#observablehq-786759ef .observablehq-script')()
  if (name === 'data')
    return Inspector.into('#observablehq-786759ef .observablehq-data')()
  if (name === 'n')
    return Inspector.into('#observablehq-786759ef .observablehq-n')()
  if (name === 'height')
    return Inspector.into('#observablehq-786759ef .observablehq-height')()
}) */
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
      // console.log("no timeout", this.navbarHasMounted)
    } else {
      // console.log("in timeout", this.navbarHasMounted)

    let matrixTitle = $("#title").splitText({'type':'letters','animation':'matrix'})
    matrixTitle.animate()
    }
     // animate intro image
    let controller = new this.$ScrollMagic.Controller()

    let resumeTl = new this.$GSAP.TimelineLite()

    resumeTl.from('.julia-voronoi-stippling', 1.5, {
      opacity: 0,
      y: 50,
      ease: 'power1'
    }, '-=1.5')
    let resumeScene = new this.$ScrollMagic.Scene({
    duration: 0,
    offset: 0,
    })
    .setTween(resumeTl)
    .addTo(controller)
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
  display: none;
  .letter-measure{
    color: black !important;
  }
  opacity: 1;
}
.home-intro p {
  font-size: 1.25em;
}
@media screen and (min-width: 768px) {
  .home-intro {
    margin-top: 100px;
  }
  h1.isSplit {
    display: flex;
  }
  .home-intro p {
    font-size: 1.5em;
  }
}
</style>






























