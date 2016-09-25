import { TopTenData } from '../../models';

export function setTTCountries(label: string, chartData: any[]) {
  let TTCountries: TopTenData = {
    chart: {
      data: [], label: label
    },
    labels: [],
    table: []
  }

  for(let i = 0; i < 10; i ++){
    TTCountries.chart.data.push(chartData[i][0])
    TTCountries.labels.push(chartData[i][1]);
    let row =  {
      country: chartData[i][0],
      value: chartData[i][0]
    }
    TTCountries.table.push(row);
  }

  return TTCountries;
  
}