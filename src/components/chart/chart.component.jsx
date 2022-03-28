import ChartBar from './chart-bar/chart-bar.component';


import { ChartDiv } from './chart.styles';

const Chart = props => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <ChartDiv>
      {props.dataPoints.map((dataPoint) => (
      <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMaximum}
        label={dataPoint.label}
      />
      ))}
    </ChartDiv>
  );
};

export default Chart;