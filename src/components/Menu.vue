<template>
     <div class="menu-wrapper">
          <div class="menu">
              <img class="menu-item notification" src="./Images/notification.png" alt="">
              <img class="menu-item" src="./Images/menu.png" alt="">
          </div>
      </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* MENU */
.menu-wrapper {
    position: relative;
    display: flex;

    justify-content: space-between;

    background: rgb(255, 255, 255);
}
.menu {
    display: flex;
    justify-content: center;

    
}
.menu-item {
    height: 30px;
    margin-right: 2rem;
    margin-top: 5px;
}
</style>