<template>
  <v-img
    class="landing-image"
    :src="require('@/assets/geocase_landing.jpg')"
    style="height: 37vh;"
  >
    <v-row class="fill-height" align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1
          class="mb-2 font-weight-bold page-header"
          style="font-size: 2.5rem;"
        >
          GeoCASe 2.0
          <div class="mt-3 hidden-sm-and-down" style="font-size: 3rem;">
            The Earth Science Collections Portal
          </div>
        </h1>

        <FastSearch />
      </v-col>
    </v-row>
  </v-img>
</template>

<script>
import FastSearch from "@/components/search/FastSearch";

export default {
  name: "LandingImage",
  components: { FastSearch }
};
</script>

<style scoped>
.landing-image {
  /*margin-top: 64px;*/
  padding-top: 64px;
  min-height: 275px;
  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.page-header {
  font-size: 3rem;
  color: #ffffff;
  text-shadow: 4px 4px 14px #000000;
  line-height: 90%;
}
</style>
