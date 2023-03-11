<template>
  <div class="container-fluid">
    <div class="timeline">
      <slot>
        <TimelineItem
          v-for="(itemTimeline, timelineIndex) in timelineItems"
          :key="timelineIndex"
          :item-timeline="itemTimeline"
          :separator="separator"
          :customClass="individualClasses ? 'bvt-cust-' + (timelineIndex + 1) : ''"
        />
      </slot>
    </div>
  </div>
</template>

<script>
import TimelineItem from "./TimelineItem.vue";
import cssVars from "css-vars-ponyfill";

export default {
  name: "VueTimeline",
  components: { TimelineItem },
  props: {
    separator: {
      type: String,
      default: ", "
    },
    individualClasses: {
      type: Boolean,
      default: false
    },
    customClass: String,
    timelineItems: {
      type: Array,
      default: () => []
    }
  }
};

cssVars({});
</script>

<style>
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
  background: var(--bvt-primary-color, #0288d1);
}

.timeline h2 {
  padding: 5px 15px;
  font-size: 1em;
  background-color: var(--bvt-bg-secondary, #ddd);
  margin-top: -8px;
}

.timeline p,
.timeline time {
  color: var(--bvt-timeline-text-color, #333);
}
.timeline::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
  width: 0;
  border-left: 1px solid var(--bvt-timeline-color, #aaa);
  height: 100%;
  z-index: 1;
  transform: translateX(-50%);
}
.timeline-content {
  background-color: #fff;
  border: 1px solid var(--bvt-border-color, #aaa);
  position: relative;
  border-radius: 0 0 10px 10px;
  box-shadow: var(
    --bvt-box-shadow1,
    0 1px 6px rgba(0, 0, 0, 0.12),
    0 1px 4px rgba(0, 0, 0, 0.24)
  );
}
.timeline-date {
  padding: 5px 15px !important;
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
  border-left: 10px solid var(--bvt-primary-color, #0288d1);
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}
.timeline-nodes:nth-child(even) .timeline-content::after {
  content: "";
  position: absolute;
  top: 5%;
  right: 100%;
  width: 0;
  border-right: 10px solid var(--bvt-primary-color, #0288d1);
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
  border: 1px solid var(--bvt-timeline-color, #aaa);
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
  width: 80px;
  max-height: 80px;
  height: auto;
  object-fit: contain;
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
    border-left: 1px solid var(--bvt-timeline-color, #aaa);
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

  .timeline-image::before {
    width: 80px;
    height: 80px;
  }
  .timeline-image img {
    width: 60px;
    max-height: 60px;
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
    border-right: 10px solid var(--bvt-primary-color, #0288d1);
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
  .timeline-nodes:nth-child(even) .timeline-content::after {
    content: "";
    position: absolute;
    top: 5%;
    right: 100%;
    width: 0;
    border-right: 10px solid var(--bvt-primary-color, #0288d1);
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
  .timeline-nodes:nth-child(even) .timeline-date {
    text-align: left;
  }
}

span.duration {
  margin-left: 10px;
  color: var(--bvt-duration-color, #0288d1);
  font-style: italic;
}
</style>
