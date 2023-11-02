function convert(){
	//alert("Convert function!!");
	//Create object or references of HTML elements
	var frm,to,amount;
	
	frm=document.getElementById('from');
	to=document.getElementById('to');
	amount=document.getElementById('amt');
	res=document.getElementById('result');
	cu=document.getElementById('curr');
	
	// document.write(frm+"<br/>");
	// document.write(to+"<br/>");
	// document.write(amount+"<br/>");
	
	/*document.write("From :"+frm.value+"<br/>");
	document.write("To :"+to.value+"<br/>");
	document.write("Amount :"+amount.value+"<br/>"); */
	
	var url="https://v6.exchangerate-api.com/v6/e7ebae78538749df9d07eb16/latest/"+frm.value;
	//var res=fetch("https://v6.exchangerate-api.com/v6/e7ebae78538749df9d07eb16/latest/USD")
	fetch(url)
	
	.then(function(res){
		
		//document.write(res.json());
		return res.json();
	}).then(function(data){
		
		// document.write(data+"<br />");
		// document.write(data['result']+"<br />");
		// document.write(data['base_code']+"<br />");
		var cr=data['conversion_rates'];
		//document.write(cr[to.value]);
		cf=cr[to.value];
		
		var famt=cf*amount.value;
		//document.write("Final AMOUNT:"+famt);
		res.innerHTML=famt;
		cu.innerHTML=to.value;
		
		
		
	});
	
}