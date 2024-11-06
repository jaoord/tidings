<script setup>
import { createClient } from 'pexels';
import { ref } from 'vue';

let searchResults = ref([]);

const form = ref({
  search: ''
})

const zoomInPic = ref({});

const findPhotos = async () => {
  if (form.value.search.length == 0)
    return;

  Object.assign(searchResults, []);
  Object.assign(zoomInPic, {});

  const pexelsApiKey = import.meta.env.VITE_PEXELS_API_KEY;
  const client = createClient(pexelsApiKey);

  client.photos.search({
    query: form.value.search,
    orientation: 'landscape',
    per_page: 10,
    size: 'medium'
  })
    .then(photos => {
      searchResults.value = photos.photos;
    })
}

const setZoomInPic = async (photo) => {
  zoomInPic.value = photo;
}

</script>



<template>
  <main class="container ">
    <div class="full max-w-sm mx-auto">
      <h1>Pexels API</h1>
      <div class="bg-gray-600 p-4 mt-4 rounded-sm text-white">

        <label class="block font-bold mb-2" for="search">Search photos</label>
        <input type="text" id="search" v-model="form.search" @keyup.enter="findPhotos"
          placeholder="Enter a search term">
        <button @click="findPhotos" class="btn btn-blue">Search</button>

      </div>
      <a href="https://www.pexels.com" class="text-xs mt-4 inline-block">Photos provided by Pexels</a>
    </div>

    <div class="full max-w-lg mx-auto mt-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3" v-if="searchResults.length > 0">
        <div v-for="photo, ix in searchResults" :key="ix" class="cursor-pointer">
          <img :src="photo.src.small" @click="setZoomInPic(photo)">
        </div>
      </div>

      <div v-if="Object.keys(zoomInPic).length > 0" class="mt-12">
        <img :src="zoomInPic.src.large" :alt="zoomInPic.alt">
        <h3>Photo by {{ zoomInPic.photographer }}</h3>
        <p>{{ zoomInPic.alt }}</p>
        <p><a :href="zoomInPic.url" target="_blank"></a></p>
      </div>

      <div v-if="searchResults.length == 0 && form.search.length > 0">
        There are no results
      </div>
    </div>
  </main>
</template>
