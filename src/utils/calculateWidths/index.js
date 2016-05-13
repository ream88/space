export default (widths, totalWidth) => {
  const fixed = widths.filter(width => isFinite(width));
  const flexible = widths.filter(width => !isFinite(width));

  totalWidth = totalWidth - fixed.reduce((sum, width) => sum + width, 0);

  let factor = parseInt(totalWidth / flexible.length);
  let rest = totalWidth - factor * flexible.length;

  return widths
    .map(width => {
      if (!isFinite(width)) {
        width = factor + (rest-- > 0 ? 1 : 0);
      }
      return width;
    });
};
