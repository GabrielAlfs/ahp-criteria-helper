export const calculateWeights = (matrix: Array<Array<number>>): Array<number> =>
  Array.from(Array(matrix.length)).map(
    (_weight, index) =>
      matrix.reduce(
        (acc, array, rowIndex) =>
          acc +
          matrix[index][rowIndex] /
            array.reduce(
              (arrAcc, _value, colIndex) => arrAcc + matrix[colIndex][rowIndex],
              0,
            ),
        0,
      ) / matrix.length,
  );
