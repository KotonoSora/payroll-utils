import {
  LEVEL_PERSONAL_INCOME_TAX,
  ITax,
} from '../constants';

const calculateIncomePayTax = (income: number): number => {
  const data: ITax[] = LEVEL_PERSONAL_INCOME_TAX;
  const formatFilter = (x: ITax) => (x.max && income <= x.max && income > x.min) || (income > x.min && x.max === null);
  const item = data.filter(formatFilter);
  if (item[0]) {
    const rateItem = item[0];
    const result: number = income / (1 - rateItem.rate) + rateItem.reduce;
    return result;
  }
  return 0;
};

export default calculateIncomePayTax;
