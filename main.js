$(document).ready(function(){
  $('.banner').slick({
    dots:true,
  });
});



let burger2 = document.querySelector(".header__burger2")
let arrow = document.querySelector(".feedback");
let burger = document.querySelector(".header__burger");
let model = document.querySelector(".backdrop")
let menu = document.querySelector('.model_burger')
burger.addEventListener("click",function(){
  model.classList.add("open");
  menu.classList.add("opens");
  model.addEventListener("click",function(){
    model.classList.remove("open");
    menu.classList.remove("opens");
  })

burger2.addEventListener("click",function(){
  model.classList.add("open");
  menu.classList.add("opens");
})

})
window.addEventListener("scroll",function(){
    arrow.classList.add("opened");
  });


window.addEventListener("click",function(){
arrow.scrollTo({ top: 0, behavior: 'smooth' });
})




// let text1 = document.querySelectorAll('.footer__text1');
// text1.forEach((item) => {
//
// item.addEventListener("click",function(){
//   listfooter.classList.toggle("active");
// })
//
// });





let filter = document.querySelectorAll('.filter');
filter.forEach((item) => {
let u = item.dataset.filter;
let lyl = document.querySelector(`.${u}`);

item.addEventListener("click",function(){

    item.classList.toggle("filterOpen");

    if (lyl) {
      lyl.classList.toggle("wrapperOpen");
    }

});



});





let listTwo = document.querySelector(".listTwo");
let list = document.querySelector(".list");
let itemSpan = list.querySelector("span");
let number = document.querySelectorAll('.number')

number.forEach((item) => {

item.addEventListener("click",function(){
let meaning = item.textContent;
itemSpan.textContent = meaning;
item.textContent = itemSpan.textContent;

})
});

list.addEventListener("click",function(){
  listTwo.classList.toggle("openlist");
})


let ulItem = document.querySelector(".ul");
let ulspan = ulItem.querySelector("span");
let sort = document.querySelector(".sort");;
let li = sort.querySelectorAll('li');

li.forEach((item) => {

item.addEventListener("click",function(){
let o = item.textContent;

if (ulspan.textContent === o) {
  return;
}

ulspan.textContent = o;
});


});





let uldiv = document.querySelector(".ul");
uldiv.addEventListener("click",function(){
sort.classList.toggle("active");
});
