<template>
     <div class="wrapper">
          <slot></slot>
     </div>
</template>

<script>
export default {
     name: 'AppWrapper'
}
</script>

<style scoped>
.wrapper {
     margin: 0 100px;
}
@media (max-width: 320px) {
     .wrapper {
          margin: 0 20px;
     }
}
@media ((min-width: 321px) and (max-width: 425px)) {
     .wrapper {
          margin: 0 20px;
     }
}
</style>