// add formatting for labels similar to ticks

export const chartOptions = {
  scaleShowVerticalLines: false,
  responsive: true,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true,
        userCallback: function (value){
          if (value < 1){
            return "";
          } else if (value < 10000){
            return "$" + value;
          } else if (value < 1000000){
            return "$" + (value/1000)+",000";
          } else if (value < 1000000000){
            return "$" + value/1000000 + " Million";
          } else {
            return "$" + value/1000000000 + " Billion";
          }
        }
      }
    }],
    xAxes: [{
      ticks: {
        userCallback: function(value) {

        if ( value.length > 15 ){
          return value.slice(0,13) + "...";
        }
        return value;
        }
      }
    }]
  }
}

export const chartColors = [
  // Imports
  { backgroundColor: '#ff9800' },
  // Exports
  { backgroundColor: '#4caf50' }
]