import { PropType } from 'vue';

export const modalProps = {
  /**
   * @en Whether the modal is visible
   * @vModel
   */
  visible: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @zh 对话框默认是否可见（非受控状态）
   * @en Whether the modal is visible by default (uncontrolled state)
   */
  defaultVisible: {
    type: Boolean,
    default: false,
  },
  /**
   * @zh 标题
   * @en Title
   */
  title: {
    type: String,
  },
  /**
   * @zh 是否显示关闭按钮
   * @en Whether to show the close button
   */
  closable: {
    type: Boolean,
    default: true,
  },
  /**
   * @zh 弹出框的挂载容器
   * @en Mount container for modal
   */
  popupContainer: {
    type: [String, Object] as PropType<string | HTMLElement>,
    default: 'body',
  },
  /**
   * @zh 是否显示遮罩层
   * @en Whether to show the mask
   */
  mask: {
    type: Boolean,
    default: true,
  },
  /**
   * @zh 遮罩层动画名字
   * @en Mask layer animation name
   * @defaultValue -
   * @version 2.24.0
   */
  maskAnimationName: {
    type: String,
    default: (props: Record<string, any>) => {
      return 'fade';
    },
  },
  /**
   * @zh 对话框动画名字
   * @en Modal animation name
   * @defaultValue -
   * @version 2.24.0
   */
  modalAnimationName: {
    type: String,
    default: (props: Record<string, any>) => {
      return 'zoom-modal';
    },
  },
  /**
   * @zh 是否隐藏取消按钮
   * @en Whether to hide the cancel button
   */
  hideCancel: {
    type: Boolean,
    default: false,
  },
  /**
   * @zh 确认按钮的内容
   * @en The content of the confirm button
   */
  okText: {
    type: String,
    default: 'OK',
  },
  /**
   * @zh 取消按钮的内容
   * @en The content of the cancel button
   */
  cancelText: {
    type: String,
    default: 'Cancel',
  },
};
