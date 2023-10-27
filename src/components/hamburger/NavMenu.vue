<template>
    <div class="block">
            <button id="menu-btn" 
                    type="button" 
                    class="z-40 block hamburger md:hidden focus:outline-none">
              
              <span class="hamburger-top"></span>
              <span class="hamburger-middle"></span>
              <span class="hamburger-bottom"></span>
            </button>
        </div>
  
        <div id="menu" class="fixed inset-0 z-20 hidden flex-col space-y-10 items-center self-end w-full h-1/2 m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-darkBlue2 uppercase opacity-90 bg-blue-200">
          
          <a href="#tenses" class=" hover:text-accentCyan">Vremena</a>
          <a href="#app" class=" hover:text-accentCyan">Aplikacija</a>
          <a href="#options" class="hover:text-accentCyan">Opcije</a>
          <a href="#cities" class="hover:text-accentCyan">Gradovi</a>

          <div class="py-10 flex justify-end items-center md:space-x-10">
            <a href="#"><img src="images/SearchOutline.png" class="w-6 ficon"/></a>
          </div>
  
        </div>
</template>

<style scoped>
.hamburger {
 cursor: pointer;
 width: 24px;
 height: 24px;
 transition: all 0.25s;
 position: relative;
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  position:absolute;
  width: 24px;
  height: 2px;
  top: 4;
  left: 0;
  background: #ECD79F;
  transform: rotate(0);
  transition: all 0.5s;
}

.hamburger-middle {
 transform: translateY(7px);
}

.hamburger-bottom {
 transform: translateY(14px);
}

.open {
 transform: rotate(90deg);
}

.open .hamburger-top {
 transform: rotate(45deg) translateY(6px) translateX(6px);
}

.open .hamburger-middle {
 display: none;
}

.open .hamburger-bottom {
 transform: rotate(-45deg) translateY(6px) translateX(-6px);
}
</style>