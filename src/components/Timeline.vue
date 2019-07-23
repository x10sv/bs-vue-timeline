<template>
  <div class="timeline">
        <TimelineItem v-for="(itemTimeline, timelineIndex) in timelineItems" :key="timelineIndex" :item-timeline="itemTimeline"/>
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
