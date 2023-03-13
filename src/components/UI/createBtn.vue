<template>
  <div class="btn-container">
    <button id="button" @click="handleClick"></button>
  </div>
</template>

<script setup>
  import { onMounted } from "vue";

  const handleClick = function () {
    const btn = document.getElementById("button");
    btn.classList.add("onclic");
    setTimeout(function () {
      btn.classList.remove("onclic");
      btn.classList.add("validate");
      setTimeout(function () {
        btn.classList.remove("validate");
      }, 650);
    }, 1250);
  };

  onMounted(() => {
    const btn = document.getElementById("button");
    btn.addEventListener("click", handleClick);
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/imports.scss";

  $btn-bg: #40c9a2;
  $btn-active: rgba(43, 189, 246, 0.746);
  $green: #40c9a2;
  $gray: rgba(43, 189, 246, 0.746);
  .btn-container {
    @include fdcjc_aic;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
  #button {
    font-family: $ff_R;
    font-size: 1.8rem;
    outline: none;
    height: 30px;
    text-align: center;
    width: 130px;
    border-radius: 12px;
    background: $green;
    border: 2px solid $green;
    color: $white;
    text-shadow: 0;
    cursor: pointer;
    transition: all 0.25s ease;
    &:hover {
      opacity: 0.8;
      background: $green;
    }
    &:active {
      //letter-spacing: 2px;
      letter-spacing: 2px;
    }
    &:after {
      font-size: 2.2rem;
      content: "Добавить";
    }
  }
  #button.onclic {
    width: 30px;
    border-color: $secondary;
    border-radius: 42px;
    border-width: 3px;
    font-size: 0;
    background-color: transparent;
    border-left-color: $green;
    animation: rotating 1s 0.25s linear infinite;

    &:after {
      content: "";
    }
  }
  #button.validate {
    max-width: 140px;
    position: relative;
    border-radius: 42px;
    font-size: 1.8rem;
    color: white;
    background: $green;
    &:after {
      content: "";
      position: absolute;
      width: 24px;
      height: 24px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: url("@/assets/img/icons/selected-arrow-icon.svg") no-repeat center;
    }
  }

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
