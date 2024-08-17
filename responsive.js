$(document).ready(function(){
    $('.gallery-container').lightGallery({
      selector: '.gallery-item',
      thumbnail: true // Set to true if you want to show thumbnails
    });
  });
  let slideIndex = 0;
  let autoPlayTimeout;
  
  function showSlides() {
      let i;
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");
  
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
  
      slideIndex++;
      if (slideIndex > slides.length) {
          slideIndex = 1;
      }
  
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
  
      slides[slideIndex - 1].style.display = "block";  
      dots[slideIndex - 1].className += " active";
  
      // Set up auto-play with a timeout for displaying slides
      autoPlayTimeout = setTimeout(showSlides, 4000); // Change slide every 4 seconds
  }
  
  function plusSlides(n) {
      clearTimeout(autoPlayTimeout); // Stop auto-play when manually navigating
      slideIndex += n - 1; // Adjust slideIndex to reflect manual navigation
      showSlides();
  }
  
  function currentSlide(n) {
      clearTimeout(autoPlayTimeout); // Stop auto-play when manually navigating
      slideIndex = n - 1; // Adjust slideIndex to the selected slide
      showSlides();
  }
  
  // Initial call to start the slideshow
  document.addEventListener("DOMContentLoaded", function() {
      showSlides();
  });
 

  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true, // Enable loop mode
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function openModal(imageSrc) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Move to the slide corresponding to the pagination dot clicked
document.querySelectorAll('.swiper-pagination-bullet').forEach((bullet, index) => {
    bullet.addEventListener('click', function () {
        swiper.slideToLoop(index); // Move to the slide index in loop mode
    });
});



/****************************up down arrows */
document.querySelector('.arrow-up').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#ganga').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.arrow-down').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#contactme').scrollIntoView({ behavior: 'smooth' });
});


/*************************************************************************************contact form*************************************************************
 */

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to the thank you page
            window.location.href = 'thankyou.html';
        } else {
            alert('There was an issue submitting the form. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an issue submitting the form. Please try again later.');
    });
}
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to the thank you page
            window.location.href = 'thankyou.html';
        } else {
            alert('There was an issue submitting the form. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an issue submitting the form. Please try again later.');
    });
}