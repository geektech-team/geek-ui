<script setup lang="ts">
import { defineProps } from 'vue';
import { GIcon } from '../icon';
// import { AddingToCartProps } from './adding-to-cart.props';

const props = defineProps<{
  target: string;
}>();

const COMPONENT = 'g-adding-to-cart';

// 添加到购物车
const toCart = event => {
  createBall01(event.target, event.pageX, event.pageY);
};
const createBall01 = (bo, left, top) => {
  const bar = bo.cloneNode();
  bar.style.position = 'absolute';
  bar.style.left = left + 'px';
  bar.style.top = top + 'px';

  document.body.appendChild(bar);
  // 添加动画属性
  const target = document.querySelector(props.target);
  bar.style.left = target.offsetLeft + target.offsetWidth / 2 + 'px';
  bar.style.top = target.offsetTop + target.offsetHeight / 2 + 'px';
  /**
   * 动画结束后，删除自己
   */
  bar.ontransitionend = function () {
    this.remove();
  };
};
// function parabolaAnimation (startPos, targetPos, animationDom, animationTime = 400, time = 10, callback) {
//   const [x1, x2, y1, y2] = [
//     parseInt(-startPos.x),
//     parseInt(-targetPos.x),
//     parseInt(-startPos.y),
//     parseInt(-targetPos.y),
//   ];

//   const x3 = ((x1 + x2) * 3) / 5;

//   const y3 = y2 + 30;

//   const dom = document.createElement('i');

//   dom.width = 30;
//   dom.height = 30;
//   dom.background = 'red';

//   const animationDoms = animationDom ?? dom;

//   const speedX = ((x2 - x1) * time) / animationTime;

//   let times = 0;

//   animationDoms.style.position = 'fixed';

//   animationDoms.style.left = `${-x1}px`;

//   animationDoms.style.top = `${-y1}px`;

//   animationDoms.style.zIndex = '10000';

//   document.body.appendChild(animationDoms); // 利用抛物线方程： y = ax^2 + bx + c 带入三点坐标求得抛物线方程系数 a, b, c 。再根据方程，传入X 求Y

//   const a = (y3 - y1 + ((y2 - y1) * (x1 - x3)) / (x2 - x1)) / (x3 * x3 - x1 * x1 - (x3 - x1) * (x1 + x2));

//   const b = (y2 - y1 + a * x1 * x1 - a * x2 * x2) / (x2 - x1);

//   const c = y1 - a * x1 * x1 - b * x1;

//   const timer = setInterval(() => {
//     times += 1;

//     const x = x1 + speedX * times;

//     const y = a * x * x + b * x + c;

//     if (times * time > animationTime) {
//       clearInterval(timer);

//       document.body.removeChild(animationDoms);

//       callback && callback();
//     } else {
//       animationDoms.style.left = `${-x}px`;

//       animationDoms.style.top = `${-y}px`;
//     }
//   }, time);
// }
</script>

<template>
  <div :class="COMPONENT">
    <g-icon name="add" class="bar" @click="toCart($event)" />
  </div>
</template>

<style lang="less">
@import './../../style/index.less';
@COMPONENT: ~'@{prefix}-adding-to-cart';
.bar {
  display: block;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #02b6fd;
  transition: left 0.6s linear, top 0.6s cubic-bezier(0.5, -0.5, 1, 1);
}
.@{COMPONENT} {
  .cart {
    position: fixed;
    right: 100px;
    bottom: 100px;
  }
}
</style>
