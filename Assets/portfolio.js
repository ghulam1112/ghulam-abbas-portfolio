var typed = new Typed(".text", {
  strings: ["Frontend developer", "Student", "Problem Solver"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true
});

// Replace 'your_github_project_links' with the actual links to your GitHub projects
var githubLinks = [
  'https://github.com/ghulam1112/Landing_pages',
  'https://github.com/ghulam1112/Tour-project',
  'https://github.com/ghulam1112/internee-pk-website-redesign'
];

// Get all anchor tags with class 'downloadLink' and attach click event listeners to them
var downloadLinks = document.querySelectorAll('.downloadLink');
downloadLinks.forEach(function (link, index) {
  // Function to handle the click event
  link.addEventListener('click', function (event) {
    // Prevent default behavior of anchor tag
    event.preventDefault();
    // Redirect user to respective GitHub project link for download
    window.location.href = githubLinks[index];
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.instructor-img');

  function checkVisibility() {
      const windowHeight = window.innerHeight;
      images.forEach(image => {
          const rect = image.getBoundingClientRect();
          if (rect.top <= windowHeight - 100) { // Trigger the animation 100px before the image is fully in view
              image.classList.add('visible');
          }
      });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Initial check in case images are already in view
});


document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navbar = document.getElementById('navbar');

    if (navToggle && navbar) {
        navToggle.addEventListener('click', function() {
            navbar.classList.toggle('show');
        });
    } else {
        console.log('Nav toggle button or navbar not found');
    }
});
