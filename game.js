function play() {
  	if (localStorage.getItem("score") === null) {
		var score = 0;
	}else{
		var score = Number(localStorage.score);
	}
	if (localStorage.getItem("perClick") === null){
		var perClick = 1;
	}else{
		var perClick = Number(localStorage.perClick);
	}
	if (localStorage.getItem("perSec") === null){
		var perSec = 0;
	}else{
		var perSec = Number(localStorage.perSec);
	}
	if (localStorage.getItem("price1") === null){
		var price1 = 50;
	}else{
		var price1 = Number(localStorage.price1);
	}
	if (localStorage.getItem("price2") === null){
		var price2 = 500;
	}else{
		var price2 = Number(localStorage.price2);
	}
	if (localStorage.getItem("price3") === null){
		var price3 = 5000;
	}else{
		var price3 = Number(localStorage.price3);
	}
	if (localStorage.getItem("price4") === null){
		var price4 = 750000;
	}else{
		var price4 = Number(localStorage.price4);
	}
	if (localStorage.getItem("priceAuto1") === null){
		var priceAuto1 = 100;
	}else{
		var priceAuto1 = Number(localStorage.priceAuto1);
	}
	if (localStorage.getItem("priceAuto2") === null){
		var priceAuto2 = 1000;
	}else{
		var priceAuto2 = Number(localStorage.priceAuto2);
	}
	if (localStorage.getItem("priceAuto3") === null){
		var priceAuto3 = 10000;
	}else{
		var priceAuto3 = Number(localStorage.priceAuto3);
	}
	if (localStorage.getItem("priceAuto4") === null){
		var priceAuto4 = 1500000;
	}else{
		var priceAuto4 = Number(localStorage.priceAuto4);
	}
	if (localStorage.getItem("time") !== null){
		var time = Number(localStorage.time);
		var d = new Date();
		var n = d.getTime();
		score += Math.floor((n-time)/1000*perSec);
	}

	document.getElementById("score").innerHTML = "bitcoin: " + score.toLocaleString();
	document.getElementById("perClick").innerHTML = "bitcoin per click: " + perClick.toLocaleString();
	document.getElementById("perSec").innerHTML = "bitcoin per second: " + perSec.toLocaleString();

	document.getElementById("upgrade1").innerHTML = "Upgrade bitcoin per click (+1)<br>Costs: " + price1.toLocaleString()+" bitcoin";
	document.getElementById("upgrade10").innerHTML = "Upgrade bitcoin per click (+10)<br>Costs: " + price2.toLocaleString()+" bitcoin";
	document.getElementById("upgrade100").innerHTML = "Upgrade bitcoin per click (+100)<br>Costs: " + price3.toLocaleString() + " bitcoin";
	document.getElementById("upgrade1000").innerHTML = "Upgrade bitcoin per click (+1000)<br>Costs: " + price4.toLocaleString() + " bitcoin";

	document.getElementById("auto1").innerHTML = "Upgrade bitcoin per second (+1)<br>Costs: " + priceAuto1.toLocaleString()+" bitcoin";
	document.getElementById("auto10").innerHTML = "Upgrade bitcoin per second (+10)<br>Costs: " + priceAuto2.toLocaleString()+" bitcoin";
	document.getElementById("auto100").innerHTML = "Upgrade bitcoin per second (+100)<br>Costs: " + priceAuto3.toLocaleString() + " bitcoin";
	document.getElementById("auto1000").innerHTML = "Upgrade bitcoin per second (+1000)<br>Costs: " + priceAuto4.toLocaleString() + " bitcoin";

	function click() {
		score += perClick;
		document.getElementById("score").innerHTML = "bitcoin: " + score.toLocaleString();
		
		localStorage.setItem("score", score);
	}

	function upgrade1() {
		if (score >= price1){
			perClick += 1;
			score -= price1;
			price1 = Math.ceil(price1*1.3);
			document.getElementById("score").innerHTML = "bitcoin: " + score.toLocaleString();

			document.getElementById("upgrade1").innerHTML = "Upgrade bitcoin per click (+1)<br>Costs: " + price1.toLocaleString() + " bitcoin";
			document.getElementById("perClick").innerHTML = "bitcoin per click: " + perClick.toLocaleString();

			localStorage.setItem("price1", price1);
			localStorage.setItem("score", score);
			localStorage.setItem("perClick", perClick);
		}
	}

	function upgrade2() {
		if (score >= price2){
			perClick += 10;
			score -= price2;
			price2 = Math.ceil(price2*1.3);
			document.getElementById("score").innerHTML = "bitcoin: " + score.toLocaleString();

			document.getElementById("upgrade10").innerHTML = "Upgrade bitcoin per click (+10)<br>Costs: " + price2.toLocaleString() + " bitcoin";
			document.getElementById("perClick").innerHTML = "bitcoin per click: " + perClick.toLocaleString();

			localStorage.setItem("price2", price2);
			localStorage.setItem("score", score);
			localStorage.setItem("perClick", perClick);
		}
	}

	function upgrade3() {
		if (score >= price3){
			perClick += 100;
			score -= price3;
			price3 = Math.ceil(price3*1.3);
			document.getElementById("score").innerHTML = "bitcoin: " + score.toLocaleString();

			document.getElementById("upgrade100").innerHTML = "Upgrade bitcoin per click (+100)<br>Costs: " + price3.toLocaleString() + " bitcoin";
			document.getElementById("perClick").innerHTML = "bitcoin per click: " + perClick.toLocaleString();

			localStorage.setItem("price3", price3);
			localStorage.setItem("score", score);
			localStorage.setItem("perClick", perClick);
		}
	}

	function upgrade4() {
		if (score >= price4){
			perClick += 1000;
			score -= price4;
			price4 = Math.ceil(price4*1.3);
			document.getElementById("score").innerHTML = "bitcoin: " + score.toLocaleString();

			document.getElementById("upgrade1000").innerHTML = "Upgrade bitcoin per click (+1000)<br>Costs: " + price4.toLocaleString() + " cacti";
			document.getElementById("perClick").innerHTML = "bitcoin per click: " + perClick.toLocaleString();

			localStorage.setItem("price4", price4);
			localStorage.setItem("score", score);
			localStorage.setItem("perClick", perClick);
		}
	}

	function upgradeAuto1() {
		if (score >= priceAuto1){
			perSec += 1;
			score -= priceAuto1;
			priceAuto1 = Math.ceil(priceAuto1*1.3);
			document.getElementById("score").innerHTML = "bitcoin: " + score.toLocaleString();

			document.getElementById("auto1").innerHTML = "Upgrade bitcoin per second (+1)<br>Costs: " + priceAuto1.toLocaleString() + " bitcoin";

			document.getElementById("perSec").innerHTML = "bitcoin per second: " + perSec.toLocaleString();

			localStorage.setItem("priceAuto1", priceAuto1);
			localStorage.setItem("score", score);
			localStorage.setItem("perSec", perSec);
		}
	}

	function upgradeAuto2() {
		if (score >= priceAuto2){
			perSec += 10;
			score -= priceAuto2;
			priceAuto2 = Math.ceil(priceAuto2*1.3);
			document.getElementById("score").innerHTML = "bitcoin: " + score.toLocaleString();

			document.getElementById("auto10").innerHTML = "Upgrade bitcoin per second (+10)<br>Costs: " + priceAuto2.toLocaleString() + " bitcoin";

			document.getElementById("perSec").innerHTML = "bitcoin per second: " + perSec.toLocaleString();

			localStorage.setItem("priceAuto2", priceAuto2);
			localStorage.setItem("score", score);
			localStorage.setItem("perSec", perSec);
		}
	}

	function upgradeAuto3() {
		if (score >= priceAuto3){
			perSec += 100;
			score -= priceAuto3;
			priceAuto3 = Math.ceil(priceAuto3*1.3);
			document.getElementById("score").innerHTML = "bitcoin: " + score.toLocaleString();

			document.getElementById("auto100").innerHTML = "Upgrade bitcoin per second (+100)<br>Costs: " + priceAuto3.toLocaleString() + " bitcoin";

			document.getElementById("perSec").innerHTML = "bitcoin per second: " + perSec.toLocaleString();

			localStorage.setItem("priceAuto3", priceAuto3);
			localStorage.setItem("score", score);
			localStorage.setItem("perSec", perSec);
		}
	}

	function upgradeAuto4() {
		if (score >= priceAuto4){
			perSec += 1000;
			score -= priceAuto4;
			priceAuto4 = Math.ceil(priceAuto4*1.3);
			document.getElementById("score").innerHTML = "bitcoin: " + score.toLocaleString();

			document.getElementById("auto1000").innerHTML = "Upgrade bitcoin per second (+1000)<br>Costs: " + priceAuto4.toLocaleString() + " bitcoin";

			document.getElementById("perSec").innerHTML = "bitcoin per second: " + perSec.toLocaleString();

			localStorage.setItem("priceAuto4", priceAuto4);
			localStorage.setItem("score", score);
			localStorage.setItem("perSec", perSec);
		}
	}

	setInterval(function(perSecond) {
		score += perSec;
		document.getElementById("score").innerHTML = "bitcoin: " + score.toLocaleString();
		
		localStorage.setItem("score", score);

		d = new Date();
		n = d.getTime();

		if (perSec !== 0){
			document.getElementById("bitcoins").style.transform = `scaleX(${document.getElementById("bitcoins").style.transform.split("scaleX(")[1].split(")")[0]*-1})`;
		}

		localStorage.setItem("time", n);
	}, 1000)
	

	function reset() {
		if(confirm("Are you sure that you want to reset?\nIt can't be undone") == true){
			score = 0;
			perClick = 1;
			perSec = 0;

			price1 = 50;
			price2 = 500;
			price3 = 5000;
			price4 = 500000;

			priceAuto1 = 100;
			priceAuto2 = 1000;
			priceAuto3 = 10000;
			priceAuto4 = 1000000;

			localStorage.setItem("score", score);
			localStorage.setItem("perClick", perClick);
			localStorage.setItem("perSec", perSec);
			localStorage.setItem("price1", price1);
			localStorage.setItem("price2", price2);
			localStorage.setItem("price3", price3);
			localStorage.setItem("price4", price4)
			localStorage.setItem("priceAuto1", priceAuto1);
			localStorage.setItem("priceAuto2", priceAuto2);
			localStorage.setItem("priceAuto3", priceAuto3);
			localStorage.setItem("priceAuto4", priceAuto4);

			document.getElementById("score").innerHTML = "bitcoin: " + score.toLocaleString();
			document.getElementById("perClick").innerHTML = "bitcoin per click: " + perClick.toLocaleString();
			document.getElementById("perSec").innerHTML = "bitcoin per second: " + perSec.toLocaleString();

			document.getElementById("upgrade1").innerHTML = "Upgrade bitcoin per click (+1)<br>Costs: " + price1.toLocaleString()+" bitcoin";
			document.getElementById("upgrade10").innerHTML = "Upgrade bitcoin per click (+10)<br>Costs: " + price2.toLocaleString()+" bitcoin";
			document.getElementById("upgrade100").innerHTML = "Upgrade bitcoin per click (+100)<br>Costs: " + price3.toLocaleString() + " bitcoin";
			document.getElementById("upgrade1000").innerHTML = "Upgrade bitcoin per click (+1000)<br>Costs: " + price4.toLocaleString() + " bitcoin";

			document.getElementById("auto1").innerHTML = "Upgrade bitcoin per second (+1)<br>Costs: " + priceAuto1.toLocaleString()+" bitcoin";
			document.getElementById("auto10").innerHTML = "Upgrade bitcoin per second (+10)<br>Costs: " + priceAuto2.toLocaleString()+" bitcoin";
			document.getElementById("auto100").innerHTML = "Upgrade bitcoin per second (+100)<br>Costs: " + priceAuto3.toLocaleString() + " bitcoin";
			document.getElementById("auto1000").innerHTML = "Upgrade bitcoin per second (+1000)<br>Costs: " + priceAuto4.toLocaleString() + " bitcoin";
			
		}
		
	}

	document.getElementById("bitcoins").addEventListener("click", click);

	document.getElementById("upgrade1").addEventListener("click", upgrade1);
	document.getElementById("upgrade10").addEventListener("click", upgrade2);
	document.getElementById("upgrade100").addEventListener("click", upgrade3);
	document.getElementById("upgrade1000").addEventListener("click", upgrade4);

	document.getElementById("auto1").addEventListener("click", upgradeAuto1);
	document.getElementById("auto10").addEventListener("click", upgradeAuto2);
	document.getElementById("auto100").addEventListener("click", upgradeAuto3);
	document.getElementById("auto1000").addEventListener("click", upgradeAuto4);

	document.getElementById("reset").addEventListener("click", reset);

	}


play()


// modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}