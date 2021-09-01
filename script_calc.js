function insert(num){
    var resposta = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = resposta + num;
}
function clean(){
    document.getElementById('res').innerHTML = " ";
}
function calcular(){
    var result = document.getElementById('res').innerHTML;
    if(result){
        document.getElementById('res').innerHTML = eval(result);
    } else {
        alert('Nada para calcular')
    }
}
