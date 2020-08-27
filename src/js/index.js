let borders = {
  topLeft: 0,
  topRight: 0,
  bottonRight: 0,
  bottonLeft: 0,
};

app = () => {
  createEventListener(borders);
  setInitialValues();
};

createEventListener = (borders) => {
  Object.keys(borders).forEach((border) => {
    document.getElementById(border).addEventListener("change", updateBorders);
  });

  document
    .getElementById("btnClear")
    .addEventListener("click", setInitialValues);

  document.getElementById("btnCopy").addEventListener("click", copy);
};

copy = () => {
  copy = document.createElement("input");
  document.body.appendChild(copy);
  copy.setAttribute("id", "css");
  document.getElementById(
    "css"
  ).value = `border-radius: ${borders.topLeft}px ${borders.topRight}px ${borders.bottonRight}px ${borders.bottonLeft}px`;

  copy.select();
  copy.setSelectionRange(0, 99999);
  document.execCommand("copy");

  document.body.removeChild(copy);
  alert("Copied!");
};

setInitialValues = () => {
  borders = {
    topLeft: 0,
    topRight: 0,
    bottonRight: 0,
    bottonLeft: 0,
  };

  Object.keys(borders).forEach((border) => {
    document.getElementById(border).value = borders[border];
  });
  updateViewBorders();
};

updateViewBorders = () => {
  const borderCss = `${borders.topLeft}px ${borders.topRight}px ${borders.bottonRight}px ${borders.bottonLeft}px`;

  document.getElementById("container").style.borderRadius = borderCss;

  document.getElementById(
    "container"
  ).innerText = `border-radius: ${borderCss}px;`;
};

updateBorders = ({ target }) => {
  let inputs = document.getElementsByClassName("border");

  Array.from(inputs).forEach((input) => {
    if (input.value == 0 || input.id == target.id) {
      input.value = target.value;
      borders[input.id] = target.value;
    }
  });
  borders[target.id] = target.value;
  updateViewBorders();
};
