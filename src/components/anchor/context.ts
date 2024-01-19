import { InjectionKey } from 'vue';

export interface AnchorContext {
  currentLink: string;
  addLink: (hash: string, node: HTMLElement) => void;
  removeLink: (hash: string) => void;
  onClick: (e: MouseEvent, hash?: string) => void;
}

export const anchorInjectionKey: InjectionKey<AnchorContext> = Symbol('anchor');
