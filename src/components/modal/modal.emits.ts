export const modalEmits = {
  'update:visible': (visible: boolean) => true,
  /**
   * @zh 点击确定按钮时触发
   * @en Triggered when the OK button is clicked
   * @property {MouseEvent} ev
   */
  ok: (e: Event) => true,
  /**
   * @zh 点击取消、关闭按钮时触发
   * @en Triggered when the cancel/close button is clicked
   * @property {MouseEvent | KeyboardEvent} ev
   */
  cancel: (e: Event) => true,
  /**
   * @zh 对话框打开后（动画结束）触发
   * @en Triggered after the modal is opened (the animation ends)
   */
  open: () => true,
  /**
   * @zh 对话框关闭后（动画结束）触发
   * @en Triggered after the modal is closed (the animation ends)
   */
  close: () => true,
};
