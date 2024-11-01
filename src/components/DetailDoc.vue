<template>
     <FloatLayout>
     <div class="detail_doc">
          <div class="exit-block" @click="exitDetailDoc">
               <span><i class="fa-solid fa-xmark"></i></span>
          </div>
          <div class="title">{{ data.title }}</div>
          <div class="content">
               <div class="member">
                    <span>Form : </span>
                    <span>{{ data.form }}</span>
               </div>
               <div class="tech">
                    <span>Tech : </span>
                    <span> {{ data.tech }} </span>
               </div>
               <div class="description">
                    <span>Description : </span>
                    <span>{{ data.description }}</span>
               </div>
          </div>
          <div class="extension">
               <a :href=data.livedemo target="_blank" :class="{demo: isActive}" :title=title_link><i class="fa-solid fa-circle-play"></i> Live demo</a>
               <a :href=data.sourcecode target="_blank" class="source"><i class="fa-brands fa-github"></i> Source code</a>
          </div>
     </div>
     </FloatLayout>
</template>

<script>
import FloatLayout from './FloatLayout.vue';
export default {
     name: "DetailDoc",
     data() {
          return {
               isActive: false,
               title_link: 'Click to see demo'
          }
     },
     components: {
          FloatLayout
     },
     props: {
          data: {
               type: Object,
               required: true,
          }
     },
     mounted() {
          if (!this.data.livedemo) {

               this.isActive = true;
               this.title_link = 'There is no demo for this'
          }
     },
     methods: {
          exitDetailDoc() {
               this.$emit('exit-click', 0);
          }
     }
}
</script>

<style scoped>
.detail_doc {
     width: 50%;
     height: 80vh;
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     background-color: #fff;
     display: flex;
     flex-direction: column;
     justify-content: center;
     padding: 20px 30px
}

.exit-block {
     font-size: 20px;
     font-weight: 500;
     display: flex;
     justify-content: flex-end;
}

.exit-block:hover i {
     color: var(--theme-color);
     cursor: pointer;
}

.title {
     margin: 30px 0;
     font-size: 30px;
     font-weight: 700;
     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
     color: var(--theme-color);
}

.content {
     display: flex;
     flex-direction: column;
     row-gap: 20px;
     font-size: 22px;
}

.content span:nth-child(1) {
     font-weight: 700;
}

.extension {
     display: flex;
     align-items: center;
     justify-content: space-around;
     column-gap: 50px;
     margin: 40px 0;
}

.extension a {
     padding: 20px 30px;
     color: #fff;
     font-size: 20px;
     font-weight: 700;
     border-radius: 10px;
}

.extension a i {
     margin-right: 5px;
}

.extension a:nth-child(1) {
     background-color: green;    
}

.extension a:nth-child(2) {
     background-color: black;    
}

.demo {
     cursor: not-allowed;
     opacity: 0.4;
     pointer-events: none;
}
</style>