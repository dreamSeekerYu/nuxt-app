<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">nuxt-app</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/plugins/service";
export default {
  async mounted() {
    // const res = await axios.get("https://www.quanqingkeji.com/api/area/list");
    // axios.header;
    const res = await request.get("/api/area/list");

    console.log(
      "%c res....",
      "color: red; font-style: italic",
      JSON.stringify(res.data, null, 2)
    );
  },
  // async asyncData({ params }) {
  //   let { data } = await axios.get("https://www.quanqingkeji.com/api/area/list");
  //   return { title: data.title };
  // },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
