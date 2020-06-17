export const options = [
  { label: "水", value: "水" },
  { label: "风", value: "风" },
  { label: "火", value: "火" },
  { label: "地", value: "地" },
  { label: "空", value: "空" }
];
export const flags = {
  水: 1,
  风: 2,
  火: 4,
  地: 8,
  空: 16
};
export const masks = {
  炎爆: {
    group: "风+火",
    flag: flags["风"] | flags["火"],
    description: "火属性范围伤害，但骑马时会被削弱"
  },
  缴械: {
    group: "风+空",
    flag: flags["风"] | flags["空"],
    description: "将单个怪物的武器缴械，并施加大量伤害"
  },
  神速: {
    group: "风+地",
    flag: flags["风"] | flags["地"],
    description: "10秒内大幅增加移动速度"
  },
  混乱: {
    group: "水+火",
    flag: flags["水"] | flags["火"],
    description:
      "让单个怪物一段时间内攻击附近的其他怪物，对关底的特殊怪物无效（大概率无法生效）"
  },
  毒爆: {
    group: "地+火",
    flag: flags["地"] | flags["火"],
    description: "类似绿皮僵尸的技能，让怪物群体中毒，直到剩下一滴血"
  },
  击退: {
    group: "水+空",
    flag: flags["水"] | flags["空"],
    description: "击退成片怪物，解围很实用"
  },
  击倒: {
    group: "水+地",
    flag: flags["水"] | flags["地"],
    description: "将单个怪物击倒，但爬起时间稍长"
  },
  闪电: {
    group: "风+火+空",
    flag: flags["风"] | flags["火"] | flags["空"],
    description: "范围伤害+硬直，伤害比炎爆稍小"
  },
  折射: {
    group: "水+火+空",
    flag: flags["水"] | flags["火"] | flags["空"],
    description:
      "随机杀死场景内任何一个怪物，对海岛玩家扮演的鬼也有效果，仅对骷髅王无效"
  },
  治疗: {
    group: "风+水+地",
    flag: flags["风"] | flags["水"] | flags["地"],
    description: "回血。对马也有治疗效果"
  },
  冻结: {
    group: "水+地+空",
    flag: flags["水"] | flags["地"] | flags["空"],
    description: "类似谢瑞娜的技能，让怪物硬直一段时间"
  },
  闪光: {
    group: "火+地+空",
    flag: flags["火"] | flags["地"] | flags["空"],
    description: "类似炽热僵尸的技能，让怪物停止任何行动"
  }
};
