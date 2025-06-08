<template>
  <footer class="mt-[80px] bg-primary overflow-hidden text-secondary pt-[120px] lg:pt-[80px] pb-[80px] lg:pb-6 rounded-tl-[64px] rounded-tr-[64px] px-6">
    <div class="container mx-auto flex flex-col items-center lg:items-end  lg:flex-row lg:justify-between">
      <nav class="order-1 lg:order-3 mb-4 lg:mb-0">
        <ul class="flex space-x-4">
          <li><NuxtLink to="/impressum">Impressum</NuxtLink></li>
          <li><NuxtLink to="/datenschutz">Datenschutz</NuxtLink></li>
        </ul>
      </nav>

      <div class="order-2 lg:order-1 mb-4 lg:mb-0 text-center lg:text-left">
        © Yoga by Julia 2025
      </div>

      <div class="order-3 lg:order-2">
        <img src="/namaste.svg" alt="Logo" class="translate-y-20 lg:translate-y-10 w-[400px] mx-auto lg:mx-0" />
      </div>
    </div>
  </footer>
</template>

