<script setup lang="ts">
import { defineEmits, computed, ref } from 'vue';
import { props as paginationProps } from './pagination.props';
import { emits as paginationEmits } from './pagination.emits';
import GIcon from '../icon/icon.vue';
import GButton from '../button/button.vue';

const COMPONENT = 'g-pagination';

// const ELLIPSIS_BOUNDARY = 5;
type pageItem = { page: number; isMore: boolean; isCurrent: boolean };

const props = defineProps(paginationProps);
const emit = defineEmits(paginationEmits);

const currentPage = ref(props.current);
const pageLength = computed(() => {
  return Math.ceil(props.total / props.pageSize);
});
const jumpToNum = ref();
const pagers = computed(() => {
  const arr: pageItem[] = [];
  for (let current = 1; current <= pageLength.value; current++) {
    let isMore = false;
    if (![1, pageLength.value].includes(current)) {
      if (current < currentPage.value - 3 || current > currentPage.value + 3) {
        continue;
      } else if ([currentPage.value - 3, currentPage.value + 3].includes(current)) {
        isMore = true;
      }
    }
    arr.push({
      page: current,
      isMore,
      isCurrent: current === currentPage.value,
    });
  }
  return arr;
});

const change = (item: pageItem) => {
  if (item.isCurrent) {
    return;
  }
  currentPage.value = item.page;
  emit('change', currentPage.value);
};

const onClickEllipsis = (index: number) => {
  const lastIndex = index - 1;
  const nextIndex = index + 1;
  const lastPage = pagers.value[lastIndex].page;
  const nextPage = pagers.value[nextIndex].page;
  const targetPage = Math.round((lastPage + nextPage) / 2);
  currentPage.value = targetPage;
};

const last = (e: MouseEvent) => {
  if (currentPage.value <= 1) {
    return;
  }
  currentPage.value--;
  emit('change', currentPage.value);
};

const next = (e: MouseEvent) => {
  if (currentPage.value >= pageLength.value) {
    return;
  }
  currentPage.value++;
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
      <div class="page-item page-item--prev" :class="{ 'page-item--disabled': currentPage == 1 }" @click="last($event)">
        <g-icon name="left" />
      </div>
      <template v-for="(item, index) of pagers" :key="item.page">
        <div v-if="item.isMore" class="page-item" @click="onClickEllipsis(index)">
          ···
        </div>
        <div v-else class="page-item" :class="{ 'page-item--current': item.isCurrent }" @click="change(item)">
          {{ item.page }}
        </div>
      </template>
      <div
        class="page-item page-item--next"
        :class="{ 'page-item--disabled': currentPage == pageLength }"
        @click="next($event)"
      >
        <g-icon name="right" />
      </div>
    </div>
    <div v-if="props.jumper" class="jump-to">
      <span class="desc">跳至</span>
      <input
        v-model="jumpToNum"
        class="input"
        type="number"
        oninput="value=value.replace(/[^\d]/g,'')"
        maxlength="3"
        @blur="handleBlur"
      >
      <span class="desc">页</span>
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
  .pages {
    display: inline-flex;
    .page-item {
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

      &--current {
        background-color: @primary-color;
        color: #fff;
        position: relative;
        z-index: 1;
        border-color: #000;
      }

      &--disabled {
        .g-icon {
          opacity: 0.75;
          cursor: not-allowed;
          color: #505050;
          cursor: not-allowed;
        }
      }
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
    margin-left: 30px;
    .desc {
      font-size: 16px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.6);
      line-height: 28px;
      white-space: nowrap;
    }
    .input {
      margin: 0 8px;
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
      border-radius: @border-radius-medium;
    }
    .g-button-primary {
      margin-left: 30px;
    }
  }
}
</style>
