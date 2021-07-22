document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("create-task-form").addEventListener('submit', addTask);
});

function addTask(event) {

  // prevent form from being submitted 
  event.preventDefault();

  // get to do list
  let ul = document.querySelector('ul#tasks');

  // begin creation of new task
  let li = document.createElement('li');

  // get task from text box
  formText = document.querySelector("input#new-task-description").value;
  li.innerText = formText

  // add the cancel button
  let btn = document.createElement('button');
  btn.dataset.description=`${formText}`;
  btn.innerHTML = 'X';
  li.appendChild(btn);

  ul.appendChild(li);
  
}

// document.querySelector("#id-checkbox").addEventListener("click", function(event) {
//   document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
//   event.preventDefault();
// }, false);

// <li>
//         asdfasdf
//         <button data-description="asdfasdf">X</button>
//       </li>