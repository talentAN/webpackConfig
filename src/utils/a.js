/** @format */

import { b } from './b';

export const funcA = () => {
  console.info('this is a');
};

export const funcC = () => {
  console.info('this is c, and c, use b');
  b();
};
