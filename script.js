// Task One
let burger = document.querySelector(".burger");
let xMark = document.querySelector(".xMark");
let mobileMenu = document.querySelector(".header_nav");

burger.addEventListener("click", () => {
  burger.style.display = "none";
  xMark.style.display = "block";
  mobileMenu.classList.add("show");
});

xMark.addEventListener("click", () => {
  xMark.style.display = "none";
  burger.style.display = "block";
  mobileMenu.classList.remove("show");
});


// Task Two

let inputElementNew = document.getElementById("input-element");
let btnElemetnNew = document.getElementById("add-btn");
let ulResult = document.getElementById("ul-element");
let clearAll = document.getElementById("clearAll");

btnElemetnNew.addEventListener("click", function () {
    let inputValue = inputElementNew.value;
    // if (inputValue !=="") {
    //     continue;
    // } else {
    //     break;
    // }
  
    let li = document.createElement("li");
  
    let btnDelete = document.createElement("button");
    btnDelete.classList.add("deleteBtn")
    btnDelete.innerHTML = '<i class="fa-solid fa-trash"></i>'
    btnDelete.addEventListener("click", function () {
      li.remove();
    });
  
    li.textContent = inputValue;
    li.appendChild(btnDelete);
    ulResult.appendChild(li);
  

    inputElementNew.value = " ";
  });
  
  clearAll.addEventListener("click", function () {
    ulResult.innerHTML = " ";
  });
  