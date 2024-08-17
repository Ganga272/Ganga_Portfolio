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
  const imageSection = document.querySelector('.image-section');

imageSection.addEventListener('mouseover', function() {
    clearTimeout(autoPlayTimeout); // Pause slideshow
});

imageSection.addEventListener('mouseout', function() {
    showSlides(); // Resume slideshow
});

/*************************************************************************************************************certificate***************************************** */
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
        swiper.slideTo(index); // Move to the slide index
    });
});




  function openModal(imageSrc) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
/*************************************************************************************contact form*************************************************************
 */


function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show the alert
    if (confirm('When you click on ok this message will send to Ganga Bhavani Bavirisetty.')) {
        // If the user clicks "OK", submit the form
        document.getElementById('contactForm').submit();
        document.getElementById('contactForm').action = 'thankyou.html';
        document.getElementById('contactForm').submit();
    }
}

// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById('contactForm');
//     const successMessage = document.getElementById('successMessage');
//     const goBackButton = document.getElementById('goBackButton');
   

//     goBackButton.addEventListener('click', function () {
//         successMessage.style.display = 'none'; // Hide the success message
//     });

   
// });
// document.getElementById('closeButton').onclick = function() {
//     document.getElementById('successMessage').style.display = 'none';
    
// };
//  document.addEventListener("DOMContentLoaded", function () {
//             const form = document.getElementById('contactForm');
//             const successMessage = document.getElementById('successMessage');
//             const goBackButton = document.getElementById('goBackButton');
//             const content = document.getElementById('content');

//             form.addEventListener('submit', function (e) {
//                 e.preventDefault(); // Prevent form from submitting normally
//                 content.style.display = 'none'; // Hide the entire body content
//                 successMessage.style.display = 'block'; // Show the success message screen
//             });

//             goBackButton.addEventListener('click', function () {
//                 successMessage.style.display = 'none'; // Hide the success message
//                 content.style.display = 'block'; // Show the entire body content again
//             });
//         });

//         document.getElementById('closeButton').onclick = function() {
//             document.getElementById('successMessage').style.display = 'none';
//         };

       