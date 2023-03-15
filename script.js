// Adding todos in list
let pushBtn = document.querySelector("#push");
pushBtn.onclick = function () {
    // Condition to check empty todo task
  if (document.querySelector("#task-input").value.length == 0) {
    alert("Please enter a task");
  }
//   Appending input in list 
  else {
    document.querySelector("#tasks").innerHTML += `<div class = "task">
        <span id="taskname">
        ${document.querySelector("#task-input").value}
        </span>
        <button class="delete">
        <span class="material-symbols-outlined">delete</span>
        </button>
        </div>`;
    document.querySelector("#task-input").value = "";
// Loop to delete tasks
    let currentList = document.querySelectorAll(".delete");
    for (let i = 0; i < currentList.length; i++) {
      currentList[i].onclick = function () {
        currentList[i].parentElement.remove();
      };
    }
  }
};
