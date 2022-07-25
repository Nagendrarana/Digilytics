let counter = 0;
let list = [];
function add() {

  const inner = document.querySelector("#particles-js .list .input1").value;

  list.push(inner);

    document.getElementById("area").innerHTML += "<li>" + list[counter] + " <button class='button' type='submit' name='button' onclick=deleted()> Done </button> </li>" ;
    counter++ ;


    console.log(list);





}
function deleted(){
  list.pop();
  console.log(list);
  counter--;
  document.getElementById("area").innerHTML = "";
  var iterator = list.values();

  for(let i=0;i<counter;i++){

        document.getElementById("area").innerHTML += "<li>" + list[i] + " <button class='button' type='submit' name='button' onclick=deleted()> Done </button> </li>" ;
  }
}
