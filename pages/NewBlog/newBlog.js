const upload=document.querySelector(`#upload`);
const authorInfo=document.querySelector('.author__information');
const titleInfo=document.querySelector('.title__information');
const descript=document.querySelector('.descript');
const email=document.querySelector('.email');
const button=document.querySelector('.button__publication');
const date=document.querySelector('.date')
const category=document.querySelector('#blogs')
let categories=[];


async function getCategories () {
    const response = await fetch("https://george.pythonanywhere.com/api/categories/")
     categories = await response.json()
  console.log(categories)
}

getCategories()


function authorInformation(event){
    if(event.target.value.length<=4){
        document.querySelector('.li__one').style.color='red'
        authorInfo.style.borderColor=`red`
        authorInfo.style.backgroundColor=`#FAF2F3`
    }else{
        document.querySelector('.li__one').style.color='green'
        authorInfo.style.borderColor=`#E4E3EB`
    }
    checkNameLegth()
    checkLetter()
}
function checkNameLegth(){
    let name=authorInfo.value.trim().split(/\s+/)
    
    if(name.length<=1){
        document.querySelector('.li__two').style.color='red'
    }else{
        document.querySelector('.li__two').style.color='green'
    }
    
}


function checkLetter(){
    let validLetter=/^[\u10A0-\u10FF\s]*$/;
    if(!validLetter.test(authorInfo.value)){
        document.querySelector('.li__three').style.color='red'
    }else{
        document.querySelector('.li__three').style.color='green'
    }
}

function checktitle(){
    if(titleInfo.value.length <=2){
       document.querySelector('.title__value').style.color='red'
    }else{
        document.querySelector('.title__value').style.color='green'
    }
}

function checkDescribeValue(){
    if(descript.textContent.length <=1){
        document.querySelector('.desribe__value').style.color='red'
    }else {
        document.querySelector('.desribe__value').style.color='green'
    }
}


function checkEmail(){
    let emailRegex = /^[^\s@]+@redberry\.ge$/;
    if(emailRegex.test(email.value)){
        document.querySelector('.alarm').style.visibility="hidden"
        email.style.borderColor='#14D81C'
    }else {
        document.querySelector('.alarm').style.visibility="visible"
        email.style.borderColor=`red`
        email.style.backgroundColor=`#FAF2F3`
        
    }
}







titleInfo.addEventListener('input',checktitle)
authorInfo.addEventListener("input",authorInformation)
descript.addEventListener('input',checkDescribeValue)
email.addEventListener('input',checkEmail)
upload.addEventListener("input",(event)=>{
    
    document.querySelector('.choose__image').style.display='none'
    document.querySelector('.change').style.display='flex'

    //console.log(event.target.files[0])

    
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
      
           localStorage.setItem('str',reader.result)
        };
        reader.readAsDataURL(file);
        
})

button.addEventListener('click',()=>{
    button.style.backgroundColor='#5D37F3';
    authorInfo.style.borderColor='#14D81C'
    authorInfo.style.backgroundColor='#F8FFF8'
    titleInfo.style.borderColor='#14D81C'
    titleInfo.style.backgroundColor='#F8FFF8'
    descript.style.borderColor='#14D81C'
    descript.style.backgroundColor='#F8FFF8'
    document.querySelector('.date').style.borderColor='#14D81C'
    document.querySelector('.date').style.backgroundColor='#F8FFF8'
    document.querySelector('#blogs').style.borderColor='#14D81C'
    document.querySelector('#blogs').style.backgroundColor='#F8FFF8'
    email.style.borderColor='#14D81C'
    email.style.backgroundColor='#F8FFF8'

   
    async function addBlog(){
        console.log(category.value)
        console.log(categories?.find((item)=>item.title==category.value))
       const response=await fetch('https://george.pythonanywhere.com/api/blogs/create/',{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("token")}`
        },
        body:JSON.stringify({
            categories: [categories?.find((item)=>item.title==category.value)],
            title:titleInfo.value,
            publish_date:date.value,
            description:descript.innerHTML,
            email:email.value,
            author: authorInfo.value
        })
       })

         const data=await response.json();
         console.log(data)
    }
    

    addBlog()
})


