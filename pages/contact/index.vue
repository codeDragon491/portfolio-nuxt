<template>
  <div class="page">
    <h1 id="title">Want to say hello? Get in touch here</h1>
    <transition name="fade" mode="out-in">
      <div v-if="!textShown" key="1" class="home-intro" @mouseover="toggleText">
        <img
          class="contact-me"
          alt="contact-me"
          src="~/assets/img/contact.jpeg"
        />
      </div>
      <div v-else key="2" class="home-intro" @mouseleave="toggleText">
       <div class="socials">
        <div class="social square">
          <img class="social-image" src="@/assets/img/phone.svg" alt="phone" />
          <a href="tel:+45 93606269">+45 93606269</a>
        </div>
        <div class="social square">
          <img class="social-image" src="@/assets/img/at.svg" alt="at" />
          <a href="mailto:trefasjulia@gmail.com">trefasjulia@gmail.com</a>
        </div>
        <div class="social square">
          <img class="social-image" src="@/assets/img/instagram.svg" alt="at" />
          <a href="https://www.instagram.com/juliatrefas/">Follow me</a>
        </div>
        <div class="social square">
          <img class="social-image" src="@/assets/img/linkedin.svg" alt="at" />
          <a href="https://www.linkedin.com/in/juliatrefas/">Connect</a>
        </div>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    navbarHasMounted: Boolean
  },
  data() {
    return {
      textShown: false
    }
  },
  mounted() {
    if (this.navbarHasMounted === true) {
      const matrixTitle = $('#title').splitText({
        type: 'letters',
        animation: 'matrix'
      })
      matrixTitle.animate()
      // console.log("no timeout", this.navbarHasMounted)
    } else {
      // console.log("in timeout", this.navbarHasMounted)

      const matrixTitle = $('#title').splitText({
        type: 'letters',
        animation: 'matrix'
      })
      matrixTitle.animate()
    }
    // animate intro image
    const controller = new this.$ScrollMagic.Controller()

    const resumeTl = new this.$GSAP.TimelineLite()

    resumeTl.from(
      '.contact-me',
      1.5,
      {
        opacity: 0,
        y: 50,
        ease: 'power1'
      },
      '-=1.5'
    )
    const resumeScene = new this.$ScrollMagic.Scene({
    duration: 0,
    offset: 0,
    })
    .setTween(resumeTl)
    .addTo(controller)
  },
  head() {
    return {
      title: 'Contact'
    }
  },
  methods: {
    toggleText() {
      this.textShown = !this.textShown
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/abstracts/variables.scss';
/***** pages *****/
h1#title {
  color: black;
  opacity: 0;
}
h1.isSplit {
  display: none;
  .letter-measure {
    color: black !important;
  }
  opacity: 1;
}
.home-intro {
  width: -webkit-fill-available;
  display: flex;
  justify-content: center;
  img {
    max-width: 100%;
  }
}
.home-intro p {
  font-size: 1.25em;
}
.socials {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
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
@media screen and (min-width: 1024px) {
  .socials {
    margin: 50px 0 0;
  }
}
.social {
  @extend .socials;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 25%;
}
.social-image {
  width: 25%;
}
.square {
  //margin: 100px;
  height: $square-size;
  width: $square-size;
  &:hover {
    animation: snake 0.4s linear 1 forwards;
  }
}
@keyframes snake {
  0% {
    box-shadow:
    square(0,-1),
    square(-1,0),
    square(0,1),
    square(1,0),
    square(0,0,black);
  }
  25% {
    box-shadow:
    square(-1 - $fraction,-1),
    square(-1,0),
    square(0,1),
    square(1,0),
    square(0,0,black);
  }
  50% {
    box-shadow:
    square(-1 - $fraction,-1),
    square(-1,1 + $fraction),
    square(0,1),
    square(1,0),
    square(0,0,black);
  }
  75% {
    box-shadow:
    square(-1 - $fraction,-1),
    square(-1,1 + $fraction),
    square(1 + $fraction,1),
    square(1,0),
    square(0,0,black);
  }
  100% {
    box-shadow:
    square(-1 - $fraction,-1),
    square(-1,1 + $fraction),
    square(1 + $fraction,1),
    square(1,-1 - $fraction),
    square(0,0,black);
  }
}

</style>
