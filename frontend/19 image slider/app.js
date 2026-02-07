const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, idx) => {
  slide.style.left = `${idx * 100}%`;
});

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

document.getElementById('next').addEventListener('click',()=>{next()})
const next = () => {
  if (counter >= slides.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImage();
};

document.getElementById('prev').addEventListener('click',()=>{prev()})

const prev = () => {
  if (counter <= 0) {
    counter = slides.length - 1;
  } else {
    counter--;
  }
  slideImage();
};