<script setup lang="ts">
import { onMounted, computed, ref, toRefs } from 'vue';
import { useTeleportContainer } from '../../hooks/use-teleport-container';
import { modalProps } from './modal.props';
import { modalEmits } from './modal.emits';
import { GButton } from '../button';
import { GIcon } from '../icon';

const COMPONENT = 'g-modal';

const props = defineProps(modalProps);
const emit = defineEmits(modalEmits);
const { popupContainer } = toRefs(props);
const _visible = ref(props.defaultVisible);
const computedVisible = computed(() => props.visible ?? _visible.value);

const { teleportContainer } = useTeleportContainer({
  popupContainer,
  visible: computedVisible,
});

const close = () => {
  _visible.value = false;
  emit('update:visible', false);
};

const handleCancel = (e: Event) => {
  emit('cancel', e);
  close();
};

const handleOk = (e: Event) => {
  emit('ok', e);
  close();
};
onMounted(() => {});
</script>

<template>
  <teleport :to="teleportContainer">
    <div v-show="computedVisible || mounted" :class="`${COMPONENT}-container`">
      <transition :name="maskAnimationName" appear>
        <div v-if="mask" v-show="computedVisible" ref="maskRef" :class="`${COMPONENT}-mask`" />
      </transition>
      <transition :name="modalAnimationName" appear>
        <div v-show="computedVisible" :class="`${COMPONENT}-wrapper`">
          <div v-if="$slots.title || title" :class="`${COMPONENT}-header`">
            <div v-if="$slots.title || title" :class="`${COMPONENT}-title`">
              <slot name="title">
                {{ title }}
              </slot>
            </div>
            <div v-if="closable" :class="`${COMPONENT}-close-button`" @click="handleCancel">
              <g-icon name="close" />
            </div>
          </div>
          <div :class="`${COMPONENT}-content`">
            <slot />
          </div>
          <div :class="`${COMPONENT}-footer`">
            <slot name="footer">
              <g-button v-if="!hideCancel" @click="handleCancel">
                {{ cancelText }}
              </g-button>
              <g-button type="primary" @click="handleOk">
                {{ okText }}
              </g-button>
            </slot>
          </div>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<style lang="less">
@import './../../style/theme/default.less';
@COMPONENT: g-modal;
.@{COMPONENT} {
  &-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: @z-index-modal;
  }
  &-mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: @mask-color-bg;
  }
  &-wrapper {
    position: relative;
    top: 200px;
    width: 500px;
    margin: 0 auto;
    white-space: initial;
    text-align: left;
    background-color: @color-bg-white;
    border-radius: @border-radius-large;
    overflow: hidden;
  }
  &-header {
    padding: @padding-normal;
    border-bottom: @border-light;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-content {
    padding: @padding-normal;
    border-bottom: @border-light;
    min-height: 100px;
  }
  &-footer {
    padding: @padding-normal;
    text-align: right;
    .g-button-primary {
      margin-left: 10px;
    }
  }
}
</style>
