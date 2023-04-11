//Question # 01

const add =(function(){
    let a = 5;
    return function(b){
        return b+a;
    }
}
)();

console.log(add(5));

//Question # 02
function search(arr,val){
    if (arr.length == 0){
        return false;
    }
    else if(arr[0]==val) {
          return true;
    }
    else{
        return search(arr.slice(1),val);
    }
}

console.log(search([2,3,4,5,7],4));
console.log(search(["cat","dog","goat"]))


//Question # 03
let html = document.getElementById("myP").innerHTML;
console.log(html);
function add(){
    console.log("button click");
    let txt = document.getElementById("txt").value;
    console.log(txt)
    html += txt;
    console.log(html);
    document.getElementById("myP").innerHTML= html;
}


//Question # 04
let ul = document.getElementById("ul").innerHTML;
function add4(){
    let txt= document.getElementById("txt").value;
    ul +="<li>"+txt+"</li>"
    document.getElementById("ul").innerHTML=ul;
}
let color="yellow"
//Question # 05
function change(color){
    document.getElementById("myP").style.backgroundColor=color;
}

//Question # 06
function setItem(mykey,obj){
localStorage.setItem(mykey,JSON.stringify(obj));
}

setItem("student",{name:"Ali",roll:44})


//Question # 07
function getItems(mykey){
    return JSON.parse(localStorage.getItem(mykey))
}

console.log(getItems("student"))

//Question # 08
function ts(obj){
    localStorage.setItem("property",JSON.stringify(obj))
    return JSON.parse(localStorage.getItem("property"))
}

console.log(ts({name:"sahid",roll:44},"property"))