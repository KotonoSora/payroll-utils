import {
  REDUCE_DEPENDENT_PERSON,
  TYPE_BUY_INSURANCE,
  MAXIMUM_INCOME_BUY_INSURANCE,
  RATE_PAY_INSURANCE_SOCIAL,
  RATE_PAY_INSURANCE_HEALTH,
  RATE_PAY_INSURANCE_ACCIDENT,
  REDUCE_YOUR_SELF,
  MINIMUM_SALARY_AREA_WORK_2,
  MAXIMUM_RATE_BUY_INSURANCE_SOCIAL_HEALTH,
} from '../constants';

import {
  IDataInput,
  IDataOutput,
} from '../types';

import calculateIncomePayTax from './calculateIncomePayTax';
import calculatePersonalIncomeTax from './calculatePersonalIncomeTax';

const calcNetGross = ({
  areaWork,
  incomeBuyInsurance,
  numberDependents,
  salaryIncome,
  typeBuyInsurance,
}: IDataInput) => {
  // 1. nhập lương net
  const dataOutput: IDataOutput = {
    salaryGross: 0,
    reduceDependents: 0,
    incomeBuyInsurance: 0,
    incomeBuyInsuranceSocialHealth: 0,
    incomeInsuranceSocial: 0,
    incomeInsuranceHealth: 0,
    incomeBuyInsuranceAccident: 0,
    incomeInsuranceAccident: 0,
    incomeInsurance: 0,
    incomeBeforeTax: 0,
    incomePayTax: 0,
    incomeTax: 0,
    salaryNet: parseFloat(salaryIncome),
  };
  // 2. tính tiền giảm trừ người phụ thuộc
  if (parseFloat(numberDependents) > 0) {
    dataOutput.reduceDependents = parseFloat(numberDependents) * REDUCE_DEPENDENT_PERSON;
  }
  // 3. tính thu nhập chịu thuế
  if (parseFloat(salaryIncome) > REDUCE_YOUR_SELF) {
    dataOutput.incomePayTax = parseFloat(salaryIncome) - REDUCE_YOUR_SELF;
    dataOutput.incomePayTax -= dataOutput.reduceDependents;
  }
  if (dataOutput.incomePayTax < 0) {
    dataOutput.incomePayTax = 0;
  } else {
    dataOutput.incomePayTax = calculateIncomePayTax(dataOutput.incomePayTax);
  }
  // 4. tính thuế thu nhập cá nhân
  if (dataOutput.incomePayTax > 0) {
    dataOutput.incomeTax = calculatePersonalIncomeTax(dataOutput.incomePayTax);
  }
  // 5. tính thu nhập trước thuế
  dataOutput.incomeBeforeTax = parseFloat(salaryIncome) + dataOutput.incomeTax;
  // 6. tính tổng tiền đóng bảo hiểm
  if (TYPE_BUY_INSURANCE.OTHER === typeBuyInsurance) {
    dataOutput.incomeBuyInsurance = parseFloat(`${incomeBuyInsurance}`);
  } else {
    dataOutput.incomeBuyInsurance = dataOutput.incomeBeforeTax
      / (1
        - RATE_PAY_INSURANCE_SOCIAL
        - RATE_PAY_INSURANCE_HEALTH
        - RATE_PAY_INSURANCE_ACCIDENT);
  }
  // 7. tính tổng tiền đóng bảo hiểm xã hội, y tế, tai nạn lao động
  if (dataOutput.incomeBuyInsurance > MAXIMUM_INCOME_BUY_INSURANCE) {
    dataOutput.incomeBuyInsuranceSocialHealth = MAXIMUM_INCOME_BUY_INSURANCE;
  } else {
    dataOutput.incomeBuyInsuranceSocialHealth = dataOutput.incomeBuyInsurance;
  }
  // 8. tính tổng tiền đóng bảo hiểm thất nghiệp
  const MAXIMUM_BUY_INSURANCE_ACCIDENT = MAXIMUM_RATE_BUY_INSURANCE_SOCIAL_HEALTH
    * MINIMUM_SALARY_AREA_WORK_2[areaWork];
  if (dataOutput.incomeBuyInsurance > MAXIMUM_BUY_INSURANCE_ACCIDENT) {
    dataOutput.incomeBuyInsuranceAccident = MAXIMUM_BUY_INSURANCE_ACCIDENT;
  } else {
    dataOutput.incomeBuyInsuranceAccident = dataOutput.incomeBuyInsurance;
  }
  // 8.2 tính tổng tiền cá nhân đóng bảo hiểm
  dataOutput.incomeInsuranceSocial = dataOutput.incomeBuyInsuranceSocialHealth * RATE_PAY_INSURANCE_SOCIAL;
  dataOutput.incomeInsuranceHealth = dataOutput.incomeBuyInsuranceSocialHealth * RATE_PAY_INSURANCE_HEALTH;
  dataOutput.incomeInsuranceAccident = dataOutput.incomeBuyInsuranceAccident * RATE_PAY_INSURANCE_ACCIDENT;
  dataOutput.incomeInsurance = dataOutput.incomeInsuranceSocial;
  dataOutput.incomeInsurance += dataOutput.incomeInsuranceHealth;
  dataOutput.incomeInsurance += dataOutput.incomeInsuranceAccident;
  // 9. tính lương gross
  dataOutput.salaryGross = dataOutput.incomeBeforeTax + dataOutput.incomeInsurance;
  return dataOutput;
};

export default calcNetGross;
