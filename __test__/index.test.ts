import { calcNetGross, calcGrossNet, TYPE_AREA_WORK, TYPE_BUY_INSURANCE } from "../dist";

describe('calcNetGross', () => {
    test('test case calcNetGross OTHER', () => {
      const result = calcNetGross({
        areaWork: TYPE_AREA_WORK.AREA_WORK_1,
        incomeBuyInsurance: '15000000',
        numberDependents: '0',
        salaryIncome: '15000000',
        typeBuyInsurance: TYPE_BUY_INSURANCE.OTHER
      });
      expect(result.salaryGross.toFixed(0)).toEqual('16785526');
    });
    test('test case calcNetGross BASE_SALARY', () => {
      const result = calcNetGross({
        areaWork: TYPE_AREA_WORK.AREA_WORK_1,
        incomeBuyInsurance: '15000000',
        numberDependents: '0',
        salaryIncome: '15000000',
        typeBuyInsurance: TYPE_BUY_INSURANCE.BASE_SALARY
      });
      expect(result.salaryGross.toFixed(0)).toEqual('16995001');
    });
    test('test case calcNetGross BASE_SALARY', () => {
      const result = calcNetGross({
        areaWork: TYPE_AREA_WORK.AREA_WORK_1,
        incomeBuyInsurance: '20000000',
        numberDependents: '0',
        salaryIncome: '20000000',
        typeBuyInsurance: TYPE_BUY_INSURANCE.BASE_SALARY
      });
      expect(result.salaryGross.toFixed(0)).toEqual('23226257');
    });
    test('test case calcGrossNet OTHER', () => {
      const result = calcGrossNet({
        areaWork: TYPE_AREA_WORK.AREA_WORK_1,
        incomeBuyInsurance: '6550000',
        numberDependents: '0',
        salaryIncome: '23200000',
        typeBuyInsurance: TYPE_BUY_INSURANCE.OTHER
      });
      expect(result.salaryNet.toFixed(0)).toEqual('21535413');
    });
    test('test case calcGrossNet BASE_SALARY', () => {
      const result = calcGrossNet({
        areaWork: TYPE_AREA_WORK.AREA_WORK_1,
        incomeBuyInsurance: '20000000',
        numberDependents: '0',
        salaryIncome: '20000000',
        typeBuyInsurance: TYPE_BUY_INSURANCE.BASE_SALARY
      });
      expect(result.salaryNet.toFixed(0)).toEqual('17460000');
    });
});