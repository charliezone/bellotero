export const CALCULATOR_CALCULATE = 'CALCULATOR_CALCULATE';

export const calculatorCalculate = item => ({
  type: CALCULATOR_CALCULATE,
  payload: { item }
});