export const selectStatistics = (state) => state.statistics.statistics;
export const selectMonth = (state) => state.statistics.month;
export const selectYear = (state) => state.statistics.year;
export const selectSelectedCategory = (state) => state.statistics.selectedCategory;

export const selectFilteredStatistics = (state) => {
  const selected = state.statistics.selectedCategory;
  if (!selected) return state.statistics.statistics;
  return state.statistics.statistics.filter(item => item.category === selected);
};
