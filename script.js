document.addEventListener('DOMContentLoaded', function () {
    const infos = document.querySelectorAll('.infodiv');
    const visibilityThreshold = 50;
    const visibleElements = new Set();
  

    document.addEventListener("DOMContentLoaded", function () {
   
  
    
      
  
      
      function handleScroll() {
        infoBoxes.forEach((box) => {
          if (isInViewport(box)) {
            box.classList.add("visible");
          }
        });
      }
  
      
      window.addEventListener("scroll", handleScroll);
  
      
      handleScroll();
    });

  
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const toggleIcon = document.getElementById('toggleIcon');
  
    darkModeToggle.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
  
       
      const targetColor = body.classList.contains('dark-mode') ? '#fff' : '#111';
      const targetBgColor = body.classList.contains('dark-mode') ? '#111' : '#fff';
  
      body.style.setProperty('--text-color', targetColor);
      body.style.setProperty('--background-color', targetBgColor);
  
      // Toggle the SVG content based on dark mode
      const darkModePath = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15C12.8333 15 13.5417 14.7083 14.125 14.125C14.7083 13.5417 15 12.8333 15 12C15 11.1667 14.7083 10.4583 14.125 9.875C13.5417 9.29167 12.8333 9 12 9C11.1667 9 10.4583 9.29167 9.875 9.875C9.29167 10.4583 9 11.1667 9 12C9 12.8333 9.29167 13.5417 9.875 14.125C10.4583 14.7083 11.1667 15 12 15ZM12 17C10.6167 17 9.4375 16.5125 8.4625 15.5375C7.4875 14.5625 7 13.3833 7 12C7 10.6167 7.4875 9.4375 8.4625 8.4625C9.4375 7.4875 10.6167 7 12 7C13.3833 7 14.5625 7.4875 15.5375 8.4625C16.5125 9.4375 17 10.6167 17 12C17 13.3833 16.5125 14.5625 15.5375 15.5375C14.5625 16.5125 13.3833 17 12 17ZM5 13H1V11H5V13ZM23 13H19V11H23V13ZM11 5V1H13V5H11ZM11 23V19H13V23H11ZM6.4 7.75L3.875 5.325L5.3 3.85L7.7 6.35L6.4 7.75ZM18.7 20.15L16.275 17.625L17.6 16.25L20.125 18.675L18.7 20.15ZM16.25 6.4L18.675 3.875L20.15 5.3L17.65 7.7L16.25 6.4ZM3.85 18.7L6.375 16.275L7.75 17.6L5.325 20.125L3.85 18.7Z" fill="white"/></svg>';
      const lightModePath = '<svg  height="24" viewBox="0 -960 960 960" width="24"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>';
  
      toggleIcon.innerHTML = body.classList.contains('dark-mode') ? darkModePath : lightModePath;
  
     
      void body.offsetWidth;
    });
  
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const navButtons = document.querySelector('.nav-buttons');
  
    menuBtn.addEventListener('click', function () {
      navButtons.classList.toggle('show');
    });
  });


// Function to check if an element is in the viewport
function isInViewport(element) {
  var elementRect = element.getBoundingClientRect();
  return (
    elementRect.top <= window.innerHeight &&
    elementRect.bottom >= 0
  );
}

 
function handleScroll() {
  
  var txtScrollElements = document.querySelectorAll('.txt-scroll');
  txtScrollElements.forEach(function(element) {
    if (isInViewport(element)) {
      element.classList.add('animate-normal');
    }
  });
}

 
window.addEventListener('scroll', handleScroll);

 
handleScroll();

