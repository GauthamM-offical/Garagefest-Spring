$(document).ready(function() {
				
			var ctype="pie";

			var rchart1 = $("#riskadvisor");
			var rchart2 = $("#riskfirm");
			var rchart3 = $("#riskplatform");

			var advisorRiskRevenueData = {
					labels : [ 'Low (<30)','Medium (31-75)','High (>76)'],
					datasets : [ {
						hoverBorderColor : '#ffffff',
						data : [ 10, 75, 15 ],
						backgroundColor : [ 'rgb(153, 153, 255)',
								'rgb(100, 77, 255)', 'rgb(0, 0, 255)' ]
					} ]
				};
			var firmRiskRevenueData = {
					labels : [ 'Low (<30)','Medium (31-75)','High (>76)'],
					datasets : [ {
						hoverBorderColor : '#ffffff',
						data : [ 20, 50, 30 ],
						backgroundColor : [ 'rgb(153, 255, 187)',
								'rgb(26, 255, 102)', 'rgb(0, 153, 51)' ]
					} ]

				};
			
			
			var marketRiskRevenueData = {
					labels : [ 'Low (<30)','Medium (31-75)','High (>76)'],
					datasets : [ {
						hoverBorderColor : '#ffffff',
						data : [ 17, 48, 35 ],
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
				type : ctype,
				data : advisorRiskRevenueData,
				options : roptions
			});

			// Render the chart.
			window.rwindow1.render();

			window.rwindow2 = new Chart(rchart2, {
				type : ctype,
				data : firmRiskRevenueData,
				options : roptions
			});

			// Render the chart.
			window.rwindow2.render();
			
			
			window.rwindow3 = new Chart(rchart3, {
				type : ctype,
				data : marketRiskRevenueData,
				options : roptions
			});

			

			// Render the chart.
			window.rwindow3.render();
			
		    $("#charttype").change(function(){
		        ctype=($(this).val());
		        
		        if(window.rwindow1){
		        	window.rwindow1.destroy();
		        }
		        window.rwindow1 = new Chart(rchart1, {
					type : ctype,
					data : advisorRiskRevenueData,
					options : roptions
				});

				// Render the chart.
				window.rwindow1.render();

				if(window.rwindow2){
		        	window.rwindow2.destroy();
		        }
				
				window.rwindow2 = new Chart(rchart2, {
					type : ctype,
					data : firmRiskRevenueData,
					options : roptions
				});

				// Render the chart.
				window.rwindow2.render();
				
				if(window.rwindow3){
		        	window.rwindow3.destroy();
		        }
				
				window.rwindow3 = new Chart(rchart3, {
					type : ctype,
					data : marketRiskRevenueData,
					options : roptions
				});

				

				// Render the chart.
				window.rwindow3.render();
		        
		    });
			
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
			
			var munderpsec1="MRK";
			var munderpsecper1="9.1%";
			var munderpsec2="FOX";
			var munderpsecper2="4.5%";
			
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
		        
		        $("#fspace").show();
		        $("#fspace").html("<br><br><br><br><br><br><br><br><br>");
		        $("#pspace").show();
		        $("#pspace").html("<br><br><br><br><br><br><br><br><br>");
		        
		        $("#info").hide();

		        if(label.includes('High')){
		        	
		        	$("#advdata").show();
		        	$("#firmdata").show();
		        	$("#platformdata").show();
		        	$("#revenue").html("<b>Total Revenue : 150K/year</b>");
		        	
		        	$("#ap1").text(highriskproducts1);
		        	$("#app1").text(highpct1);
		        	$("#ap2").text(highriskproducts2);
		        	$("#app2").text(highpct2);
		        	
		        	$("#u1").text(hunderpsec1);
		        	$("#ut1").text(hunderpsecper1);
		        	$("#u2").text(hunderpsec2);
		        	$("#ut2").text(hunderpsecper2);
		        	
		        	$("#f1").text(hf1);
		        	$("#ft1").text(hft1);
		        	$("#f2").text(hf2);
		        	$("#ft2").text(hft2);
		        	$("#f3").text(hf3);
		        	$("#ft3").text(hft3);
		        	
		        	$("#p1").text(hp1);
		        	$("#pt1").text(hpt1);
		        	$("#p2").text(hp2);
		        	$("#pt2").text(hpt2);
		        	$("#p3").text(hp3);
		        	$("#pt3").text(hpt3);
		        	
		        	
		        	
		        	
		        };
		        
		        if(label.includes('Medium')){
		        	
		        	$("#advdata").show();
		        	$("#firmdata").show();
		        	$("#platformdata").show();
		        	$("#revenue").html("<b>Total Revenue : 750K/year</b>");

		        	
		        	$("#ap1").text(mediumriskproducts1);
		        	$("#app1").text(medpct1);
		        	$("#ap2").text(mediumriskproducts2);
		        	$("#app2").text(medpct2);
		        	
		        	$("#u1").text(munderpsec1);
		        	$("#ut1").text(munderpsecper1);
		        	$("#u2").text(munderpsec2);
		        	$("#ut2").text(munderpsecper2);
		        	
		        	$("#f1").text(mf1);
		        	$("#ft1").text(mft1);
		        	$("#f2").text(mf2);
		        	$("#ft2").text(mft2);
		        	$("#f3").text(mf3);
		        	$("#ft3").text(mft3);
		        	
		        	$("#p1").text(mp1);
		        	$("#pt1").text(mpt1);
		        	$("#p2").text(mp2);
		        	$("#pt2").text(mpt2);
		        	$("#p3").text(mp3);
		        	$("#pt3").text(mpt3);

		        };	
		        if(label.includes('Low')){
		        	
		        	$("#advdata").show();
		        	$("#firmdata").show();
		        	$("#platformdata").show();
		        	$("#revenue").html("<b>Total Revenue : 100K/year</b>");

		        	
		        	$("#ap1").text(lowriskproducts1);
		        	$("#app1").text(lowpct1);
		        	$("#ap2").text(lowriskproducts2);
		        	$("#app2").text(lowpct2);
		        	
		        	$("#u1").text(lunderpsec1);
		        	$("#ut1").text(lunderpsecper1);
		        	$("#u2").text(lunderpsec2);
		        	$("#ut2").text(lunderpsecper2);
		        	
		        	$("#f1").text(lf1);
		        	$("#ft1").text(lft1);
		        	$("#f2").text(lf2);
		        	$("#ft2").text(lft2);
		        	$("#f3").text(lf3);
		        	$("#ft3").text(lft3);
		        	
		        	$("#p1").text(lp1);
		        	$("#pt1").text(lpt1);
		        	$("#p2").text(lp2);
		        	$("#pt2").text(lpt2);
		        	$("#p3").text(lp3);
		        	$("#pt3").text(lpt3);

		        };	
		        		        
		      };
		    };
			
			
			

});