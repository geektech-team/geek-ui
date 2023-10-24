# Table

<script setup>
import { GTable } from '../../src/components/table/index';
const header = [
  {key: 'name', display: 'Name', width: 300, },
  {
    key: 'configuration',
    display: 'Configuration',
    children:[
      {
        key: 'powerType',
        display: 'Power Type',
        width: 200
      },
      {
        key: 'type',
        display: 'Type',
        children:[
          {
            key: 'function',
            display: 'Function',
            width: 200},
          {key: 'space', display: 'Space', width: 200}
        ],
      }
    ]
  }
];
const data = [{
  name: '小鹏 P7',
  ['powerType-row-span']: 2,
  powerType: 'electric',
  function: '轿车',
  space: '三箱',
},
{
  name: '小鹏 G6',
  powerType: 'electric',
  function: 'SUV',
  space: '三箱',
}];
</script>

## Normal

<g-table :header="header" :data="data"/>

```html
<script setup>
  import { GTable } from '../../src/components/table/index';
  const header = [
    { key: 'name', display: 'Name', width: 300, },
    {
      key: 'configuration',
      display: 'Configuration',
      children: [
        {
          key: 'powerType',
          display: 'Power Type',
          width: 200,
        },
        {
          key: 'type',
          display: 'Type',
          children: [
            {
              key: 'function',
              display: 'Function',
              width: 200,
            },
            { key: 'space', display: 'Space', width: 200 },
          ],
        },
      ],
    },
  ];
  const data = [
    {
      name: '小鹏 P7',
      ['powerType-row-span']: 2,
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

## Slot Header Item

<g-table :header="header" :data="data">
  <template #header-item="{item}">
    {{item.display}}
  </template>
  <template #data-item="{item, dataKey}">
    {{item[dataKey]}}
  </template>
</g-table>

```html
<g-table :header="header" :data="data">
  <template #header-item="{item}">
    {{item.display}}
  </template>
  <template #data-item="{item, dataKey}">
    {{item[dataKey]}}
  </template>
</g-table>
```

## Empty Data

<g-table :header="header" :data="[]">
  <template #header-item="{item}">
    {{item.display}}
  </template>
  <template #data-item="{item, dataKey}">
    {{item[dataKey]}}
  </template>
</g-table>

```html
<g-table :header="header" :data="[]">
  <template #header-item="{item}">
    {{item.display}}
  </template>
  <template #data-item="{item, dataKey}">
    {{item[dataKey]}}
  </template>
</g-table>
```

## Loading

<g-table :header="header" :data="[]" :loading="true">
  <template #header-item="{item}">
    {{item.display}}
  </template>
  <template #data-item="{item, dataKey}">
    {{item[dataKey]}}
  </template>
</g-table>

```html
<g-table :header="header" :data="[]" :loading="true">
  <template #header-item="{item}">
    {{item.display}}
  </template>
  <template #data-item="{item, dataKey}">
    {{item[dataKey]}}
  </template>
</g-table>
```
