import { ChartBarFill, ChartBarInner, ChartBarOuter, ChartBarLabel } from './chart-bar.styles';

const ChartBar = props => {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  };

  return (
    <ChartBarOuter>
      <ChartBarInner>
        <ChartBarFill style={{ height: barFillHeight }}></ChartBarFill>
      </ChartBarInner>
      <ChartBarLabel>{props.label}</ChartBarLabel>
    </ChartBarOuter>
  );
};

export default ChartBar;