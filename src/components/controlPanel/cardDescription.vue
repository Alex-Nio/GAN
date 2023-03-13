<template>
  <div class="card-description">
    <div class="card-description__top">
      <div class="dungeon-description">
        <div
          v-if="currentKit.location.image.length > 0"
          class="dungeon-description__preview"
        >
          <img
            class="dungeon-description__image"
            :src="require(`@/assets/img/dungeons${currentKit.location.image}`)"
            alt=""
          />
        </div>
        <p v-if="currentKit.location.image.length > 0" class="dungeon-description__text">
          <strong>Где достать:</strong> {{ currentKit.location.name }}
        </p>
        <p v-else class="dungeon-description__text" style="margin-top: 0px">
          <strong>Где достать:</strong> Дроп с Ворлд боссов
        </p>
      </div>
    </div>
    <div class="card-description__center">
      <div class="kit-description">
        <p class="kit-description__title">{{ currentKitTitle }}</p>
        <span class="kit-description__type">
          Тип артефакта: <strong>{{ currentKitType }}</strong>
        </span>
        <div class="kit-description__bonuses">
          <ul class="bonuses-list">
            <li class="bonuses-list__item">
              {{ currentKit.bonusX2 }}
            </li>
            <li class="bonuses-list__item">
              {{ currentKit.bonusX4 }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="card-description__bottom">
      <div class="schedule">
        <p>В какие дни по расписанию</p>
        <create-btn @click="createNote"></create-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
  // imports
  import { watch } from "vue";
  import createBtn from "@/components/UI/createBtn.vue";

  // props
  const props = defineProps({
    currentKitTitle: {
      type: String,
    },
    currentKitType: {
      type: String,
    },
    currentKit: {
      type: Object,
    },
  });

  // emits
  const emit = defineEmits(["createNote"]);

  const createNote = () => {
    emit("createNote");
  };

  watch(
    () => [props.currentKit],
    () => {
      console.log(props.currentKit);
    }
  );
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/imports.scss";

  .card-description {
    width: 100%;
    &__top {
      @include fdcjc_ais;
      padding: 15px;
      margin-bottom: 5px;
      background-color: $white;
      color: $black;
      border-radius: 5px;
    }

    &__center {
      @include fdcjc_ais;
      padding: 15px;
      margin-bottom: 5px;
      background-color: $white;
      color: $black;
      border-radius: 5px;
    }

    &__bottom {
      position: relative;
      @include fdcjc_ais;
      padding: 15px;
      margin-bottom: 5px;
      background-color: $white;
      color: $black;
      border-radius: 5px;
    }
  }
  .dungeon-description {
    &__preview {
      position: relative;
      width: 100%;
    }

    &__image {
      object-fit: cover;
      width: 680px;
      height: 200px;
      background: $black;
      margin: 0 auto;
    }

    &__text {
      font-size: 1.8rem;
      margin-top: 20px;
    }
  }
  .kit-description {
    &__title {
      font-family: $ff_C;
      font-weight: $b;
      font-size: 2.6rem;
      margin-bottom: 10px;
    }

    &__type {
      font-size: 2.2rem;
      margin-bottom: 5px;
      padding: 5px 10px;
      background-color: teal;
      color: $white;
    }

    &__bonuses {
      margin: 10px 0;
      padding: 0 20px;
    }
  }
  .bonuses-list {
    list-style-type: disc;
    &__item {
      font-size: 1.6rem;
      margin: 5px 0;
      line-height: 1.2;
    }
  }

  .schedule {
  }
</style>
