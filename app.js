let arr = [];
function add() {
    let a = document.getElementById('inp').value;
    arr.push(a);
    console.log(arr);
    document.getElementById('inp').value = '';
    p1.innerText = (arr [0]);
    p2.innerText = (arr [1]);
    p3.innerText = (arr [2]);
}