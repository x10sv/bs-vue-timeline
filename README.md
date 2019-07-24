# bs-vue-timeline

[![GitHub issues](https://img.shields.io/github/issues/AngelinCalu/bs-vue-timeline.svg?style=flat-square)](https://github.com/AngelinCalu/bs-vue-timeline/issues) [![GitHub license](https://img.shields.io/github/license/AngelinCalu/bs-vue-timeline.svg?style=flat-square)](https://github.com/AngelinCalu/bs-vue-timeline/blob/master/LICENSE)

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Known Issues](#known-issues)
- [Contributing](#contributing)
- [License](#license)

## General info

This is a simple timeline alternative build using `vue`, `boostrap-vue` and `moment.js`

### Future Plans:

- Customize the location of the images,
- Create separator between sections in timeline (for example workplaces and studies),
- Make duration separator between years and months a prop,
- Make colors configurable,
- Make it possible to use SVGs instead of images.

## Technologies

This project was made with:

| Project             | Status                                                   | Documentation                                      |
| ------------------- | -------------------------------------------------------- | -------------------------------------------------- |
| [vue]               | [![vue-status]][vue-package]                             | https://vuejs.org/                                 |
| [bootstrap-vue]     | [![bootstrap-vue-status]][bootstrap-vue-package]         | https://bootstrap-vue.js.org/                      |
| [moment]            | [![moment-status]][moment-package]                       | https://momentjs.com/                              |
| [css-vars-ponyfill] | [![css-vars-ponyfill-status]][css-vars-ponyfill-package] | https://jhildenbiddle.github.io/css-vars-ponyfill/ |

[vue]: https://github.com/vuejs/vue
[bootstrap-vue]: https://github.com/bootstrap-vue/bootstrap-vue
[moment]: https://github.com/moment/moment
[css-vars-ponyfill]: https://github.com/jhildenbiddle/css-vars-ponyfill
[vue-status]: https://img.shields.io/npm/v/vue.svg
[bootstrap-vue-status]: https://img.shields.io/npm/v/bootstrap-vue.svg
[moment-status]: https://img.shields.io/npm/v/moment.svg
[css-vars-ponyfill-status]: https://img.shields.io/npm/v/css-vars-ponyfill.svg
[vue-package]: https://npmjs.com/package/vue
[bootstrap-vue-package]: https://npmjs.com/package/bootstrap-vue
[moment-package]: https://npmjs.com/package/moment
[css-vars-ponyfill-package]: https://www.npmjs.com/package/css-vars-ponyfill

## Demo

You can see it in action [here](https://1fppb.codesandbox.io/).
You could check [here](https://codesandbox.io/s/github/AngelinCalu/bs-vue-timeline-demo) how the Demo was implemented in the codesandbox.

## Installation

```bash
npm i bs-vue-timeline --save
```

or

```bash
yarn add bs-vue-timeline
```

## Usage

In your `.vue` component:

```javascript
<script>
  import VueTimeline from 'bs-vue-timeline'

  export default {
    // ...
    components: {
      VueTimeline
    }
    // ...
  data: () => ({
    timelineItems: [
      {
        from: new Date(2014,10),
        to: new Date(),
        title: 'Company Name 1',
        subtitle: 'System Engineer',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'company1-logo.png'
      },
        {
        from: new Date(2009,5),
        to: new Date(2013,5),
        title: 'Company Name 2',
        subtitle: 'Programmer',
        content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        image: 'company2-logo.png'
      },
      {
        from: new Date(2000,3),
        to: new Date(2008,12),
        title: 'Company Name 3',
        subtitle: 'Internship / Volunteer',
        content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'company3-logo.png'
      },
    ]
  })
};
</script>
```

then, in your `<template>`:

```javascript
<VueTimeline :timeline-items="timelineItems"/>
```

To customize the colors you have available, at this moment, the following properties which could be overwritten like in the example below:

```html
<style>
  :root {
    --bvt-primary-color: #0288d1;
    --bvt-bg-secondary: #ddd;
    --bvt-timeline-color: #aaa;
    --bvt-timeline-text-color: #333;
    --bvt-border-color: var(--bvt-timeline-color);
    --bvt-duration-color: var(--bvt-primary-color);
    --bvt-box-shadow1: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
  }
</style>
```

## Props

**Soon!**

## Known issues

- Compatibility accross browsers was not checked!

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to test changes appropriately.

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2019-present, Angelin Calu
