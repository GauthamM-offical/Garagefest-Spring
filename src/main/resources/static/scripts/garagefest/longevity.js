$( document ).ready(function() {		
          
	//chart 1
	var lchart = $("#longevity");

    // Data
    var ldata = {
      // Generate the days labels on the X axis.
      labels: Array.from(new Array(30), function (_, i) {
        return i === 0 ? 1 : i;
      }),
      datasets: [{
        label: 'My Clients',
        fill: 'start',
        data: [500, 800, 320, 180, 240, 320, 230, 650, 590, 1200, 750, 940, 1420, 1200, 960, 1450, 1820, 2800, 2102, 1920, 3920, 3202, 3140, 2800, 3200, 3200, 3400, 2910, 3100, 4250],
        backgroundColor: 'rgba(255,123,255,0.1)',
        borderColor: 'rgba(0,123,255,1)',
        pointBackgroundColor: '#ffffff',
        pointHoverBackgroundColor: 'rgb(0,123,255)',
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      }, {
        label: 'Firm trend',
        fill: 'start',
        data: [380, 430, 120, 230, 410, 740, 472, 219, 391, 229, 400, 203, 301, 380, 291, 620, 700, 300, 630, 402, 320, 380, 289, 410, 300, 530, 630, 720, 780, 1200],
        backgroundColor: 'rgba(0,65,105,0.1)',
        borderColor: 'rgba(255,65,105,1)',
        pointBackgroundColor: '#ffffff',
        pointHoverBackgroundColor: 'rgba(255,65,105,1)',
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      }, {
          label: 'Industry trend',
          fill: 'start',
          data: [343, 232, 877, 4464, 222, 456, 472, 219, 391, 567, 765, 2222, 1111, 380, 291, 3434, 700, 544, 222, 689, 320, 380, 289, 410, 435, 876, 434, 720, 780, 1200],
          backgroundColor: 'rgba(45,65,255,0.1)',
          borderColor: 'rgba(255,65,105,1)',
          pointBackgroundColor: '#ffffff',
          pointHoverBackgroundColor: 'rgba(255,65,105,1)',
          borderWidth: 1.5,
          pointRadius: 0,
          pointHoverRadius: 3
        }]
    };

    // Options
    var loptions = {
      responsive: true,
      legend: {
        position: 'top'
      },
      elements: {
        line: {
          // A higher value makes the line look skewed at this ratio.
          tension: 0.3
        },
        point: {
          radius: 0
        }
      },
      
      // Uncomment the next lines in order to disable the animations.
      // animation: {
      //   duration: 0
      // },
      hover: {
        mode: 'nearest',
        intersect: false
      },
      tooltips: {
        custom: false,
        mode: 'nearest',
        intersect: false
      }
    };

    // Generate the Analytics Overview chart.
    window.lwindow= new Chart(lchart, {
      type: 'LineWithLine',
      data: ldata,
      options: loptions
    });

    // Render the chart.
    window.lwindow.render();
             
     
});