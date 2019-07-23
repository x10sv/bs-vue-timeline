<template>
  <b-row no-gutters class="justify-content-end justify-content-md-around align-items-start timeline-nodes">
    <b-col col="10" md="5" order="3" order-md="1" class="timeline-content">
      <h3 class="text-light" v-html="itemTimeline.title"></h3>
      <h2 class="text-light" v-html="itemTimeline.subtitle"></h2>
      <p v-html="itemTimeline.content"></p>
    </b-col>
    <b-col col="2" sm="1" order="2" class="px-md-3 timeline-image text-md-center">
      <img v-bind:src="'img/' + itemTimeline.image" class="img-fluid" :alt="itemTimeline.title">
    </b-col>
    <b-col col="10" md="5" order="1" order-md="3" class="py-3 timeline-date">
      <time v-html="itemTimeline.formatedTime"></time>
    </b-col>
  </b-row>
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
