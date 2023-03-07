<template>
  <div class="kits__wrapper">
    <ul class="kits-list">
      <li class="kits-list__item" v-for="kit in kits">
        <div class="kit-card">
          <div class="kit-card__wrapper">
            <h3 class="kit-card__title">{{ kit.title }}</h3>
            <span class="kit-card__counter">Добавлено: {{ kit.count }}</span>
            <div class="kit-card__images">
              <img
                v-for="(item, i) in kit.images"
                class="kit-card__image"
                :src="require(`@/assets/img/artifacts${item}`)"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
  const props = defineProps({
    kits: {
      type: Array,
    },
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/imports.scss";
  .kits {
    width: 100%;
    &__wrapper {
      margin: 40px 0;
    }
  }
  .kits-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
    grid-column-gap: 10px;
    grid-row-gap: 6px;
    align-items: center;

    &__item {
    }
  }
  .kit-card {
    position: relative;
    @include fdcjs_ais;
    width: 100%;
    padding: 20px 30px 10px 30px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    line-height: 100%;

    &__wrapper {
      margin: 0 auto;
    }

    &__image {
      display: inline-block;
      width: 68px;
    }

    &__title {
      font-size: 2.2rem;
      text-align: center;
      margin: 30px 0 10px 0;
    }
    &__counter {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 5px 10px;
      background-color: teal;
      border-radius: 20px;
    }
    &__images {
      @include fdrjc_aic;
      margin: 10px auto;
    }
  }
</style>
