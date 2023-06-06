export const lineProps = {
  /**
   * @zh 进度条当前的百分比
   * @en The current percentage of the progress bar
   */
  percent: {
    type: Number,
    default: 0,
  },
  /**
   * @zh 是否开启过渡动画
   * @en Whether to turn on the transition animation
   */
  animation: {
    type: Boolean,
    default: false,
  },
  /**
   * @zh 进度条的线宽
   * @en The line width of the progress bar
   */
  strokeWidth: {
    type: Number,
  },
  /**
   * @zh 进度条的长度
   * @en The width of the progress bar
   */
  width: {
    type: [Number, String],
  },
  /**
   * @zh 进度条的颜色
   * @en The color of the progress bar
   */
  color: String,
  /**
   * @zh 进度条的轨道颜色
   * @en The color of the progress track
   */
  trackColor: String,
};
