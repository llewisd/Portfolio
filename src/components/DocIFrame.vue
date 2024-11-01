<template>
     <div>
          <iframe :src=src frameborder="1" width="80%" height="1200px"></iframe>
     </div>
</template>

<script>
export default {
     name: "DocIFrame",
     props: {
          src: {
               type: String,
               require: true
          }
     }
}
</script>

<style scoped>
div {
     display: flex;
     justify-content: center;
     margin-top: 30px;
}

</style>