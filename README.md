
<h3 align="center">vue-img-cards</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Image card component library for Vue
    <br> 
</p>

<img src="./portfolio.png"/>
## 📝 Table of Contents

- [📝 Table of Contents](#-table-of-contents)
- [🧐 About <a name = "about"></a>](#-about-)
- [Installing the library](#installing-the-library)
- [🏁 Components <a name = "getting_started"></a>](#-components-)
  - [vue-profile-Card](#vue-profile-card)
    - [Props](#props)
    - [Slot](#slot)
    - [Usage](#usage)
  - [vue-mini-bio](#vue-mini-bio)
    - [slots](#slots)
    - [Usage](#usage-1)
- [⛏️ Built Using <a name = "built_using"></a>](#️-built-using-)
 

## 🧐 About <a name = "about"></a>

This is a set of *Vue* Image card components for special purposes. Each components come with *props* and *slots* for easy customization. The CSS animation make it awesome, thanks to the developer community.

## Installing the library

 ````bash
 npm i --save @codehat/img-cards
 ````

## 🏁 Components <a name = "getting_started"></a>

 The library includes the following components

### vue-profile-Card

*VueProfileCard* is a CSS animated **Image Card** with background animation.

[Demo](http://bulma-vuejs-profile.vercel.app/)

#### Props

This component come with a single prop *img*, which can be used to pass a image url and an *alt* tag. This prop is an object.

```javascript
img: {
      type: Object,
      default: new Object({
        src:
          "./profile.png",
        alt: "images",
      }),
    },
```

#### Slot

The *slot details* can be used to _add set of social icons or single paragraph or heading of your choice.

````javascript
<template>
  <div id="app">
    <vue-profile-card >
     <template slot="details">
                  <h1 class="is-size-5">Web Developer</h1>
                  <span class="icon  ">
                <i>
                 <a :href="`${fb}`"> <v-icon name="md-facebook" scale="1.5" /></a>
                </i>
                <i>
                  <a :href="`${gh}`"> <v-icon name="oi-octoface" scale="1.5" /></a>
                </i>
                <i>
                  <a :href="`${tw}`"> <v-icon name="bi-twitter" scale="1.5"/></a>
                </i> <i>
                 <a :href="`${wp}`">  <v-icon name="fa-wordpress"  scale="1.5"/></a>
                </i></span>
      </template>
      </vue-profile-card>
  </div>
</template>
````

#### Usage

````javascript
<script>
import VueProfileCard from '@manojap/vue-profile-card'
export default {
  name: "App",
  components: {
    VueProfileCard
  },
};
</script>
````

### vue-mini-bio

*VueMiniBio* is a Image card with a Opening panel (hover effect) which can be used to show bio with social (customizable)

#### slots

*img* slot can be used to style the main image according to your needs and the *detail slot help to set the content

#### Usage

````javascript
<script>
import {vueMiniBio} from '@codehat/vue-img-cards';
import Vue from 'vue';

export default Vue.extend({
  components: { vueMiniBio },
  name: 'App',
});
</script>

<template>
  <div id="app">
    <vue-mini-bio/>
  </div>
</template>

````


## ⛏️ Built Using <a name = "built_using"></a>

- [VueJs](https://vuejs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
 