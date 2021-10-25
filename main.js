'use strict';

// Copy email
function copyToClipboard(val) {
  const t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = val;
  t.select();
  document.execCommand('copy');
  document.body.removeChild(t);
}
function copy() {
  copyToClipboard('ellahyesu@naver.com');
  console.log('Copied!');
}

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  // Remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.selected');
  if (active != null) {
    active.classList.remove('selected');
  }
  e.target.classList.add('selected');

  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      console.log(project.dataset.type);
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

expireDate = new Date  /// 현재의 날짜 객체를 생성합니다. 
expireDate.setMonth(expireDate.getMonth()+6)  /// 현재 월에 6개월을 더합니다. 즉, 쿠키의 유효기간을 현재부터 6개월로 설정합니다. 
hitCt = eval(cookieVal("pageHit"))  /// 방문 카운트 변수이며 cookieVal 함수를 실행시킵니다. 
hitCt++  /// 방문 카운트를 1 높입니다. 
document.cookie = "pageHit="+hitCt+";expires=" + expireDate.toGMTString() /// 이곳에서 쿠키를 갱신합니다.   
function cookieVal(cookieName) {  /// cookieVal 함수를 선언합니다.   
    thisCookie = document.cookie.split("; ")  /// 쿠키의 문자열 구조가 '쿠키명=쿠키값; expires=유효기간' 이기 때문에 먼저 세미콜론(;)으로 나눕니다.(split) 
    for (i=0; i<thisCookie.length; i++) { /// ; 으로 나눈 만큼 반복문을 실행합니다. 여기서는 2번을 반복합니다.   
        if (cookieName == thisCookie[i].split("=")[0]) {  /// 먼저 thisCookie[i].split("=")[0]은 '쿠키명=쿠키값' 구조에서 =으로 나눈 배열의 첫번째 값을 지칭합니다. 즉, 쿠키명이 되겠습니다. 
             return thisCookie[i].split("=")[1]  /// thisCookie[i].split("=")[1] 은 =으로 나눈 배열의 두번째 값, 즉, 쿠키값이 됩니다. 
    }   
  }   
  return 0   
}   