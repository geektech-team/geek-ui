# Anchor

<script setup>
import { GAnchor, GAnchorLink } from '../../src/components/anchor/index';
</script>

## normal

<g-anchor>
  <g-anchor-link href="#normal" title="normal" />
  <g-anchor-link href="#sublist" title="sublist"/>
</g-anchor>

```html
<g-anchor>
  <g-anchor-link href="#normal" title="normal" />
  <g-anchor-link href="#sublist" title="sublist"/>
</g-anchor>
```

## sublist

<g-anchor>
  <g-anchor-link href="#normal" title="normal" />
  <g-anchor-link href="#sublist" title="sublist">
    <template #sublist>
      <g-anchor-link href="#sublist" title="sublist" />
    </template>
  </g-anchor-link>
</g-anchor>

```html
<g-anchor>
  <g-anchor-link href="#normal" title="normal" />
  <g-anchor-link href="#sublist" title="sublist">
    <template #sublist>
      <g-anchor-link href="#sublist" title="sublist" />
    </template>
  </g-anchor-link>
</g-anchor>
```
