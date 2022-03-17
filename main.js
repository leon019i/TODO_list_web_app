let addbtn = document.getElementById("addBtn");

let taskInput = document.getElementById("taskInput");
let noTask = document.getElementById("noTask");
let allTasks = document.getElementById("allTasks");
let invalid = document.getElementById("invalid");
let closevalidationmessage = document.querySelector("#invalid .close");
let model = document.getElementById("model");
let modelbtn = document.getElementById("modelbtn");

let showModel = () => {
  model.style.display = "block";
};
let closeModel = () => {
  model.style.display = "none";
};
modelbtn.addEventListener("click", showModel);

let noTasksShow = () => {
  if (allTasks.childElementCount > 0) {
    noTask.classList.add("none");
  } else {
    noTask.classList.remove("none");
  }
};

//======add task ======

let addTask = () => {
  let taskData = taskInput.value;

  if (
    taskData.trim() == "" ||
    taskInput.value.length < 3 ||
    taskInput.value.lenght < 20
  ) {
    invalid.classList.remove("none");
  } else {
    noTask.classList.add("none");
    allTasks.innerHTML += `<div class =" task alert alert-info"> <p>${taskData}  <i class="delete float-right fas fa-trash-alt" style="font-size: 20px"></i> </p></div>`;
    closeModel();
  }
  allTasks.addEventListener("click", function (e) {
    if (e.target.classList.contains("task")) {
      e.target.classList.add("checked");
    }
  });
};

addbtn.addEventListener("click", addTask);
closevalidationmessage.addEventListener("click", function () {
  invalid.classList.add("none");
});
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
  noTasksShow();
});
