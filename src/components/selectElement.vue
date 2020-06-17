<template>
  <div class="select-element-wrap">
    <div class="select-element-main">
      <h2 class="select-element-title">为将要附魔的武器选择合适的技能组合</h2>
      <a-transfer
        class="select-skills-transfer"
        :data-source="skillData"
        :titles="['待选技能', '选定组合']"
        :target-keys="targetKeys"
        :selected-keys="selectedKeys"
        :render="item => item.title"
        :disabled="disabled"
        @change="handleChange"
        @selectChange="handleSelectChange"
        @scroll="handleScroll"
      />
      <div class="element-results">
        <h3>所需附魔元素</h3>
        <a-tag color="#2db7f5" v-for="element in selectedElement" :key="element">{{ element }}</a-tag>
      </div>
      <a-alert message="所选元素超出4槽位上限" type="warning" show-icon v-if="selectedElement.length>4"/>
    </div>
  </div>
</template>
<script>
import { options, flags, masks } from "../data.js";
const skills = Object.keys(masks);
export default {
  data() {
    const skillData = [];
    const selectedElement = [];
    for (let i = 0; i < skills.length; i++) {
      skillData.push({
        key: i.toString(),
        title: `${skills[i]}`,
        description: `${masks[skills[i]].description}`,
        disabled: false
      });
    }

    const oriTargetKeys = [];
    return {
      options,
      skillData,
      targetKeys: oriTargetKeys,
      selectedKeys: [],
      disabled: false,
      selectedElement
    };
  },
  methods: {
    handleChange(nextTargetKeys, direction, moveKeys) {
      this.targetKeys = nextTargetKeys;
      this.updateElementGroupResult();
    },
    handleSelectChange(sourceSelectedKeys, targetSelectedKeys) {
      this.selectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys];
    },
    handleScroll(direction, e) {},
    handleDisable(disabled) {
      this.disabled = disabled;
    },
    updateElementGroupResult() {
      let currentMask = this.targetKeys
        .map(i => masks[skills[i]].flag)
        .reduce((acc, cur) => acc | cur, 0);
      this.selectedElement = Object.keys(flags).filter(
        i => (flags[i] & currentMask) !== 0
      );
    }
  }
};
</script>
<style>
.select-element-wrap {
  background-image: url(https://i.loli.net/2020/06/17/kpbQgYo6FUNV2Sy.jpg);
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.select-element-main {
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
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 ); /* IE6-9 */
  padding: 20px;
  max-height: 80vh;
  max-width: 80vw;
  min-width: 80vw;
  overflow: auto;
}
.select-element-title {
  text-align: center;
  color: white;
}
.select-skills-transfer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.element-results {
  text-align: center;
  margin: 24px 0;
}
</style>
