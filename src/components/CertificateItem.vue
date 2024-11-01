<template>
     <div class="certificate-block">
          <div class="name">{{ name }}</div>
          <div class="point">{{ score }}</div>
     </div>
</template>

<script>
export default {
     name: "CertificateItem",
     data() {
          return {
               score: 0
          }
     },
     props: {
          name: {
               type: String
          },
          point: {
               type: Number
          },
          step: {
               type: Number
          }
     },
     mounted() {
          if(this.point > 100) this.score = 100;
          this.increasePoint(this.point, this.step);
     },
     methods: {
          increasePoint(number, step) {
               if(this.score < number) {
                    this.score += step;
                    setTimeout(() => this.increasePoint(number, step), 0.5);
               }
          }
     }
}
</script>

<style scoped>
.certificate-block {
     display: flex;
     flex-direction: column;
     row-gap: 30px;
     border: 1px solid black;
     border-radius: 10px;
     padding: 20px;
}
.name {
     font-size: 28px;
     font-family: sans-serif;
     font-weight: 600;
     text-align: center;
}
.point {
     font-size: 30px;
     text-align: center;
}

</style>