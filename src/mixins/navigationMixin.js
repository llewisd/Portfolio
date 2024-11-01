// src/mixins/navigationMixin.js
export default {
     methods: {
       navigateTo(destination) {
         this.$router.push(destination);
        // window.location.href = destination;
       }
     }
};
   