<template>
     <div class="avatar" :style="{width: width, height: height}">
          <img :src=src alt="avatar" class="avatar-img">
     </div>
</template>

<script>
export default {
     name: "UserAvatar",
     props: {
          src: {
               type: String,
               required: true
          },
          width: {
               type: String,
               default: "100px"
          },
          height: {
               type: String,
               default: "100px"
          }
     }
}
</script>

<style scoped>
.avatar {
overflow: hidden;
border: 1px solid rgba(238, 39, 39, 0.911);
border-radius: 50%; 
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}
</style>