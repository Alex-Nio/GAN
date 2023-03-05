<template>
  <section>
    <div class="actions-panel">
      <div class="actions-panel__wrapper">
        <h1 class="notes-title">Отслеживаемые наборы:</h1>
        <div class="notes__btns">
          <button
            class="filter-btn"
            @click="filter = 'active'"
            :class="{ active: filter != 'completed' && filter != 'all' }"
          >
            Текущие
          </button>
          <button
            class="filter-btn"
            @click="filter = 'completed'"
            :class="{ active: filter != 'active' && filter != 'all' }"
          >
            Завершенные
          </button>
          <button
            class="filter-btn"
            @click="filter = 'all'"
            :class="{ active: filter != 'active' && filter != 'completed' }"
          >
            Все
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="notes">
        <ul v-if="filteredNotes.length != 0" class="notes-list">
          <li
            v-for="(note, index) in filteredNotes"
            :key="note.title"
            class="note-item"
            :class="{ completed: note.completed }"
          >
            <label class="completed-action" for="completed-checkbox">
              <input
                class="completed-action__checkbox"
                type="checkbox"
                name="completed"
                id="completed"
                v-model="note.completed"
              />
              Завершить
            </label>
            <div class="note-item__label">
              <span>{{ note.type }}</span>
            </div>
            <div class="note-item__actions">
              <button @click="deleteNote(index)" class="delete-btn"></button>
            </div>
            <div class="content-row">
              <span>Набор:</span><span>{{ note.title }}</span>
            </div>
            <div class="note-item__content">
              <img
                class="note-item__image"
                :src="require(`@/assets/img/artifacts${note.image}`)"
                alt="Image"
              />
              <div class="content-column">
                <div class="content-column__title">
                  <span>Верхний стат:</span><strong>{{ note.main }}</strong>
                </div>
                <p>Доп статы:</p>
                <div class="additional-stats">
                  <div class="additional-stats__wrapper">
                    <span
                      class="additional-stats__item"
                      v-for="item in note.extra"
                      :key="item"
                      >{{ item }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="notes__warning" v-else>
          <p>Пожалуйста, сперва добавьте артефакт в отслеживаемые</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  // imports
  import { ref, computed } from "vue";
  import { useStore } from "vuex";
  const filter = ref("active");
  const store = useStore();

  const deleteNote = (index) => {
    store.dispatch("deleteNote", index);
  };

  const filteredNotes = computed(() => {
    if (filter.value === "active") {
      return store.getters.noteNotCompleted;
    } else if (filter.value === "completed") {
      return store.getters.noteCompleted;
    } else if (filter.value === "all") {
      return store.getters.notes;
    }
    return filter.value === "active";
  });
</script>

<style lang="scss">
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
      padding: 0 40px;
      margin: 0 auto;
    }
  }

  .notes {
    margin-top: 30px;

    &__btns {
      @include fdrjs_aic;
    }

    &__warning {
      font-size: 3rem;
      margin: 40px 0;
      padding: 45px 0;
      background: rgba(60, 46, 155, 0.64);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(60, 46, 155, 0.16);
      text-align: center;
    }
  }

  .filter-btn {
    margin: 0 10px;
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
  }

  .notes-title {
    color: $white;
    font-size: 2.8rem;
    margin-bottom: 30px;
  }

  .completed-action {
    @include fdrjc_aic;

    &__checkbox {
      width: 20px;
      height: 20px;
      cursor: pointer;
      z-index: 20;
      margin-right: 5px;
    }
  }

  .note-item {
    position: relative;
    @include fdcjs_ais;
    width: 100%;
    max-width: 800px;
    padding: 20px 30px 20px 30px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    border: 1px solid rgba(255, 255, 255, 0.3);

    &.completed {
      filter: blur(3px);
    }

    &__content {
      @include fdrjs_aic;
      width: 100%;
      height: 100%;
    }

    &:first-child {
      margin-bottom: 30px;
    }

    &:not(:first-child) {
      margin-top: 30px;
      margin-bottom: 30px;
    }

    &__image {
      width: 200px;
    }

    &__label {
      position: absolute;
      font-size: 1.6rem;
      text-transform: uppercase;
      top: 15px;
      right: 60px;
      padding: 10px 20px;
      background-color: teal;
    }

    &__actions {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }

  .delete-btn {
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

  .content-row {
    @include fdrjs_aic;
    line-height: 160%;
    margin: 0 auto;

    & span {
      line-height: 100%;
    }

    & span:first-child {
      font-size: 1.8rem;
      margin-right: 20px;
    }
    & span:last-child {
      font-size: 2.8rem;
      font-weight: $b;
    }
  }

  .content-column {
    @include fdcjs_ais;
    width: 100%;
    font-size: 2rem;
    line-height: 160%;

    &__title {
      margin-bottom: 15px;
    }

    & strong {
      margin-left: 20px;
    }
  }

  .additional-stats {
    @include fdrjs_aic;

    &__wrapper {
      margin-top: 20px;
    }

    &__item {
      font-size: 1.6rem;
      background-color: teal;
      border-radius: 30px;
      padding: 5px 10px;
      margin: 0 5px;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>
