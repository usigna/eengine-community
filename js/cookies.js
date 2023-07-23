function closeCookies() {
  const cookies = document.getElementById('cookies');
  const cookiesBtn = document.querySelector('.cookies__btn');
  
  // localStorage.clear();
  // console.log(localStorage);

  setTimeout(function() {
    let cookieAccepted = localStorage.getItem('cookieAccepted');
    if (cookieAccepted != 'yes') {
      cookies.classList.add('active');
    }
  }, 1000);

  cookiesBtn.addEventListener('click', function() {
    cookies.classList.remove('active');
    localStorage.setItem('cookieAccepted', 'yes');
  });
};

document.addEventListener('DOMContentLoaded', closeCookies());