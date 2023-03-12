<template>
  <ul :class="mainClass">
    <selection-item
      @click="handleClick(i), handleKitSelection(item), handleTypeSelection(i)"
      v-for="(item, i) in items"
      :key="i"
      :class="i === selectedIndex ? activeClass : passiveClass"
    >
      <img
        v-if="item.images"
        class="selection-item__image"
        :key="item.images[0]"
        :src="
          require(`@/assets/img/artifacts${Object.values(item.images[0]).toString()}`)
        "
        loading="lazy"
      />
      <transition
        v-else
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
        :duration="350"
      >
        <img
          class="selection-item__image"
          :key="item"
          :src="require(`@/assets/img/artifacts${Object.values(item).toString()}`)"
          loading="lazy"
        />
      </transition>
    </selection-item>
  </ul>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import selectionItem from "./selectionItem.vue";
  const props = defineProps({
    // 1. Главный класс
    mainClass: {
      type: String,
    },
    // 2. Класс активного
    activeClass: {
      type: String,
    },
    // 3. Класс дефолтного
    passiveClass: {
      type: String,
    },
    // 4. Перебираемый массив
    items: {
      type: Array || Object,
    },
  });

  const emit = defineEmits(["handleKitSelection", "handleTypeSelection"]);

  const selectedIndex = ref(0);

  const handleClick = (i) => {
    selectedIndex.value = i;
  };

  const handleKitSelection = (item) => {
    emit("handleKitSelection", item);
  };

  const handleTypeSelection = (index) => {
    emit("handleTypeSelection", index);
  };

  // set first item to current
  onMounted(() => {
    handleClick(0);
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/imports.scss";
  $imageWidth: 87px;

  .selection-list {
    display: grid;
    grid-template-columns: repeat(6, minmax(85px, 87px));
    width: 100%;
    justify-content: start;
    align-items: center;
    grid-gap: 5px 20px;
    background: rgba(138, 255, 230, 0.2);
    border-radius: 12px;
    padding: 15px;
  }

  .selection-item {
    width: $imageWidth;
    max-width: 87px;

    &__image {
      width: $imageWidth;
      transform: scale(1);
      transition: all 0.3s linear;
    }

    &.current {
      position: relative;

      &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(111, 239, 215, 0.24);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(4.9px);
        -webkit-backdrop-filter: blur(4.9px);
        border: 1px solid rgba(111, 239, 215, 0.3);
        animation: fadeIn 0.3s linear;
      }

      & .selection-item__image {
        transform: scale(1.09);
        transition: all 0.2s linear;
      }
    }

    &:hover {
      cursor: pointer;

      & .selection-item__image {
        transform: scale(1.09);
        transition: all 0.2s linear;
      }
    }
  }

  //Types

  .types-list {
    @include fdcjc_aic;
    padding: 18px 19px 18px 22px;
    background-color: #8affe62e;
    border-radius: 12px;
    & .selection-item {
      //
    }

    &__item {
      &.current {
        position: relative;

        &::before {
          position: absolute;
          content: "";
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(111, 239, 215, 0.24);
          border-radius: 16px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(4.9px);
          -webkit-backdrop-filter: blur(4.9px);
          border: 1px solid rgba(111, 239, 215, 0.3);
          animation: fadeIn 0.3s linear;
        }

        & .selection-item__image {
          transform: scale(1.15);
          transition: all 0.2s linear;
        }
      }

      &:hover {
        cursor: pointer;
        & .selection-item__image {
          transform: scale(1.15);
          transition: all 0.2s linear;
        }
      }
    }
  }
  .selection-item {
    &__image {
      width: $imageWidth;
      height: $imageWidth;
      transform: scale(1);
      transition: all 0.3s linear;
    }
  }

  @media screen and (max-width: 991px) {
    .selection-list {
      padding: 0;
      justify-content: center;
    }

    .types-list {
      flex-wrap: wrap;
    }
  }

  @media screen and (max-width: 378px) {
    .selection-list {
      grid-template-columns: repeat(auto-fill, minmax(76px, 76px));
    }
    .selection-item {
      width: 76px;
      height: 76px;

      & img {
        width: 76px;
        height: 76px;
      }
    }
  }
</style>
