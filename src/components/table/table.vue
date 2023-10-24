<script setup lang="ts">
import { ref, computed, withDefaults } from 'vue';
import useResizeObserver from '../../hooks/use-resize-observer';
import { GScrollbarBox } from '../scrollbar-box';
import { debounce } from '@geektech/utils';
import { GIcon } from '../icon';
import { loading as vLoading } from '../../directives';

const COMPONENT = 'g-table';
interface HeaderItem {
  key: string;
  display: string;
  width?: number;
  rowSpan: number;
  colSpan: number;
  children?: HeaderItem[];
  parents?: HeaderItem[];
}
interface Props {
  header: HeaderItem[];
  data: Record<string, unknown>[];
  headerSticky?: boolean;
  loading?: boolean;
  headerStickyTop?: number;
}

const props = withDefaults(defineProps<Props>(), {
  header: () => [],
  data: () => [],
  headerSticky: true,
  headerStickyTop: 0,
});

const pushRow = (original: HeaderItem[], rows: HeaderItem[][], dinks: HeaderItem[]) => {
  const cols: HeaderItem[] = [];
  let children: HeaderItem[] = [];
  dinks.forEach((dink: HeaderItem) => {
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
  const rows: HeaderItem[][] = [];
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

const contentPositionClass = ref();
const onScroll = (target: HTMLElement) => {
  const { scrollLeft, offsetWidth, scrollWidth } = target;
  if (offsetWidth >= scrollWidth) {
    contentPositionClass.value = '';
  } else {
    contentPositionClass.value = 'g-scroll-position-';
    if (scrollLeft > 0) {
      if (Math.ceil(scrollLeft + offsetWidth) >= scrollWidth) {
        contentPositionClass.value += 'left';
      } else {
        contentPositionClass.value += 'both';
      }
    } else {
      contentPositionClass.value += 'right';
    }
  }
};

const tableRef = ref();
const listeners = debounce(() => {
  onScroll(tableRef.value?.$el || tableRef.value);
});
useResizeObserver(tableRef, listeners);
</script>

<template>
  <div v-loading="loading" :class="COMPONENT">
    <div :class="contentPositionClass">
      <g-scrollbar-box ref="tableRef" @scroll="e => onScroll(e.target)">
        <table>
          <thead :class="headerSticky ? `${COMPONENT}-header-sticky` : ''" :style="{ top: `${headerStickyTop}px` }">
            <tr v-for="(cols, index) in headerRows" :key="index">
              <th
                v-for="col in cols"
                :key="col.key"
                :rowspan="Number(col.rowSpan)"
                :colspan="Number(col.colSpan)"
                :style="{ minWidth: `${col.width}px` }"
              >
                <slot name="header-item" :item="col">
                  {{ col.display }}
                </slot>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(dataRow, rowIndex) in data" :key="rowIndex">
              <template v-for="(key, colIndex) in headerKeys">
                <td
                  v-if="!removedCells.includes(`${rowIndex}-${colIndex}`)"
                  :key="key"
                  :rowspan="Number(dataRow[`${key}-row-span`] ?? 1)"
                  :colspan="Number(dataRow[`${key}-col-span`] ?? 1)"
                >
                  <slot name="data-item" :item="dataRow" :data-key="key">
                    {{ dataRow[key] }}
                  </slot>
                </td>
              </template>
            </tr>
          </tbody>
        </table>
      </g-scrollbar-box>
    </div>
    <div v-if="data.length === 0" :class="`${COMPONENT}-empty`">
      <slot name="empty">
        <g-icon name="empty" />
        暂无数据
      </slot>
    </div>
  </div>
</template>

<style lang="less">
@COMPONENT: g-table;
.@{COMPONENT} {
  position: relative;
  overflow: auto;
  width: 100%;
  table {
    word-break: break-all;
    white-space: break-spaces;
    min-width: 100%;
    margin: 0;
    border-collapse: collapse;
  }
  &-header-sticky {
    position: sticky;
  }
  thead,
  tbody,
  tr {
    width: 100%;
  }
  th {
    color: @gray-10;
  }
  th,
  td {
    border: 1px solid @gray-3;
    padding: 8px 12px;
  }
  tbody {
    overflow: auto;
  }
  tr:hover {
    background-color: @gray-3;
  }
  .shadow {
    position: absolute;
    top: 0;
    z-index: 1;
    width: 10px;
    height: 100%;
    content: '';
    pointer-events: none;
  }
  .g-scroll-position-left {
    &::before {
      .shadow;
      left: 0;
      box-shadow: inset 6px 0 10px -3px rgba(0, 0, 0, 0.15);
    }
  }
  .g-scroll-position-right {
    &::after {
      .shadow;
      right: 0;
      box-shadow: inset -6px 0 10px -3px rgba(0, 0, 0, 0.15);
    }
  }
  .g-scroll-position-both {
    .g-scroll-position-left;
    .g-scroll-position-right;
  }
  &-empty {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    border: 1px solid @gray-3;
    font-size: 14px;
    color: gray;
    box-sizing: border-box;
    .g-icon {
      font-size: 36px;
    }
  }
}
</style>
