<template>
  <div class='search-skill-wrap'>
    <div class='search-skill-main'>
      <h3>查询当前武器附魔元素技能</h3>
      <a-checkbox-group
        class='element-checkbox-group'
        v-model='value'
        name='checkboxgroup'
        :options='options'
      />
      <br>
      <a-list
        class='skill-results-list'
        item-layout='horizontal'
        :bordered='true'
        :data-source='skillResult'
      >
        <a-list-item slot='renderItem' slot-scope='item'>
          <a-list-item-meta :description='item.description'>
            <div slot='title'>{{item.Name+`(${item.group})`}}</div>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
import { options, flags, masks } from '../data';

export default {
  data() {
    return {
      options,
      value: [],
    };
  },
  computed: {
    skillResult: function skillResult() {
      const currentMask = this.value
        .map(i => flags[i])
        .reduce((acc, cur) => acc | cur, 0);
      const skillNames = Object.keys(masks).filter(key =>
        (masks[key].flag & currentMask) === masks[key].flag);

      return skillNames.map(Name => ({ Name, ...masks[Name] }));
    },
  },
};
</script>
<style>
.search-skill-wrap {
  text-align: center;
  font-size: 1.2rem;
  min-height: 100vh;
  background-image: url(https://i.loli.net/2020/06/17/eQkUKXsbNpZtDu9.jpg);
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.search-skill-main {
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.5) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.5) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.5) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff',
   endColorstr='#00ffffff',GradientType=0 ); /* IE6-9 */
  padding: 20px;
  height: 80vh;
  width: 80vw;
  overflow: auto;
  -ms-overflow-style: none;
}
.search-skill-main::-webkit-scrollbar {
  display: none;
}
.element-checkbox-group {
  margin-bottom: 24px;
}
.skill-results-list {
  overflow: auto;
}
</style>

