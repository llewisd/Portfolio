<template>
     <div>
          <slot></slot>
     </div>
</template>

<script>
export default {
     name: "FloatLayout"
}
</script>

<style scoped>
div {
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background-color: rgba(0,0,0,0.5);
}
</style>