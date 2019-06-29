      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the line chart, passes in the data and
      // draws it.
      function drawChart(fn,n) {
		//fn (function numbers) represent functions. Refer https://github.com/abhayrm20/curves/wiki for function numbers.
		switch(fn) {
			case 1:
				var title = 'Sine curve f(x)=sin x'
				var title_x = 'x'
				var title_y = 'sin x'
				var data = new google.visualization.DataTable();
				data.addColumn('number', 'x');
				data.addColumn('number', 'Sin x');
				var ticks_x =[];
				var ticks_y =[];
				for(i=0; i<=n; i++){
					ticks_x.push(90*i);
					ticks_y.push(Math.sin(90*i*Math.PI/180));
					data.addRows([
						[90*i,Math.sin(90*i*Math.PI/180)]
					]);
				}
			break;
			
			case 2:
				var title = 'Cosine curve f(x)=cos x'
				var title_x = 'x'
				var title_y = 'cos x'
				var data = new google.visualization.DataTable();
				data.addColumn('number', 'x');
				data.addColumn('number', 'Cos x');
				var ticks_x =[];
				var ticks_y =[];
				for(i=0; i<=n; i++){
					ticks_x.push(90*i);
					ticks_y.push(Math.cos(90*i*Math.PI/180));
					data.addRows([
						[90*i,Math.cos(90*i*Math.PI/180)]
					]);
				}
			break;
			
			case 3:
				var title = 'f(x) = 1+x'
				var title_x = 'x'
				var title_y = '1 + x'
				var data = new google.visualization.DataTable();
				data.addColumn('number', 'x');
				data.addColumn('number', '1 + x');
				var ticks_x =[];
				var ticks_y =[];
				for(i=0; i<=n; i++){
					ticks_x.push(i);
					ticks_y.push(i+1);
					data.addRows([
						[i,1+i]
					]);
				}
			break;
			
			default: 
				console.log("ERROR");
				
		}

        // Set chart options
        var options = 	{
							'title': title,
							'subtitle':'f(x)=sin x',
							'width':1000,
							'height':500,
							curveType: 'function',
							animation:{
								startup: false,
								duration: 400,
								easing: 'inAndOut',
							},
							hAxis: { 
								logscale: true,
								title: title_x,
								gridlines: {
								count: i,
								},
								ticks: ticks_x
							},
							vAxis: {
								title: title_y,
								//ticks: ticks_y,
							},
						};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
