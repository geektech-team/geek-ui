<script setup lang="ts">
import { defineEmits, computed, ref } from 'vue';
import { paginationProps } from './pagination.props';
import { paginationEmits } from './pagination.emits';
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

const last = () => {
  if (currentPage.value <= 1) {
    return;
  }
  currentPage.value--;
  emit('change', currentPage.value);
};

const next = () => {
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
      <div class="page-item page-item--prev" :class="{ 'page-item--disabled': currentPage == 1 }" @click="last">
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
        @click="next"
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
      position: relative;
      width: 32px;
      height: 32px;
      text-decoration: none;
      background-color: #fff;
      margin-left: 16px;
      font-family: dm;
      font-weight: 700;
      color: #6f6f6f;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: @border-radius-medium;
      cursor: pointer;

      &--current {
        background-color: var(--primary-color);
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
    }
  }
  .jump-to {
    display: inline-flex;
    align-items: center;
    margin-left: 32px;
    .desc {
      font-weight: 600;
      color: rgba(0, 0, 0, 0.6);
      line-height: 28px;
      white-space: nowrap;
    }
    .input {
      margin: 0 8px;
      height: 32px;
      text-align: center;
      font-weight: 700;
      width: 32px;
      background: #fff;
      border: 1px solid #e2e2e2;
      font-family: dm;
      color: #6f6f6f;
      border-radius: @border-radius-medium;
    }
    .g-button-primary {
      margin-left: 32px;
    }
  }
}
html.dark {
  .@{COMPONENT} {
    .desc {
      color: @color-white;
    }
  }
}
</style>
