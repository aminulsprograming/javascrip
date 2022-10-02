

var stName = document.getElementById('name');
var roll = document.getElementById('roll');
var dept = document.getElementById('dept');
var gpa = document.getElementById('gpa');
var btn = document.getElementById('btn');

btn.addEventListener('click',function(pera){
pera.preventDefault();
if(stName.value == ''&&roll.value == '' && dept.value == ''&& gpa.value == '' ){
    alert('name input enty');
}
else{
    var tbody = document.getElementById('tbody');
    var tr = document.createElement('tr');

  
    var td = document.createElement('td');
    td.innerHTML = stName.value;
    tr.appendChild(td);

    var td1 = document.createElement('td');
    td1.innerHTML = roll.value;
    tr.appendChild(td1);

    var td2 = document.createElement('td');
    td2.innerHTML = dept.value;
    tr.appendChild(td2);

    var td3 = document.createElement('td');
    td3.innerHTML = gpa.value;
    tr.appendChild(td3);
    
    tbody.appendChild(tr);
    


}
});