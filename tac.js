function onClickX(event) {
  count++;
  console.log("count is:", count);
  const box = event.currentTarget;
  let winval = "";
  const winHeader = document.createElement("h2");
  const result = document.querySelector("#result");
  box.innerHTML = "X";
  box.removeEventListener("click", onClickX);
  if (count === 5) {
    winHeader.textContent = "its a tie!!";
    result.appendChild(winHeader);
    return;
  }
  
  onClickO.call();
  if (count < 5) {
    winval =
      checkWinner(0, 1, 2) || checkWinner(3, 4, 5) || checkWinner(6, 7, 8);
    if (winval !== null) {
      if (winval === "X") {
        winHeader.textContent = "You win!!";
        result.appendChild(winHeader);
        return;
      } else {
        winHeader.textContent = "Computer win!!";
        result.appendChild(winHeader);
        return;
      }
    }
    winval =
      checkWinner(0, 3, 6) || checkWinner(1, 4, 7) || checkWinner(2, 5, 8);
    if (winval !== null) {
      if (winval === "X") {
        winHeader.textContent = "You win!!";
        result.appendChild(winHeader);
        return;
      } else {
        winHeader.textContent = "Computer win!!";
        result.appendChild(winHeader);
        return;
      }
    }
    winval = checkWinner(0, 4, 8) || checkWinner(2, 4, 6);
    if (winval !== null) {
      if (winval === "X") {
        winHeader.textContent = "You win!!";
        result.appendChild(winHeader);
        return;
      } else {
        winHeader.textContent = "Computer win!!";
        result.appendChild(winHeader);
        return;
      }
    }
  } else {
    winHeader.textContent = "its a tie!!";
    result.appendChild(winHeader);
  }
}
function randomNum() {
  return Math.random() * 9;
}
function onClickO(event) {
  let x = parseInt(randomNum());
  console.log("x is:", tic[x]);
  if (tic[x].innerHTML === "") {
    tic[x].innerHTML = "O";
    return;
  }
  onClickO(event);
}
function checkWinner(one, two, three) {
  console.log("winnner check is called:", one, two, three);
  console.log(
    "test condition is:",
    tic[one].innerHTML,
    tic[two].innerHTML,
    tic[three].innerHTML
  );
  if (
    tic[one].innerHTML !== "" &&
    tic[one].innerHTML === tic[two].innerHTML &&
    tic[three].innerHTML === tic[one].innerHTML
  ) {
    console.log("condition is true");
    return tic[one].innerHTML;
  }
  return null;
}

function reloadPage()
{
  location.reload(true)
}
let count = 0;
const tic = document.querySelectorAll("#grid h1");
console.log(tic);
for (let box of tic) {
  box.addEventListener("click", onClickX);
}

let resetButton = document.querySelector('button')
resetButton.addEventListener('click',reloadPage)