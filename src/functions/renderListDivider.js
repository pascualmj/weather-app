const renderListDivider = (currentIndex, listLength, dividerFn) => {
  return dividerFn && currentIndex !== listLength - 1 && dividerFn();
};

export default renderListDivider;
