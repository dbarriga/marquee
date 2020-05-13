let alignOrder = "block";
const generate = () => {
    console.log(alignOrder)
  let container = document.querySelector(".container");
  let content = "";
  const NUMBER = Math.ceil(Math.random() * 20);
  for (let i = 1; i <= NUMBER; i++) {
    content += `<div class="box ${i % 2 === 0 ? 'even' : 'non'} ${alignOrder === 'block' ? 'block' : ''}">Box ${i}</div>`;
  }

  container.innerHTML = content+'<div class="spacer" style="clear: both;"></div>';
};

const align = (order) => {
  let boxes = document.querySelectorAll(".box");
  switch (order) {
    case "block":
      if (alignOrder !== "block") {
        boxes.forEach((item) => item.classList.add("block"));
        alignOrder = "block";
      }
      break;
    case "left":
      if (alignOrder !== "left") {
        boxes.forEach((item) => item.classList.remove("block"));
        alignOrder = "left";
      }
      break;
    default:
      break;
  }
};
