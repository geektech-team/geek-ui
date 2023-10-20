import { onMounted, Ref } from 'vue';

export default function useResizeObserve (refEl: Ref, callback: () => void) {
  const resizeObserver = new ResizeObserver(callback);
  onMounted(() => {
    const observeDom = refEl.value?.$el || refEl.value;
    if (observeDom) {
      resizeObserver.observe(observeDom);
    }
  });
  return {
    resizeObserver,
  };
}
