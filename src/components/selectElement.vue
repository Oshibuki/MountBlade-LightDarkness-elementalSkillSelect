<template>
  <div class="select-element-wrap">
    <div class="select-element-main">
      <h1 class="select-element-title">为将要附魔的武器选择合适的技能组合</h1>
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
      />
      <div class="element-results">
        <h1 class="element-results-title">所需附魔元素</h1>
        <a-tag color="#2db7f5" v-for="element in selectedElement" :key="element">{{ element }}</a-tag>
      </div>
      <a-alert message="所选元素超出4槽位上限" type="warning" show-icon v-if="selectedElement.length>4"/>
    </div>
  </div>
</template>
<script>
import { options, flags, masks } from "../data";
import Vue from "vue";

const skills = Object.keys(masks);
export default {
  data() {
    const skillData = [];
    const selectedElement = [];
    for (let i = 0; i < skills.length; i += 1) {
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
    handleChange(nextTargetKeys) {
      this.targetKeys = nextTargetKeys;
      this.updateElementGroupResult();
    },
    handleSelectChange(sourceSelectedKeys, targetSelectedKeys) {
      this.selectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys];
    },
    handleDisable(disabled) {
      this.disabled = disabled;
    },
    updateElementGroupResult() {
      const currentMask = this.targetKeys
        .map(i => masks[skills[i]].flag)
        .reduce((acc, cur) => acc | cur, 0);
      this.updateSkillSelectable(currentMask);
      this.selectedElement = Object.keys(flags).filter(
        i => (flags[i] & currentMask) !== 0
      );
    },
    updateSkillSelectable(currentMask) {
      console.log(currentMask);
      this.skillData.forEach((skill, index) => {
        if ((masks[skill.title].flag | currentMask) === 31) {
          skill.disabled = true;
          Vue.set(this.skillData, index, { ...skill });
        }
      });
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
  border-radius: 40px;
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
  padding: 20px;
  height: 80vh;
  max-width: 80vw;
  min-width: 80vw;
  overflow: auto;
}
.select-element-title {
  text-align: center;
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
