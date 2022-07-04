import { TYPE_AREA_WORK } from './constants';

export type IPayrollContext = {
    values?: any;
    errors?: any;
    handleChange?: any;
    output?: any;
}

export type IDataInput = {
    areaWork: TYPE_AREA_WORK;
    incomeBuyInsurance?: string;
    numberDependents: string;
    salaryIncome: string;
    typeBuyInsurance: string;
}

export type IDataOutput = {
    salaryGross: number;
    reduceDependents: number;
    incomeBuyInsurance: number;
    incomeBuyInsuranceSocialHealth: number;
    incomeInsuranceSocial: number;
    incomeInsuranceHealth: number;
    incomeBuyInsuranceAccident: number;
    incomeInsuranceAccident: number;
    incomeInsurance: number;
    incomeBeforeTax: number;
    incomePayTax: number;
    incomeTax: number;
    salaryNet: number;
}
