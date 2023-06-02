# Quick Start

## Install

```bash
pnpm i @geektech/geek-ui
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

## Import as need

```ts
<script setup lang="ts">
import { GButton } from "@geektech/geek-ui";
</script>
<template>
  <g-button type="primary">normal</g-button>
</template>
```
