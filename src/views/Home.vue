<template>
  <div class="content-wrapper">
    <section>
      <div class="container">
        <div class="control-panel">
          <div class="control-panel__inner">
            <h1 class="control-panel__title">{{ mainTitle }}</h1>
            <div class="control-panel__row">
              <div class="kit-selection">
                <div class="kit-selection__row">
                  <selection-list
                    :mainClass="'selection-list'"
                    :items="data.kits"
                    :activeClass="'selection-item current'"
                    :passiveClass="'selection-item'"
                    @handleKitSelection="handleKitSelection"
                  ></selection-list>
                </div>
              </div>
            </div>

            <div class="control-panel__row control-panel__row--around">
              <h3 class="control-panel__title">
                {{ data.artifactTypes[currentTypeIndex]["type"] }}
              </h3>
              <h3 class="control-panel__title">
                {{ selectTitle }}
              </h3>
            </div>

            <div class="control-panel__row">
              <div class="control-panel__column">
                <div class="artifact-types">
                  <div class="artifact-types__inner">
                    <selection-list
                      :mainClass="'types-list'"
                      :items="currentKit.images"
                      :activeClass="'selection-item current'"
                      :passiveClass="'selection-item'"
                      @handleTypeSelection="handleTypeSelection"
                    ></selection-list>
                  </div>
                </div>
              </div>
              <div class="control-panel__column">
                <general-selection
                  v-model="currentArtifact"
                  :mainTitle="mainTitle"
                  @generalSelectionDone="generalSelectionDone"
                ></general-selection>
              </div>
            </div>
            <div class="control-panel__row">
              <h3 class="control-panel__title">Выберите доп статы</h3>
            </div>
            <div class="control-panel__row">
              <div class="control-panel__column">
                <extra-selection
                  v-model="selectedMainStat"
                  :currentArtifact="currentArtifact"
                  @currentDopStatsSelected="currentDopStatsSelected"
                ></extra-selection>
              </div>
              <div class="control-panel__action">
                <create-btn @createNote="createNote"></create-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- TODO: Разобрать содержимое по компонентам -->
    <custom-popup v-model:show="popupVisible">
      <!-- Popup Error content -->
      <div v-if="popupContentError" class="popup-content__items">
        <h3 class="popup-content__title">Ошибка!</h3>
        <p class="popup-content__text">Вы не выбрали доп. статы</p>
      </div>
      <!-- Popup Default content -->
      <div v-else class="popup-content__items">
        <h3 class="popup-content__title">Добавлено!</h3>
        <h3 class="popup-content__text">Перейти к артефактам?</h3>
        <div class="popup-controls">
          <button
            @click="handlePageChange"
            class="popup-control-btn popup-control-btn--green"
          >
            Да
          </button>
          <button
            @click="handleComplete"
            class="popup-control-btn popup-control-btn--red"
          >
            Нет
          </button>
        </div>
      </div>
    </custom-popup>
  </div>
</template>

<script setup>
  // imports
  import { ref, onMounted } from "vue";
  import { useStore } from "vuex";
  import { useRoute, useRouter } from "vue-router";
  import data from "@/data/data";
  import selectionList from "@/components/UI/selectionList.vue";
  import generalSelection from "@/components/controlPanel/generalSelection.vue";
  import extraSelection from "@/components/controlPanel/extraSelection.vue";
  import createBtn from "@/components/UI/createBtn.vue";
  import customPopup from "@/components/UI/customPopup.vue";

  // settings
  const emit = defineEmits([
    "handleKitSelection",
    "handleTypeSelection",
    "currentDopStatsSelected",
  ]); // emits
  const store = useStore(); // store
  const router = useRouter(); // router

  //? defaults
  const mainTitle = ref("Цветок потерянного рая"); // set default title
  const currentTypeIndex = ref(0); // index of current artefact type
  const selectTitle = "Верхний стат"; // main stat selection title
  const selectedMainStat = ref("HP"); // default main stat
  let currentArtifact = "Цветок"; // default artifact type
  const currentKit = ref({
    name: "Цветок потерянного рая",
    images: [
      { blossom: "/Цветок потерянного рая/blossom.png" },
      { feather: "/Цветок потерянного рая/feather.png" },
      { watch: "/Цветок потерянного рая/watch.png" },
      { goblet: "/Цветок потерянного рая/goblet.png" },
      { hat: "/Цветок потерянного рая/hat.png" },
    ],
  }); // default kit images

  //? mutable properties
  let currentArtifactImage;
  let currentDopStats = [];

  // Kit selection on done
  const handleKitSelection = (item) => {
    mainTitle.value = item.name;
    currentKit.value = item;
    // reset current dop stats array
    currentDopStats = [];
  };

  // Type selection on done
  const handleTypeSelection = (index) => {
    currentTypeIndex.value = index;
    currentArtifact = data.artifactTypes[currentTypeIndex.value]["type"];
    currentArtifactImage = currentKit.value["images"][index];

    if (currentArtifact == "Цветок") {
      selectedMainStat.value = "HP";
    } else if (currentArtifact == "Перо") {
      selectedMainStat.value = "Сила атаки";
    } else {
      selectedMainStat.value = "Выберите верхний стат";
    }

    // reset current dop stats array
    reset();
  };

  // Top stat selection on done
  const generalSelectionDone = (value) => {
    selectedMainStat.value = value;
  };

  // Emit for note creation.
  // Creates new array of selected dop stats.
  const currentDopStatsSelected = (items) => {
    currentDopStats = items;
  };

  //? Popup properties
  const popupContentError = ref(false); // контент попапа
  const popupVisible = ref(false);
  const selectionDone = ref(false);

  // Change page on artifact created
  const handlePageChange = () => {
    console.log("Changing page...");
    router.push("/artifacts");
  };

  // Handle complete add artifacts by user
  const handleComplete = () => {
    popupVisible.value = false;
    selectionDone.value = true;
    reset();
  };

  const reset = () => {
    const currentArtifact = "Цветок";
    currentDopStats = [];

    let checkboxes = document.querySelectorAll("input");
    if (selectedMainStat.value !== "Выберите верхний стат") {
      checkboxes.forEach((item) => {
        item.checked = false;
      });
    }

    if (selectedMainStat.value !== "Выберите верхний стат" && selectionDone.value) {
      checkboxes.forEach((item) => {
        item.checked = false;
        item.disabled = false;
      });
    }
  };

  // Note Creation
  const createNote = () => {
    //! Logger
    //* Картинка артефакта
    // console.log(Object.values(currentArtifactImage)[0]);
    //* Название набора
    // console.log(mainTitle.value);
    //* Тип артефакта
    // console.log(currentArtifact);
    //* Верхний стат
    // console.log(selectedMainStat.value);
    //* Доп статы
    // console.log(Object.values(currentDopStats)[0]);

    const note = {
      image: Object.values(currentArtifactImage)[0],
      title: mainTitle.value,
      type: currentArtifact,
      main: selectedMainStat.value,
      extra: Object.values(currentDopStats).map((item) => item.value),
      completed: false,
    };

    // note creation validation. Shows error || create popup
    if (note.extra.length === 0) {
      popupContentError.value = true;
      popupVisible.value = true;
    } else {
      addNote(note);
      popupContentError.value = false;
      popupVisible.value = true;
      selectionDone.value = true;
    }
  };

  // Creates a new note
  const addNote = (note) => {
    console.log(note);
    store.dispatch("addNote", note);
  };

  onMounted(() => {
    currentArtifactImage = currentKit.value["images"][0];
    reset();
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/imports.scss";

  .content-wrapper {
    position: relative;
  }
  .control-panel {
    background: rgb(179, 179, 191);
    background: linear-gradient(
      90deg,
      rgba(20, 20, 56, 0.25) 0%,
      rgba(0, 0, 0, 0.15) 50%,
      rgba(20, 20, 56, 0.25) 100%
    );
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    &__inner {
      padding: 20px 40px 40px 40px;
    }

    &__row {
      @include fdrjs_aic;
      width: 100%;

      &--around {
        @include fdrjsa_aic;
      }
    }

    &__column {
      @include fdcjc_aic;
      width: 100%;
      padding: 0 10px;
    }

    &__title {
      width: 100%;
      font-size: 2.8rem;
      margin: 20px 0;
      color: $white;
      padding: 0 40px;
      text-align: center;
    }

    &__action {
      @include fdrjc_aic;
      width: 100%;
      max-width: 110px;
    }
  }

  .kit-selection {
    width: 100%;
  }

  .artifact-types {
    &__row {
      @include fdrjs_aic;
      margin: 20px 0;
    }

    &__inner {
      @include fdcjc_ais;
      padding: 0 40px;
    }

    &__title {
      font-size: 3.8rem;
      margin: 40px 0 20px 0;
    }

    &__name {
      text-align: center;
      margin-bottom: 20px;
    }
  }

  .popup-content {
    &__items {
      width: 100%;
    }

    &__title {
      font-family: $ff_R;
      font-size: 3rem;
      color: $primary;
      margin-bottom: 20px;
    }

    &__text {
      font-family: $ff_R;
      font-size: 2.2rem;
      color: $primary;
    }
  }

  .popup-controls {
    @include fdrjc_aic;
    border-radius: 15px;
    width: 100%;
    padding: 20px;
  }
  .popup-control-btn {
    display: inline-flex;
    justify-content: center;
    width: 100%;
    max-width: 120px;
    padding: 15px 35px;
    margin: 0 10px;
    border-radius: 10px;
    font-family: $ff_R;
    font-size: 1.6rem;
    color: $white;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);

    transition: all 0.3s linear;

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }

    &:hover {
      transform: scale(1.05);
      transition: all 0.3s linear;
    }

    &:active {
      color: $white;
      background-color: rgba(43, 189, 246, 0.746);
      transition: all 0.1s linear;
    }
  }
  .popup-control-btn--green {
    background-color: green;
  }
  .popup-control-btn--red {
    background-color: red;
  }
</style>
