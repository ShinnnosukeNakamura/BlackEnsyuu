function setOrderData() {
    // window.sessionStorage.clear();
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var telephone = document.getElementById('telephone').value;
    var fax = document.getElementById('fax').value;
    var company = document.getElementById('company').value;
    var address1 = document.getElementById('address1').value;
    var address2 = document.getElementById('address2').value;
    var city = document.getElementById('city').value;
    var postcode = document.getElementById('post-code').value;
    var country = document.getElementById('country').value;
    var regionstate = document.getElementById('region-state').value;
    
     window.sessionStorage.setItem(['firstname'],[firstname]);
     window.sessionStorage.setItem(['lastname'],[lastname]);
     window.sessionStorage.setItem(['email'],[email]);
     window.sessionStorage.setItem(['fax'],[fax]);
     window.sessionStorage.setItem(['company'],[company]);
     window.sessionStorage.setItem(['address1'],[address1]);
     window.sessionStorage.setItem(['address2'],[address2]);
     window.sessionStorage.setItem(['city'],[city]);
     window.sessionStorage.setItem(['post-code'],[postcode]);
     window.sessionStorage.setItem(['country'],[country]);
     window.sessionStorage.setItem(['region-state'],[regionstate]);
     console.log('firstname');
     console.log(firstname);
     alert('firstname   ' + firstname);
     window.location.href = 'orderConfirm.html';
    
}