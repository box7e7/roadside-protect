<?php
function navigate(){
  $element = $_GET['element'];
  echo "<script>document.querySelector('$element').scrollIntoView({behavior: 'smooth'});</script>";
}
?>

<div id="navbar" class="bg-gray-800 sticky z-10 top-0 w-full">
  <div class="hidden md:flex md:flex-row justify-center items-center pt-5">
    <a href="tel:281-602-8213" class="text-white font-sans text-17 font-bold">1-281-602-8213</a>
    <a href="tel:281-602-8213" class="bg-[#6366F1] p-2 rounded-lg ml-2 w-32 text-slate-100 hover:bg-[#585af1] text-center hover:cursor-pointer">Call now</a>
  </div>

  <div class="mx-auto px-2 sm:px-6 lg:px-8 w-full pb-3">
    <div class="relative flex h-16 items-center justify-between w-full pt-3">
      <div class="inset-y-0 left-0 flex items-center md:hidden">
        <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onclick="toggleMobileMenu()">
          <span class="sr-only">Open main menu</span>
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" onclick="console.log(event.target)">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-between">
        <div class="flex flex-shrink-0 items-center left-0 right-0">
          <img class="block h-16 w-auto lg:hidden ml-12" src="/logo_momentum.png" alt="Your Company" />
          <img class="hidden h-20 w-auto lg:block" src="/logo_momentum.png" alt="Your Company" />
        </div>

        <div class="hidden sm:ml-6 md:block">
          <div class="flex pt-3 space-x-4">
            <a class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" href="#home">Home</a>
            <a class="text-gray-300
            hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#services">Services</a>
            <a class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#gallery">Gallery</a>
            <a class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#testimonials">Testimonials</a>
            <a class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#about" onclick="navigate(event)">About</a>
          </div>
        </div>
      </div>

      <div class="md:hidden flex flex-row justify-center items-center pt-5 left-0 pb-5">
        <a href="tel:2816028213" class="bg-[#6366F1] p-2 rounded-lg ml-2 w-24 text-[14px] text-slate-100 hover:bg-[#585af1] text-center hover:cursor-pointer mr-2">Call now</a>
      </div>
    </div>
  </div>

  <div class="md:hidden hidden overflow-hidden absolute top-16 w-full bg-gray-800" id="mobile-menu">
    <div class="space-y-1 px-2 pt-2 pb-3">
      <a class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" href="#home">Home</a>
      <a class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="#services">Services</a>
      <a class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="#gallery">Gallery</a>
      <a class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="#testimonials">Testimonials</a>
      <a class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="#about" onclick="navigate(event)">About</a>
    </div>
  </div>
</div>

<script>
function toggleMobileMenu() {
  var elm = document.getElementsByTagName('svg');
  var mobileMenu = document.getElementById('mobile-menu');
  
  if (elm[0].classList.value.includes('hidden')) {
    elm[0].classList.remove('hidden');
    elm[0].classList.add('block');
    elm[1].classList.remove('block');
    elm[1].classList.add('hidden');
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('block');
  } else {
    elm[0].classList.remove('block');
    elm[0].classList.add('hidden');
    elm[1].classList.remove('hidden');
    elm[1].classList.add('block');
    mobileMenu.classList.add('block');
    mobileMenu.classList.remove('hidden');
  }
}

function navigate(event) {
  var element = event.target.getAttribute('href');
  event.preventDefault();
  document.querySelector(element).scrollIntoView({ behavior: 'smooth' });
}
</script>
