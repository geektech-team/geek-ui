<script setup lang="ts">
import { getElement, on, off } from '../../utils/dom';
import { onMounted, onBeforeUnmount, ref, reactive, provide, nextTick } from 'vue';
import { anchorInjectionKey } from './context';
import { isNumber, throttle } from '@geektech/utils';
import { isWindow } from '../../utils/is';

const COMPONENT = 'g-anchor';

type BoundaryPosition = 'start' | 'end' | 'center' | 'nearest';

interface Props {
  boundary?: BoundaryPosition | number;
  scrollContainer?: string | HTMLElement | Window;
  smooth?: boolean;
}

const props = withDefaults(defineProps<Props>(), { boundary: 'start', smooth: true });
const emit = defineEmits(['select', 'change']);
const links = reactive<Record<string, HTMLElement>>({});
const anchorRef = ref<HTMLElement>();
const currentLink = ref('');

const isScrolling = ref(false);
const scrollContainerEle = ref<HTMLElement | Window>();
const containerEle = ref<HTMLElement>();

const addLink = (hash: string, node: HTMLElement) => {
  if (!hash) return;
  links[hash] = node;
};

const removeLink = (hash: string) => {
  delete links[hash];
};

const scrollIntoView = (hash: string) => {
  const element = getElement(hash);
  if (!element) return;
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const onClick = (e: MouseEvent, hash?: string) => {
  if (hash) {
    scrollIntoView(hash);
    onAnchorChange(hash);
  }
  emit('select', hash, currentLink.value);
};

const onScroll = throttle(() => {
  if (isScrolling.value) return;
  const element = getFirstInViewportEle();
  if (element && element.id) {
    const hash = `#${element.id}`;
    onAnchorChange(hash);
  }
});

const onAnchorChange = (hash: string) => {
  if (!links[hash] && anchorRef.value) {
    const element = getElement(`span[href='${hash}']`, anchorRef.value);
    if (!element) return;

    links[hash] = element;
  }
  if (hash !== currentLink.value) {
    currentLink.value = hash;
    nextTick(() => {
      emit('change', hash);
    });
  }
};

const getFirstInViewportEle = (): HTMLElement | undefined => {
  if (!scrollContainerEle.value || !containerEle.value) {
    return undefined;
  }

  const boundary = isNumber(props.boundary) ? props.boundary : 0;
  const containerRect = containerEle.value.getBoundingClientRect();

  for (const hash of Object.keys(links)) {
    const element = getElement(hash);
    if (element) {
      const { top } = element.getBoundingClientRect();
      const offsetTop = isWindow(scrollContainerEle.value) ? top - boundary : top - containerRect.top - boundary;
      if (offsetTop >= 0 && offsetTop <= containerRect.height / 2) {
        return element;
      }
    }
  }
  return undefined;
};

const bindScrollEvent = () => {
  if (scrollContainerEle.value) {
    on(scrollContainerEle.value, 'scroll', onScroll);
  }
};

const unbindScrollEvent = () => {
  if (scrollContainerEle.value) {
    off(scrollContainerEle.value, 'scroll', onScroll);
  }
};

const getContainer = () => {
  if (props.scrollContainer) {
    scrollContainerEle.value = isWindow(props.scrollContainer) ? window : getElement(props.scrollContainer);
    containerEle.value = isWindow(props.scrollContainer) ? document.documentElement : getElement(props.scrollContainer);
  } else {
    scrollContainerEle.value = window;
    containerEle.value = document.documentElement;
  }
};

onMounted(() => {
  getContainer();

  const hash = decodeURIComponent(window.location.hash);
  if (hash) {
    scrollIntoView(hash);
    onAnchorChange(hash);
  } else {
    onScroll();
  }

  bindScrollEvent();
});

onBeforeUnmount(() => {
  unbindScrollEvent();
});

const anchorContext = reactive({
  currentLink,
  addLink,
  removeLink,
  onClick,
});
provide(anchorInjectionKey, anchorContext);
</script>

<template>
  <div ref="anchorRef" :class="COMPONENT">
    <slot />
  </div>
</template>

<style lang="less">
@COMPONENT: ~'@{prefix}-anchor';
.@{COMPONENT} {
  position: relative;
  &-list {
    padding-left: 10px;
  }
}
</style>
