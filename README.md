# vue-bootstrap-timeline

[![GitHub issues](https://img.shields.io/github/issues/AngelinCalu/vue-bootstrap-timeline.svg?style=flat-square)](https://github.com/AngelinCalu/vue-bootstrap-timeline/issues) [![GitHub license](https://img.shields.io/github/license/AngelinCalu/vue-bootstrap-timeline.svg?style=flat-square)](https://github.com/AngelinCalu/vue-bootstrap-timeline/blob/master/LICENSE)

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Contributing](#contributing)
- [License](#license)

## General info

This is a simple timeline alternative build using `vue`, `boostrap-vue` and `moment.js`

### Future Plans:

**Before initial release**

- Make it usable in other projects using `npm` and `yarn`
- Fix image size on smaller devices,
- Customize the location of the images,

**Later on**

- Create separator between sections in timeline (for example workplaces and studies),
- Make duration separator between years and months a prop,
- Make colors configurable,
- Make it possible to use SVGs instead of images.

## Technologies

This project was made with:

| Project         | Status                                           | Documentation                 |
| --------------- | ------------------------------------------------ | ----------------------------- |
| [vue]           | [![vue-status]][vue-package]                     | https://vuejs.org/            |
| [bootstrap-vue] | [![bootstrap-vue-status]][bootstrap-vue-package] | https://bootstrap-vue.js.org/ |
| [moment]        | [![moment-status]][moment-package]               | https://momentjs.com/         |

[vue]: https://github.com/vuejs/vue
[bootstrap-vue]: https://github.com/bootstrap-vue/bootstrap-vue
[moment]: https://github.com/moment/moment
[vue-status]: https://img.shields.io/npm/v/vue.svg
[bootstrap-vue-status]: https://img.shields.io/npm/v/bootstrap-vue.svg
[moment-status]: https://img.shields.io/npm/v/moment.svg
[vue-package]: https://npmjs.com/package/vue
[bootstrap-vue-package]: https://npmjs.com/package/bootstrap-vue
[moment-package]: https://npmjs.com/package/moment

## Demo

You could check [Demo](https://codesandbox.io/s/github/AngelinCalu/vue-bootstrap-timeline) in a codesandbox.

## Installation

**This is not yet implemented!**

```bash
npm install vue-bootstrap-timeline --save
```

or

```bash
yarn add vue-bootstrap-timeline
```

## Usage

In your `.vue` component:

```javascript
<script>
  import Timeline from 'vue-bootstrap-timeline'

  export default {
    // ...
    components: {
      Timeline
    }
    // ...
  data: () => ({
    timelineItems: [
      {
        from: new Date(2014,10),
        to: new Date(),
        title: 'Company Name 1',
        subtitle: 'System Engineer',
        content: 'lorem ipsum dolor sin amet',
        image: 'company1-logo.png'
      },
        {
        from: new Date(2009,5),
        to: new Date(2013,5),
        title: 'Company Name 2',
        subtitle: 'Programmer',
        content: 'lorem ipsum dolor sin amet',
        image: 'company2-logo.png'
      },
      {
        from: new Date(2000,3),
        to: new Date(2008,12),
        title: 'Company Name 3',
        subtitle: 'Internship / Volunteer',
        content: 'lorem ipsum dolor sin amet',
        image: 'company3-logo.png'
      },
    ]
  })
};
</script>
```

then, in your `<template>`:

```javascript
<Timeline :timeline-items="timelineItems"/>
```

## Props

**Soon!**

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to test changes appropriately.

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2019-present, Angelin Calu
