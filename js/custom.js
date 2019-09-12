window.onload = prepareDate();

function prepareDate () {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();

  if(dd<10) {
    dd='0'+dd;
  } 
  
  if(mm<10) {
    mm='0'+mm;
  } 
  
  today = dd+'/'+mm+'/'+yyyy;

  var trocaData = document.getElementsByClassName('trocaData');
  console.log(trocaData);
  trocaData.innerHTML = 'today';  

  console.log(trocaData);
}

