---
title: "detail-5"
layout: "../../layouts/Layout.astro"
---

<section transition:animate="slide"  class='flex gap-7 justify-center items-center flex-wrap text-white px-8% py-20'>
<img
    class="rounded-xl"
    src="https://res.cloudinary.com/pruebaweb/image/upload/v1701315971/AlexMain/4_robcff.png"
    alt="pack1"
  />
  <div class="flex flex-col gap-4">
    <h2
      class="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-10% via-primary via-30% to-green-600 font-semibold"
    >
      Pack Food and Dance
    </h2>
    <h4>Tu banquete y baile amenizado</h4>
    <p class="max-w-md">
      <ul>
        <li>2 altavoces Id system Icoa15" + 2 subwoofer Icon Id system 18"</li>
        <li>
          Estructura de iluminación de 5 mt. de longitud x 4 mt de altura max +6
          mini
        </li>
        <li>ledspot “movil head” + 6 par56 leds</li>
        <li>Maquina de Humo</li>
        <li>Musica personalizada</li>
      </ul>
    </p>
    <a href="/servicios" class='w-20 h-7 border-gray-50 border-2 rounded-md flex justify-center items-center hover:bg-blue-900 transition'>Cerrar</a>
   <!-- <img class='rounded-xl' src="/images/img2.webp" alt="camiseta" />
   <div class='flex flex-col gap-4'>
   <h2 class='text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-10% via-primary via-30% to-green-600 font-semibold'>TITLE</h2>
   <h4>Lorem ipsum dolor sit amet consectetur</h4>
   <p class='max-w-md'>Esta es una prueba.</p>
   <button class='w-20 h-7 border-gray-50 border-2 rounded-md flex justify-center items-center hover:bg-blue-900 transition'>Buy</button> -->
   </div>
</section>

<style>
   section{
      width:100%;
      min-height: calc(100vh - 52px)
   }
</style>
