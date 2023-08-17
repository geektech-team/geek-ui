<script setup lang="ts" name="'g-table'">
import { computed } from 'vue';
import { tableProps } from './table.props';
const COMPONENT = 'g-table';

const props = defineProps(tableProps);
const pushRow = (original: [], rows: [], dinks: []) => {
  const cols = [];
  let children = [];
  dinks.forEach(dink => {
    dink.rowSpan++;
  });
  original.forEach(element => {
    const col = {
      key: element.key,
      display: element.display,
      width: element.width,
      rowSpan: 1,
      colSpan: element.children?.length ?? 1,
      parents: element.parents ?? [],
    };
    if (element.children?.length) {
      col.parents.forEach(parent => {
        parent.colSpan += element.children.length - 1;
      });
      element.children.forEach(child => {
        child.parents = col.parents.concat(col);
      });
      children = children.concat(element.children);
    } else {
      dinks.push(col);
    }
    cols.push(col);
  });
  rows.push(cols);
  if (children.length) pushRow(children, rows, dinks);
};
const headerRows = computed(() => {
  const rows = [];
  pushRow(props.header, rows, []);
  return rows;
});
const pushKeys = (original: [], keys: []) => {
  original.forEach(element => {
    if (element.children?.length) {
      pushKeys(element.children, keys);
    } else {
      keys.push(element.key);
    }
  });
};
const headerKeys = computed(() => {
  const keys = [];
  pushKeys(props.header, keys);
  return keys;
});
</script>

<template>
  <table :class="COMPONENT" width="100%">
    <thead>
      <tr v-for="(cols, index) in headerRows" :key="index">
        <th
          v-for="col in cols"
          :key="col.key"
          :rowspan="col.rowSpan"
          :colspan="col.colSpan"
          :style="{ width: col.width }"
        >
          {{ col.display }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(dataRow, index) in data" :key="index">
        <td v-for="key in headerKeys" :key="key">
          {{ dataRow[key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="less">
@import './../../style/index.less';
@COMPONENT: ~'@{prefix}-table';
.@{COMPONENT} {
  overflow-x: scroll;
  max-width: 100%;
  thead,
  tbody,
  tr {
    width: 100%;
  }
  tbody {
    overflow: auto;
  }
  tr:hover {
    background-color: @gray-3;
  }
}
</style>
