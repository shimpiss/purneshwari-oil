// <!-- See more or See less -->

// <script>
  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "See more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "See less"; 
      moreText.style.display = "inline";
    }
  }




//   <!--        animated number -->
// <script type="text/javascript">
const counters = document.querySelectorAll('.value');
const speed = 5000;

counters.forEach( counter => {
  const animate = () => {
     const value = +counter.getAttribute('akhi');
     const data = +counter.innerText;
    
     const time = value / speed;
    if(data < value) {
         counter.innerText = Math.ceil(data + time);
         setTimeout(animate, 1);
       }else{
         counter.innerText = value;
       }
    
  }
  
  animate();
});



window.addEventListener('scroll', function() {
    var scrollToTop = document.getElementById('scrollToTop');
    if (window.scrollY > 300) {
      scrollToTop.style.display = 'block';
    } else {
      scrollToTop.style.display = 'none';
    }
  });
  
  var scrollToTopBtn = document.getElementById('scrollToTop');
  
  scrollToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  