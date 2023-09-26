var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


let open__btn = document.querySelectorAll('.open__btn')
let close__btn = document.querySelectorAll('.close__btn')
let lady__info_2_js = document.querySelectorAll('.lady__info_2_js')


open__btn.forEach(function(Item, index){
    Item.addEventListener('click' , function(){
        lady__info_2_js[index].style.display = 'none'
        close__btn[index].style.display = 'block'
        Item.style.display = 'none'


    })
})



close__btn.forEach(function(item, index){
    item.addEventListener('click' , function(){
        lady__info_2_js[index].style.display = 'block'
        item.style.display = 'none'
        open__btn[index].style.display = 'block'
    })
})