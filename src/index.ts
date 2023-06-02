import type { App } from 'vue';
import { GButton } from './components/button';
import { GText } from './components/text';
import { GIcon } from './components/icon';
import { GTag } from './components/tag';
import { GModal } from './components/modal';
import { GPagination } from './components/pagination';
import { GScrollbarBox } from './components/scrollbar-box';

export { GButton, GText, GIcon, GTag, GModal, GPagination, GScrollbarBox };

const components = [GButton, GText, GIcon, GTag, GModal, GPagination, GScrollbarBox];

const install = (app: App) => {
  components.forEach(item => {
    app.component(item.name, item);
  });
};

export default {
  install, // 全量引入
};
