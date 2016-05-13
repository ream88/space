const calculateWidths = (widths, totalWidth) => {
  const fixed = widths.filter(width => isFinite(width));
  const flexible = widths.filter(width => !isFinite(width));
  const totalFixedWidth = fixed.reduce((sum, width) => sum + width, 0);

  if (totalFixedWidth > totalWidth) {
    let rest = totalFixedWidth - totalWidth;
    let factors = calculateWidths(fixed.map(() => Infinity), rest);

    return widths
      .map(width => {
        if (!isFinite(width)) {
          return 0;
        }
        return width - factors.shift();
      });
  } else {
    let rest = totalWidth - totalFixedWidth;
    let factor = parseInt(rest / flexible.length);
    rest = rest - factor * flexible.length;

    return widths
      .map(width => {
        if (!isFinite(width)) {
          return factor + (rest-- > 0 ? 1 : 0);
        }
        return width;
      });
  }
};

export default calculateWidths;
