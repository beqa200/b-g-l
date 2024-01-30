const categoryButtons = Array.from(document.querySelectorAll(".item a"));

const categoryWrapper = document.querySelector(".nav-list");
const categoryCards = document.querySelector(".card-nav-list");
const main = document.querySelector(".main");
let categories = [];

categoryButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (categories.indexOf(e.target.innerText) >= 0) {
      categories.splice(categories.indexOf(e.target.innerText), 1);
    } else {
      categories.push(e.target.innerText);
    }
    filterCards(categories);
    console.log(categories);
  });
});

async function filterCards(categories) {
  try {
    const response = await fetch(
      "https://george.pythonanywhere.com/api/blogs/"
    );
    let data = await response.json();
    if (categories.length !== 0) {
      main.innerHTML = "";
      data = data.filter((blog) =>
        blog.categories.some((category) => categories.includes(category.title))
      );
    }

    let blogs = data
      .map(
        (blog) =>
          ` <div class="card1">

<div class="card1-image" >
<img src="${blog.image}" style="width:100%; height: 328px;"/></div>

<div class="card-wrapper">
  <div class="card1-title">
    <h2>${blog.author}</h2>
    <span class="span-date">${blog.publish_date}</span>
  </div>
  <h3>${blog.description.slice(0, 40)}...</h3>
  <ul class="card-nav-list">
  ${blog.categories
    .map(
      (category) =>
        `<li class="element market"><a href="#">${category.title}</a></li>`
    )
    .join("")}
    
    
  </ul>
  <p class="paragraph">
    6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
    სიზუსტისთვის, ეს პროცესი...
  </p>
  <div class="last-item">
    <span class="full-paragraph"><a href="#"> სრულად ნახვა</a></span>
    <img src="images/Arrow.png" alt="arrow/icon" />
  </div>
</div>
</div>`
      )
      .join(" ");

    main.insertAdjacentHTML("beforeend", blogs);

    if (!response.ok) {
      throw new Error("failed request");
    }
  } catch (error) {
    console.log(error.message);
  }
}
filterCards(categories);

// async function getCard() {
//   try {
//     const response = await fetch(
//       "https://george.pythonanywhere.com/api/categories/"
//     );
//     const data = await response.json();

//     data.forEach((item) => {
//       const category = document.createElement("li");
//       category.classList.add("item");
//       category.innerText = item.title;
//       category.style.color = item.text_color;
//       category.style.backgroundColor = item.background_color;
//       categoryWrapper.appendChild(category);
//     });

//     console.log(data);
//     if (!response.ok) {
//       throw new Error("failed request");
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// getCard();
const income=document.querySelector('.income');
const cross=document.querySelector('.cross')
const register=document.querySelector('.register')
const modalEmail=document.querySelector('.modal__email')


if(localStorage.getItem('email')){
  modalEmail.value=localStorage.getItem('email')
}




cross.addEventListener('click',()=>{
    document.querySelector('#modalWindow').style.visibility='hidden'
})
income.addEventListener('click',(event)=>{
     document.querySelector('#modalWindow').style.visibility='visible'
     if(income.innerHTML=='დაამატე ბლოგი'){
      window.location.href='pages/NewBlog/newBlog.html'
     }
})
register.addEventListener('click',(event)=>{
  if(event.target.value=='შესვლა'){
    login()
    if(localStorage.getItem('token') != ''){
      register.value='კარგი'
      document.querySelector('.inc').innerHTML='წარმატებული ავტორიზაცია'
      modalEmail.style.display='none'
      document.querySelector('.postp').style.display='none'
      document.querySelector('.tick').style.display='flex'
      document.querySelector('.tick').style.marginBottom='20px'
      
    } 
  }else{
      document.querySelector('#modalWindow').style.display='none'
      document.querySelector('.income').innerHTML='დაამატე ბლოგი'
      document.querySelector('.income').style.width='153px'
    }
    
   
})
async function login(){
  try{
    const response=await fetch('https://george.pythonanywhere.com/api/login/',{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({
        email:modalEmail.value,
      })
    });
    console.log(response.ok)
    const data= await response.json()
    localStorage.setItem('token',data.token)
    console.log(data)
    
    
  } catch (error){
    alert('Error during login:', error)
    
  }
}




const item = [...document.querySelectorAll(".item")];
const nav = [...document.querySelectorAll(".nav-list")];
console.log(nav);

const foo = item.filter((ele, index) => ele[index] == "UI/UX");
console.log(foo);

