<template>
  <div class='root'>
    <search-skill></search-skill>
    <select-element></select-element>
  </div>
</template>

<script>
import searchSkill from './components/searchSkill';
import selectElement from './components/selectElement';

export default {
  components: {
    searchSkill,
    selectElement,
  },
};
</script>

<style>
.root {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}
</style>
