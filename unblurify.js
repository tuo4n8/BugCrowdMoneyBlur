//bugcrowd
payments = document.querySelectorAll(".bc-reward")

payments1 = document.querySelectorAll(".bc-stat__fig")

spans = document.querySelectorAll('.spec-amount-in-currency span');

strongs = document.querySelectorAll('.spec-hacktivity-item-bounty');

payments.forEach(payment =>{
	// fake money
	// payment.innerHTML = "$1"
	//
	payment.style.filter = "blur(0px)"
})


payments1.forEach(payment =>{
	// fake money
	// payment.innerHTML = "$1"
	//
	payment.style.filter = "blur(0px)"
})	


//hackerone
spans.forEach(span => {
	span.style.filter = 'blur(0px)';
});



strongs.forEach(strong => {
	strong.style.filter = 'blur(0px)';
});