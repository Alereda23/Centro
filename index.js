/* Popup per i cookie e privacy */
function closePopup() {
    document.querySelector('.overlay').style.display = 'none';
}
  
function acceptCookies() {
// Logica per accettare i cookie
    closePopup();
}
  
function rejectCookies() {
// Logica per rifiutare i cookie
    closePopup();
}




window.onload = function() {
    var imageContainer = document.getElementById("image-container");
    var images = [
      "image1.jpg",
      "image2.jpg",
      "image3.jpg",
      "image4.jpg",
      "image5.jpg",
      "image6.jpg"
    ];
    var currentImageIndex = 0;
    var currentImage = document.getElementById("image" + (currentImageIndex + 1));
    var nextImageIndex = 1;
    var nextImage = document.getElementById("image" + (nextImageIndex + 1));
    var animationDuration = 4000;
  
    function fadeOut(image, duration, callback) {
      var opacity = 1;
      var interval = setInterval(function() {
        opacity -= 1 / duration * 10;
        if (opacity < 0) {
          opacity = 0;
          clearInterval(interval);
          if (callback) {
            callback();
          }
        }
        image.style.opacity = opacity;
      }, 10);
    }
  
    function fadeIn(image, duration, callback) {
      var opacity = 0;
      var interval = setInterval(function() {
        opacity += 1 / duration * 10;
        if (opacity > 1) {
          opacity = 1;
          clearInterval(interval);
          if (callback) {
            callback();
          }
        }
        image.style.opacity = opacity;
      }, 10);
    }
  
    function transitionImages() {
      fadeOut(currentImage, animationDuration / 2, function() {
        currentImage.style.display = "none";
        nextImage.style.display = "block";
        nextImage.style.opacity = 0;
        fadeIn(nextImage, animationDuration / 2, function() {
          currentImageIndex = nextImageIndex;
          nextImageIndex = (nextImageIndex + 1) % images.length;
          currentImage = document.getElementById("image" + (currentImageIndex + 1));
          nextImage = document.getElementById("image" + (nextImageIndex + 1));
          setTimeout(transitionImages, 4000);
        });
      });
    }
  
    currentImage.style.display = "block";
    currentImage.style.opacity = 1;
    setTimeout(transitionImages, 2500);
  }
  
  function fadeOut(element, duration, callback) {
    var opacity = 1;
    var interval = setInterval(function() {
        opacity -= 1 / duration * 10;
        if (opacity < 0) {
            opacity = 0;
            clearInterval(interval);
            if (callback) {
                callback();
            }
        }
        element.style.opacity = opacity;
    }, 10);
  }
  
  function fadeIn(element, duration, callback) {
    var opacity = 0;
    var interval = setInterval(function() {
        opacity += 1 / duration * 10;
        if (opacity > 1) {
            opacity = 1;
            clearInterval(interval);
            if (callback) {
                callback();
            }
        }
        element.style.opacity = opacity;
    }, 10);
  }
  
  
  
  /* Set the width of the side navigation to 250px */
  function openNav() {
  document.getElementById("mySidenav").style.width = "70%";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  }
  
  
  

  
  
  
  /* Carosello di immagini */
  document.addEventListener('DOMContentLoaded', function() {
    var images = document.getElementsByClassName('carousel-image');
    var currentIndex = 0;
    var intervalId;
    
    function showImage(index) {
      for (var i = 0; i < images.length; i++) {
        images[i].classList.remove('active');
      }
      
      images[index].classList.add('active');
      
      clearInterval(intervalId);
      intervalId = setInterval(nextImage1, 4000);
    }
    
    function nextImage1() {
      currentIndex++;
      if (currentIndex === images.length) {
        currentIndex = 0;
      }
      
      showImage(currentIndex);
    }
    
    function prevImage1() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = images.length - 1;
      }
      
      showImage(currentIndex);
    }
    
    document.getElementById('carousel-prev').addEventListener('click', prevImage1);
    document.getElementById('carousel-next').addEventListener('click', nextImage1);
    
    showImage(currentIndex);
  });




  /* Booking */
$(function() {
  $("#check-in, #check-out").datepicker({
    dateFormat: "dd/mm/yy"
  });
});