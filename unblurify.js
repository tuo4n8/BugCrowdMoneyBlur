//bugcrowd
payments = document.querySelectorAll(".bc-reward")

total_bc_page = document.querySelectorAll('.bc-panel__main strong, .bc-panel__main small');

payments1 = document.querySelectorAll(".bc-stat__fig")

totals_bugcrowd_page = document.querySelectorAll('.bc-panel__main strong, .bc-panel__main small');

spans = document.querySelectorAll('.spec-amount-in-currency span');

strongs = document.querySelectorAll('.spec-hacktivity-item-bounty');

totals_bugcrowd = document.querySelectorAll('#content > div.cc-100vh-container > main > div > section > div > div.tk-sidebar.col-md-3 > div:nth-child(1) > div > p:nth-child(1)')

cardContent = document.querySelector('.spec-user-payouts')

moneyElements = document.querySelectorAll('.card__content h4:nth-child(2)');

payments.forEach(payment =>{
	// fake money
	// payment.innerHTML = "$1"
	//
	payment.style.filter = "blur(0px)"
})


totals_bugcrowd_page.forEach(element => {
    element.style.filter = 'blur(0px)';
});

totals_bugcrowd.forEach(total =>{
	// fake money
	// payment.innerHTML = "$1"
	
	total.style.filter = "blur(0px)"
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

moneyElements.forEach(element => {
    element.style.filter = 'blur(0px)';
});


strongs.forEach(strong => {
	strong.style.filter = 'blur(0px)';
});

cardContent.forEach(element => {
    element.style.filter = 'blur(0px)';
});

total_bc_page.forEach(element => {
    element.style.filter = 'blur(0px)';
});