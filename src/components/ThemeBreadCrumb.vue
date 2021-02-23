<template>
  <div id="ThemeBreadCrumb">
    <b-breadcrumb :items="items"></b-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "ThemeBreadCrumb",
  data() {
    return {
      items: [
        {
          text: "Admin",
          href: "#",
        },
        {
          text: "Manage",
          href: "#",
        },
        {
          text: "Library",
          active: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
ol.breadcrumb {
    padding: 5px 10px;
    font-size: 12px;
    min-height: 30px;
    align-items: center;
    border-radius: 0;
}
</style>
