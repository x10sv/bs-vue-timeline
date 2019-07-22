<template>
  <div id="app">
    <Timeline :timeline-items="timelineItems"/>
  </div>
</template>

<script>
import Timeline from "./components/Timeline";

export default {
  name: "App",
  components: {
    Timeline
  },

  data: () => ({
    timelineItems: [
      {
        from: new Date(2014,10),
        to: new Date(),
        title: 'Microsoft',
        subtitle: 'System Engineer',
        content: 'lorem ipsum dolor sin amet',
        image: '../public/img/microsoft.png'
      },
        {
        from: new Date(2009,5),
        to: new Date(2014,10),
        title: 'Oracle',
        subtitle: 'Programmer',
        content: 'lorem ipsum dolor sin amet',
        image: '../public/img/oracle.png'
      },
      {
        from: new Date(2000,3),
        to: new Date(2008,12),
        title: 'Google Inc.',
        subtitle: 'Internship / Volunteer',
        content: 'lorem ipsum dolor sin amet',
        image: '../public/img/google.png'
      },
    ]
  })
};
</script>
