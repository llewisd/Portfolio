<template>
     <div class="container">
          <UserAvatar :src="require('@/assets/Me.jpg')" width="150px" height="150px"/>
          <div class="name">Nguyễn Viết Tiến</div>
          <div class="label">Portfolio</div>
          <div class="link-block">
               <a href="/home">Start</a>
          </div>
     </div>
</template>

<script>
import UserAvatar from '@/components/UserAvatar.vue';

export default {
     name: "StartPage",
     components: {
          UserAvatar
     }
}
</script>

<style scoped>
.container {
     display: flex;
     flex-direction: column;
     align-items: center;
     width: 30%;
     height: 70vh;
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     background-color: #faf9f6fa;
     padding: 20px;
     border-radius: 10px;
     box-shadow: 0px 0px 3px #000;
}

.name {
     font-size: 20px;
     font-weight: 700;
     margin: 20px 0;
     animation: rightToLeft 1s;
}

@keyframes rightToLeft {
     from {
          position: relative;
          right: -20px;
          opacity: 0;
     }
     to {
          position: relative;
          right: 0;
          opacity: 1;
     }
}

@keyframes leftToRight {
     from {
          position: relative;
          left: -20px;
          opacity: 0;
     }
     to {
          position: relative;
          left: 0;
          opacity: 1;
     }
}

:deep(.avatar) {
     animation: leftToRight 1s;
}

.label {
     font-style: italic;
     animation: leftToRight 1s;
}

.link-block {
     padding: 10px 0;
     background-color: var(--theme-color);
     width: 100%;
     margin-top: 100px;
}

.link-block a {
     text-align: center;
     font-size: 20px;
     color: var(--white-color);
}

@media (max-width: 320px) {
     .container {
          width: 90%;
     }
}
@media ((min-width: 321px) and (max-width: 425px)) {
     .container {
          width: 90%;
     }
}
</style>