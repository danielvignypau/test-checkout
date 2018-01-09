function copyadd(){
  ship_first = document.getElementById('sfirst').value;
  ship_last = document.getElementById('slast').value;
  ship_address = document.getElementById('saddress').value;
  ship_city = document.getElementById('scity').value;
  ship_zip = document.getElementById('szip').value;
  ship_country = document.getElementById('scountry').value;
  //ship_province = document.getElementById('sprovince').value;
  
  bill_first = document.getElementById('bfirst');
  bill_last = document.getElementById('blast');
  bill_address = document.getElementById('baddress');
  bill_city = document.getElementById('bcity');
  bill_zip = document.getElementById('bzip');
  bill_country = document.getElementById('bcountry');
  //bill_province = document.getElementById('province');
  
  bill_first.value = ship_first;
  bill_last.value = ship_last;
  bill_address.value = ship_address;
  bill_city.value = ship_city;
  bill_zip.value = ship_zip;
  bill_country.value = ship_country;
  //bill_province.value = ship_province;
}

function submit_info(){
  terms = document.getElementById('terms').checked;
  error = document.getElementById('error');
  error2 = document.getElementById('error2');
  
  s_first = document.getElementById('sfirst').value;
  s_last = document.getElementById('slast').value;
  s_address = document.getElementById('saddress').value;
  s_city = document.getElementById('scity').value;
  //s_province = document.getElementById('sprovince').value;
  s_zip = document.getElementById('szip').value;
  s_country = document.getElementById('scountry').value;
  
  b_first = document.getElementById('bfirst').value;
  b_last = document.getElementById('blast').value;
  b_address = document.getElementById('baddress').value;
  b_city = document.getElementById('bcity').value;
  //b_province = document.getElementById('province').value;
  b_zip = document.getElementById('bzip').value;
  b_country = document.getElementById('bcountry').value;
  
  if (terms){
    error.className='hidden';
    console.log('Shipping address: '+'\n'+s_first+' '+s_last+'\n'+s_address+'\n'+s_city+', '+s_zip+'\n'+s_country);
    
    console.log('Billing address: '+ '\n'+b_first+' '+b_last+'\n'+b_address+'\n'+b_city+', '+b_zip+'\n'+b_country);
  }
  /*else if ){
      error2.className='visible';     
  }
  */
  else{
    error.className='visible';
  }
}