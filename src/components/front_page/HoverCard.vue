<template>
  <v-hover v-slot:default="{ hover }" :close-delay="800">
    <v-card
      :elevation="hover ? 12 : 6"
      height="300"
      hover
      class="d-flex flex-column HoverCard"
      :style="
        `background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(&quot;${image}&quot;);`
      "
      @click="goToSearchView(url)"
    >
      <v-spacer />

      <v-card-title
        class="justify-center text-uppercase font-weight-bold animate__animated animate__faster white--text"
        :class="{
          animate__slideInUp: hover,
          animate__slideInDown: !hover
        }"
        >{{ title }}</v-card-title
      >

      <v-card-text
        v-show="hover"
        :class="{
          animate__slideInUp: hover,
          animate__slideOutDown: !hover
        }"
        class="text-center animate__animated animate__faster white--text"
        >{{ text }}</v-card-text
      >

      <v-card-actions
        v-show="hover"
        :class="{
          animate__slideInUp: hover,
          animate__slideOutDown: !hover
        }"
        class="justify-center mb-2 animate__animated animate__faster"
      >
        <v-btn
          class="font-weight-bold white--text"
          color="black"
          elevation="6"
          :to="url"
          >{{ button }}</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "HoverCard",

  props: ["title", "text", "button", "url", "image"],

  methods: {
    ...mapActions("search", ["resetSearch"]),

    // Resetting search fields before redirecting to search route
    goToSearchView(url) {
      this.resetSearch();
      this.$router.push({ path: url });
    }
  }
};
</script>

<style scoped>
.HoverCard {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.v-card__title,
.v-card__text {
  text-shadow: 2px 2px 4px #000;
}

.v-card__title {
  font-size: 1.5rem;
}

.v-card__text {
  font-size: 1rem;
}
</style>
