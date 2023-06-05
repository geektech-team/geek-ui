import { PropType } from 'vue';

export const colProps = {
  /**
   * @zh 栅格占位格数
   * @en Number of grid space
   */
  span: {
    type: Number,
    default: 24,
  },
  /**
   * @zh 栅格左侧的间隔格数，间隔内不可以有栅格
   * @en The number of grids on the left side of the grid. There can be no grids in the grid.
   */
  offset: {
    type: Number,
  },
  /**
   * @zh < 576px 响应式栅格
   * @en <576px responsive grid
   */
  xs: {
    type: [Number, Object] as PropType<number | { [key: string]: any }>,
  },
  /**
   * @zh >= 576px 响应式栅格
   * @en >= 576px responsive grid
   */
  sm: {
    type: [Number, Object] as PropType<number | { [key: string]: any }>,
  },
  /**
   * @zh >= 768px 响应式栅格
   * @en >= 768px responsive grid
   */
  md: {
    type: [Number, Object] as PropType<number | { [key: string]: any }>,
  },
  /**
   * @zh >= 992px 响应式栅格
   * @en >= 992px responsive grid
   */
  lg: {
    type: [Number, Object] as PropType<number | { [key: string]: any }>,
  },
  /**
   * @zh >= 1200px 响应式栅格
   * @en >= 1200px responsive grid
   */
  xl: {
    type: [Number, Object] as PropType<number | { [key: string]: any }>,
  },
  /**
   * @zh >= 1600px 响应式栅格
   * @en >= 1600px responsive grid
   */
  xxl: {
    type: [Number, Object] as PropType<number | { [key: string]: any }>,
  },
};
