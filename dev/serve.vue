<script lang="ts">
import vueMiniBio from '@/lib-components/vue-mini-bio.vue';
import Vue from 'vue';

export default Vue.extend({
  components: { vueMiniBio },
  name: 'ServeDev',  
});
</script>

<template>
  <div id="app">
    <vue-profile-card />
    <vue-mini-bio/>
  </div>
</template>
