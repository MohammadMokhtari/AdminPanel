import ApexCharts from '../../node_modules/apexcharts/dist/apexcharts';
import selectorEngin from './util/selectorEngin';

var productSelesChrtOption = {
  series: [
    {
      name: 'تعداد فروش',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 30, 29, 46],
    },
  ],

  // markers: {
  //   size: [4, 7],
  // },
  chart: {
    height: 400,
    width: '100%',
    type: 'line',
    zoom: {
      enabled: false,
    },
    fontFamily: 'IRANSans',
    toolbar: {
      show: false,
    },
    redrawOnWindowResize: true,
    // events: {
    //   beforeMount: function (chartContext, config) {
    //     chartContext.render();
    //   },
    // },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {},
  legend: {
    show: false,
  },

  stroke: {
    curve: 'smooth',
    width: 6,
  },
  title: {
    text: 'نمودار فروش محصول',
    align: 'center',
  },

  // grid: {
  //   row: {
  //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
  //     opacity: 0.5,
  //   },
  // },
  responsive: [
    {
      breakpoint: undefined,
      options: {},
    },
  ],
  grid: {
    show: false,
  },
  xaxis: {
    hideOverlappingLabels: false,

    categories: [
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
  },
};

const productSaleChartEl = selectorEngin.findOne('#product-sales-chart');
if (productSaleChartEl != null || productSaleChartEl != undefined) {
  var productSalesChart = new ApexCharts(
    productSaleChartEl,
    productSelesChrtOption
  );
  productSalesChart.render();
}

var satisfactionChartOptions = {
  chart: {
    height: 250,
    type: 'radialBar',
    fontFamily: 'IRANSans',
    redrawOnParentResize: true,
    redrawOnWindowResize: true,
  },
  colors: ['#198754'],
  title: {
    text: 'میزان رضایت مشتری ',
    align: 'center',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '70%',
        background: '#293450',
      },
      track: {
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          blur: 4,
          opacity: 0.15,
        },
      },
      dataLabels: {
        name: {
          offsetY: -10,
          color: '#fff',
          fontSize: '13px',
        },
        value: {
          color: '#fff',
          fontSize: '30px',
          show: true,
        },
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'vertical',
      gradientToColors: ['#20c997'],
      stops: [0, 100],
    },
  },
  stroke: {
    lineCap: 'round',
  },
  series: [70],
  labels: ['راضی'],
};

const satisfactionChartEl = selectorEngin.findOne('#satisfactionChart');
if (satisfactionChartEl != null || satisfactionChartEl != undefined) {
  var satisfactionChart = new ApexCharts(
    satisfactionChartEl,
    satisfactionChartOptions
  );

  satisfactionChart.render();
}

var shopSellingChartOprions = {
  series: [
    {
      name: 'میزان فروش',
      data: [310, 410, 280, 510, 420, 200, 450, 380, 280, 250, 290, 300],
    },
  ],
  colors: ['#008FFB', '#FEB019', '#FF4560', '#775DD0'],
  chart: {
    height: 350,
    width: '100%',
    type: 'line',
    zoom: {
      enabled: false,
    },
    fontFamily: 'IRANSans',
    toolbar: {
      show: false,
    },
    redrawOnParentResize: true,
    redrawOnWindowResize: true,
  },
  style: {
    direction: 'rtl',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 4,
  },
  legend: {
    show: false,
  },
  xaxis: {
    labels: {
      show: true,
      style: {
        fontWeight: 400,
      },
    },
    axisTicks: {
      show: true,
    },
    tooltip: {
      enabled: true,
    },
    categories: [
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
  },
  markers: {
    size: 0,
    strokeWidth: 10,
    hover: {
      size: 10,
      sizeOffset: 3,
    },
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    style: {
      fontSize: '12px',
    },
    y: {
      show: true,
      title: {
        formatter: () => 'فروش ماهانه  :  ' + '     تومان     ' + '000,',
      },
    },
  },
  legend: {
    show: true,
  },
  yaxis: {
    tickAmount: 2,
    labels: {
      show: true,
    },
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: true,
    },
    min: 0,
  },
};

const shopSellingChartEl = selectorEngin.findOne('#shopSellingChart');
if (shopSellingChartEl != null || shopSellingChartEl != undefined) {
  var shopSellingChart = new ApexCharts(
    shopSellingChartEl,
    shopSellingChartOprions
  );

  shopSellingChart.render();
}

var dempartmentSalesOptions = {
  chart: {
    type: 'donut',
    width: '100%',
    height: 400,
    zoom: {
      enabled: false,
    },
    fontFamily: 'IRANSans',
    toolbar: {
      show: false,
    },
    redrawOnParentResize: false,
    redrawOnWindowResize: true,
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      customScale: 0.8,
      donut: {
        size: '75%',
      },
      offsetY: 20,
    },
    stroke: {
      colors: undefined,
    },
  },
  colors: ['#008FFB', '#FEB019', '#FF4560', '#775DD0'],
  title: {
    text: 'نمودار  توضیعی محصولاات ',
    align: 'center',
  },
  series: [21, 23, 19, 14, 6],
  labels: [
    'مد پوشاک',
    'لوازم دیجیتال',
    'خودرو و ابزارآلات صنعتی',
    'زیبایی و سلامت',
    'کتاب و لوازم تحریر , هنری',
  ],
  legend: {
    position: 'left',
    offsetY: 80,
  },
};

const departmentChartEl = selectorEngin.findOne('#dempartmentSales');
if (departmentChartEl != null || departmentChartEl != undefined) {
  var dempartmentSales = new ApexCharts(
    departmentChartEl,
    dempartmentSalesOptions
  );
  dempartmentSales.render();
}
