<template>
     <div class="project_item">
          <div class="image">
               <img :src=src :alt=alt>
          </div>
          <div class="aside_item">
               <div class="project_name">{{ name }}</div>
               <DetailBtn msg="Detail" class="detail_button" :id=id @button-click="handleBtnClick" />
          </div>
     </div>
</template>

<script>
import DetailBtn from './DetailBtn.vue';
export default {
     name: "ProjectItem",
     components: {
          DetailBtn
     },
     props: {
          src: {
               type: String,
               required: true
          },
          alt: {
               type: String
          },
          name: {
               type: String,
               required: true
          },
          id: {
               type: [String, Number]
          }
     },
     methods: {
          handleBtnClick(id) {
               // Phát ra sự kiện lên HomePage
               this.$emit('project-click', id);
          },
     },
}
</script>

<style scoped>
.project_item {
     display: flex;
     column-gap: 30px;
     box-shadow: 0 0 10px #000;
     border-radius: 10px;
}
.image {
     flex: 0 0 150px;
}

.image img {
     width: 100%;
     height: 100%;
     object-fit: cover;
}
.aside_item {
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     flex: 1;
     padding: 10px 10px 10px 0;
}

.project_name {
     min-height: 100px;
     font-size: 30px;
     font-weight: 700;
}

.detail_button {
     align-self: flex-end;
}
@media (max-width: 320px) {
     .project_item {
          column-gap: 10px;
     }
     .image {
          flex: 0 0 100px
     }
}
@media ((min-width: 321px) and (max-width: 425px)) {
     .project_item {
          column-gap: 10px;
     }
     .image {
          flex: 0 0 100px
     }
}
</style>