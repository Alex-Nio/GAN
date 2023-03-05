<template>
  <div class="btn-container">
    <svg class="custom-svg" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="gooey">
          <!-- in="sourceGraphic" -->
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="highContrastGraphic"
          />
          <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
        </filter>
      </defs>
    </svg>

    <button id="gooey-button" @click="$emit('createNote')">
      Добавить
      <span class="bubbles">
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
      </span>
    </button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  @import "@/assets/scss/imports.scss";

  $btn-bg: #3ff5d7dd;
  $btn-active: rgba(43, 189, 246, 0.746);

  .btn-container {
    @include fdcjc_aic;
    width: 100%;
  }
  .custom-svg {
    position: absolute;
    top: -4000px;
    left: -4000px;
  }
  #gooey-button {
    padding: 1rem;
    font-size: 2rem;
    border: none;
    color: #0c1016;
    filter: url("#gooey");
    position: relative;
    background-color: $btn-bg;
    transition: all 0.2s ease-in-out;
    &:focus {
      outline: none;
    }

    &:hover {
      color: $primary;
      background-color: $btn-active;
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;

      & .bubbles .bubble {
        background-color: $btn-active;
        transition: all 0.2s ease-out;
      }
    }

    &:active {
      background-color: $btn-active;
      transform: scale(0.8);
      transition: all 0.2s ease-out;

      & .bubbles .bubble {
        background-color: $btn-active;
        transition: all 0.2s ease-out;
      }
    }

    .bubbles {
      position: absolute;
      top: 0;
      left: 0;
      bottom: -20px;
      right: 0;
      transform: scale(1, -1);

      .bubble {
        background-color: $btn-bg;
        border-radius: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        transform: scale(1, -1);
        transition: all 0.2s ease-out;
        z-index: -1;
        &:nth-child(1) {
          left: 69px;
          width: 25px;
          height: 25px;
          animation: move-1 3.02s infinite;
          animation-delay: 0.2s;
        }
        &:nth-child(2) {
          left: 85px;
          width: 25px;
          height: 25px;
          animation: move-2 3.04s infinite;
          animation-delay: 0.4s;
        }
        &:nth-child(3) {
          left: 91px;
          width: 25px;
          height: 25px;
          animation: move-3 3.06s infinite;
          animation-delay: 0.6s;
        }
        &:nth-child(4) {
          left: 97px;
          width: 25px;
          height: 25px;
          animation: move-4 3.08s infinite;
          animation-delay: 0.8s;
        }
        &:nth-child(5) {
          left: 47px;
          width: 25px;
          height: 25px;
          animation: move-5 3.1s infinite;
          animation-delay: 1s;
        }
        &:nth-child(6) {
          left: 30px;
          width: 25px;
          height: 25px;
          animation: move-6 3.12s infinite;
          animation-delay: 1.2s;
        }
        &:nth-child(7) {
          left: 71px;
          width: 25px;
          height: 25px;
          animation: move-7 3.14s infinite;
          animation-delay: 1.4s;
        }
        &:nth-child(8) {
          left: 62px;
          width: 25px;
          height: 25px;
          animation: move-8 3.16s infinite;
          animation-delay: 1.6s;
        }
        &:nth-child(9) {
          left: 38px;
          width: 25px;
          height: 25px;
          animation: move-9 3.18s infinite;
          animation-delay: 1.8s;
        }
        &:nth-child(10) {
          left: 76px;
          width: 25px;
          height: 25px;
          animation: move-10 3.2s infinite;
          animation-delay: 2s;
        }
      }
    }
  }

  @keyframes move-1 {
    0% {
      transform: translate(0, 0);
    }
    99% {
      transform: translate(0, -73px);
    }
    100% {
      transform: translate(0, 0);
      opacity: 0;
    }
  }
  @keyframes move-2 {
    0% {
      transform: translate(0, 0);
    }
    99% {
      transform: translate(0, -123px);
    }
    100% {
      transform: translate(0, 0);
      opacity: 0;
    }
  }
  @keyframes move-3 {
    0% {
      transform: translate(0, 0);
    }
    99% {
      transform: translate(0, -106px);
    }
    100% {
      transform: translate(0, 0);
      opacity: 0;
    }
  }
  @keyframes move-4 {
    0% {
      transform: translate(0, 0);
    }
    99% {
      transform: translate(0, -114px);
    }
    100% {
      transform: translate(0, 0);
      opacity: 0;
    }
  }
  @keyframes move-5 {
    0% {
      transform: translate(0, 0);
    }
    99% {
      transform: translate(0, -117px);
    }
    100% {
      transform: translate(0, 0);
      opacity: 0;
    }
  }
  @keyframes move-6 {
    0% {
      transform: translate(0, 0);
    }
    99% {
      transform: translate(0, -61px);
    }
    100% {
      transform: translate(0, 0);
      opacity: 0;
    }
  }
  @keyframes move-7 {
    0% {
      transform: translate(0, 0);
    }
    99% {
      transform: translate(0, -109px);
    }
    100% {
      transform: translate(0, 0);
      opacity: 0;
    }
  }
  @keyframes move-8 {
    0% {
      transform: translate(0, 0);
    }
    99% {
      transform: translate(0, -101px);
    }
    100% {
      transform: translate(0, 0);
      opacity: 0;
    }
  }
  @keyframes move-9 {
    0% {
      transform: translate(0, 0);
    }
    99% {
      transform: translate(0, -119px);
    }
    100% {
      transform: translate(0, 0);
      opacity: 0;
    }
  }
  @keyframes move-10 {
    0% {
      transform: translate(0, 0);
    }
    99% {
      transform: translate(0, -126px);
    }
    100% {
      transform: translate(0, 0);
      opacity: 0;
    }
  }
</style>
