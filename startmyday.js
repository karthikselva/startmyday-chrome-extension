$(document).ready( function() {
	$.getJSON('http://startmyday.herokuapp.com/words/today', function(dicts) {
		console.log(dicts);
		container = $('#wordPanel');
	
		for(var i in dicts) {
			data = dicts[i];
		panel = $('<div/>', {
		                "class":"panel panel-info"
		            });
		heading =  $('<div/>', {
		                "class":"panel panel-heading"
		            });
		heading.html(data["word"]);

		body =  $('<div/>', {
		                "class":"panel panel-body"
		            });
		body.html(data["meaning"]);

		panel.append(heading);
		panel.append(body);
		container.append(panel);
		}

	});
});