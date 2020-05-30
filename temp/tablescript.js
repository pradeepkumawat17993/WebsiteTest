/*var myContacts = [
	{ "name": "Parvez Ansari", "email": "ansariparvez@gmai.com", "mobile":"9998979695" },
	{ "name": "Tayyeb Shaikh", "email": "tshaikh1981@gmai.com", "mobile":"9091929394" },
	{ "name": "Ashfaque Shaikh", "email": "ashly786@gmai.com", "mobile":"8081828384" }
];*/



function generateDynamicTable(){


	var myInit = {
		method : 'GET',
		headers : {
			'Content-Type': 'application/json'
		},
		mode : 'cors',
		cache : 'default'
	};
	let myRequest = new Request("temp/New.json", myInit)

	var myContacts = []

	fetch(myRequest).then(function(resp){
		return resp.json();
	}).then(function(object){
		myContacts = object.data;
		console.log(object.data);
	}).catch(function(error){
		console.error("something went wrong retriving the people!");
		console.error(error);
	});


	var noOfContacts = myContacts.length;

	console.log("length:");
	console.log(myContacts.length);

	if(noOfContacts>0){


		// CREATE DYNAMIC TABLE.
		var table = document.createElement("table");
		table.style.width = '50%';
		table.setAttribute('border', '1');
		table.setAttribute('cellspacing', '0');
		table.setAttribute('cellpadding', '5');

		// retrieve column header ('Name', 'Email', and 'Mobile')

		var col = []; // define an empty array
		for (var i = 0; i < noOfContacts; i++) {
			for (var key in myContacts[i]) {
				if (col.indexOf(key) === -1) {
					col.push(key);
				}
			}
		}

		// CREATE TABLE HEAD .
		var tHead = document.createElement("thead");	


		// CREATE ROW FOR TABLE HEAD .
		var hRow = document.createElement("tr");

		// ADD COLUMN HEADER TO ROW OF TABLE HEAD.
		for (var i = 0; i < col.length; i++) {
			var th = document.createElement("th");
			th.innerHTML = col[i];
			hRow.appendChild(th);
		}
		tHead.appendChild(hRow);
		table.appendChild(tHead);

		// CREATE TABLE BODY .
		var tBody = document.createElement("tbody");	

		// ADD COLUMN HEADER TO ROW OF TABLE HEAD.
		for (var i = 0; i < noOfContacts; i++) {

			var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .


			for (var j = 0; j < col.length; j++) {
				var td = document.createElement("td");
				td.innerHTML = myContacts[i][col[j]];
				bRow.appendChild(td);
			}
			tBody.appendChild(bRow)

		}
		table.appendChild(tBody);	


		// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
		var divContainer = document.getElementById("myContacts");
		divContainer.innerHTML = "";
		divContainer.appendChild(table);

	}	
}


