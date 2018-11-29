$(document).ready(function() {

			var rchart1 = $("#riskadvisor");
			var rchart2 = $("#riskfirm");
			var rchart3 = $("#riskplatform");

			var advisorRiskRevenueData = {
					labels : [ 'Low (<30)','Medium (31-75)','High (>76)'],
					datasets : [ {
						hoverBorderColor : '#ffffff',
						data : [ 68.3, 24.2, 7.5 ],
						backgroundColor : [ 'rgb(153, 153, 255)',
								'rgb(77, 77, 255)', 'rgb(0, 0, 255)' ]
					} ]
				};
			var firmRiskRevenueData = {
					labels : [ 'Low (<30)','Medium (31-75)','High (>76)'],
					datasets : [ {
						hoverBorderColor : '#ffffff',
						data : [ 68.3, 24.2, 7.5 ],
						backgroundColor : [ 'rgb(153, 255, 187)',
								'rgb(26, 255, 102)', 'rgb(0, 153, 51)' ]
					} ]

				};
			
			
			var marketRiskRevenueData = {
					labels : [ 'Low (<30)','Medium (31-75)','High (>76)'],
					datasets : [ {
						hoverBorderColor : '#ffffff',
						data : [ 68.3, 24.2, 7.5 ],
						backgroundColor : [ 'rgb(255, 128, 128)',
								'rgb(255, 77, 77)', 'rgb(204, 0, 0)' ]
					} ]
				};
			
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
			window.rwindow1 = new Chart(rchart1, {
				type : 'pie',
				data : advisorRiskRevenueData,
				options : roptions
			});

			// Render the chart.
			window.rwindow1.render();

			window.rwindow2 = new Chart(rchart2, {
				type : 'pie',
				data : advisorRiskRevenueData,
				options : roptions
			});

			// Render the chart.
			window.rwindow2.render();
			
			
			window.rwindow3 = new Chart(rchart3, {
				type : 'pie',
				data : marketRiskRevenueData,
				options : roptions
			});

			// Render the chart.
			window.rwindow3.render();


			
			var lowriskproducts1 = "Dana Large Cap Equity Managed Account Model";
			var lowriskproducts2 = "RCM Targeted Growth Portfolio Model";
			var lowpct1="45%";
			var lowpct2="21%";
				
			var mediumriskproducts1 = "Aletheia Large Cap Growth Managed Account Model";
			var mediumriskproducts2 = "Transamerica Large Cap Growth Managed Account Model";
			var medpct1="33%";
			var medpct2="27%";
			
			var highriskproducts1 = "John Hancock AM International ADR Managed Account Model";
			var highriskproducts2 = "Neuberger Berman International ADR Mgd. Acct. Model ";
			var highpct1="38%";
			var highpct2="23%";
			
			var lunderpsec1="LLTC";
			var lunderpsecper1="7.8%";
			var lunderpsec2="LVLT";
			var lunderpsecper2="7.2%";
			
			var hunderpsec1="MRK";
			var hunderpsecper1="9.1%";
			var hunderpsec2="FOX";
			var hunderpsecper2="4.5%";
			
			var hunderpsec1="HTHIY";
			var hunderpsecper1="8.4%";
			var hunderpsec2="SMAWY";
			var hunderpsecper2="5.4%";
									
			
			
			var lf1="SAN";
			var lft1="9.9%";
			var lf2="HSON";
			var lft2="8.5%";
			var lf3="MAT";
			var lft3="7.9%";
			
			
			var lp1="JNJ";
			var lpt1="8.8%";
			var lp2="PFE";
			var lpt2="8.6%";
			var lp3="SWY";
			var lpt3="7.9%";
			
			
			var mf1="USW";
			var mft1="7.5";
			var mf2="IBM";
			var mft2="6.5";
			var mf3="LUV";
			var mft3="5.5";
			
			var mp1="NE";
			var mpt1="6.5";
			var mp2="FLMIQ";
			var mpt2="6.5";
			var mp3="HIG";
			var mpt3="6.4";
			
			var hf1="HMC";
			var hft1="7.9%";
			var hf2="DDAIF";
			var hft2="6.8%";
			var hf3="SAN";
			var hft3="6.5%";
			
			var hp1="HMC";
			var hpt1="7.9%";
			var hp2="DDAIF";
			var hpt2="6.8%";
			var hp3="INTC";
			var hpt3="6.75%";
			
			
			
			var radvcanvas=document.getElementById("riskadvisor");
			radvcanvas.onclick = function(evt) {
		      var activePoints = window.rwindow1.getElementsAtEvent(evt);
		      if (activePoints[0]) {
		        var chartData = activePoints[0]['_chart'].config.data;
		        var idx = activePoints[0]['_index'];

		        var label = chartData.labels[idx];
		        
		        
		        if(label.includes('High')){
		        	
		        	$("#ap1").append(highriskproducts1);
		        	$("#app1").append(highpct1);
		        	$("#ap2").append(highriskproducts2);
		        	$("#app2").append(highpct2);
		        	
		        	$("#u1").append(hunderpsec1);
		        	$("#ut1").append(hunderpsecper1);
		        	$("#u2").append(hunderpsec2);
		        	$("#ut2").append(hunderpsecper2);
		        	
		        	$("#f1").append(hf1);
		        	$("#ft1").append(hft1);
		        	$("#f2").append(hf2);
		        	$("#ft2").append(hft2);
		        	$("#f3").append(hf3);
		        	$("#ft3").append(hft3);
		        	
		        	$("#p1").append(hp1);
		        	$("#pt1").append(hpt1);
		        	$("#p2").append(hp2);
		        	$("#pt2").append(hpt2);
		        	$("#p3").append(hp3);
		        	$("#pt3").append(hpt3);
		        	
		        	
		        	
		        	
		        };
		        
		        if(label.includes('Medium')){
		        	
		        	$("#ap1").append(highriskproducts1);
		        	$("#app1").append(highpct1);
		        	$("#ap2").append(highriskproducts2);
		        	$("#app2").append(highpct2);
		        	
		        	$("#u1").append(hunderpsec1);
		        	$("#ut1").append(hunderpsecper1);
		        	$("#u2").append(hunderpsec2);
		        	$("#ut2").append(hunderpsecper2);
		        	
		        	$("#f1").append(hf1);
		        	$("#ft1").append(hft1);
		        	$("#f2").append(hf2);
		        	$("#ft2").append(hft2);
		        	$("#f3").append(hf3);
		        	$("#ft3").append(hft3);
		        	
		        	$("#p1").append(hp1);
		        	$("#pt1").append(hpt1);
		        	$("#p2").append(hp2);
		        	$("#pt2").append(hpt2);
		        	$("#p3").append(hp3);
		        	$("#pt3").append(hpt3);
		        	
		        	
		        	
		        	
		        };	
		        
		        console.log(url);
		        alert(url);
		      }
		    };
			
			
			

});