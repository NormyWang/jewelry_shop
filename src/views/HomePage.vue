<template>
  <div class="home-page">
    <h1 class="text-4xl font-bold mb-8">Welcome to Normy's Jewelry</h1>
    
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">About Us</h2>
      <p class="text-lg mb-4">Welcome to Normy's Jewelry, where creativity meets quality at prices you'll love! Our mission is to offer unique and stylish jewelry that resonates with the vibrant spirit of young adults. We believe that jewelry is more than just an accessory—it's an expression of individuality, a reflection of personal style, and a way to celebrate the moments that matter.</p>
      <h3 class="text-xl font-semibold mb-2">Our Story</h3>
      <p class="text-lg mb-4">Normy's Jewelry was born out of a passion for design and a desire to make high-quality jewelry accessible to everyone. We started with a simple idea: to create pieces that blend timeless elegance with contemporary trends, ensuring that each item feels both classic and current. Our team of dedicated designers and artisans work tirelessly to bring this vision to life, crafting each piece with care and attention to detail.</p>
      <img src="/images/image4.jpeg" alt="Normy's Jewelry" class="w-full h-auto mb-4">
      <p class="text-lg">Thank you for choosing Normy's Jewelry. We are excited to be part of your journey and to help you shine in your unique way.</p>
      <p class="text-lg">With love and creativity,<br>The Normy's Jewelry Team</p>
    </section>
    
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Featured Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div class="bg-white shadow-md rounded-lg p-4">
          <img src="/images/image1.jpeg" alt="Turquoise and Silver Beaded Necklace" class="w-full h-auto mb-4">
          <h3 class="text-xl font-semibold mb-2">Turquoise and Silver Beaded Necklace</h3>
          <p class="text-gray-600">Elevate your style with this stunning turquoise and silver beaded necklace, perfect for adding a pop of color and elegance to any outfit.</p>
        </div>
        <div class="bg-white shadow-md rounded-lg p-4">
          <img src="/images/image2.jpeg" alt="Elegant Gold Band Ring" class="w-full h-auto mb-4">
          <h3 class="text-xl font-semibold mb-2">Elegant Gold Band Ring</h3>
          <p class="text-gray-600">Embrace timeless elegance with this exquisite gold band ring, a perfect symbol of sophistication and grace.</p>
        </div>
        <div class="bg-white shadow-md rounded-lg p-4">
          <img src="/images/image3.jpeg" alt="Star-Shaped Gold Drop Earrings" class="w-full h-auto mb-4">
          <h3 class="text-xl font-semibold mb-2">Star-Shaped Gold Drop Earrings</h3>
          <p class="text-gray-600">Shine bright with these captivating star-shaped gold drop earrings, designed to add a touch of celestial charm to your look.</p>
        </div>
      </div>
    </section>
    
    <router-link to="/products" class="inline-block bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300">View All Products</router-link>
  </div>
</template>