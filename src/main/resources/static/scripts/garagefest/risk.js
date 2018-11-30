$(document).ready(function() {

			var rchart = $("#riskband");

			// Data
			var rdata = {
				// Generate the days labels on the X axis.
				labels : [ '1-20', '21-35', '36-55', '56-65', '66-75',
						'76-85', '86-100' ],
				datasets : [ {
					label : 'My accounts',
					fill : 'start',
					data : [ -10, 10, 20, 60, 45, 32, 45 ],
					backgroundColor : 'rgba(0,123,255,0.1)',
					borderColor : 'rgba(0,123,255,1)',
					pointBackgroundColor : '#ffffff',
					pointHoverBackgroundColor : 'rgb(0,123,255)',
					borderWidth : 1.5,
					pointRadius : 0,
					pointHoverRadius : 3
				}, {
					label : 'Firm trend',
					fill : 'start',
					data : [ 15, 14, 10, 32, 19, 45, 10 ],
					backgroundColor : 'rgba(255,65,105,0.1)',
					borderColor : 'rgba(255,65,105,1)',
					pointBackgroundColor : '#ffffff',
					pointHoverBackgroundColor : 'rgba(255,65,105,1)',
					borderWidth : 1.5,
					pointRadius : 0,
					pointHoverRadius : 3
				} ]
			};

			// Options
			var roptions = {
				responsive : true,
				legend : {
					position : 'top'
				},
				elements : {
					line : {
						// A higher value makes the line look skewed at
						// this
						// ratio.
						tension : 0.3
					},
					point : {
						radius : 0
					}
				},
				// Uncomment the next lines in order to disable the
				// animations.
				// animation: {
				// duration: 0
				// },
				hover : {
					mode : 'nearest',
					intersect : false
				},
				tooltips : {
					custom : false,
					mode : 'nearest',
					intersect : false
				}
			};

			// Generate the Analytics Overview chart.
			window.rwindow = new Chart(rchart, {
				type : 'bar',
				data : rdata,
				options : roptions
			});

			// Render the chart.
			window.rwindow.render();

			//
			// Rise Revenue distribution pie chart
			//

			// Data
			var advisorRiskRevenueData = {
				datasets : [ {
					hoverBorderColor : '#ffffff',
					data : [ 68.3, 24.2, 7.5 ],
					backgroundColor : [ 'rgb(153, 153, 255)',
							'rgb(77, 77, 255)', 'rgb(0, 0, 255)' ]
				} ],
				labels : [ "conservative", "moderate", "High risk" ]
			};

			var firmRiskRevenueData = {
				datasets : [ {
					hoverBorderColor : '#ffffff',
					data : [ 68.3, 24.2, 7.5 ],
					backgroundColor : [ 'rgb(153, 255, 187)',
							'rgb(26, 255, 102)', 'rgb(0, 153, 51)' ]
				} ],

				labels : [ "conservative", "moderate", "High risk" ]
			};

			var marketRiskRevenueData = {
				datasets : [ {
					hoverBorderColor : '#ffffff',
					data : [ 68.3, 24.2, 7.5 ],
					backgroundColor : [ 'rgb(255, 128, 128)',
							'rgb(255, 77, 77)', 'rgb(204, 0, 0)' ]
				} ],
				labels : [ "conservative", "moderate", "High risk" ]
			};

			// Options
			var ubdOptions = {
				legend : {
					position : 'bottom',
					labels : {
						padding : 25,
						boxWidth : 20
					}
				},
				cutoutPercentage : 0,
				// Uncomment the following line in order to disable the
				// animations.
				// animation: false,
				tooltips : {
					custom : false,
					mode : 'index',
					position : 'nearest'
				}
			};

			var advisorRiskRevenue = document
					.getElementsByClassName('advisorriskrevenue')[0];

			// Generate the users by device chart.
			window.advisorRiskRevenueChart = new Chart(advisorRiskRevenue, {
				type : 'pie',
				data : advisorRiskRevenueData,
				options : ubdOptions
			});

			var firmRiskRevenue = document
					.getElementsByClassName('firmriskrevenue')[0];

			// Generate the users by device chart.
			window.firmRiskRevenueChart = new Chart(firmRiskRevenue, {
				type : 'pie',
				data : firmRiskRevenueData,
				options : ubdOptions
			});

			var marketRiskRevenue = document
					.getElementsByClassName('marketriskrevenue')[0];

			// Generate the users by device chart.
			window.marketRiskRevenueChart = new Chart(marketRiskRevenue, {
				type : 'pie',
				data : marketRiskRevenueData,
				options : ubdOptions
			});

});