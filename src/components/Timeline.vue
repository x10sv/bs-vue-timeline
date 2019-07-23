<template>
  <div class="container-fluid">
    <div class="timeline">
      <TimelineItem
        v-for="(itemTimeline, timelineIndex) in timelineItems"
        :key="timelineIndex"
        :item-timeline="itemTimeline"
      />
    </div>
  </div>
</template>

<script>
import TimelineItem from "./TimelineItem.vue";

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

<style>
:root {
  --blue: #0288d1;
  --box-shadow1: 0px 0px 10px 2px rgba(90, 90, 90, 0.15);
}

.timeline {
  padding: 50px 0;
  position: relative;
}
.timeline-nodes {
  padding-bottom: 25px;
  position: relative;
}
.timeline-nodes:nth-child(even) {
  flex-direction: row-reverse;
}
.timeline h3,
.timeline p {
  padding: 5px 15px;
}
.timeline h3 {
  font-weight: lighter;
  background: var(--blue);
}

.timeline h2 {
  padding: 5px;
  font-size: 1em;
  background-color: #eee;
  margin-top: -8px;
}

.timeline p,
.timeline time {
  color: var(--blue);
}
.timeline::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
  width: 0;
  border-left: 1px solid var(--blue);
  height: 100%;
  z-index: 1;
  transform: translateX(-50%);
}
.timeline-content {
  border: 1px solid var(--blue);
  position: relative;
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 3px 5px 0px rgba(10, 55, 90, 0.2);
}
.timeline-nodes:nth-child(odd) h3,
.timeline-nodes:nth-child(odd) h2,
.timeline-nodes:nth-child(odd) p {
  text-align: right;
}
.timeline-nodes:nth-child(odd) .timeline-date {
  text-align: left;
}

.timeline-nodes:nth-child(even) .timeline-date {
  text-align: right;
}
.timeline-nodes:nth-child(odd) .timeline-content::after {
  content: "";
  position: absolute;
  top: 5%;
  left: 100%;
  width: 0;
  border-left: 10px solid var(--blue);
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}
.timeline-nodes:nth-child(even) .timeline-content::after {
  content: "";
  position: absolute;
  top: 5%;
  right: 100%;
  width: 0;
  border-right: 10px solid var(--blue);
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}
.timeline-image {
  position: relative;
  z-index: 100;
}
.timeline-image::before {
  content: "";
  width: 100px;
  height: 100px;
  border: 1px solid var(--blue);
  border-radius: 50%;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 1;
}
.timeline-image img {
  position: relative;
  z-index: 100;
  width: 90px;
  height: auto;
}

/*small device style*/

@media (max-width: 767px) {
  .timeline-nodes:nth-child(odd) h3,
  .timeline-nodes:nth-child(odd) h2,
  .timeline-nodes:nth-child(odd) p {
    text-align: left;
  }
  .timeline-nodes:nth-child(even) {
    flex-direction: row;
  }
  .timeline::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 8.333333%;
    width: 0;
    border-left: 1px solid var(--blue);
    height: 100%;
    z-index: 1;
    transform: translateX(-50%);
  }
  .timeline h3 {
    font-size: 1.7rem;
  }
  .timeline p {
    font-size: 14px;
  }
  .timeline-image {
    position: relative;
    left: -4.333333%;
    top: 60px;
  }
  .timeline-nodes:nth-child(odd) .timeline-content::after {
    content: "";
    position: absolute;
    top: 5%;
    left: auto;
    right: 100%;
    width: 0;
    border-left: 0;
    border-right: 10px solid var(--blue);
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
  .timeline-nodes:nth-child(even) .timeline-content::after {
    content: "";
    position: absolute;
    top: 5%;
    right: 100%;
    width: 0;
    border-right: 10px solid var(--blue);
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
  .timeline-nodes:nth-child(even) .timeline-date {
    text-align: left;
  }
}

span.duration {
  margin-left: 10px;
  color: var(--blue);
  font-style: italic;
}
</style>