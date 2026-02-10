// Declaring all constants and variables globally
const screenWidth = window.innerWidth;  //Target the screen width for responsiveness
const navLinks= document.querySelector('.nav-links'); //Targets the nvigation links
const navOpen =document.querySelector('nav'); //Targets the nav element
const img = document.createElement('img'); //Create an image element
const navImage =[
    'images/nav open.svg',
    'images/nav close.svg'
];
let isNavOpen = false; // Variable to track the state of the navigation menu
// Funtion to insert images only on mobile view
function insertImage() {  
  if (screenWidth <= 768) {
    navLinks.style.display = 'none'; // Hide the navigation links on mobile view    
    img.src = navImage[0]; // Use the first image in the array
     img.height = 50; // Set the height of the image to 20px
    img.width = 50; // Set the width of the image to 20px
    img.alt = 'Navbar Icon';
    
    navOpen.appendChild(img);
    
  }
}
insertImage();
// Function to toggle the nav Images
function toggleNav(){
    isNavOpen = !isNavOpen;
    img.src = isNavOpen ? navImage[1] : navImage[0];
}
// Adding an event listener to the image so that when it is clicked the nav icons can be toggled
img.addEventListener('click', () => {
    toggleNav();
});
// Display the navigation links on toggle
img.addEventListener('click', () => {
    if (navLinks.style.display === 'none') {
        navLinks.style.display = 'block';
    } else {
        navLinks.style.display = 'none';
    }
});
