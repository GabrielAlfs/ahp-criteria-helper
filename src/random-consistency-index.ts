export const randomConsistencyIndex = (numberOfCriteria: number): number => {
  if (numberOfCriteria > 11)
    throw new Error(
      "Sorry, this package still can't calculate the consistency with more than 11 criteria",
    );

  return (
    {
      2: 0,
      3: 0.58,
      4: 0.9,
      5: 1.12,
      6: 1.24,
      7: 1.32,
      8: 1.41,
      9: 1.45,
      10: 1.49,
    } as Record<number, number>
  )[numberOfCriteria];
};
