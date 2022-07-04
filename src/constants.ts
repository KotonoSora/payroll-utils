export enum TYPE_AREA_WORK {
  AREA_WORK_1 = 'AREA_WORK_1',
  AREA_WORK_2 = 'AREA_WORK_2',
  AREA_WORK_3 = 'AREA_WORK_3',
  AREA_WORK_4 = 'AREA_WORK_4',
}

export enum TYPE_BUY_INSURANCE {
  BASE_SALARY = 'BASE_SALARY',
  OTHER = 'OTHER',
}

/**
Từ 01/07/2020 - 30/06/2022
Lương cơ sở: 1,490,000đ

Giảm trừ gia cảnh bản thân: 11,000,000đ / tháng

Người phụ thuộc: 4,400,000đ / người / tháng

Mức lương tối thiểu vùng:

- Vùng I: 4,420,000 đồng/tháng
- Vùng II: 3,920,000 đồng/tháng
- Vùng III: 3,430,000 đồng/tháng
- Vùng IV: 3,070,000 đồng/tháng
 */
export enum MINIMUM_SALARY_AREA_WORK {
  AREA_WORK_1 = 4.42 * 1000 * 1000,
  AREA_WORK_2 = 3.92 * 1000 * 1000,
  AREA_WORK_3 = 3.43 * 1000 * 1000,
  AREA_WORK_4 = 3.07 * 1000 * 1000,
}

/**
Từ 01/07/2022
Lương cơ sở: 1,490,000đ

Giảm trừ gia cảnh bản thân: 11,000,000đ / tháng

Người phụ thuộc: 4,400,000đ / người / tháng

Mức lương tối thiểu vùng:

- Vùng I: 4,680,000 đồng/tháng
- Vùng II: 4,160,000 đồng/tháng
- Vùng III: 3,640,000 đồng/tháng
- Vùng IV: 3,250,000 đồng/tháng
 */
export enum MINIMUM_SALARY_AREA_WORK_2 {
  AREA_WORK_1 = 4.68 * 1000 * 1000,
  AREA_WORK_2 = 4.16 * 1000 * 1000,
  AREA_WORK_3 = 3.64 * 1000 * 1000,
  AREA_WORK_4 = 3.25 * 1000 * 1000,
}

export const MINIMUM_SALARY_INCOME_GENERAL = 1490000;
export const MAXIMUM_RATE_BUY_INSURANCE_SOCIAL_HEALTH = 20;
export const MAXIMUM_INCOME_BUY_INSURANCE: number = MAXIMUM_RATE_BUY_INSURANCE_SOCIAL_HEALTH * MINIMUM_SALARY_INCOME_GENERAL;
export enum MAXIMUM_INCOME_BUY_INSURANCE_ACCIDENT_AREA {
  AREA_WORK_1 = MAXIMUM_RATE_BUY_INSURANCE_SOCIAL_HEALTH
    * MINIMUM_SALARY_AREA_WORK.AREA_WORK_1,
  AREA_WORK_2 = MAXIMUM_RATE_BUY_INSURANCE_SOCIAL_HEALTH
    * MINIMUM_SALARY_AREA_WORK.AREA_WORK_2,
  AREA_WORK_3 = MAXIMUM_RATE_BUY_INSURANCE_SOCIAL_HEALTH
    * MINIMUM_SALARY_AREA_WORK.AREA_WORK_3,
  AREA_WORK_4 = MAXIMUM_RATE_BUY_INSURANCE_SOCIAL_HEALTH
    * MINIMUM_SALARY_AREA_WORK.AREA_WORK_4,
}
export enum MAXIMUM_INCOME_BUY_INSURANCE_ACCIDENT_AREA_2 {
  AREA_WORK_1 = MAXIMUM_RATE_BUY_INSURANCE_SOCIAL_HEALTH
    * MINIMUM_SALARY_AREA_WORK_2.AREA_WORK_1,
  AREA_WORK_2 = MAXIMUM_RATE_BUY_INSURANCE_SOCIAL_HEALTH
    * MINIMUM_SALARY_AREA_WORK_2.AREA_WORK_2,
  AREA_WORK_3 = MAXIMUM_RATE_BUY_INSURANCE_SOCIAL_HEALTH
    * MINIMUM_SALARY_AREA_WORK_2.AREA_WORK_3,
  AREA_WORK_4 = MAXIMUM_RATE_BUY_INSURANCE_SOCIAL_HEALTH
    * MINIMUM_SALARY_AREA_WORK_2.AREA_WORK_4,
}
export enum TYPE_EXPORT {
  GROSS_TO_NET = 'GROSS_TO_NET',
  NET_TO_GROSS = 'NET_TO_GROSS',
}
export const RATE_PAY_INSURANCE_SOCIAL = 8 / 100;
export const RATE_PAY_INSURANCE_HEALTH = 1.5 / 100;
export const RATE_PAY_INSURANCE_ACCIDENT = 1 / 100;
export const RATE_PAY_INSURANCE_SOCIAL_COMPANY = 17 / 100;
export const RATE_PAY_INSURANCE_ACCIDENT_LABOR = 0.5 / 100;
export const RATE_PAY_INSURANCE_HEALTH_COMPANY = 3 / 100;
export const RATE_PAY_INSURANCE_ACCIDENT_COMPANY = 1 / 100;

/**
Áp dụng mức giảm trừ gia cảnh mới nhất 11 triệu đồng/tháng (132 triệu đồng/năm)
với nguời nộp thuế và 4,4 triệu đồng/tháng với mỗi người phụ thuộc (Theo Nghị quyết số 954/2020/UBTVQH14)
 */
export const REDUCE_YOUR_SELF = 11 * 1000 * 1000;
export const REDUCE_DEPENDENT_PERSON = 4.4 * 1000 * 1000;

export interface ITax {
  max: number | null;
  min: number;
  rate: number;
  reduce: number;
}

export const LEVEL_PERSONAL_INCOME_TAX: ITax[] = [
  {
    max: 5 * 1000 * 1000,
    min: 0,
    rate: 5 / 100,
    reduce: 0,
  },
  {
    max: 10 * 1000 * 1000,
    min: 5 * 1000 * 1000,
    rate: 10 / 100,
    reduce: 0.25 * 1000 * 1000,
  },
  {
    max: 18 * 1000 * 1000,
    min: 10 * 1000 * 1000,
    rate: 15 / 100,
    reduce: 0.75 * 1000 * 1000,
  },
  {
    max: 32 * 1000 * 1000,
    min: 18 * 1000 * 1000,
    rate: 20 / 100,
    reduce: 1.65 * 1000 * 1000,
  },
  {
    max: 52 * 1000 * 1000,
    min: 32 * 1000 * 1000,
    rate: 25 / 100,
    reduce: 3.25 * 1000 * 1000,
  },
  {
    max: 80 * 1000 * 1000,
    min: 52 * 1000 * 1000,
    rate: 30 / 100,
    reduce: 5.85 * 1000 * 1000,
  },
  {
    max: null,
    min: 80 * 1000 * 1000,
    rate: 35 / 100,
    reduce: 9.85 * 1000 * 1000,
  },
];
