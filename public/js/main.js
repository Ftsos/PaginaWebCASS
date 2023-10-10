//Slider
var sliderImg = document.querySelector("#slider")
var sliderBg = document.querySelector("#slider-background")
var sliderImgs = ["./img/slider/1.jpg", "./img/slider/2.jpg", "./img/slider/3.jpg", "./img/slider/4.jpg"]
var sliderIndex = 0

var sliderDots = document.querySelector("#slider-dots-container")
let sliderDotsText = ""

updateSliderDots()
sliderImg.src = sliderImgs[sliderIndex]
sliderBg.src = sliderImgs[sliderIndex]

setInterval(() => {
    if((sliderIndex + 1) > (sliderImgs.length - 1)) {sliderIndex = 0} else {sliderIndex++;}
    
    sliderImg.src = sliderImgs[sliderIndex]
	sliderBg.src = sliderImgs[sliderIndex]
    updateSliderDots();
}, 3000)

function updateSliderDots() {
	sliderDotsText = ""
	sliderImgs.forEach((ele, i) => {
		if(i == sliderIndex) {
			sliderDotsText += '<span class="active-slider-dot">.</span>'
			return;
		}

		sliderDotsText += '<span class="slider-dot">.</span>'
	})
	sliderDots.innerHTML = sliderDotsText
}

//Form
var form = document.querySelector('#contactForm')

form.addEventListener("submit", (e) => e.preventDefault())