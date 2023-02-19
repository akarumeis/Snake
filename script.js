// выбираем элемент, который нужно перемещать
const box = document.getElementById("box");
let direction = "Right";
// добавляем обработчик события keydown на объект document
function move(event) {
  // получаем текущие координаты элемента
  let x = box.offsetLeft;
  let y = box.offsetTop;
  if (direction === "Up") {
    y -= 10;
  } else if (direction === "Down") {
    y += 10;
  } else if (direction === "Left") {
    x -= 10;
  } else if (direction === "Right") {
    x += 10;
  }

  if (x > window.innerWidth) {
    x = -50;
  } else if (x < -50) {
    x = window.innerWidth;
  } else if (y > window.innerHeight) {
    y = 0;
  } else if (y < -50) {
    y = window.innerHeight;
  }

  document.addEventListener("keydown", function (event) {
    if (event.code === "ArrowUp") {
      direction = "Up";
    } else if (event.code === "ArrowDown") {
      direction = "Down";
    } else if (event.code === "ArrowLeft") {
      direction = "Left";
    } else if (event.code === "ArrowRight") {
      direction = "Right";
    }

    // устанавливаем новые координаты элемента
  });
  box.style.left = x + "px";
  box.style.top = y + "px";
}

setInterval(move, 30);