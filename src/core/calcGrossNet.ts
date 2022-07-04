import {
  REDUCE_DEPENDENT_PERSON,
  TYPE_BUY_INSURANCE,
  MAXIMUM_INCOME_BUY_INSURANCE,
  RATE_PAY_INSURANCE_SOCIAL,
  RATE_PAY_INSURANCE_HEALTH,
  RATE_PAY_INSURANCE_ACCIDENT,
  REDUCE_YOUR_SELF,
  MAXIMUM_INCOME_BUY_INSURANCE_ACCIDENT_AREA_2,
} from '../constants';

import {
  IDataInput,
  IDataOutput,
} from '../types';
import calculatePersonalIncomeTax from './calculatePersonalIncomeTax';

const calcGrossNet = ({
  areaWork,
  incomeBuyInsurance,
  numberDependents,
  salaryIncome,
  typeBuyInsurance,
}: IDataInput) => {
  // 1. nhập lương gross
  const dataOutput: IDataOutput = {
    salaryGross: parseFloat(salaryIncome),
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
    salaryNet: 0,
  };
  // 2. tính tiền giảm trừ người phụ thuộc
  if (parseFloat(numberDependents) > 0) {
    dataOutput.reduceDependents = parseFloat(numberDependents) * REDUCE_DEPENDENT_PERSON;
  }
  // 3. tính tổng tiền đóng bảo hiểm
  dataOutput.incomeBuyInsurance = TYPE_BUY_INSURANCE.OTHER === typeBuyInsurance
    ? parseFloat(`${incomeBuyInsurance}`)
    : parseFloat(salaryIncome);
  // 4. tính tổng tiền đóng bảo hiểm xã hội, y tế, tai nạn lao động
  if (dataOutput.incomeBuyInsurance > MAXIMUM_INCOME_BUY_INSURANCE) {
    dataOutput.incomeBuyInsuranceSocialHealth = MAXIMUM_INCOME_BUY_INSURANCE;
  } else {
    dataOutput.incomeBuyInsuranceSocialHealth = dataOutput.incomeBuyInsurance;
  }
  // 5. tính tổng tiền đóng bảo hiểm thất nghiệp
  if (
    dataOutput.incomeBuyInsurance
    > MAXIMUM_INCOME_BUY_INSURANCE_ACCIDENT_AREA_2[areaWork]
  ) {
    dataOutput.incomeBuyInsuranceAccident = MAXIMUM_INCOME_BUY_INSURANCE_ACCIDENT_AREA_2[areaWork];
  } else {
    dataOutput.incomeBuyInsuranceAccident = dataOutput.incomeBuyInsurance;
  }
  // 5.2 tính tổng tiền cá nhân đóng bảo hiểm
  dataOutput.incomeInsuranceSocial = dataOutput.incomeBuyInsuranceSocialHealth * RATE_PAY_INSURANCE_SOCIAL;
  dataOutput.incomeInsuranceHealth = dataOutput.incomeBuyInsuranceSocialHealth * RATE_PAY_INSURANCE_HEALTH;
  dataOutput.incomeInsuranceAccident = dataOutput.incomeBuyInsuranceAccident * RATE_PAY_INSURANCE_ACCIDENT;
  dataOutput.incomeInsurance = dataOutput.incomeInsuranceSocial;
  dataOutput.incomeInsurance += dataOutput.incomeInsuranceHealth;
  dataOutput.incomeInsurance += dataOutput.incomeInsuranceAccident;
  // 6. tính thu nhập trước thuế
  dataOutput.incomeBeforeTax = dataOutput.salaryGross - dataOutput.incomeInsurance;
  // 7. tính thu nhập chịu thuế
  if (dataOutput.incomeBeforeTax > REDUCE_YOUR_SELF) {
    dataOutput.incomePayTax = dataOutput.incomeBeforeTax
      - REDUCE_YOUR_SELF
      - dataOutput.reduceDependents;
  }
  // 8. tính thuế thu nhập cá nhân
  if (dataOutput.incomePayTax < 0) {
    dataOutput.incomePayTax = 0;
  }
  if (dataOutput.incomePayTax > 0) {
    dataOutput.incomeTax = calculatePersonalIncomeTax(dataOutput.incomePayTax);
  }
  // 9. tính lương net
  dataOutput.salaryNet = dataOutput.incomeBeforeTax - dataOutput.incomeTax;
  return dataOutput;
};

export default calcGrossNet;
