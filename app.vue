<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// App-level script
</script>

<style>
/* Global styles and animations */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
  --primary: #2563eb;
  --primary-dark: #1d4ed8;
  --secondary: #0ea5e9;
  --accent: #8b5cf6;
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-800: #1f2937;
  --gray-900: #111827;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #f5f7fa;
  color: var(--gray-800);
  overflow-x: hidden;
}

/* Transitions and animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Premium buttons and inputs */
.btn-premium {
  border-radius: 0.5rem;
  font-weight: 500;
  transition-property: all;
  transition-duration: 300ms;
  transform: translateZ(0);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.btn-premium:hover {
  transform: scale(1.05);
}

.btn-premium:focus {
  outline: none;
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(59, 130, 246, 0.5);
}

.btn-primary {
  background-image: linear-gradient(to right, #2563eb, #1d4ed8);
  color: white;
}

.btn-primary:hover {
  background-image: linear-gradient(to right, #1d4ed8, #1e40af);
}

.btn-secondary {
  background-color: white;
  color: #2563eb;
  border: 1px solid #dbeafe;
}

.btn-secondary:hover {
  background-color: #eff6ff;
}

.card-premium {
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: box-shadow 300ms;
}

.card-premium:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.input-premium {
  border-radius: 0.5rem;
  border-color: #d1d5db;
}

.input-premium:focus {
  border-color: #93c5fd;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}
</style>