# Table

<script setup>
import { GTable } from '../../src/components/table/index';
const header = [
  {key: 'name', display: 'Name'},
  {
    key: 'configuration',
    display: 'Configuration',
    children:[
      {key: 'powerType', display: 'Power Type', width: '150px'},
      {
        key: 'type',
        display: 'Type',
        children:[
          {key: 'function', display: 'Function'},
          {key: 'space', display: 'Space'}
        ]
      }
    ]
  }
];
const data = [{
  name: '小鹏 P7',
  powerType: 'electric',
  function: '轿车',
  space: '三箱',
},
{
  name: '小鹏 G6',
  powerType: 'electric',
  function: 'SUV',
  space: '三箱',
}]
</script>

## Normal

<br>
<g-table :header="header" :data="data"/>

```vue
<script setup>
import { GTable } from '../../src/components/table/index';
const header = [
  { key: 'name', display: 'Name' },
  {
    key: 'configuration',
    display: 'Configuration',
    children: [
      { key: 'powerType', display: 'Power Type' },
      {
        key: 'type',
        display: 'Type',
        children: [
          { key: 'function', display: 'Function' },
          { key: 'space', display: 'Space' },
        ],
      },
    ],
  },
];
const data = [
  {
    name: '小鹏 P7',
    powerType: 'electric',
    function: '轿车',
    space: '三箱',
  },
  {
    name: '小鹏 G6',
    powerType: 'electric',
    function: 'SUV',
    space: '三箱',
  },
];
</script>
<template>
  <g-table :header="header" :data="data" />
</template>
```
