<script setup lang="ts" name="'g-table'">
import { computed, withDefaults } from 'vue';
const COMPONENT = 'g-table';
interface Col {
  key: string;
  display: string;
  width: string;
  rowSpan: number;
  colSpan: number;
  parents: Col[];
}
interface HeaderItem {
  key: string;
  display: string;
  width: string;
  children?: HeaderItem[];
  parents?: Col[];
}
interface Props {
  header: HeaderItem[];
  data: Record<string, unknown>[];
  headerSticky?: boolean;
  headerStickyTop?: number;
}

const props = withDefaults(defineProps<Props>(), {
  header: () => [],
  data: () => [],
  headerSticky: true,
  headerStickyTop: 0,
});

const pushRow = (original: HeaderItem[], rows: Col[][], dinks: Col[]) => {
  const cols: Col[] = [];
  let children: HeaderItem[] = [];
  dinks.forEach((dink: Col) => {
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
        parent.colSpan += (element.children?.length as number) - 1;
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
  const rows: Col[][] = [];
  pushRow(props.header, rows, []);
  return rows;
});

const pushKeys = (original: HeaderItem[], keys: string[]) => {
  original.forEach(element => {
    if (element.children?.length) {
      pushKeys(element.children, keys);
    } else {
      keys.push(element.key);
    }
  });
};
const headerKeys = computed(() => {
  const keys: string[] = [];
  pushKeys(props.header, keys);
  return keys;
});

const pushRemoveCells = (cells: string[], area: { min: number[]; max: number[] }) => {
  const [minRowIndex, minColIndex] = area.min;
  const [maxRowIndex, maxColIndex] = area.max;
  for (let rowIndex = minRowIndex; rowIndex <= maxRowIndex; rowIndex++) {
    for (let colIndex = minColIndex; colIndex <= maxColIndex; colIndex++) {
      if (rowIndex === minRowIndex && colIndex === minColIndex) continue;
      cells.push(`${rowIndex}-${colIndex}`);
    }
  }
};

const removedCells = computed(() => {
  const cells: string[] = [];
  const { data } = props;
  data.forEach((raw, rowIndex) => {
    headerKeys.value.forEach((key, colIndex) => {
      const rowSpan = (raw[`${key}-row-span`] || 1) as number;
      const colSpan = (raw[`${key}-col-span`] || 1) as number;
      if (rowSpan > 1 || colSpan > 1) {
        pushRemoveCells(cells, {
          min: [rowIndex, colIndex],
          max: [rowIndex + rowSpan - 1, colIndex + colSpan - 1],
        });
      }
    });
  });
  return cells;
});
</script>

<template>
  <table :class="COMPONENT" width="100%">
    <thead :class="headerSticky ? `${COMPONENT}-header-sticky` : ''" :style="{ top: `${headerStickyTop}px` }">
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
      <tr v-for="(dataRow, rowIndex) in data" :key="rowIndex">
        <template v-for="(key, colIndex) in headerKeys">
          <td
            v-if="!removedCells.includes(`${rowIndex}-${colIndex}`)"
            :key="key"
            :rowspan="(dataRow[`${key}-row-span`] ?? 1) as number"
            :colspan="(dataRow[`${key}-col-span`] ?? 1) as number"
          >
            {{ dataRow[key] }}
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<style lang="less">
@COMPONENT: ~'@{prefix}-table';
.@{COMPONENT} {
  overflow-x: scroll;
  max-width: 100%;
  &-header-sticky {
    position: sticky;
  }
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
