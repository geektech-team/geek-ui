<script setup lang="ts">
import { onMounted, inject, ref } from 'vue';
import { anchorInjectionKey } from './context';

const COMPONENT = 'g-anchor-link';
interface Props {
  title?: string;
  href?: string;
}
const props = defineProps<Props>();
const linkRef = ref<HTMLElement>();
const context = inject(anchorInjectionKey, undefined);

onMounted(() => {
  if (props.href && linkRef.value) {
    context?.addLink(props.href, linkRef.value);
  }
});

const onClick = (e: MouseEvent) => {
  context?.onClick(e, props.href);
};
</script>

<template>
  <div ref="linkRef" :class="COMPONENT">
    <div
      :class="[`${COMPONENT}-item`, { [`${COMPONENT}-item-active`]: context?.currentLink === href }]"
      :href="href"
      @click="onClick"
    >
      <slot>{{ title }}</slot>
    </div>
  </div>
  <div v-if="$slots.sublist" :class="`${COMPONENT}-sublist`">
    <slot name="sublist" />
  </div>
</template>

<style lang="less">
@COMPONENT: ~'@{prefix}-anchor-link';
.@{COMPONENT} {
  // display: flex;
  &-item {
    cursor: pointer;
    position: relative;
    padding: 4px;
    border-radius: 4px;
    &:hover {
      font-weight: 500;
      background-color: @gray-3;
    }
    &::before {
      content: '';
      position: absolute;
      left: -12px;
      top: 13px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: @gray-5;
    }
    &-active {
      color: var(--primary-color);
      font-weight: bolder;
      &::before {
        background-color: var(--primary-color);
      }
    }
  }
}

.@{COMPONENT}-sublist {
  padding-left: 16px;
}
</style>
