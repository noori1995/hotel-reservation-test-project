<template>
  <div class="home">
    <SearchBar />
    <div class="d-flex flex-row w-100 frame frame-lg mb-5">
      <HotelFilters />
      <HotelResults />
    </div>
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import HotelFilters from '../components/HotelFilters.vue'
import HotelResults from '../components/HotelResults.vue'
export default {
  name: 'Home',
  components: {
    SearchBar,
    HotelFilters,
    HotelResults
  }
}
</script>
