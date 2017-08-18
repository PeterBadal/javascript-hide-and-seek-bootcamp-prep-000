//Define a function getFirstSelector(selector), which accepts a selector and returns the first element that matches.

function getFirstSelector(selector) {
  var firstSelector = document.querySelector(selector)
  return firstSelector
}

function nestedTarget(){
  return document.querySelector('div.target')
}
//const li2 = document.querySelector('ul.ranked-list li ul li')
function increaseRankBy(n){
	for(var i = 0; i< document.querySelectorAll('.ranked-list').length;i++) {
      //console.log(document.querySelectorAll('.ranked-list')[0].children)
      for(var j=0; j< document.querySelectorAll('.ranked-list')[i].children.length; j++) {
      	//debugger;
		var newNumber = parseInt(document.querySelectorAll('.ranked-list')[i].children[j].innerHTML) + n

        document.querySelectorAll('.ranked-list')[i].children[j].innerHTML = newNumber

        console.log(newNumber);
    }
}
return newNumber
}

//Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n.
// (You might need to make use of parseInt()
// function deepestChild(arr) {
//   {
//   if(arr.length === 0) {
//     return;
//   }
//   if(Array.isArray(arr[0])) {
//     deepestChild(arr[0])
//   } else {
//     //console.log(arr[0])
//   }
//   deepestChild(arr.slice(1))
//   //console.log(arr.slice(1))
//   }
//   return arr[0]
// }
function deepestChild() {
    return document.getElementById('grand-node').querySelectorAll('div')[3]
}
