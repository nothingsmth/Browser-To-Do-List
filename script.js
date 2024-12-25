document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const todoList = document.getElementById("todoList");

  // Add a new task
  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      showNotification("Task cannot be empty!", "error");
      return;
    }

    const taskItem = createTaskItem(taskText);
    todoList.appendChild(taskItem);
    taskInput.value = "";
    showNotification("Task added successfully!", "success");
  });

  // Create a task item
  function createTaskItem(taskText) {
    const li = document.createElement("li");
    li.className = "task-item";

    const taskName = document.createElement("span");
    taskName.textContent = taskText;

    const buttons = document.createElement("div");
    buttons.className = "task-buttons";

    const completeButton = document.createElement("button");
    completeButton.textContent = "Done";
    completeButton.className = "complete-button";
    completeButton.addEventListener("click", () => {
      li.classList.toggle("done");
      const message = li.classList.contains("done")
        ? "Task marked as completed!"
        : "Task marked as incomplete!";
      showNotification(message, "success");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", () => {
      todoList.removeChild(li);
      showNotification("Task deleted!", "info");
    });

    buttons.appendChild(completeButton);
    buttons.appendChild(deleteButton);

    li.appendChild(taskName);
    li.appendChild(buttons);

    return li;
  }

});



