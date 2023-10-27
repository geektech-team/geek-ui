# Progress

<script setup>
import {ref} from 'vue';
import { GProgress } from '../../src/components/progress'
import { GRow } from '../../src/components/row'
import { GCol } from '../../src/components/col'
const percent = ref(0.6);
</script>

## Line

<g-progress type="line" :percent="0.6"/>

```html
<g-progress type="line" :percent="0.6" />
```

## Circle

<input v-model="percent">
<g-row>
  <g-col :span="8">
    <g-progress type="circle" :percent="percent"/>
  </g-col>
  <g-col :span="8">
    <g-progress type="circle" :percent="percent" color="red" stroke-width="5"/>
  </g-col>
  <g-col :span="8">
    <g-progress type="circle" :percent="percent"/>
  </g-col>
</g-row>

```html
<g-row>
  <g-col :span="8">
    <g-progress type="circle" :percent="0.6" />
  </g-col>
  <g-col :span="8">
    <g-progress type="circle" :percent="0.8" color="red" stroke-width="5" />
  </g-col>
  <g-col :span="8">
    <g-progress type="circle" :percent="0.5" />
  </g-col>
</g-row>
```

## Water

<g-progress type="water" :percent="0.5"/>

```html
<g-progress type="water" :percent="0.5" />
```
