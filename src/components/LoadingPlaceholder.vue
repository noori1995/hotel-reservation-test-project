<template>
  <span>
    <div v-for="i in 5" :key="i" class="ph-item mt-3">
      <div class="ph-col-2">
        <div class="ph-picture"></div>
      </div>
      <div class="ph-col-10">
        <div class="ph-row">
          <div class="ph-col-6 big"></div>
          <div class="ph-col-4 empty big"></div>
          <div class="ph-col-2 big"></div>
          <div class="ph-col-4"></div>
          <div class="ph-col-8 empty"></div>
          <div class="ph-col-6"></div>
          <div class="ph-col-6 empty"></div>
          <div class="ph-col-8"></div>
          <div class="ph-col-12 empty big"></div>
          <div class="ph-col-2 big"></div>
          <div class="ph-col-2 empty"></div>
          <div class="ph-col-6 empty"></div>
          <div class="ph-col-2 big"></div>
          <div class="ph-col-10 empty"></div>
          <div class="ph-col-2 big"></div>
          <div class="ph-col-12 empty"></div>
        </div>
      </div>
    </div>
  </span>
</template>
