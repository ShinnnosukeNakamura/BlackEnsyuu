
console.log("HOGE");
document.getElementById('firstname').innerHTML= window.sessionStorage.getItem(['firstname']);
document.getElementById('lastname').innerHTML= window.sessionStorage.getItem(['lastname']);
document.getElementById('email').innerHTML= window.sessionStorage.getItem(['email']);
document.getElementById('telephone').innerHTML= window.sessionStorage.getItem(['telephone']);
document.getElementById('fax').innerHTML= window.sessionStorage.getItem(['fax']);
document.getElementById('company').innerHTML= window.sessionStorage.getItem(['company']);
document.getElementById('address1').innerHTML= window.sessionStorage.getItem(['address1']);
document.getElementById('address2').innerHTML= window.sessionStorage.getItem(['address2']);
document.getElementById('city').innerHTML= window.sessionStorage.getItem(['city']);
document.getElementById('post-code').innerHTML= window.sessionStorage.getItem(['post-code']);
document.getElementById('country').innerHTML= window.sessionStorage.getItem(['country']);
document.getElementById('region-state').innerHTML= window.sessionStorage.getItem(['region-state']);
console.log(window.sessionStorage.getItem(['firstname']));
//window.sessionStorage.clear();

