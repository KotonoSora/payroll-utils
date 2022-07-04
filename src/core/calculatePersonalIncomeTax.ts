import {
  LEVEL_PERSONAL_INCOME_TAX,
  ITax,
} from '../constants';

const calculatePersonalIncomeTax = (income: number): number => {
  const data: ITax[] = LEVEL_PERSONAL_INCOME_TAX;
  const item = data.filter(
    (x: ITax) => (x.max && income <= x.max && income > x.min) || (income > x.min && x.max === undefined),
  );
  let result = 0;
  if (item[0]) {
    const rateItem = item[0];
    result = income * rateItem.rate - rateItem.reduce;
  }
  return result;
};

export default calculatePersonalIncomeTax;
