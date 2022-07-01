// box setting
// localStorage set color
let maincolors = localStorage.getItem("colors-options");

if (maincolors !== null) {
  document.documentElement.style.setProperty("--mainColor", maincolors);

  // remove active class
  document.querySelectorAll(".colors-list li").forEach((ele) => {
    ele.classList.remove("active");
    // add active class from localStorage
    if (ele.dataset.color === maincolors) {
      // add active class
      ele.classList.add("active");
    }
  });
}
// localStorage
// icon
iconcont = document.querySelector("ic-cont");
document.querySelector(".ic-cont  i").onclick = function () {
  // toggle spinnig class on icon
  this.classList.toggle("fa-spin");
  // iconcont.css = "opacity:1";
  // toggle open class in main box
  document.querySelector(".setting-container").classList.toggle("open");
};
// end box setting

//change colors
const colorsli = document.querySelectorAll(".colors-list li");

colorsli.forEach((li) => {
  li.addEventListener("click", (e) => {
    // set color on root
    document.documentElement.style.setProperty(
      "--mainColor",
      e.target.dataset.color
    );

    // setcolor on local storge
    localStorage.setItem("colors-options", e.target.dataset.color);
    // removeactive class from child *2345e
    e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active");
    });
    // add active class on self
    e.target.classList.add("active");
    //==================
  });
});

// add active class o li

// landing
// select landing page elemant

let l_p = document.getElementsByClassName("landing-page");
// >= <=
// Array of imgs
let imgs_array = [
  "../imgs/switch1",
  "../imgs/switch2",
  "../imgs/switch3",
  "../imgs/switch4",
  "../imgs/switch5",
  "../imgs/switch6",
];
// control the imgs_changing
let background_change = true;

// var to control the interval
let backgroundInterval;

// check localStorage for t or f
let backgrounLocalItem = localStorage.getItem("background_option");
if (backgrounLocalItem !== null) {
  if (backgrounLocalItem === "true") {
    background_option = true;
  } else {
    background_option = false;
  }

  // remove active class
  document.querySelectorAll(".random-backgrounds span").forEach((ele) => {
    ele.classList.remove("active");
    if (backgrounLocalItem === "true") {
      document.querySelector(".yes").classList.add("active");
    } else {
      document.querySelector(" .no").classList.add("active");
    }
  });
}

const spanyola = document.querySelectorAll(".random-backgrounds span");

spanyola.forEach((span) => {
  span.addEventListener("click", (e) => {
    // removeactive class from child *2345e
    e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active");
    });
    // add active class on self
    e.target.classList.add("active");
    //==================
    if (e.target.dataset.background === "yes") {
      background_change = true;

      randomizeimgs();

      localStorage.setItem("background_option", true);
    } else {
      background_change = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background_option", false);
    }
  });
});

//funcion to randomize imgs
function randomizeimgs() {
  if (background_change === true) {
    backgroundInterval = setInterval(() => {
      //get randoum img
      let randoum_num = Math.floor(Math.random() * imgs_array.length);

      // chang bg url  ${imgs_array[randoum_num]}
      l_p.style.backgroundImage = ` url(../imgs/switch5)`;
    }, 8000);
  }
}
randomizeimgs();

// skills slector
let skills = document.querySelector(".skills");
let spans = document.querySelectorAll(".skills span");

window.onscroll = () => {
  if (window.scrollY >= skills.offsetTop - 20) {
    spans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
  // to delet span
  if (window.scrollY <= skills.offsetTop - 180) {
    spans.forEach((span) => {
      span.style.width = 0;
    });
  }
};

//CREAT  popupwith imges

let gallery = document.querySelectorAll(".gallery img");

gallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // creat overlay
    let overLay = document.createElement("div");

    //add class
    overLay.className = "pover-lay";
    // add the class to the body
    document.body.appendChild(overLay);

    //creat popup
    let popup_box = document.createElement("div");

    // add class to the box
    popup_box.className = "popup-box";
    // create img

    if (img.alt !== null) {
      //create heading

      let img_heading = document.createElement("h3");

      // create text for the h3
      let text_img = document.createTextNode(img.alt);
      img_heading.appendChild(text_img);
      popup_box.appendChild(img_heading);
    }

    let popup_img = document.createElement("img");

    popup_img.src = img.src;

    // add img to box
    popup_box.appendChild(popup_img);

    //add box to over lay
    document.body.appendChild(popup_box);

    // create the close span
    let close_btn = document.createElement("span");

    // create the close botn text
    let close_text = document.createTextNode("X");
    //appednd text to close btn
    close_btn.appendChild(close_text);
    close_btn.className = "close-btn";
    popup_box.appendChild(close_btn);
  });
});

// popup close
document.addEventListener("click", (e) => {
  if (e.target.className === "close-btn") {
    //remove curnt popup
    e.target.parentNode.remove();
    // remove over lay
    document.querySelector(".pover-lay").remove();
  }
});
