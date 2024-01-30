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

