import type { App } from 'vue';
import GTimeline from './timeline.vue';
import GTimelineItem from './timeline-item.vue';

// 作为插件引入
GTimeline.name = 'GTimeline';
GTimelineItem.name = 'GTimelineItem';
GTimeline.install = function (app: App): void {
  app.component(GTimeline.name, GTimeline);
};
GTimelineItem.install = function (app: App): void {
  app.component(GTimelineItem.name, GTimelineItem);
};

// 按需
export { GTimeline, GTimelineItem };
