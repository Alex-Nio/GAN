<template>
  <li>
    <div class="artifact-card">
      <div class="artifact-card__wrapper">
        <button @click="deleteNote(index)" class="delete-btn"></button>

        <div class="artifact-card__row">
          <!-- <label class="artifact-card__checkbox" for="completed-checkbox">
            <input
              class="artifact-card-input"
              type="checkbox"
              name="completed"
              id="completed"
              v-model="note.completed"
            />
            Завершить
          </label> -->
          <div class="artifact-card__label">
            <span>{{ note.type }}</span>
          </div>
        </div>

        <div class="artifact-card__row">
          <span><strong>Набор:</strong> {{ note.title }}</span>
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
            <div class="artifact-card__title">
              <span>Верхний стат:</span><strong>{{ note.main }}</strong>
            </div>
            <p>Доп статы:</p>
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

  const deleteNote = (index) => {
    store.dispatch("deleteNote", index);
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/imports.scss";

  .note-item {
    &__content {
    }
  }
  .artifact-card {
    position: relative;

    &.completed {
      filter: blur(3px);
    }

    &__wrapper {
      @include fdcjs_ais;
      width: 100%;
      max-width: 800px;
      padding: 20px 30px 20px 30px;
      margin: 0 auto 20px auto;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(30px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      font-size: 2rem;
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
      width: 200px;
    }

    &__title {
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
  .artifact-card-input {
  }
  .artifact-stats {
    &__wrapper {
    }

    &__item {
    }
  }
</style>
