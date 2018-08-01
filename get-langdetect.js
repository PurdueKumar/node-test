var inputField = document.querySelector('#input');
var detectOutput = document.querySelector('#langlayer-output');

var getLang = function getLang() {
	
	const data = JSON.stringify({text: inputField.value});
	
	fetch('http://localhost:8080/' , {
		
		method: "POST",
		headers: {
			
			'Content-type': 'application/json',
			
		},
		body:data
		
	}).then( (response) => {
		
		
			
		console.log('received response!');
		return response.text();
			
	}).then( (data) => {


		console.log(data);
		inputField.innerHTML = '<text>' + "test" + '</text>';

	});
	
};