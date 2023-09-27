# Timeline

## Normal

<script setup>
import { GTimeline, GTimelineItem } from '../../src/components/timeline';

const timelineList = [{
  title: '中华人民共和国成立',
  time: '1949-10-01',
  content: '在北京天安门广场举行开国大典，毛泽东在天安门城楼上宣告中华人民共和国中央人民政府成立，中华人民共和国正式成立，以后每年的10月1日就成为了中华人民共和国的国庆节。'
}, {
  title: '改革开放',
  time: '1978-12-18',
  content: `
  <p>1978年12月18日-22日，中国共产党第十一届中央委员会第三次全体会议在北京举行。</p>
  <p>出席会议的中央委员169人，候补中央委员112人。全会冲破长期“左”的错误和严重束缚，彻底否定“两个凡是”的错误方针，高度评价关于真理标准问题的讨论，重新确立了党的实事求是的思想路线。全会停止使用“以阶级斗争为纲”的口号，决定将全党的工作重点和全国人民的注意力转移到社会主义现代化建设上，提出了改革开放的任务。全会指出，实现四个现代化是一场广泛、深刻的革命，要采取一系列新的重大的经济措施，对经济管理体制和经营管理方法进行认真改革，在自力更生的基础上积极发展同世界各国平等互利的经济合作。全会强调要充分发扬民主，健全全党的民主集中制，健全党规党法，正确对待毛泽东的历史地位和毛泽东思想的科学体系。全会增选了中央领导机构成员，邓小平实际上成为党的中央领导集体的核心。</p>`
},{
  title: '香港回归',
  time: '1997-07-01',
  content: '中华人民共和国恢复对香港行使主权'
}]
</script>

<g-timeline>
  <g-timeline-item
    v-for="item in timelineList"
    :key="item.title"
    :title="item.title"
    :time="item.time"
    :content="item.content">
  </g-timeline-item>
</g-timeline>

## Code

```vue
<script setup>
import { GTimeline, GTimelineItem } from '../../src/components/timeline';

const timelineList = [
  {
    title: '中华人民共和国成立',
    time: '1949-10-01',
    content:
      '在北京天安门广场举行开国大典，毛泽东在天安门城楼上宣告中华人民共和国中央人民政府成立，中华人民共和国正式成立，以后每年的10月1日就成为了中华人民共和国的国庆节。',
  },
  {
    title: '改革开放',
    time: '1978-12-18',
    content: `
  <p>1978年12月18日-22日，中国共产党第十一届中央委员会第三次全体会议在北京举行。</p>
  <p>出席会议的中央委员169人，候补中央委员112人。全会冲破长期“左”的错误和严重束缚，彻底否定“两个凡是”的错误方针，高度评价关于真理标准问题的讨论，重新确立了党的实事求是的思想路线。全会停止使用“以阶级斗争为纲”的口号，决定将全党的工作重点和全国人民的注意力转移到社会主义现代化建设上，提出了改革开放的任务。全会指出，实现四个现代化是一场广泛、深刻的革命，要采取一系列新的重大的经济措施，对经济管理体制和经营管理方法进行认真改革，在自力更生的基础上积极发展同世界各国平等互利的经济合作。全会强调要充分发扬民主，健全全党的民主集中制，健全党规党法，正确对待毛泽东的历史地位和毛泽东思想的科学体系。全会增选了中央领导机构成员，邓小平实际上成为党的中央领导集体的核心。</p>`,
  },
  {
    title: '香港回归',
    time: '1997-07-01',
    content: '中华人民共和国恢复对香港行使主权',
  },
];
</script>
<template>
  <g-timeline>
    <g-timeline-item
      v-for="item in timelineList"
      :key="item.title"
      :title="item.title"
      :time="item.time"
      :content="item.content"
    >
    </g-timeline-item>
  </g-timeline>
</template>
```
