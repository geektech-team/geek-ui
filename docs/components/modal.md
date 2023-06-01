# Modal

<script setup>
import { ref } from 'vue';
import { GModal } from '../../src/components/modal';
import { GButton} from '../../src/components/button';
const visible = ref(false);
const toggle = () => {
  visible.value = !visible.value;
}
</script>

## normal

<g-modal :visible="visible" @cancel="toggle" @ok="toggle">
<template #title>This is header</template>
This is Content
</g-modal>
<g-button @click="toggle">open</g-button>

```html
<g-modal :visible="visible" @cancel="toggle" @ok="toggle">
  <template #title>This is header</template>
  This is Content
</g-modal>
<g-button @click="toggle">open</g-button>
```
