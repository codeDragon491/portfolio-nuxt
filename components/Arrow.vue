<template>
    <div class="arrow">
        <span></span>
        <span></span>
        <span></span> 
    </div>
</template>
<script>
export default {
  name: 'Arrow'
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