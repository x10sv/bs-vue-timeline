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
        from: new Date(2014, 10),
        to: new Date(),
        title: "Microsoft Corporation",
        subtitle: "System Engineer",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Aliquet enim tortor at auctor urna nunc id cursus metus. Interdum varius sit amet mattis vulputate enim nulla aliquet. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Morbi enim nunc faucibus a pellentesque sit amet porttitor.",
        image: "microsoft.png"
      },
      {
        from: new Date(2009, 5),
        to: new Date(2013, 5),
        title: "Oracle Corporation",
        subtitle: "Programmer",
        content:
          "Volutpat blandit aliquam etiam erat velit. Est pellentesque elit ullamcorper dignissim cras tincidunt. Morbi non arcu risus quis varius quam quisque. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis.",
        image: "oracle.png"
      },
      {
        from: new Date(2000, 3),
        to: new Date(2008, 12),
        title: "Google LLC",
        subtitle: "Internship / Volunteer",
        content:
          "Proin fermentum leo vel orci porta non pulvinar neque. Enim neque volutpat ac tincidunt vitae semper quis. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Cursus turpis massa tincidunt dui ut ornare. Enim nunc faucibus a pellentesque. Erat imperdiet sed euismod nisi porta lorem mollis. Tristique senectus et netus et malesuada fames ac turpis egestas. Magnis dis parturient montes nascetur ridiculus mus mauris. Fusce id velit ut tortor pretium.",
        image: "google.png"
      }
    ]
  })
};
</script>
