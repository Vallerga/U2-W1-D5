// non è funzionante!!!



let nav = document.querySelector(".changeColor");
// const navBar = (nav) => {
//   console.log("eseguito");
//   if (window.body.scrollTop >= 200) {
//     nav.style.background="#ffc017"
//   } else {
//     nav.style.background="white"
//   }
//   setInterval(navBar(nav), 1000);
// };
var delayInMilliseconds = 500000;
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const navBars = (nav) => {
  console.log("rieseguito");
  if (window.body.scrollY >= 300) {
    nav.className === "withColor" ? nav.classList.remove("noColor") : (nav.classList = "withColor");
    // nav.classList += ("withColor");
    // nav.classList.remove("noColor");
  } else {
    nav.className === "noColor" ? nav.classList.remove("withColor") : (nav.classList = "noColor");
    // nav.classList +=("noColor");
    // nav.classList.remove("withColor");
  }
  sleep(900000);
  navBar(nav);
};
window.addEventListener('scroll',(event) => {
  if (window.scrollY > 400 === true) {
    // console.log(true)
        nav.classList.remove("withColor");
        nav.className = "noColor";
        
    // nav.className === "withColor" ? nav.classList.remove("noColor") : (nav.classList = "withColor");
    // nav.classList += ("withColor");
    // nav.classList.remove("noColor");
  } else {
    // console.log(false)
    
        nav.classList.remove("noColor");
        nav.className = "withColor";
    
    // nav.classList +=("noColor");
    // nav.classList.remove("withColor");
  }
   // sleep(90000);
   // navBar(nav);
});

// navBar(nav);
