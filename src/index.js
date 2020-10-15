/** @format */

import { funcC } from './utils/a';

export const funcD = () => {
  console.info('this is D, and D use C');
  funcC();
};
