window.addEventListener("load", function(){
    document.querySelector(".preloader").classList.add("opacity-0");

    setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
    },1000)
})


//  Protfolio Item Filter

const filterContainer=document.querySelector(".protfolio-filter"),
       filterBtns=filterContainer.children,
        totalFilterBtn=filterBtns.length,
        protfolioItems=document.querySelectorAll(".protfolio-item"),
        totalProtfolioItem=protfolioItems.length;

for(let i=0; i<totalFilterBtn; i++){
    filterBtns[1].addEventListener("click", function(){
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValu=this.getAttribute("data-filter");
        for(let k=0; k<totalProtfolioItem; k++){
            if(filterValu === protfolioItems[k].getAttribute("data-category")){
                protfolioItems[k].classList.remove("hidden");
                protfolioItems[k].classList.add("show");
            }
            else{
                protfolioItems[k].classList.remove("show");
                protfolioItems[k].classList.add("hidden");
            }
            if(filterValu === "all"){
                protfolioItems[k].classList.remove("hidden");
                protfolioItems[k].classList.add("show");
            }
          
        }
    })
}


// Portfolio Lightbox
    const lightbox=document.querySelector(".lightbox"),
         lightboxImg=lightbox.querySelector(".lightbox-img"),
         lightboxClose=lightbox.querySelector(".lightbox-close"),
         lightboxText=lightbox.querySelector(".caption-text"),
         lightboxCounter=lightbox.querySelector(".caption-counter");
    let itemIndex=0;

    for(let i=0; i<totalProtfolioItem; i++){
        protfolioItems[i].addEventListener("click", function(){
            itemIndex=i;
            changeItem();
            toggleLightbox();
        })
    }
    function  toggleLightbox(){
        lightbox.classList.toggle("open");
    }
    function nextItem(){
        if(itemIndex === totalProtfolioItem-1){
            itemIndex=0;
        }
        else{
            itemIndex++
        }
        changeItem();
    }

    function prevItem(){
        if(itemIndex === 0){
            itemIndex=totalProtfolioItem-1;
        }
        else{
            itemIndex--;
        }
        changeItem();
    }

    function changeItem(){
        imgSrc=protfolioItems[itemIndex].querySelector(".protfolio-img img").getAttribute("src");
        lightboxImg.src=imgSrc;
        lightboxText.innerHTML=protfolioItems[itemIndex].querySelector("h4").innerHTML;
        lightboxCounter.innerHTML= (itemIndex+1) + " of " + totalProtfolioItem;
    }

    // close Lightbox

    lightbox.addEventListener("click", function(event){
        if(event.target === lightboxClose || event.target === lightbox){
            toggleLightbox();
        }
    })



// Aside Navbar
const nav=document.querySelector(".nav"),
      navList=nav.querySelectorAll("li"),
      totalNavList=navList.length,
      allSection=document.querySelectorAll(".section"),
      totalSection=allSection.length;

for(let i=0; i<totalNavList; i++){
    const a=navList[i].querySelector("a");
     a.addEventListener("click", function(){
    // romove back section class
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("back-section");
       }
        for(let j=0; j<totalNavList; j++){
        if(navList[j].querySelector("a").classList.contains("active")){
        //   add back sectionn class
            allSection[j].classList.add("back-section");
        }
        navList[j].querySelector("a").classList.remove("active");
       }

        this.classList.add("active");
        showSection(this);

        if(window.innerWidth <1200){
            asideSectionTogglerBtn();
        }

     })
}

function showSection(element){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }
   const target=element.getAttribute("href").split("#")[1]; 
document.querySelector("#"+target).classList.add("active")
    
    }

    const navTogglerBtn=document.querySelector(".nav-toggler"),
          aside=document.querySelector(".aside");

     navTogglerBtn.addEventListener("click",asideSectionTogglerBtn)

          function asideSectionTogglerBtn(){
             aside.classList.toggle("open");
             navTogglerBtn.classList.toggle("open");
             for(let i=0; i<totalSection; i++){
                 allSection[i].classList.toggle("open");
             }
          }