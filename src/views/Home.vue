<template>
  <div class="home">
    <SearchBar />
    <!-- only mobile -->
    <FiltersAndMapView />
    <!-- only mobile -->
    <div class="d-flex flex-column flex-lg-row w-100 frame frame-lg mb-5">
      <HotelFilters />
      <HotelResults />
    </div>
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import HotelFilters from '../components/HotelFilters.vue'
import HotelResults from '../components/HotelResults.vue'
import FiltersAndMapView from '../components/FiltersAndMapView.vue'
export default {
  name: 'Home',
  components: {
    SearchBar,
    HotelFilters,
    HotelResults,
    FiltersAndMapView
  }
}
</script>
