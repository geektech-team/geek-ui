# Grid

响应式效果，试试拖动浏览器的宽度

## Grid

<script setup>
import { GCol } from '../../src/components/col'
import { GRow } from '../../src/components/row'
</script>

<g-row>
  <g-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" style="background: gray">col</g-col>
  <g-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" style="background: gray">col</g-col>
  <g-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" style="background: gray">col</g-col>
  <g-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" style="background: gray">col</g-col>
  <g-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" style="background: gray">col</g-col>
</g-row>

```html
<g-row>
  <g-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" style="background: gray">col</g-col>
  <g-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" style="background: gray">col</g-col>
  <g-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" style="background: gray">col</g-col>
  <g-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" style="background: gray">col</g-col>
  <g-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" style="background: gray">col</g-col>
</g-row>
```

## offset

<g-row>
  <g-col :offset="1" :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" style="background: gray">offset</g-col>
  <g-col :offset="2" :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" style="background: gray">offset</g-col>
  <g-col :offset="3" :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" style="background: gray">offset</g-col>
</g-row>

```html
<g-row>
  <g-col :offset="1" :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" style="background: gray">offset</g-col>
  <g-col :offset="2" :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" style="background: gray">offset</g-col>
  <g-col :offset="3" :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3" style="background: gray">offset</g-col>
</g-row>
```
