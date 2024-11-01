<template>
     <div class="skill-block">
          <div class="skill-image">
               <img :src=src :alt=alt>
          </div>
          <div class="skill-name">
               <span>{{ skill_name }}</span>
          </div>
     </div>
</template>

<script>
export default {
     name: "SkillItem",
     props: {
          src: {
               type: String,
               required: true
          },
          alt: {
               type: String,
               required: true
          },
          skill_name: {
               type: String,
               required: true
          }
     }
}
</script>

<style scoped>
     .skill-block {
          display: flex;
          flex-direction: column;
          row-gap: 20px;
     }
     .skill-image {
          width: 100px;
          height: 100px;
          border: 1px solid rgb(185, 166, 166);
          border-radius: 5px;
     }
     .skill-image:hover {
          box-shadow: 0 0 10px rgb(56, 201, 245);
          transform: scale(1.1);
     }
     .skill-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
     }
     .skill-name {
          font-size: 22px;
          font-family: sans-serif;
          text-align: center;
     }
     @media (max-width: 320px) {
     .skill_list {
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 10px;
     }
     }
     @media ((min-width: 321px) and (max-width: 425px)) {
          .skill_list {
               grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
               gap: 10px;
          }
     }
</style>