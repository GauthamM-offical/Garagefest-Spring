$( document ).ready(function() {		
          
	//chart 1
	var lchart = $("#longevity");

    // Data
    var ldata = {
      // Generate the days labels on the X axis.
      labels: ['<2','2-5','5-7','7-8','8-10','>10'],
      datasets: [{
        label: 'My Clients',
        fill: 'start',
        data: [30,12,34,44,12,21],
        backgroundColor: 'rgba(255,10,10,0.1)',
        borderColor: 'rgba(255,10,10,1)',
        pointBackgroundColor: '#ffffff',
        pointHoverBackgroundColor: 'rgba(255,10,10,1)',
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      }, {
        label: 'Firm',
        fill: 'start',
        data: [12,21,43,12,5,50],
        backgroundColor: 'rgba(0,65,255,0.1)',
        borderColor: 'rgba(0,65,255,1)',
        pointBackgroundColor: '#ffffff',
        pointHoverBackgroundColor: 'rgba(0,65,255,1)',
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      }, {
          label: 'Platform',
          fill: 'start',
          data: [23,18,54,8,4,32],
          backgroundColor: 'rgba(45,255,15,0.1)',
          borderColor: 'rgba(45,255,15,1)',
          pointBackgroundColor: '#ffffff',
          pointHoverBackgroundColor: 'rgba(45,255,15,1)',
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
      scales: {
	    yAxes: [{
	      scaleLabel: {
	        display: true,
	        labelString: 'Number of clients'
	      }
	    }],
	    xAxes: [{
  	      scaleLabel: {
  	        display: true,
  	        labelString: 'Duration for which the client is under the advisor'
  	      }
  	    }]
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
      type: 'line',
      data: ldata,
      options: loptions
    });

    // Render the chart.
    window.lwindow.render();             
     
});