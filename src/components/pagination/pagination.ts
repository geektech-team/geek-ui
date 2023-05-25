export const paginationProps = {
  current: {
    type: Number,
    default: 1,
  },
  jumper: {
    type: Boolean,
    default: false,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  total: {
    type: Number,
    default: 10,
  },
};

export const paginationEmit = {
  change: (value: number) => value,
};
