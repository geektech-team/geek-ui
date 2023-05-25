# Pagination

## Normal

<script setup>
import { GPagination } from '../../src/components/pagination/index';
</script>

<g-pagination :page-size="10" :total="100" />

### Code

```html
<g-pagination :page-size="10" :total="100" />
```

## Jumper

<g-pagination :page-size="10" :total="100" jumper />

### Code

```html
<g-pagination :page-size="10" :total="100" jumper />
```
