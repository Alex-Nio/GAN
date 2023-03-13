<template>
  <div class="main-title">
    <h1>GAN</h1>
    <p>Genshin Artifact Notes</p>
  </div>
  <div class="main-text">
    <p>
      Приложение GAN - это справочник артефактов для игры Genshin Impact. В приложении вы
      можете найти информацию о различных наборах артефактов, их свойствах, бонусах и
      местоположении.
    </p>
    <p>
      Используйте меню выбора наборов артефактов и их изображений, чтобы найти нужный
      набор, а затем выберите свойства артефактов, чтобы получить информацию о его
      бонусах.
    </p>
    <p>
      GAN позволяет игрокам легко найти и собрать лучшие наборы артефактов для своих
      персонажей в игре Genshin Impact.
    </p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  @import "@/assets/scss/imports.scss";
  .main-title {
    width: 100%;
    text-align: center;
    margin: 30px 0 65px 0;
    & h1 {
      font-family: $ff_MainTitle;
      font-size: 24rem;
    }

    p {
      position: relative;

      font-family: $ff_MainText;
      font-size: 11rem;

      &:after {
        content: "";
        position: absolute;
        border-bottom: 1.5rem solid $white;
        border-radius: 3rem;
        opacity: 0.2;
        width: 10vw;
        left: 50%;
        bottom: -45px;
        transform: translateX(-50%);
      }
    }
  }

  .main-text {
    @include fdrjc_ais;
    flex: calc(100% / 3);

    & p {
      font-family: $ff_R;
      font-size: 1.8rem;
      padding: 10px;
      margin: 0 10px;
    }
  }
</style>
