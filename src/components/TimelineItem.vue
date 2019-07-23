<template>
  <b-row no-gutters class="justify-content-md-around align-items-start timeline-nodes">
    <b-col
      col="10"
      sm="9"
      md="5"
      offset="3"
      offset-md="0"
      order="3"
      order-md="1"
      class="timeline-content"
    >
      <h3 class="text-light" v-html="itemTimeline.title"></h3>
      <h2 v-html="itemTimeline.subtitle"></h2>
      <p v-html="itemTimeline.content"></p>
    </b-col>
    <b-col
      col="1"
      sm="1"
      md="1"
      offset="1"
      offset-md="0"
      order="1"
      class="timeline-image text-md-center mx-md-4"
    >
      <img v-bind:src="'img/' + itemTimeline.image" class="img-fluid" :alt="itemTimeline.title">
    </b-col>
    <b-col
      col="10"
      sm="9"
      md="5"
      order="2"
      offset="1"
      offset-md="0"
      order-md="3"
      class="py-3 timeline-date"
    >
      {{ itemTimeline.from | FormatedDate }} - {{ itemTimeline.to | FormatedDate }}
      <time
        v-html="TimeDifference(itemTimeline.from, itemTimeline.to)"
      ></time>
    </b-col>
  </b-row>
</template>


<script>
import moment from "moment";

export default {
  name: "TimelineItem",
  props: {
    itemTimeline: {
      type: Object,
      default: () => ({})
    }
  },

  methods: {
    TimeDifference(from, to) {
      let formatedTime = '<span class="duration">';

      var yearsDiff = moment(to).diff(moment(from), "year");
      var monthsDiff = moment(to).diff(moment(from), "months") - yearsDiff * 12; //substract the full years as months

      let separator = "";

      if (yearsDiff > 0 && monthsDiff > 0) {
        separator = ", ";
      }

      // Show years only if the duration is over one year and handle the pluralisation
      if (yearsDiff === 1) {
        formatedTime = formatedTime + " 1 year";
      } else if (yearsDiff > 1) {
        formatedTime = formatedTime + yearsDiff + " years";
      }

      // Show months only if the months are over 1 and handle the pluralisation
      if (monthsDiff === 1) {
        formatedTime = formatedTime + separator + "1 month";
      } else if (monthsDiff > 1) {
        formatedTime = formatedTime + separator + monthsDiff + " months";
      }

      formatedTime = formatedTime + "</span>";

      return formatedTime;
    }
  },

  filters: {
    FormatedDate: function(InputDate) {
      let momentDate = moment(InputDate);

      if (moment().isSame(momentDate, "month")) {
        return "Present time";
      } else {
        return momentDate.format("MM YYYY");
      }
    }
  }
};
</script>
