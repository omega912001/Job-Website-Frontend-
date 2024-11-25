// // src/scripts/script.js

// export function initializeDoubleRangeSlider() {
//     let minRangeValueGap = 6;
  
//     const range = document.getElementById("range_track");
//     const minval = document.querySelector(".minvalue");
//     const maxval = document.querySelector(".maxvalue");
//     const rangeInput = document.querySelectorAll("input");
  
//     if (!range || !minval || !maxval || rangeInput.length === 0) {
//       console.warn("Slider elements not found");
//       return;
//     }
  
//     let minRange, maxRange, minPercentage, maxPercentage;
  
//     const minRangeFill = () => {
//       range.style.left = (rangeInput[0].value / rangeInput[0].max) * 100 + "%";
//     };
//     const maxRangeFill = () => {
//       range.style.right =
//         100 - (rangeInput[1].value / rangeInput[1].max) * 100 + "%";
//     };
//     const MinVlaueBubbleStyle = () => {
//       minPercentage = (minRange / rangeInput[0].max) * 100;
//       minval.style.left = minPercentage + "%";
//       minval.style.transform = `translate(-${minPercentage / 2}%, -100%)`;
//     };
//     const MaxVlaueBubbleStyle = () => {
//       maxPercentage = 100 - (maxRange / rangeInput[1].max) * 100;
//       maxval.style.right = maxPercentage + "%";
//       maxval.style.transform = `translate(${maxPercentage / 2}%, 100%)`;
//     };
  
//     const setMinValueOutput = () => {
//       minRange = parseInt(rangeInput[0].value);
//       minval.innerHTML = rangeInput[0].value;
//     };
//     const setMaxValueOutput = () => {
//       maxRange = parseInt(rangeInput[1].value);
//       maxval.innerHTML = rangeInput[1].value;
//     };
  
//     setMinValueOutput();
//     setMaxValueOutput();
//     minRangeFill();
//     maxRangeFill();
//     MinVlaueBubbleStyle();
//     MaxVlaueBubbleStyle();
  
//     rangeInput.forEach((input) => {
//       input.addEventListener("input", (e) => {
//         setMinValueOutput();
//         setMaxValueOutput();
  
//         minRangeFill();
//         maxRangeFill();
  
//         MinVlaueBubbleStyle();
//         MaxVlaueBubbleStyle();
  
//         if (maxRange - minRange < minRangeValueGap) {
//           if (e.target.className === "min") {
//             rangeInput[0].value = maxRange - minRangeValueGap;
//             setMinValueOutput();
//             minRangeFill();
//             MinVlaueBubbleStyle();
//             e.target.style.zIndex = "2";
//           } else {
//             rangeInput[1].value = minRange + minRangeValueGap;
//             e.target.style.zIndex = "2";
//             setMaxValueOutput();
//             maxRangeFill();
//             MaxVlaueBubbleStyle();
//           }
//         }
//       });
//     });
//   }
  

//   export function Range (){
//     var slider = document.getElementById("myRange");
//     var output = document.getElementById("demo");
//     output.innerHTML = slider.value;
    
//     slider.oninput = function() {
//       output.innerHTML = this.value;
//     }
//   }

export function ShowJobs (){

    
}

// scripts/script.js

// scripts/carousel.js

export function updateCarousel(index) {
    const carousel = document.querySelector("#carousel");
    if (carousel) {
      const slides = carousel.children;
      const width = slides[0]?.clientWidth || 0;
      carousel.style.transform = `translateX(-${index * width}px)`;
    } else {
      console.error("Carousel element not found");
    }
  }
  
  export function prevSlide(currentIndex, slidesLength) {
    return (currentIndex - 1 + slidesLength) % slidesLength;
  }
  
  export function nextSlide(currentIndex, slidesLength) {
    return (currentIndex + 1) % slidesLength;
  }
  