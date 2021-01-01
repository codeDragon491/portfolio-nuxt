<template>
  <div class="#">
    <header class="work-header">
      <h3 id="title">{{work.title}}</h3>
      <h1 id="headline">{{work.headline}}</h1>
      <p id="description">{{work.description}}</p>
      <Arrow/>
      <div :style="backgroundImage" class="work-cover"></div>
    </header>
    <main>
      <section class="work-section">
        <h2>Assignmnent</h2>
        <p>{{work.assignment}}</p>
      </section>
       <section class="work-section">
        <h2>Assignmnent</h2>
        <p>{{work.assignment}}</p>
      </section>
       <section class="work-section">
        <h2>Assignmnent</h2>
        <p>{{work.assignment}}</p>
      </section>
       <section class="work-section">
        <h2>Assignmnent</h2>
        <p>{{work.assignment}}</p>
      </section>
      <section id="last-work-section" class="work-section">
        <h2>Solution</h2>
        <p>{{work.result}}</p>
      </section>
       <section id="summary-work-section" class="work-section">
         <div class="summary-line">
          <h3>SOLUTION</h3>
          <p>{{work.solution}}</p>
        </div>
        <hr>
         <div class="summary-line">
          <h3>SKILLS</h3>
          <p v-html="work.skills"></p>
        </div>
        <hr>
        <div class="summary-line">
          <h3>TECH</h3>
          <p>{{work.tech}}</p>
        </div>
        <hr>
        <div class="summary-line">
          <h3>YEAR</h3>
          <p>{{work.year}}</p>
        </div>
        <hr>
         <div class="summary-line">
          <h3>LINK</h3>
          <p><a :href="work.href">see the solution here</a></p>
        </div>
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
  },
  mounted () {
    let controller = new this.$ScrollMagic.Controller()
    // all gsap scenes
    let workSectionTl1 = new this.$GSAP.TimelineLite()
    let workSectionTl2 = new this.$GSAP.TimelineLite()
    let workSectionTl3 = new this.$GSAP.TimelineLite()
    let textTl = new this.$GSAP.TimelineLite()

    //  all gsap animations
    let main = 'main'
    workSectionTl1.to(main, 0.5, {
      backgroundColor: 'white',
      color: 'black',
      ease: 'power1'
    })

    workSectionTl2.to(main, 0.5, {
      backgroundColor: 'white',
      color: 'black',
      ease: 'power1',
    })

      workSectionTl3.to(main, 0.5, {
      backgroundColor: 'black',
      color: 'white',
      ease: 'power1'
    })

    textTl.to('#description', 1.5, {
      opacity: 1,
      ease: 'power1'
    }, 1.5)
    .from('#description', 0.5, {
      y: 50,
      ease: 'power1'
    }, 1.5, '-=1.5')
    .to('#headline', 1.5, {
      opacity: 1,
      ease: 'power1'
    }, 1)
    .from('#headline', 0.5, {
      y: 50,
      ease: 'power1'
    }, 1, '-=1.5')

    // all scene definitons
    // animate body when scroll to work sections
    let workSectionScene1 = new this.$ScrollMagic.Scene({
      duration: 0,
      offset: 500,
      //triggerElement: '#trigger',
      //triggerHook: 0
    })
      .setTween(workSectionTl1)
      //.addIndicators()
      .addTo(controller)
      .reverse(false)

    let workSectionScene2 = new this.$ScrollMagic.Scene({
      duration: 0,
      offset: 500,
    })
   .setTween(workSectionTl2)
   .addTo(controller)

   let workSectionScene3 = new this.$ScrollMagic.Scene({
      duration: 0,
      triggerElement: "#summary-work-section",
      triggerHook: 1,
    })
   .setTween(workSectionTl3)
   .addTo(controller)

  //animate texts on the page
    let matrixTitle = $("#title").splitText({'type':'letters','animation':'matrix'})
    matrixTitle.animate()

  /*this.$GSAP.TweenMax.delayedCall(1, function() {
		matrixTitle.animate();
  });*/

  let textScene = new this.$ScrollMagic.Scene({
    duration: 0,
    offset: 0,
  })
  .setTween(textTl)
  .addTo(controller)
}
}
</script>
<style lang="scss">
main {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  background-color:black;
  color:white;
}
.work-header {
  margin-top: 150px;
  height: calc(100vh - 150px);
  color: white;
  h3#title {
  opacity: 0;
  margin: 0 0 1.5rem 0;
  }
  h3.isSplit {
  opacity: 1;
  margin: 0 0 3.5rem 0;
  }
  h1 {
  opacity: 0;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  font-size: 10vw;
  line-height: 10vw;
  }
  p {
  opacity: 0;
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
    right: 0;
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
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, #313131, #090909);
    mix-blend-mode: hard-light;
    opacity: 0.5;
    z-index: 10;
}
.summary-line{
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    text-align: right;
  }
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
@media only screen and (min-width: 1920px){
  .work-header {
    height: calc(100vh - 250px);
    margin: 250px auto 0;
      p {
        max-width: 65ch;
      }
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
#summary-work-section {
  padding: 0 165px;
  p {
    font-size: 1.5rem;
    text-transform: uppercase;
    width: auto;
    margin: 0;
    a {
      color: white;
    }
  }
}
</style>
