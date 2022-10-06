const list = document.querySelector(".list-group");

const createElement = (tagElement, content, attributes) => {
  const element = document.createElement(tagElement);
  element.innerHTML = content;

  Object.entries(attributes).forEach(([key, value]) =>
    element.setAttribute(key, value)
  );

  list.appendChild(element);
};

list.children[0].classList.remove("active");

createElement("li", "Quarto item", {
  class: "list-group-item active",
});

createElement("li", "Quinto item", {
  class: "list-group-item",
});

const setStyle = (elementSelected, styles) => {
  Object.entries(styles).forEach(([property, value]) => {
    if (elementSelected?.length > 1) {
      elementSelected.forEach((element) => (element.style[property] = value));
    } else {
      elementSelected.style[property] = value;
    }
  });
};

const getElement = (elementSelected, elementList, styles) => {
  let element;
  if (elementList) {
    element = document.querySelectorAll(elementSelected);
  } else {
    element = document.querySelector(elementSelected);
  }
  setStyle(element, styles);
};

getElement(".btn-group-vertical", false, {
  alignItems: "flex-start",
  flexDirection: "row",
  gap: "0.3125rem",
});

getElement(".col-lg-12 .btn-group-vertical .btn-secondary", true, {
  borderRadius: "3px",
  margin: "0",
  width: "max-content",
});

getElement(".jumbotron", false, {
  textAlign: "end",
  color: "white",
  backgroundColor: "#6c757d",
});

getElement(".btn-lg", false, {
  backgroundColor: "#28a844",
  borderColor: "#28a844",
});

getElement(".row:nth-of-type(3) > .col-lg-3:nth-of-type(2)", false, {
  order: 2,
});

getElement(".row:nth-of-type(3) > .col-lg-3:nth-of-type(3)", false, {
  order: 4,
});

getElement(".row:nth-of-type(3) > .col-lg-3:nth-of-type(4)", false, {
  order: 3,
});

getElement(".row:nth-of-type(3) > .col-lg-3:nth-of-type(2) a", false, {
  backgroundColor: "#28a844",
  borderColor: "#28a844",
});

console.log(
  document.querySelectorAll(
    ".row:nth-of-type(3) > .col-lg-3:nth-of-type(2) > btn-primary "
  )
);
