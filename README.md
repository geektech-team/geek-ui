# Geek UI Quick Start

## Home page

[https://geek-ui.netlify.app/](https://geek-ui.netlify.app/)

## Install

```bash
pnpm i geek-ui
```

## Import all

Import in your main.ts

```ts
import { createApp } from 'vue';
import GeekUI from '@geektech/geek-ui'; // import GeekUI
import '@geektech/geek-ui/dist/style.css'; // import style
import App from './App.vue';

const app = createApp(App);
app.use(GeekUI);
app.mount('#app');
```

## Change theme

Reset var

```css

:root {
  --primary-color: @cover-theme-primary-color;
  --primary-light: @cover-theme-primary-light;
  --primary-lighter: @cover-theme-primary-lighter;
  --primary-dark: @cover-theme-primary-dark;
  --primary-darker: @cover-theme-primary-darker;
}
```

## Import as need

```html
<script setup lang="ts">
import { GButton } from "@geektech/geek-ui/dist/button";
</script>
<template>
  <g-button type="primary">normal</g-button>
</template>
```
