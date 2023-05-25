<script setup lang="ts">
import { defineEmits, computed, ref, shallowRef } from 'vue';
import { paginationProps, paginationEmit } from './pagination';
import GIcon from '../icon/icon.vue';
import GButton from '../button/button.vue';

const COMPONENT = 'g-pagination';

type pageItem = { index: number; isMore: boolean; isCurrent: boolean; class: string };

const props = defineProps(paginationProps);
const emit = defineEmits(paginationEmit);

const currentPage = ref(props.current);
const pageLength = computed(() => {
  return Math.ceil(props.total / props.pageSize);
});
const jumpToNum = ref();

const left = shallowRef<HTMLInputElement>();
const right = shallowRef<HTMLInputElement>();
const _refLeft = computed(() => left.value);
const _refRight = computed(() => right.value);
/**
 * 3种形态
 *  1. 无省略号，len <= 4，current = 1 ~ 4
 *  2. 有一个省略号，page > 4，current = 1 | 2 | len - 1 | len
 *  3. 两个省略号，page > 4，len - current >= 2，current - 1 >= 2
 */
const pagers = computed(() => {
  const arr: pageItem[] = [];

  // 从current位置向左扩散
  for (let i = currentPage.value; i >= 1; i--) {
    // 终结条件：
    if (i === currentPage.value - 4 || i === 0) {
      break;
    }
    const isOne = i === currentPage.value - 3 && i > 0;
    arr.unshift({
      index: isOne ? 1 : i,
      isMore: i === currentPage.value - 2,
      isCurrent: i === currentPage.value,
      class: i === currentPage.value ? 'paging-item--current' : '',
    });
  }
  // 从current向右扩散
  for (let i = currentPage.value + 1; i <= pageLength.value; i++) {
    // 终结条件：超出最大长度或者还有更多
    if (i === currentPage.value + 4 || i === pageLength.value + 1) {
      break;
    }
    const isLast = i === currentPage.value + 3 && i < pageLength.value;
    arr.push({
      index: isLast ? pageLength.value : i,
      isMore: i === currentPage.value + 2,
      isCurrent: i === currentPage.value,
      class: i === currentPage.value ? 'paging-item--current' : '',
    });
  }
  // 特别情况处理(为了在选择最开始/最末尾的时候有3个)
  if (pageLength.value > 4 && (currentPage.value === 1 || currentPage.value === pageLength.value)) {
    arr.splice(2, 0, {
      index: currentPage.value === 1 ? 3 : pageLength.value - 2,
      isMore: false,
      isCurrent: false,
      class: '',
    });
  }

  return arr;
});

const change = (item: pageItem) => {
  if (item.isCurrent) {
    return;
  }
  currentPage.value = item.index;
  emit('change', currentPage.value);
};

const last = (e: MouseEvent) => {
  const currentTarget = e.currentTarget as HTMLDivElement;
  if (currentPage.value === 1) {
    // 设置左箭头非活性
    if (!currentTarget.getAttribute('class')?.includes('paging-item--disabled')) {
      currentTarget.setAttribute('class', currentTarget.getAttribute('class') + ' paging-item--disabled');
    }
    return;
  }
  // 移除右箭头非活性
  if (_refRight.value?.getAttribute('class')?.includes('paging-item--disabled')) {
    _refRight.value.setAttribute('class', currentTarget.getAttribute('class') || '');
  }
  currentPage.value -= 1;
  emit('change', currentPage.value);
};

const next = (e: MouseEvent) => {
  const currentTarget = e.currentTarget as HTMLDivElement;
  if (currentPage.value === pageLength.value) {
    // 设置右箭头非活性
    if (currentTarget.getAttribute('class')?.includes('paging-item--disabled')) {
      currentTarget.setAttribute('class', currentTarget.getAttribute('class') + ' paging-item--disabled');
    }
    return;
  }
  // 移除右箭头非活性
  if (_refLeft.value?.getAttribute('class')?.includes('paging-item--disabled')) {
    _refLeft.value.setAttribute('class', currentTarget.getAttribute('class') || '');
  }
  // 移除左箭头非活性
  currentPage.value += 1;
  emit('change', currentPage.value);
};

const handleBlur = () => {
  if (jumpToNum.value > pageLength.value) {
    jumpToNum.value = pageLength.value;
  }
  if (jumpToNum.value < 1) {
    jumpToNum.value = 1;
  }
};

const confirm = () => {
  if (jumpToNum.value === currentPage.value || !jumpToNum.value) {
    return;
  }
  currentPage.value = Number(jumpToNum.value);
  jumpToNum.value = null;
  emit('change', currentPage.value);
};
</script>

<template>
  <div v-if="pageLength > 1" :class="COMPONENT">
    <div class="pages">
      <div ref="left" class="paging-item paging-item--prev" @click="last($event)">
        <g-icon name="left" @click="handleClose" />
      </div>
      <template v-for="(item, index) of pagers" :key="index">
        <div v-if="item.isMore && pageLength > 4" class="paging-item paging-item--more">
          ···
        </div>
        <div v-else :class="item.class + ' paging-item'" @click="change(item)">
          {{ item.index }}
        </div>
      </template>
      <div ref="right" class="paging-item paging-item--next" @click="next($event)">
        <g-icon name="right" @click="handleClose" />
      </div>
    </div>
    <div class="jump-to">
      <span class="desc tz">跳至</span>
      <input
        v-model="jumpToNum"
        class="input"
        type="number"
        oninput="value=value.replace(/[^\d]/g,'')"
        maxlength="3"
        @blur="handleBlur"
      >
      <span class="desc ye">页</span>
      <g-button type="primary" @click="confirm">
        确定
      </g-button>
    </div>
  </div>
</template>

<style lang="less">
@import './../../style/theme/default.less';
@COMPONENT: ~'@{prefix}-pagination';
.@{COMPONENT} {
  margin: 48px 0 82px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .pages {
    display: inline-flex;
    .paging-item {
      display: inline;
      font-size: 14px;
      position: relative;
      width: 28px;
      height: 28px;
      text-decoration: none;
      background-color: #fff;
      margin-left: 16px;
      font-size: 18px;
      font-family: dm;
      font-weight: 700;
      color: #6f6f6f;
      line-height: 21px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: @border-radius-medium;
      cursor: pointer;
    }

    .paging-item--current {
      cursor: default;
      background-color: @primary-color;
      color: #fff;
      position: relative;
      z-index: 1;
      border-color: #000;
    }

    .paging-item--disabled {
      cursor: not-allowed;
      opacity: 0.75;
      background-color: #fff;
      color: #505050;
    }

    .paging-item-more {
      cursor: default;
      background-color: #fff;
      color: #505050;
    }

    .arrow {
      cursor: pointer;
      width: 7px;
      height: 11px;
    }
  }
  .jump-to {
    display: inline-flex;
    align-items: center;
    .tz {
      margin: 0 16px 0 38px;
    }

    .input {
      height: 28px;
      text-align: center;
      font-size: 16px;
      font-weight: 700;
      width: 28px;
      background: #fff;
      border: 1px solid #e2e2e2;
      font-family: dm;
      color: #6f6f6f;
      line-height: 21px;
    }

    .ye {
      margin: 0 36px 0 17px;
    }

    .desc {
      font-size: 16px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.6);
      line-height: 28px;
      white-space: nowrap;
    }
  }
}
</style>
