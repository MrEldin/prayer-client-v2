export const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Maj',
      'Jun',
      'Jul',
      'Avg',
      'Sep',
      'Okt',
      'Nov',
      'Dec'
    ],
    datasets: [
      {
        backgroundColor: '#247C6E',
        borderRadius: 6,
        data: [5, 5, 12, 20, 5, 25, 5, 15, 20, 30, 40, 5]
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
          display: false,
          grid: {
            display: false
          },
          ticks: {
            display: false
        }

      },
      x: {
        grid: {
          display: false
        }
      },
   },
    plugins: {
      legend: {
        display: false
      }
    }
  }