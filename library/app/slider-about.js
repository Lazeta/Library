if (window.innerWidth > 1025) {
  const sliderLine = document.querySelector(".slider__line"),
    btnLeft = document.querySelector(".arrow-1"),
    btnRight = document.querySelector(".arrow-2"),
    dots = document.querySelectorAll(".dot");
  let position = 0;
  let dotIndex = 0;
  let counter = 0;

  //Functions
  const nextSlide = () => {
    if (position < (dots.length - 1) * 475) {
      position += 475;
      dotIndex++;
    } else {
      return (dotIndex = dots.length - 1);

      // Чтобы слайдер мой вернутся на начальный слайд
      position = 0;
    }
    sliderLine.style.left = -position + "px";
    thisSlide(dotIndex);

    counter++;
    if (counter === 2){
      clearInterval(intervalAnimation);
    }
  };

  const prevSlide = () => {
    if (position > 0) {
      position -= 475;
      dotIndex--;
    } else {
      return (dotIndex = 0);

      // Чтобы слайдер мой вернутся на начальный слайд
      position = (dots.length - 1) * 475;
    }
    sliderLine.style.left = -position + "px";
    thisSlide(dotIndex);

    counter++;
    if (counter === 1){
      clearInterval(intervalAnimation);
    }
  };
  const thisSlide = (index) => {
    for (let dot of dots) {
      dot.classList.remove("active");
      dot.style.cursor = 'pointer';
      dot.closest('.dots__wrapper__border').style.cursor = 'pointer';
    }
    dots[index].classList.add("active");
    dots[index].style.cursor = 'default';
    dots[index].closest('.dots__wrapper__border').style.cursor = 'default';
  };

  //Event listeners
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);



  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearInterval(intervalAnimation)
      position = 475 * index;
      sliderLine.style.left = -position + "px";
      dotIndex = index;
      thisSlide(dotIndex);
    });
  });

  const intervalAnimation = setInterval(() => {
    nextSlide();
  }, 5000);
}

// для mobile screen
else {
  const sliderLine = document.querySelector(".slider__line"),
    btnLeft = document.querySelector(".arrow-1"),
    btnRight = document.querySelector(".arrow-2"),
    dots = document.querySelectorAll(".dot");
  let position = 0;
  let dotIndex = 0;
  let counter = 0;

  //Functions
  const nextSlide = () => {
    if (position < (dots.length - 1) * 450) {
      position += 450;
      dotIndex++;

        btnRight.classList.remove('hover-disabled');
        btnLeft.classList.remove('hover-disabled');
    } else {
      btnRight.classList.add('hover-disabled');

      return (dotIndex = dots.length - 1);
      // Чтобы слайдер мой вернутся на начальный слайд
      // position = 0;
    }
    sliderLine.style.left = -position + "px";
    thisSlide(dotIndex);

    counter++;
    if (counter === 4){
      clearInterval(intervalAnimation);
    }
 
  };
  const prevSlide = () => {
    if (position > 0) {
      position -= 450;
      dotIndex--;
      btnLeft.classList.remove('hover-disabled');
      btnRight.classList.remove('hover-disabled');
    } else {
      btnLeft.classList.add('hover-disabled');
      return (dotIndex = 0);
      // Чтобы слайдер мой вернутся на начальный слайд
      // position = (dots.length - 1) * 450;
    }
    sliderLine.style.left = -position + "px";
    thisSlide(dotIndex);

    counter++;
    if (counter === 4){
      clearInterval(intervalAnimation);
      // btnLeft.classList.add('hover-disabled');
    }
  };
  const thisSlide = (index) => {
    for (let dot of dots) {
      dot.classList.remove("active");
      dot.style.cursor = 'pointer';
      dot.closest('.dots__wrapper__border').style.cursor = 'pointer';
    }
    dots[index].classList.add("active");
    dots[index].style.cursor = 'default';
    dots[index].closest('.dots__wrapper__border').style.cursor = 'default';
  };

  //Event listeners
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  if(btnRight.click()){
    clearInterval(intervalAnimation);
    // intervalAnimation.stopPropagation();
  }
  if(btnLeft.click()){
    clearInterval(intervalAnimation);
    // intervalAnimation.stopPropagation();
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearInterval(intervalAnimation);
      position = 450 * index;
      sliderLine.style.left = -position + "px";
      dotIndex = index;
      thisSlide(dotIndex);
    });
  });

  const intervalAnimation = setInterval(() => {
    nextSlide();
  }, 5000);
}