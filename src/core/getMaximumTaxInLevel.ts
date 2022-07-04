import {
  LEVEL_PERSONAL_INCOME_TAX,
} from '../constants';

const getMaximumTaxInLevel = (index: number): number => {
  let value: number = LEVEL_PERSONAL_INCOME_TAX[index].max ?? 0;
  value *= LEVEL_PERSONAL_INCOME_TAX[index].rate;
  value -= LEVEL_PERSONAL_INCOME_TAX[index].reduce;
  return value;
};

export default getMaximumTaxInLevel;
