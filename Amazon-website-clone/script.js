let backBtn=document.body.querySelector(".backBtn")
console.log(backBtn)

backBtn.addEventListener("click",()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

let shopBtn = document.querySelectorAll(".shopBtn")

shopBtn.forEach(btn=>{
    btn.addEventListener("click",()=>{
       alert('added to cart')
    })
})