export const narcissistic = (value: number): boolean => {
  const arrFromNumber = value.toString().split("");
  const numberLength = arrFromNumber.length;
  const poweredNumsArr = arrFromNumber.map((number) =>
    Math.pow(+number, numberLength)
  );
  const sumOfPowers = poweredNumsArr.reduce((acc, val) => +acc + val, 0);
  return value === sumOfPowers;
}

narcissistic(7);
