export const data = {
    labels: [ 'Pon', 'Uto', 'Uto', 'Sre', 'Sre', 'Cet', 'Cet', 'Pet', 'Sub', 'Ned', 'Pon'],
    datasets: [
      {
        label: false,
        borderColor: '#EBA36C',
        data: [40, 10, 15, 50, 60, 17, 45, 12, 43, 10, 12 ]
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            display: false
        }
    },
    plugins: {
        legend: {
          display: false
        }
      },
      elements: {
        point:{
            radius: 0
        }
    }
  }
  