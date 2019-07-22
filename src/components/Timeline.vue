<template>
  <div class="timeline">
      <div v-for="(itemTimeline, itemIndex) in timelineItems" v-bind:key="timelineItems.from"></div>
  </div>
</template>

<script>
import TimelineItem from './TimelineItem.vue'

export default {
  name: "Timeline",
  components: { TimelineItem },
  props: {
    timelineItems: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
