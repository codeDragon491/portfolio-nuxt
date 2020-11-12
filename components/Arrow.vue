<template>
    <div class="arrow">
        <span></span>
        <span></span>
        <span></span> 
    </div>
</template>
<script>
export default {
  name: 'Arrow',
    mounted (){
    let controller = new this.$ScrollMagic.Controller()
    let arrowTl1 = new this.$GSAP.TimelineLite()
    let arrow = '.arrow'
    arrowTl1.to(arrow, 0.5, {
      opacity: 0,
      ease: 'power1'
    })

    let arrowScene1 = new this.$ScrollMagic.Scene({
      duration: 0,
      offset: 150
      //triggerElement: '#trigger',
      //triggerHook: 0
    })
      .setTween(arrowTl1)
      //.addIndicators()
      .addTo(controller)
  },
}

</script>
<style scoped>
.arrow {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.arrow span{
    display: block;
    width: 15px;
    height: 15px;
    border-bottom: 5px solid #ffffff;
    border-right: 5px solid #ffffff;
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 2s infinite;
}
.arrow span:nth-child(2){
    animation-delay: -0.2s;
}
.arrow span:nth-child(3){
    animation-delay: -0.4s;
}
@keyframes animate {
    0%{
        opacity: 0;
        transform: rotate(45deg) translate(-20px,-20px);
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform: rotate(45deg) translate(20px,20px);
    }
}
</style>