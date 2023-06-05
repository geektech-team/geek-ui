<script setup lang="ts">
import { computed } from 'vue';
import { colProps } from './col.props';
import { isNumber } from '../../utils/is';
const COMPONENT = 'g-col';

const props = defineProps(colProps);
const classes = computed(() => {
  const { span, offset, xs, sm, md, lg, xl, xxl } = props;
  const result = {
    [`${COMPONENT}-${span}`]: !xs && !sm && !md && !lg && !xl && !xxl,
    [`${COMPONENT}-offset-${offset}`]: offset && offset > 0,
  };
  const screenList: {
    [key: string]: number | { [key: string]: any } | undefined;
  } = { xs, sm, md, lg, xl, xxl };

  Object.keys(screenList).forEach(screen => {
    const screenValue = screenList[screen];
    if (screenValue && isNumber(screenValue)) {
      result[`${COMPONENT}-${screen}-${screenValue}`] = true;
    }
  });
  return result;
});
</script>

<template>
  <div :class="[COMPONENT, classes]">
    <slot />
  </div>
</template>

<style lang="less">
@import './../../style/index.less';
@COMPONENT: ~'@{prefix}-col';
.@{COMPONENT} {
  box-sizing: border-box;
  .span(@span, @adaptation) when (@span > 0) and (@adaptation = '') {
    .span((@span - 1), @adaptation);

    &-@{span} {
      flex: 0 0 (100% / 24) * @span;
      width: (100% / 24) * @span;
    }
  }
  .span(@span, @adaptation) when (@span > 0) and not(@adaptation = '') {
    .span((@span - 1), @adaptation);

    &-@{adaptation}-@{span} {
      flex: 0 0 (100% / 24) * @span;
      width: (100% / 24) * @span;
    }
  }
  .span(24, '');

  .offset(@offset, @adaptation) when (@offset > 0) and (@adaptation = '') {
    .offset((@offset - 1), @adaptation);

    &-offset-@{offset} {
      margin-left: (100% / 24) * @offset;
    }
  }
  .offset(@offset, @adaptation) when (@offset > 0) and (not(@adaptation = '')) {
    .offset((@offset - 1), @adaptation);

    &-@{adaptation}-offset-@{offset} {
      margin-left: (100% / 24) * @offset;
    }
  }

  .offset(23, '');
  // adaptation
  .span(24, xs);
  .offset(23, xs);
  // .order(24, xs);

  @media (min-width: 576px) {
    .span(24, sm);
    .offset(23, sm);
    // .order(24, sm);
  }

  @media (min-width: 768px) {
    .span(24, md);
    .offset(23, md);
    // .order(24, md);
  }

  @media (min-width: 992px) {
    .span(24, lg);
    .offset(23, lg);
    // .order(24, lg);
  }

  @media (min-width: 1200px) {
    .span(24, xl);
    .offset(23, xl);
    // .order(24, xl);
  }

  @media (min-width: 1600px) {
    .span(24, xxl);
    .offset(23, xxl);
    // .order(24, xxl);
  }
}
</style>
