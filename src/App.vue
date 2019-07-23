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
        title: 'Microsoft Corporation',
        subtitle: 'System Engineer',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Aliquet enim tortor at auctor urna nunc id cursus metus. Interdum varius sit amet mattis vulputate enim nulla aliquet. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Morbi enim nunc faucibus a pellentesque sit amet porttitor.',
        image: 'microsoft.png'
      },
        {
        from: new Date(2009,5),
        to: new Date(2013,5),
        title: 'Oracle Corporation',
        subtitle: 'Programmer',
        content: 'Volutpat blandit aliquam etiam erat velit. Est pellentesque elit ullamcorper dignissim cras tincidunt. Morbi non arcu risus quis varius quam quisque. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis.',
        image: 'oracle.png'
      },
      {
        from: new Date(2000,3),
        to: new Date(2008,12),
        title: 'Google LLC',
        subtitle: 'Internship / Volunteer',
        content: 'Proin fermentum leo vel orci porta non pulvinar neque. Enim neque volutpat ac tincidunt vitae semper quis. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Cursus turpis massa tincidunt dui ut ornare. Enim nunc faucibus a pellentesque. Erat imperdiet sed euismod nisi porta lorem mollis. Tristique senectus et netus et malesuada fames ac turpis egestas. Magnis dis parturient montes nascetur ridiculus mus mauris. Fusce id velit ut tortor pretium.',
        image: 'google.png'
      },
    ]
  })
};
</script>



<style>
  :root {
    --blue:#0288d1;
    --box-shadow1:0px 0px 10px 2px rgba(90, 90, 90, 0.15);
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
  .timeline h3, .timeline p {
      padding: 5px 15px;
  } 
  .timeline h3{
      font-weight: lighter;
      background: var(--blue);
  }

  .timeline h2 {
    padding: 5px;
    font-size: 1em;
    background-color: #eee;
    margin-top: -8px;
}

  .timeline p, .timeline time {
      color: var(--blue)
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
      box-shadow: 0px 3px 25px 0px rgba(10, 55, 90, 0.2)
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
      transform: translate(-50%,-50%);
      background-color: #fff;
      z-index: 1;
      

  }
  .timeline-image img {
      position: relative;
      z-index: 100;
      width:90px;
      height:auto;
  }

    /*small device style*/

  @media (max-width: 767px) {
      .timeline-nodes:nth-child(odd) h3,
      .timeline-nodes:nth-child(odd) h2,
      .timeline-nodes:nth-child(odd) p {
      text-align: left
  }
  .timeline-nodes:nth-child(even) {
      flex-direction: row;
  }
      .timeline::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 4%;
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
      position: absolute;
      left: 0%;
      top: 60px;
      /*transform: translateX(-50%;);*/
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
  .timeline-image::before {
      width: 65px;
      height: 65px;
  }

   .timeline-image img {
      width:55px;
  }
  }

  /*extra small device style */
  @media (max-width: 575px) {
        .timeline::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 3%;
    }
    .timeline-image {
        position: absolute;
        left: -5%;
        }
    .timeline-image::before {
        width: 60px;
        height: 60px;
    }
  }



  span.duration {
    margin-left:10px;
    color: var(--blue);
    font-style: italic;
}

</style>