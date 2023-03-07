<template>
  <div class="actions-panel">
    <div class="container">
      <div class="actions-panel__wrapper">
        <h1 class="notes-title">Отслеживаемые наборы:</h1>
        <button @click="showActions" class="actions-panel__toggle">Toggler</button>
        <transition
          mode="out-in"
          enter-active-class="animate__animated animate__fadeInLeft"
          leave-active-class="animate__animated animate__fadeOutLeft"
        >
          <div v-if="showBtns && !mobileView" class="notes__btns">
            <filter-btn
              v-for="button in buttons"
              :key="button.value"
              :value="button.value"
              :class="{ active: activeFilter === button.filter }"
              @click="button.handler"
            ></filter-btn>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
  // imports
  import { ref, onMounted, onUnmounted } from "vue";
  import filterBtn from "@/components/UI/filterBtn.vue";

  // Emits
  const emit = defineEmits(["filterToggle"]);

  // Props
  const props = defineProps({
    activeFilter: {
      type: String,
      required: true,
    },
  });
  // Filter btns
  const buttons = [
    {
      value: "Текущие",
      filter: "active",
      handler: () => {
        emit("filterToggle", "active");
      },
    },
    {
      value: "Завершенные",
      filter: "completed",
      handler: () => {
        emit("filterToggle", "completed");
      },
    },
    {
      value: "Все",
      filter: "all",
      handler: () => {
        emit("filterToggle", "all");
      },
    },
  ];

  const mobileView = ref(false);
  const showBtns = ref(true);

  const showActions = () => {
    showBtns.value = !showBtns.value;
    mobileView.value = !mobileView.value;
  };

  const handleResize = () => {
    if (window.innerWidth <= 461) {
      mobileView.value = true;
      showBtns.value = false;
    } else {
      mobileView.value = false;
      showBtns.value = true;
    }
  };

  onMounted(() => {
    console.log(window.innerWidth);
    if (window.innerWidth <= 461) {
      mobileView.value = true;
      showBtns.value = false;
    }

    window.addEventListener("resize", handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/imports.scss";

  .actions-panel {
    @include fdrjc_aic;
    width: 100%;
    background: rgba(60, 46, 155, 0.64);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    padding: 45px 0;
    &__wrapper {
      width: 100%;
      max-width: 1440px;
      margin: 0 auto;
    }

    &__toggle {
      display: none;
    }
  }

  .notes-title {
    color: $white;
    font-size: 2.8rem;
    margin-bottom: 30px;
  }

  .filter-btn {
    display: inline-block;
    width: 100%;
    max-width: fit-content;
    margin: 5px 10px;
    color: $white;
    background-color: $black;
    padding: 10px 25px;
    border-radius: 30px;
    font-size: 1.8rem;
    text-transform: uppercase;
    transition: all 0.3s linear;
    &.active {
      background-color: teal;
      transition: all 0.3s linear;
    }

    &:hover {
      background-color: teal;
      transition: all 0.3s linear;
    }

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 461px) {
    .actions-panel__toggle {
      display: flex;
      color: $white;
      font-size: 3rem;
      margin-bottom: 20px;
    }
    .notes__btns {
      flex-direction: column;
      align-items: flex-start;
    }

    .filter-btn {
      margin: 5px 0;
    }
  }
</style>
