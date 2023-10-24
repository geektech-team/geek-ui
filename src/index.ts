import type { App } from 'vue';
import { GCol } from './components/col';
import { GRow } from './components/row';
import { GButton } from './components/button';
import { GText } from './components/text';
import { GIcon } from './components/icon';
import { GTag } from './components/tag';
import { GModal } from './components/modal';
import { GPagination } from './components/pagination';
import { GScrollbarBox } from './components/scrollbar-box';
import { GCarousel, GCarouselItem } from './components/carousel';
import { GTimeline, GTimelineItem } from './components/timeline';
import { GLoading } from './components/loading';
import { GProgress } from './components/progress';
import { GTable } from './components/table';

const components = [
  GCol,
  GRow,
  GButton,
  GText,
  GIcon,
  GTag,
  GModal,
  GPagination,
  GScrollbarBox,
  GCarousel,
  GCarouselItem,
  GTimeline,
  GTimelineItem,
  GLoading,
  GProgress,
  GTable,
];

const install = (app: App) => {
  components.forEach(item => {
    app.component(item.name, item);
  });
};

export default {
  install, // 全量引入
};

export {
  // Components
  GCol,
  GRow,
  GButton,
  GText,
  GIcon,
  GTag,
  GModal,
  GPagination,
  GScrollbarBox,
  GCarousel,
  GCarouselItem,
  GTimeline,
  GTimelineItem,
  GLoading,
  GProgress,
  GTable,
};
