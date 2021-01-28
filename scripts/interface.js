window.onload = () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });

  function handleClick(e) {
    let square = e.target;
    let position = square.id;
    if (table[position] == "") {
      handleMove(position);

      square.innerHTML = `<div class='${table[position]}'></div>`;
      chekingGame()
    }
  }
};
