<template>
  <nuxt-link :to="'/work/' + work.id">
    <div class="-shadow">
      <span class="eyebrow"> @{{ work.time }} on {{ parsedDate }} </span>
      <h4 class="title">
        {{ work.title }}
      </h4>
      <span>{{ work.description }} attending</span>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  name: 'WorkCard',
  props: {
    work: Object
  },
  computed: {
    parsedDate() {
      const workDate = new Date(this.work.date)
      return workDate.toDateString()
    }
  }
}
</script>
<style scoped>
div {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
div:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.title {
  margin: 0;
  color: black;
}
a {
  text-decoration: none;
}
</style>
