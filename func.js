function func() {
  var i = document.getElementsByName('param2').getElementById('num').value;
  var x = document.getElementById('num').value;
  window.sessionStorage.setItem(['key1'],[x]);
  var a = window.sessionStorage.getItem(['key1']);
  console.log(a);
  window.location.href = 'index2.html';
}