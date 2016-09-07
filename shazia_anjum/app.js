var info;
$('form').submit(function(event){
	$('li').empty()
	event.preventDefault()
	var formData = $(this).serializeArray()[0].value
	formData = formData.split(' ').join('+')
	$.ajax({
		url: 'https://restcountries.eu/rest/v1/name/'+ formData,
		success: function(data){
			console.log(data)
			var lang = data[1].languages[0]
			console.log('languages :' + lang)
			$.ajax({
				url: 'https://restcountries.eu/rest/v1/lang/' + lang,
			    success: function(data){
			    	for(var i = 0 ; i < data.length ; i++){
			    	var list = document.createElement('li')
			    	list.innerHTML = data[i].name;
			    	$('ul').append(list)
			    }
			    console.log(data)

			    },
			    error: function(data){
			    	console.log('No data Found')
			    }
			})

		}
	})
})



// $.ajax({
// 	url: "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC ",
// 	success:function(data){
// 		console.log(data)
// 	}
// })