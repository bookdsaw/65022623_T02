document.addEventListener("DOMContentLoaded", function() {
    
  const fname = document.querySelector('.fname');
  const lname = document.querySelector('.lname');
  fname.addEventListener('input', function() {
      if (fname.value.length > 0) {
        fname.classList.add('filled');
      } else {
        fname.classList.remove('filled');
      }
    });
    
    lname.addEventListener('input', function() {
      if (lname.value.length > 0) {
        lname.classList.add('filled');
      } else {
        lname.classList.remove('filled');
      }
  });
});