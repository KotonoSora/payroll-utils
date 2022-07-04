import {
  LEVEL_PERSONAL_INCOME_TAX,
  ITax,
} from '../constants';

import getMaximumTaxInLevel from './getMaximumTaxInLevel';

const calculatePayTaxInLevel = (
  income: number,
  lastIndex: number,
): number => {
  const data: ITax[] = LEVEL_PERSONAL_INCOME_TAX;

  if (data[lastIndex].min > income || income <= 0) {
    return 0;
  }

  if (
    lastIndex === 6
    || (data[lastIndex].max! >= income
      && data[lastIndex].min < income)
  ) {
    const formatFilter = (x: ITax) => (x.max && income <= x.max && income > x.min) || (income > x.min && x.max === null);
    const item = data.filter(formatFilter);
    const itemIndex = data.findIndex(formatFilter);
    if (item[0]) {
      const rateItem = item[0];
      let result: number = income * rateItem.rate - rateItem.reduce;
      if (itemIndex > 0 && itemIndex <= data.length - 1) {
        result -= getMaximumTaxInLevel(itemIndex - 1);
      }
      return result;
    }
  }

  if (lastIndex && lastIndex <= data.length - 2 && lastIndex >= 0) {
    let result: number = getMaximumTaxInLevel(lastIndex);
    if (lastIndex > 0) {
      result -= getMaximumTaxInLevel(lastIndex - 1);
    }
    return result;
  }
  return 0;
};

export default calculatePayTaxInLevel;
