var ctx = document.getElementById('sellingProductChart').getContext('2d');

Chart.defaults.font.family = 'IRANsans';
var sellingChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [
      'فروردین',
      'اردیبهشت',
      'خرداد',
      'تیر',
      'مرداد',
      'شهریور',
      'مهر',
      'ابان',
      'آذر',
      'دی',
      'بهمن',
      'اسفند',
    ],
    datasets: [
      {
        label: 'فروش ',
        data: [12, 19, 3, 5, 2, 3, 6, 5, 10, 11, 23, 20],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 5,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const ctxs = document
  .getElementById('satisfactionProductChart')
  .getContext('2d');

const DATA_COUNT = 5;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

// const data = {
//   labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: Utils.numbers(NUMBER_CFG),
//       backgroundColor: Object.values(Utils.CHART_COLORS),
//     },
//   ],
// };

var satisfactionChart = new Chart(ctxs, {
  type: 'pie',
  data: {
    datasets: [
      {
        label: 'فروش ',
        data: [60, 40],
        backgroundColor: ['rgba(240, 17, 66, 0.6)', 'rgba(36, 185, 6, 0.6)'],
        borderWidth: 2,
      },
    ],
  },
});

export { sellingChart, satisfactionChart };
