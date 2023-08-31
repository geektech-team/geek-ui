# Carousel

## Normal

<script setup>
import { GCarousel, GCarouselItem } from '../../src/components/carousel';

</script>

<g-carousel
  direction="vertical"
  :auto-play="true"
  indicator-position="right"
>
<g-carousel-item>
<img src="https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/1.jpg" />
</g-carousel-item>
<g-carousel-item><img src="https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/2.jpg" /></g-carousel-item> <g-carousel-item><img src="https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/3.jpg" /></g-carousel-item>
</g-carousel>

<style lang="less">
.g-carousel {
  width: 100%;
  height: 300px;
}
.g-carousel-item img{
  display: block;
  width: 100%;
  height: 100%;
}
</style>

## Code

```vue
<template>
  <g-carousel
    direction="vertical"
    :auto-play="true"
    indicator-position="right"
  >
    <g-carousel-item>
      <img src="https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/1.jpg" />
    </g-carousel-item>
    <g-carousel-item>
      <img src="https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/2.jpg" />
    </g-carousel-item>
    <g-carousel-item>
      <img src="https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/3.jpg" />
    </g-carousel-item>
  </g-carousel>
</template>
<style lang="less">
.g-carousel {
  width: 100%;
  height: 300px;
}
.g-carousel-item img{
  display: block;
  width: 100%;
  height: 100%;
}
</style>
```
