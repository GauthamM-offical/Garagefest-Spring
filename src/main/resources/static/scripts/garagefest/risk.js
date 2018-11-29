$( document ).ready(function() {

	var rchart = $("#riskband");

    // Data
    var rdata = {
      // Generate the days labels on the X axis.
      labels: ['1-20','21-35','36-55','56-65','66-75','76-85','86-100'],
      datasets: [{
        label: 'My accounts',
        fill: 'start',
        data: [-10, 10, 20, 60, 45, 32, 45],
        backgroundColor: 'rgba(0,123,255,0.1)',
        borderColor: 'rgba(0,123,255,1)',
        pointBackgroundColor: '#ffffff',
        pointHoverBackgroundColor: 'rgb(0,123,255)',
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      }, {
        label: 'Firm trend',
        fill: 'start',
        data: [15, 14, 10, 32, 19, 45, 10],
        backgroundColor: 'rgba(255,65,105,0.1)',
        borderColor: 'rgba(255,65,105,1)',
        pointBackgroundColor: '#ffffff',
        pointHoverBackgroundColor: 'rgba(255,65,105,1)',
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      }]
    };

    // Options
    var roptions = {
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
    window.rwindow= new Chart(rchart, {
      type: 'bar',
      data: rdata,
      options: roptions
    });



    // Render the chart.
    window.rwindow.render();        
    
    
    
});