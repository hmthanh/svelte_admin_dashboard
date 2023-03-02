import colorLib from '@kurkle/color';

export function getGradient(
    ctx,
    chartArea,
    gradient,
    width: number,
    height: number
  ) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (!gradient || width !== chartWidth || height !== chartHeight) {
      // Create the gradient because this is either the first render
      // or the size of the chart has changed
      width = chartWidth;
      height = chartHeight;
      gradient = ctx.createLinearGradient(
        0,
        chartArea.bottom,
        0,
        chartArea.top
      );
      gradient.addColorStop(1, "rgba(54,162,235,0.3)");
      gradient.addColorStop(0.2, "rgba(72,72,176,0.1)");
      gradient.addColorStop(0, "rgba(119,52,169,0)");
    }

    return gradient;
  }


  export function getArcGradient(
    ctx,
    chartArea,
    gradient,
    width: number,
    height: number
  ) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (!gradient || width !== chartWidth || height !== chartHeight) {
      // Create the gradient because this is either the first render
      // or the size of the chart has changed
      width = chartWidth;
      height = chartHeight;
      gradient = ctx.createLinearGradient(
        0,
        chartArea.bottom,
        0,
        chartArea.top
      );
      // gradient.addColorStop(1, "rgba(54,162,235,0.3)");
      // gradient.addColorStop(0.2, "rgba(72,72,176,0.1)");
      // gradient.addColorStop(0, "rgba(119,52,169,0)");
      gradient.addColorStop(1, "rgba(255,162,235,0.3)");
      gradient.addColorStop(0, "rgba(119,52,169,0)");
    }

    return gradient;
  }


  const COLORS = [
    '#4dc9f6',
    '#f67019',
    '#f53794',
    '#537bc4',
    '#acc236',
    '#166a8f',
    '#00a950',
    '#58595b',
    '#8549ba'
  ];

  
  export function color(index) {
    return COLORS[index % COLORS.length];
  }

  export function transparentize(value, opacity) {
    var alpha = opacity === undefined ? 0.5 : 1 - opacity;
    return colorLib(value).alpha(alpha).rgbString();
  }