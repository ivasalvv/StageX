window.addEventListener('DOMContentLoaded', () => {
  const carouselContent = document.querySelector('.run-line--container');
  const items = document.querySelectorAll('.run-line--container__img');
  const itemWidth = items[0].offsetWidth; // Get the width of a single item
  const totalWidth = 1000; // Total width of the original items

  let position = 0;

  // Clone the items to create the infinite effect
  items.forEach(item => {
    const clone = item.cloneNode(true); // Clone each item
    carouselContent.appendChild(clone); // Append the clone to the container
  });

  // Function to move the carousel continuously
  function moveCarousel() {
    position += 3; // Move left by 1px
    if (position >= 0) {
      // If the end is reached, reset the position
      position = -totalWidth;
    }
    carouselContent.style.transform = `translateX(${position}px)`; // Apply the translation
    requestAnimationFrame(moveCarousel); // Call this function on the next frame
  }

  moveCarousel(); // Start the animation
});

// Tabs

function openTab(event, tabName) {
  // Get all tab contents and hide them
  var tabContents = document.getElementsByClassName(
    'hiw--container__stages__par'
  );
  var images = document.getElementsByClassName('hiw--container__images__img');

  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = 'none';
    tabContents[i].classList.remove('active');
  }

  for (var i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
    images[i].classList.remove('active');
  }

  // Remove the active class from all tab links and reset icons to gray
  var tabLinks = document.getElementsByClassName(
    'hiw--container__stages__button'
  );
  var icons = document.getElementsByClassName(
    'hiw--container__stages__button__icon'
  );

  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove('active');
    icons[i]
      .querySelector('use')
      .setAttribute('href', './images/icons.svg#grcircle'); // Reset to gray icon
  }

  // Show the selected tab content and mark it as active
  document.getElementById(tabName).style.display = 'block';
  document.getElementById(tabName).classList.add('active');

  // Show the corresponding image
  var image = document.querySelector('.hiw--container__images__img#' + tabName);
  if (image) {
    image.style.display = 'block';
    image.classList.add('active');
  }

  // Mark the clicked tab as active and change its icon to black
  event.currentTarget.classList.add('active');
  event.currentTarget
    .querySelector('use')
    .setAttribute('href', './images/icons.svg#blcircle'); // Set to black icon
}

// const tabBtns = document.querySelectorAll(".hiw--container__stages__button");
// const tabImags = document.querySelectorAll(".hiw--container__images__img");

// tabBtns[0].classList.add("active");
// tabImags[0].classList.add("active");
// gsap.set(tabBtns[0].querySelector("p"), { height: "auto", opacity: 1 });

// tabBtns.forEach((btn, index) => {
//   btn.addEventListener("click", () => {
//     tabBtns.forEach((btn) => {
//       btn.classList.remove("active");
//     });
//     for (let i = 0; i < tabBtns.length; i++) {
//       tabBtns[i].classList.remove("active");
//       gsap.to(tabBtns[i].querySelector("p"), { height: "0", opacity: 0 });
//       tabImags[i].classList.remove("active");
//     }

//     tabImags[index].classList.add("active");
//     btn.classList.add("active");
//     gsap.to(btn.querySelector("p"), { height: "auto", opacity: 1 });
//   });
// });

// Pop up menu

const burger = document.getElementById('burger');
const popupMenu = document.getElementById('popupMenu');

function toggleMenu() {
  popupMenu.classList.toggle('active');
  burger.classList.toggle('open');
}
burger.addEventListener('click', toggleMenu);

// Smooth scroll for an achor link

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});
