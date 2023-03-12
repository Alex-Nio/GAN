<template>
  <footer>
    <div class="footer-content">
      <div class="footer-content__wrapper">
        <div class="footer-logo">
          <img class="footer-logo__image" src="@/assets/img/icons/burger-bg.svg" alt="" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
  .footer-content {
    position: relative;
    height: 115px;
    background-color: #000;
    overflow: hidden;

    &:before,
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      border-bottom: 9px solid #808080;
      opacity: 0.4;
    }

    &::before {
      top: 7px;
    }

    &::after {
      bottom: 7px;
    }

    &__wrapper {
    }
  }

  .footer-logo {
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    &__image {
      width: 109px;
      height: 109px;
    }
    &::before {
      content: "";
      position: absolute;
      width: 109px;
      height: 109px;
      transform: translate(-50%, -50%);
      background: url("@/assets/img/icons/burger-main.svg") no-repeat center / 109px;
      animation: rotate 2.5s linear infinite;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
