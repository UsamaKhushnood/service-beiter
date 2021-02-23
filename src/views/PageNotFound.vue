<template>
  <div class="container mt-5" id="PageNotFound">
    <h1>OOPS! 404</h1>
    <h1><strong>Page Not Found</strong></h1>
    <h3 class="mt-5">
      Back to
      <router-link to="/" tag="span"
        ><div class="btn btn-outline-secondary btn-sm px-3">
          Home <b-icon icon="arrow-return-left"></b-icon>
        </div>
      </router-link>
    </h3>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>
<style scoped>
#PageNotFound {
  text-align: center;
}
</style>
