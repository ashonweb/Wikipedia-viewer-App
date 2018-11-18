window.onload = function () {
	startDate();
	function startDate() {
		var date = new Date();
		var days = ["sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
		document.getElementById("days").innerHTML = days[date.getDay()] + "|" + date.getDate() + "/" + [date.getMonth() + 1] + "/" + date.getFullYear();
	}

	//var hi = document.getElementById("myInput").getAttribute('value');
	let myinputform = document.getElementById("myform")

	myinputform.addEventListener('submit', myform);
	function myform(e) {
		e.preventDefault()
		//var hi = document.getElementById("mynput").getAttribute('value');
		let searchQuery = myinputform.q.value
		console.log(searchQuery);
		console.log("bye");
		const endpoint = "https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search=" + searchQuery + "&limit=10";
		console.log(endpoint);
		fetch(endpoint)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				// console.log(data);
				// console.log(data[1]);
				// console.log(data[2]);
	var ul = document.getElementById("unorderlist");

	// remove any existing childs in the list

	// make the list of childNodes array
	let childListArray = [].slice.call(ul.childNodes);

	// go through the array and delete all the elements
	childListArray.forEach(function(element){
		ul.removeChild(element);
	})

//  var list = ul.createElement(li);
for ( var i =0 ; i< data[1].length;i++){

var item = document.createElement('li');
// var a = document.createElement('a');
//  a.href = document.createTextNode(data[3][i]);
var item1=document.createElement('li');

var ir =item1.appendChild(document.createTextNode(data[3][i]));
console.log(ir);

item.appendChild(document.createTextNode(data[1][i]));
var a = document.createElement('a');

a.target = "_blank";
a.setAttribute('href',data[3][i]);
a.textContent ="Click here to know about"+" "+ data[1][i];
a.hasAttribute("target","_blank");


ul.appendChild(item);
// ul.appendChild(ir);
ul.appendChild(a);

// ul.appendChild(a.href);
// item = document.createElement('a');


// ul.appendChild(item1);
	// console.log(data[1][i]);
	// console.log(data[2][i]);



}

			})
			.catch(function () {
				console.log("sorry");
			});
	}

}