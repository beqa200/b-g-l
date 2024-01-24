// const nav = [...document.querySelectorAll(".item")];
const categoryWrapper = document.querySelector(".nav-list");
console.log(typeof categoryWrapper);
categoryWrapper.map((item, index) => {});
async function getCard() {
  try {
    const response = await fetch(
      "https://george.pythonanywhere.com/api/categories/"
    );
    const data = await response.json();

    data.forEach((item) => {
      const category = document.createElement("li");
      category.classList.add("item");
      category.innerText = item.title;
      category.style.color = item.text_color;
      category.style.backgroundColor = item.background_color;
      categoryWrapper.appendChild(category);
    });

    // console.log(data);
    if (!response.ok) {
      throw new Error("failed request");
    }
  } catch (error) {
    console.log(error.message);
  }
}

getCard();
