<template>
  <div class="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
    <div class="col-10 col-md-5 order-3 order-md-1 timeline-content">
      <h3 class=" text-light" v-html="itemTimeline.title"></h3>
      <h2 class=" text-light" v-html="itemTimeline.subtitle"></h2>
      <p v-html="itemTimeline.content"></p>
    </div>
    <div class="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
      <img :src="itemTimeline.image" class="img-fluid" alt="img">
    </div>
    <div class="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
      <time v-html="item.formatedTime"></time>
    </div>
  </div>
</template>


<script>
import moment from 'moment';

export default {

  name: 'TimelineItem',
  props: {
    itemTimeline: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    formatedTime() {

      let start = moment(this.itemTimeline.to);
      let end = moment(this.itemTimeline.from);

      var years = start.diff(end, 'year');
      var months = start.diff(end, 'months');


      return years + "year(s) " + months + " month(s)";
    }
  }
}

</script>
