<template>
     <div class="header">
          <div class="menu">
               <AppMenu src="/home" msg="Home" />
               <AppMenu src="/home/mycv" msg="CV" />
               <AppMenu src="/home/scoreboard" msg="Score" />
          </div>
          <!-- <UserAvatar :src="require('@/assets/Me.jpg')" width="60px" height="60px" @click="navigateTo('/')" title="Nguyễn Viết Tiến"/> -->
          <div class="home-icon" @click="navigateTo('/')" title="Return">
               <i class="fa-solid fa-house"></i>
          </div>
     </div>
</template>

<script>
import AppMenu from './Menu.vue';
import navigationMixin from '@/mixins/navigationMixin';
export default {
     name: 'AppHeader',
     components: {
          AppMenu
     },
     mixins: [navigationMixin]
};
</script>

<style scoped>
.menu {
     display: flex;
     column-gap: 10px;
}
.header {
     display: flex;
     justify-content: space-between;
     align-items: center;
     color: var(--white-color);
     padding: 10px 0;
}
.signin {
     padding: 10px 14px;
     font-size: 20px;
     font-weight: 700;
     background-color: blueviolet;
     border-radius: 8px;
}

.home-icon {
     font-size: 22px;
     color: black;
}

.home-icon:hover {
     color: var(--theme-color);
     cursor: pointer;
}
</style>