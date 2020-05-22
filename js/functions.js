arrayAccion = []
arrayObjeto = []
arrayPersona = []
arrayDificil = []
arrayEspecial = []

function loadAdmin()
{
	var urlParams = new URLSearchParams(window.location.search);
	id = urlParams.get('id');
	switch (id)
	{
		case 'a':
			document.getElementById('catName').innerHTML = "ACCIÓN"
			document.getElementById('catName').style = "background: #ff8000;"
			loadAccion()
			break;
		case 'o':
			document.getElementById('catName').innerHTML = "OBJETO"
			document.getElementById('catName').style = "background: yellow; color: black;"
			loadObjeto()
			break;
		case 'p':
			document.getElementById('catName').innerHTML = "PERSONA, LUGAR, ANIMAL"
			document.getElementById('catName').style = "background: blue;"
			loadPersona()
			break;
		case 'd':
			document.getElementById('catName').innerHTML = "DIFÍCIL"
			document.getElementById('catName').style = "background: green;"
			loadDificil()
			break;
		case 'e':
			document.getElementById('catName').innerHTML = "ESPECIAL"
			document.getElementById('catName').style = "background: red;"
			loadEspecial()
			break;
		default:
			break;
	}
}

function loadAccion()
{
	document.getElementById("list").innerHTML = '<div class="topList" id="topList">' +
				'<input type="text" id="newWord" placeholder="palabra"><button style="background: black" onclick="addAccionWord()">+</button>' +
			'</div>';

	document.getElementById('topList').style = "background: #ff8000;"

	var ajax = new XMLHttpRequest();
    ajax.open('POST', "http://192.168.1.160/pictionary/php/getWordsByCat.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("cat=a");
    ajax.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		var response = JSON.parse(ajax.responseText);
    		
    		for (var i = 0; i < Object.keys(response).length; i++) {
    			if (i % 2 == 0)
    			{
    				document.getElementById("list").innerHTML += '<div class="itemList">' +
    				'<h1>' + (i + 1) + '</h1><h3>' + response[i].word + '</h3><button onclick="deleteAccionWord(\'' + response[i].word + '\')">X</button>' +
    				'</div>';
    			} 
    			else 
    			{
    				document.getElementById("list").innerHTML += '<div class="itemList" style="background: #bfbfbf">' +
    				'<h1>' + (i + 1) + '</h1><h3>' + response[i].word + '</h3><button onclick="deleteAccionWord(\'' + response[i].word + '\')">X</button>' +
    				'</div>';
    			}
    		}
    	}
	}
}

function loadObjeto()
{
	document.getElementById("list").innerHTML = '<div class="topList" id="topList">' +
				'<input type="text" id="newWord" placeholder="palabra"><button style="background: black" onclick="addObjetoWord()">+</button>' +
			'</div>';

	document.getElementById('topList').style = "background: yellow;"

	var ajax = new XMLHttpRequest();
    ajax.open('POST', "http://192.168.1.160/pictionary/php/getWordsByCat.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("cat=o");
    ajax.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		var response = JSON.parse(ajax.responseText);
    		
    		for (var i = 0; i < Object.keys(response).length; i++) {
    			if (i % 2 == 0)
    			{
    				document.getElementById("list").innerHTML += '<div class="itemList">' +
    				'<h1>' + (i + 1) + '</h1><h3>' + response[i].word + '</h3><button onclick="deleteObjetoWord(\'' + response[i].word + '\')">X</button>' +
    				'</div>';
    			} 
    			else 
    			{
    				document.getElementById("list").innerHTML += '<div class="itemList" style="background: #bfbfbf">' +
    				'<h1>' + (i + 1) + '</h1><h3>' + response[i].word + '</h3><button onclick="deleteObjetoWord(\'' + response[i].word + '\')">X</button>' +
    				'</div>';
    			}
    		}
    	}
	}
}

function loadPersona()
{
	document.getElementById("list").innerHTML = '<div class="topList" id="topList">' +
				'<input type="text" id="newWord" placeholder="palabra"><button style="background: black" onclick="addPersonaWord()">+</button>' +
			'</div>';

	document.getElementById('topList').style = "background: blue;"

	var ajax = new XMLHttpRequest();
    ajax.open('POST', "http://192.168.1.160/pictionary/php/getWordsByCat.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("cat=p");
    ajax.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		var response = JSON.parse(ajax.responseText);
    		
    		for (var i = 0; i < Object.keys(response).length; i++) {
    			if (i % 2 == 0)
    			{
    				document.getElementById("list").innerHTML += '<div class="itemList">' +
    				'<h1>' + (i + 1) + '</h1><h3>' + response[i].word + '</h3><button onclick="deletePersonaWord(\'' + response[i].word + '\')">X</button>' +
    				'</div>';
    			} 
    			else 
    			{
    				document.getElementById("list").innerHTML += '<div class="itemList" style="background: #bfbfbf">' +
    				'<h1>' + (i + 1) + '</h1><h3>' + response[i].word + '</h3><button onclick="deletePersonaWord(\'' + response[i].word + '\')">X</button>' +
    				'</div>';
    			}
    		}
    	}
	}
}

function loadDificil()
{
	document.getElementById("list").innerHTML = '<div class="topList" id="topList">' +
				'<input type="text" id="newWord" placeholder="palabra"><button style="background: black" onclick="addDificilWord()">+</button>' +
			'</div>';

	document.getElementById('topList').style = "background: green;"

	var ajax = new XMLHttpRequest();
    ajax.open('POST', "http://192.168.1.160/pictionary/php/getWordsByCat.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("cat=d");
    ajax.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		var response = JSON.parse(ajax.responseText);
    		
    		for (var i = 0; i < Object.keys(response).length; i++) {
    			if (i % 2 == 0)
    			{
    				document.getElementById("list").innerHTML += '<div class="itemList">' +
    				'<h1>' + (i + 1) + '</h1><h3>' + response[i].word + '</h3><button onclick="deleteDificilWord(\'' + response[i].word + '\')">X</button>' +
    				'</div>';
    			} 
    			else 
    			{
    				document.getElementById("list").innerHTML += '<div class="itemList" style="background: #bfbfbf">' +
    				'<h1>' + (i + 1) + '</h1><h3>' + response[i].word + '</h3><button onclick="deleteDificilWord(\'' + response[i].word + '\')">X</button>' +
    				'</div>';
    			}
    		}
    	}
	}
}

function loadEspecial()
{
	document.getElementById("list").innerHTML = '<div class="topList" id="topList">' +
				'<input type="text" id="newWord" placeholder="palabra"><button style="background: black" onclick="addEspecialWord()">+</button>' +
			'</div>';

	document.getElementById('topList').style = "background: red;"

	var ajax = new XMLHttpRequest();
    ajax.open('POST', "http://192.168.1.160/pictionary/php/getWordsByCat.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("cat=e");
    ajax.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		var response = JSON.parse(ajax.responseText);
    		
    		for (var i = 0; i < Object.keys(response).length; i++) {
    			if (i % 2 == 0)
    			{
    				document.getElementById("list").innerHTML += '<div class="itemList">' +
    				'<h1>' + (i + 1) + '</h1><h3>' + response[i].word + '</h3><button onclick="deleteEspecialWord(\'' + response[i].word + '\')">X</button>' +
    				'</div>';
    			} 
    			else 
    			{
    				document.getElementById("list").innerHTML += '<div class="itemList" style="background: #bfbfbf">' +
    				'<h1>' + (i + 1) + '</h1><h3>' + response[i].word + '</h3><button onclick="deleteEspecialWord(\'' + response[i].word + '\')">X</button>' +
    				'</div>';
    			}
    		}
    	}
	}
}

function addAccionWord()
{
	word = document.getElementById("newWord").value

	var ajax = new XMLHttpRequest();
    ajax.open('POST', "http://192.168.1.160/pictionary/php/addAccionWord.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("word=" + encodeURIComponent(word));
    ajax.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		loadAccion()
    	}
	}
}

function addObjetoWord()
{
	word = document.getElementById("newWord").value

	var ajax = new XMLHttpRequest();
    ajax.open('POST', "http://192.168.1.160/pictionary/php/addObjetoWord.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("word=" + encodeURIComponent(word));
    ajax.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		loadObjeto()
    	}
	}
}

function addPersonaWord()
{
	word = document.getElementById("newWord").value

	var ajax = new XMLHttpRequest();
    ajax.open('POST', "http://192.168.1.160/pictionary/php/addPersonaWord.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("word=" + encodeURIComponent(word));
    ajax.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		loadPersona()
    	}
	}
}

function addDificilWord()
{
	word = document.getElementById("newWord").value

	var ajax = new XMLHttpRequest();
    ajax.open('POST', "http://192.168.1.160/pictionary/php/addDificilWord.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("word=" + encodeURIComponent(word));
    ajax.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		loadDificil()
    	}
	}
}

function addEspecialWord()
{
	word = document.getElementById("newWord").value

	var ajax = new XMLHttpRequest();
    ajax.open('POST', "http://192.168.1.160/pictionary/php/addEspecialWord.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("word=" + encodeURIComponent(word));
    ajax.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		loadEspecial()
    	}
	}
}

function deleteAccionWord(word)
{
	var ajax = new XMLHttpRequest();
    ajax.open('POST', "http://192.168.1.160/pictionary/php/deleteAccionWord.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("word=" + encodeURIComponent(word));
    ajax.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		loadAccion()
    	}
	}
}

function deleteObjetoWord(word)
{
	var ajax = new XMLHttpRequest();
    ajax.open('POST', "http://192.168.1.160/pictionary/php/deleteObjetoWord.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("word=" + encodeURIComponent(word));
    ajax.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		loadObjeto()
    	}
	}
}

function deletePersonaWord(word)
{
	var ajax = new XMLHttpRequest();
    ajax.open('POST', "http://192.168.1.160/pictionary/php/deletePersonaWord.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("word=" + encodeURIComponent(word));
    ajax.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		loadPersona()
    	}
	}
}

function deleteDificilWord(word)
{
	var ajax = new XMLHttpRequest();
    ajax.open('POST', "http://192.168.1.160/pictionary/php/deleteDificilWord.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("word=" + encodeURIComponent(word));
    ajax.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		loadDificil()
    	}
	}
}

function deleteEspecialWord(word)
{
	var ajax = new XMLHttpRequest();
    ajax.open('POST', "http://192.168.1.160/pictionary/php/deleteEspecialWord.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("word=" + encodeURIComponent(word));
    ajax.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		loadEspecial()
    	}
	}
}

function loadArrays()
{
	var ajax = new XMLHttpRequest();
    ajax.open('POST', "http://192.168.1.160/pictionary/php/getWordsByCat.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("cat=a");
    ajax.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		var response = JSON.parse(ajax.responseText);
    		
    		for (var i = 0; i < Object.keys(response).length; i++) {
    			arrayAccion.push(response[i].word)
    		}
    	}
	}

	var ajax2 = new XMLHttpRequest();
    ajax2.open('POST', "http://192.168.1.160/pictionary/php/getWordsByCat.php", true);
    ajax2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax2.send("cat=o");
    ajax2.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		var response = JSON.parse(ajax2.responseText);
    		
    		for (var i = 0; i < Object.keys(response).length; i++) {
    			arrayObjeto.push(response[i].word)
    		}
    	}
	}

	var ajax3 = new XMLHttpRequest();
    ajax3.open('POST', "http://192.168.1.160/pictionary/php/getWordsByCat.php", true);
    ajax3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax3.send("cat=p");
    ajax3.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		var response = JSON.parse(ajax3.responseText);
    		
    		for (var i = 0; i < Object.keys(response).length; i++) {
    			arrayPersona.push(response[i].word)
    		}
    	}
	}

	var ajax4 = new XMLHttpRequest();
    ajax4.open('POST', "http://192.168.1.160/pictionary/php/getWordsByCat.php", true);
    ajax4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax4.send("cat=d");
    ajax4.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		var response = JSON.parse(ajax4.responseText);
    		
    		for (var i = 0; i < Object.keys(response).length; i++) {
    			arrayDificil.push(response[i].word)
    		}
    	}
	}

	var ajax5 = new XMLHttpRequest();
    ajax5.open('POST', "http://192.168.1.160/pictionary/php/getWordsByCat.php", true);
    ajax5.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax5.send("cat=e");
    ajax5.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		var response = JSON.parse(ajax5.responseText);
    		
    		for (var i = 0; i < Object.keys(response).length; i++) {
    			arrayEspecial.push(response[i].word)
    		}
    	}
	}
}

function suffleCard()
{
    window.navigator.vibrate(50)

	flag1 = true
	flag2 = true
	flag3 = true
	flag4 = true
	flag5 = true

	acc1Rnd = Math.floor(Math.random() * arrayAccion.length)
	while(flag1)
	{
		acc2Rnd = Math.floor(Math.random() * arrayAccion.length)
		if (acc1Rnd != acc2Rnd)
		{
			flag1 = false
		}
	}

	obj1Rnd = Math.floor(Math.random() * arrayObjeto.length)
	while(flag2)
	{
		obj2Rnd = Math.floor(Math.random() * arrayObjeto.length)
		if (obj1Rnd != obj2Rnd)
		{
			flag2 = false
		}
	}

	pla1Rnd = Math.floor(Math.random() * arrayPersona.length)
	while(flag3)
	{
		pla2Rnd = Math.floor(Math.random() * arrayPersona.length)
		if (pla1Rnd != pla2Rnd)
		{
			flag3 = false
		}
	}
	dif1Rnd = Math.floor(Math.random() * arrayDificil.length)
	while(flag4)
	{
		dif2Rnd = Math.floor(Math.random() * arrayDificil.length)
		if (dif1Rnd != dif2Rnd)
		{
			flag4 = false
		}
	}
	esp1Rnd = Math.floor(Math.random() * arrayEspecial.length)
	while(flag5)
	{
		esp2Rnd = Math.floor(Math.random() * arrayEspecial.length)
		if (esp1Rnd != esp2Rnd)
		{
			flag5 = false
		}
	}

	// document.getElementById("acc1").setAttribute("class", "animated slideOutRight")
	// document.getElementById("obj1").setAttribute("class", "animated slideOutRight")
	// document.getElementById("pla1").setAttribute("class", "animated slideOutRight")
	// document.getElementById("dif1").setAttribute("class", "animated slideOutRight")
	// document.getElementById("esp1").setAttribute("class", "animated slideOutRight")
	// document.getElementById("acc2").setAttribute("class", "animated slideOutRight")
	// document.getElementById("obj2").setAttribute("class", "animated slideOutRight")
	// document.getElementById("pla2").setAttribute("class", "animated slideOutRight")
	// document.getElementById("dif2").setAttribute("class", "animated slideOutRight")
	// document.getElementById("esp2").setAttribute("class", "animated slideOutRight")
	
	document.getElementById("acc1").innerHTML = arrayAccion[acc1Rnd]
	document.getElementById("obj1").innerHTML = arrayObjeto[obj1Rnd]
	document.getElementById("pla1").innerHTML = arrayPersona[pla1Rnd]
	document.getElementById("dif1").innerHTML = arrayDificil[dif1Rnd]
	document.getElementById("esp1").innerHTML = arrayEspecial[esp1Rnd]
	document.getElementById("acc2").innerHTML = arrayAccion[acc2Rnd]
	document.getElementById("obj2").innerHTML = arrayObjeto[obj2Rnd]
	document.getElementById("pla2").innerHTML = arrayPersona[pla2Rnd]
	document.getElementById("dif2").innerHTML = arrayDificil[dif2Rnd]
	document.getElementById("esp2").innerHTML = arrayEspecial[esp2Rnd]

	//document.getElementsByClassName("card")[0].setAttribute("class", "card animated shake")
	//document.getElementsByClassName("card")[1].setAttribute("class", "card animated shake")

	// document.getElementById("acc1").setAttribute("class", "animated slideInRight")
	// document.getElementById("obj1").setAttribute("class", "animated slideInRight")
	// document.getElementById("pla1").setAttribute("class", "animated slideInRight")
	// document.getElementById("dif1").setAttribute("class", "animated slideInRight")
	// document.getElementById("esp1").setAttribute("class", "animated slideInRight")
	// document.getElementById("acc2").setAttribute("class", "animated slideInRight")
	// document.getElementById("obj2").setAttribute("class", "animated slideInRight")
	// document.getElementById("pla2").setAttribute("class", "animated slideInRight")
	// document.getElementById("dif2").setAttribute("class", "animated slideInRight")
	// document.getElementById("esp2").setAttribute("class", "animated slideInRight")
}