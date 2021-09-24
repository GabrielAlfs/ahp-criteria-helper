import { calculateWeights } from './calculate-weights';
import { randomConsistencyIndex } from './random-consistency-index';

export const calculateConsistency = (
  matrix: Array<Array<number>>,
  weights?: Array<number>,
): number => {
  if (matrix.length < 3)
    throw new Error('You need at lest 3 criteria to calculate de consistency');

  const scopeWeights = weights || calculateWeights(matrix);

  return (
    (matrix.reduce(
      (acc, array, rowIndex) =>
        acc +
        array.reduce(
          (arrAcc, item, colIndex) => arrAcc + scopeWeights[colIndex] * item,
          0,
        ) /
          scopeWeights[rowIndex],
      0,
    ) /
      scopeWeights.length -
      matrix.length) /
    (matrix.length - 1) /
    randomConsistencyIndex(matrix.length)
  );
};
