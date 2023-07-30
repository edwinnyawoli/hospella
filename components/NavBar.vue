<template>
  <div class="navbar bg-base-100 fixed top-0 z-[1000]">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li class="grow">
            <NuxtLink to="/" active-class="font-bold" @click="clearFocus">Home</NuxtLink>
          </li>
          <li class="grow">
            <NuxtLink to="/about" active-class="font-bold" @click="clearFocus">About</NuxtLink>
          </li>
          <li class="grow">
            <NuxtLink to="/contact" active-class="font-bold" @click="clearFocus">Contact</NuxtLink>
          </li>
        </ul>
      </div>
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl text-center"><svg fill="#15803d" version="1.1" id="Capa_1"
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
          viewBox="0 0 31.785 31.785" xml:space="preserve" stroke="#15803d">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <path
                  d="M17.943,8.769c0-0.479-0.389-0.868-0.869-0.868h-2.502c-0.479,0-0.868,0.389-0.868,0.868v2.382h-2.523 c-0.479,0-0.868,0.389-0.868,0.868v2.501c0,0.479,0.389,0.869,0.868,0.869h2.523v2.523c0,0.479,0.389,0.869,0.868,0.869h2.502 c0.479,0,0.869-0.391,0.869-0.869V15.39h2.381c0.479,0,0.869-0.39,0.869-0.869V12.02c0-0.479-0.389-0.868-0.869-0.868h-2.381 V8.769z">
                </path>
                <path
                  d="M15.894,0C8.999,0,3.389,5.608,3.389,12.502c0,9.217,10.913,18.482,11.377,18.872c0.614,0.517,1.5,0.549,2.152,0.081 c0.468-0.337,11.479-8.38,11.479-18.953C28.396,5.608,22.787,0,15.894,0z M17.31,26.536c-0.751,0.703-1.925,0.677-2.644-0.06 c-3.296-3.367-7.77-9.041-7.77-13.976c0-4.959,4.037-8.996,8.998-8.996c4.959,0,8.996,4.037,8.996,8.996 C24.889,18.477,20.277,23.758,17.31,26.536z">
                </path>
              </g>
            </g>
          </g>
        </svg>E-hospital +</NuxtLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li class="grow">
          <NuxtLink to="/" active-class="font-bold">Home</NuxtLink>
        </li>
        <li class="grow">
          <NuxtLink to="/about" active-class="font-bold">About</NuxtLink>
        </li>
        <li class="grow">
          <NuxtLink to="/contact" active-class="font-bold">Contact</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <div class="hidden form-control md:block">
        <input type="text" placeholder="Search kiosk locations"
          class="input input-sm input-bordered rounded-xl w-32 md:w-auto" />
      </div>
    </div>
  </div>
</template>

<script setup>
const clearFocus = () => {
  setTimeout(() => {
    document.activeElement?.blur();
  }, 350);
}

</script>

<style scoped>
nav {
  width: 100%;
  height: 8vh;
  display: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
}
</style>