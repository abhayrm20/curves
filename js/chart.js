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
			
			case 4:
				//var title = 'ICC world cup 2019 Match 38 IND v ENG: Runs per over (England Innings)'
				var title_x = 'Overs'
				var title_y = 'Score'
				var data = new google.visualization.DataTable();
				data.addColumn('number', 'x');
				data.addColumn('number', 'ENG');
				data.addColumn('number', 'IND');
				//data.addColumn('number', 'Score');
				var ticks_x =[];
				var ticks_y =[0,1,2,3,4,5,6,7,8,9,10,15,20,50,100,150,200,250,300,350,400];
				var ind_rpo = [0,0,8,0,1,0,8,3,2,5,1,3,9,3,8,2,4,10,4,3,9,10,7,7,5,8,13,7,4,4,4,3,11,11,6,5,10,6,6,16,8,9,5,7,5,7,9,5,6,7,12];
				var ind_runs= [];
				ind_runs[0] = 0;
				ind_runs[1] = ind_rpo[1];
				for(i=2; i<=50; i++){
					ind_runs[i]=ind_runs[i-1]+ind_rpo[i];
				}
				var ind_wic=5;
				var eng_rpo = [0,9,1,4,5,9,7,2,9,0,1,13,3,10,11,13,15,12,6,11,4,10,5,3,10,7,3,8,3,2,6,2,1,2,0,4,2,3,8,6,15,8,12,3,9,12,4,17,9,15,3];
				var eng_runs= [];
				eng_runs[0] = 0;
				eng_runs[1] = eng_rpo[1];
				for(i=2; i<=50; i++){
					eng_runs[i]=eng_runs[i-1]+eng_rpo[i];
				}
				var eng_wic=7;
				var title = 'ICC world cup 2019 Match 38 IND v ENG: 30-06-2019 \n ENG:'+eng_runs[50]+"-"+eng_wic+' (50.0 ov) \n IND:'+ind_runs[50]+"-"+ind_wic+' (50.0 ov) \n ENG won by 31 runs\n';
				for(i=0; i<=n; i++){
					ticks_x.push(i);
					//ticks_y.push(i+1);
					data.addRows([
						[i,eng_runs[i],ind_runs[i]]
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
