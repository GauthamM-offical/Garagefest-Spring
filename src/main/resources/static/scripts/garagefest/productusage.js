

$( document ).ready(function() {		

    var pchart = $("#productusage");

	var pdata = {
    	
      labels:['UMA','SMA','MF','MMA','FSP'],
      datasets: [{
        hoverBorderColor: '#ffffff',
        data: [40,25,10,12,13],
        backgroundColor: [
          'rgb(255, 120, 120)',
          'rgb(204, 102, 0)',
          'rgb(255, 170, 128)',
          'rgb(255, 230, 128)',
          'rgb(128, 212, 255)'
        ]
      }]
    };

    // Options
    var poptions = {
      legend: {
        position: 'bottom',
        labels: {
          padding: 10,
          boxWidth: 15
        }
      },
      cutoutPercentage: 50,
      // Uncomment the following line in order to disable the animations.
      // animation: false,
      tooltips: {
        custom: false,
        mode: 'index',
        position: 'nearest'
      }
    };


    // Generate the users by device chart.
    window.pwindow = new Chart(pchart, {
      type: 'doughnut',
      data: pdata,
      options: poptions
    });
    
    window.pwindow.render();
    
});