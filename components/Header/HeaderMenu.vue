<template>
  <div class="header-menu">
    <div v-for="item in items" :key="item.ico+item.title" class="header-menu__item">
      <span :class="`mdi mdi-${item.ico}`" />
      <span class="header-menu__item-title">{{ item.title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface HeaderMenuProps {
  items:{
    ico:string,
    title:string
  }[]
}

const props = defineProps<HeaderMenuProps>()

</script>

<style lang="scss">
.header-menu{
  display: flex;
  flex-direction: column;
  position: absolute;
  background: $bg-primary;
  width: clamp(300px, 568px, 95vw);
  right: 0;
  padding: 24px 0;
  border-radius: 32px;
  box-shadow: 0px 0px 10px 0px $service-shadow-color;
  @media screen and (max-width: 768px){
    right: 9px;
    position: fixed;
  }
  &__item{
    display: flex;
    flex-direction: row;
    gap: 28px;
    align-items: center;
    background: $bg-primary;
    padding: 2px 24px;
    cursor: pointer;

    &:hover{
      .header-menu__item-title{
        color: $color-active;
      }
      .mdi{
        color: $color-active;
        font-size: 28px;
      }
    }
    .mdi{
      font-size: 28px;
    }
    &-title{
      @media screen and (max-width: 768px) {
        text-wrap: wrap;
        text-align: start;
      }
      @include header-submenu-item;
      text-wrap: nowrap;

    }
  }
}
</style>

