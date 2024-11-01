<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
:root {
  --black-color: #000;
  --white-color: #fff;
  --red-color: red;
  --theme-color: #DF0029;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: serif;
}
a {
  text-decoration: none;
  color: #000;
  display: block;
}
</style>
