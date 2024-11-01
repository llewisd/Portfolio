<template>
     <button :data-id=id @click="handleClick">{{ msg }} <i class="fa-solid fa-arrow-right"></i></button>
     
</template>

<script>
export default {
     name: "DetailBtn",
     props: {
          msg: {
               type: String
          },
          id: {
               type: [String,Number],
               required: true
          }
     },
     methods: {
          handleClick() {
               this.$emit('button-click', this.id);
          }
     }
}
</script>

<style scoped>
button {
     outline: none;
     border: none;
     font-size: 20px;
     font-family: sans-serif;
     padding: 12px 20px;
     border-radius: 10px;
     background-color: var(--theme-color);
     color: #fff;
     font-weight: 600;
}

button:hover {
     cursor: pointer;
}

i {
     margin-left: 5px;
}
</style>