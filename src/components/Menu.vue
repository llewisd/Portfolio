<template>
     <div class="menu_item">
          <router-link :to=src class="menu_link">{{ msg }}</router-link>
     </div>
</template>

<script>
export default {
     name: "AppMenu",
     props: {
          src: {
               type: String,
               require: true
          },
          msg: {
               type: String,
               require: true
          }
     }
}
</script>

<style scoped>
.router-link-exact-active {
  border-bottom: 2px solid var(--theme-color);
}
.menu_link {
     padding: 10px 12px;
     font-size: 20px;
     font-weight: 600;
}
</style>