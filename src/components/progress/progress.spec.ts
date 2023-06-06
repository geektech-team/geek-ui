import { describe, expect, it } from 'vitest';
import { GProgress } from './index';

describe('GProgress', () => {
  it('name', () => {
    expect(GProgress.name).toBe('GProgress');
  });
});
