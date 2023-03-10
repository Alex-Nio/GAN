<template>
  <li>
    <div class="artifact-card">
      <div class="artifact-card__wrapper">
        <button @click="deleteNote(note.id)" class="delete-btn"></button>

        <div class="artifact-card__row">
          <div class="artifact-card__label">
            <span>{{ note.type }}</span>
          </div>
        </div>

        <div class="artifact-card__column">
          <span class="artifact-card__kit-name"
            ><strong>Набор: </strong>{{ note.title }}</span
          >
          <div class="artifact-card__title">
            <span
              >Верхний стат: <strong>{{ note.main }}</strong></span
            >
          </div>
        </div>

        <div class="artifact-card__row">
          <div class="artifact-card__column">
            <img
              class="artifact-card__image"
              :src="require(`@/assets/img/artifacts${note.image}`)"
              alt="Image"
            />
          </div>

          <div class="artifact-card__column">
            <!-- <p class="extra-stats-title">Доп статы:</p> -->
            <div class="artifact-stats">
              <div class="artifact-stats__wrapper">
                <span
                  class="artifact-stats__item"
                  v-for="item in note.extra"
                  :key="item"
                  >{{ item }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup>
  // imports
  import { useStore } from "vuex";

  const store = useStore();

  // Props
  const props = defineProps({
    note: Object,
  });

  const deleteNote = (id) => {
    store.dispatch("deleteNote", id);
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/imports.scss";

  .note-item {
    display: inline-flex;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    &__content {
    }
  }
  .artifact-card {
    position: relative;
    height: 100%;

    &.completed {
      filter: blur(3px);
    }

    &__wrapper {
      @include fdcjs_ais;
      width: 100%;
      height: 100%;
      padding: 20px 30px 20px 30px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(30px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      font-size: 1.6rem;
      line-height: 100%;
    }

    &__row {
      width: 100%;
      @include fdrjs_aic;
    }

    &__column {
      @include fdcjc_ais;
    }

    &__checkbox {
    }

    &__label {
      padding: 5px 10px;
      margin-bottom: 10px;
      background-color: teal;
    }

    &__image {
      display: inline-flex;
      width: 140px;
    }

    &__title {
      font-size: 2.2rem;
      margin-bottom: 10px;
    }

    &__kit-name {
      font-size: 2.3rem;
      margin-bottom: 10px;
    }
  }
  .delete-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    color: $white;
    font-size: 1.4rem;
    padding: 5px 15px;
    width: 30px;
    height: 30px;
    background: url("@/assets/img/icons/close-icon.png") no-repeat center / 30px 30px;
    transition: all 0.3s linear;

    &:hover {
      transform: scale(1.1);
      transition: all 0.3s linear;
    }
  }

  .extra-stats-title {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  .artifact-stats {
    width: 100%;
    &__wrapper {
    }

    &__item {
      padding: 5px 15px;
      margin: 5px;
      background-color: teal;
      font-size: 1.4rem;
      border-radius: 15px;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>
