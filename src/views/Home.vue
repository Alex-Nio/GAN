<template>
  <div class="content-wrapper">
    <section>
      <div class="container">
        <div class="control-panel">
          <div class="control-panel__inner">
            <div class="control-panel__content-top">
              <div class="kit-selection">
                <h1 class="kit-selection__title">{{ mainTitle }}</h1>
                <selection-list
                  :mainClass="'selection-list'"
                  :items="data.kits"
                  :activeClass="'selection-item current'"
                  :passiveClass="'selection-item'"
                  @handleKitSelection="handleKitSelection"
                ></selection-list>
              </div>
              <div class="type-selection">
                <h3 class="type-selection__title">
                  {{ data.artifactTypes[currentTypeIndex]["type"] }}
                </h3>
                <selection-list
                  :mainClass="'types-list'"
                  :items="currentKit.images"
                  :activeClass="'selection-item current'"
                  :passiveClass="'selection-item'"
                  @handleTypeSelection="handleTypeSelection"
                ></selection-list>
              </div>
            </div>
            <div class="control-panel__content-bottom">
              <div class="control-panel__column">
                <div class="general-selection">
                  <h3 class="general-selection__title">
                    {{ selectTitle }}
                  </h3>
                  <div class="general-selection__wrapper">
                    <general-selection
                      v-model="currentArtifact"
                      :mainTitle="mainTitle"
                      @generalSelectionDone="generalSelectionDone"
                    ></general-selection>
                  </div>
                </div>
              </div>
              <div class="control-panel__column">
                <div class="types-selection">
                  <h3 class="types-selection__title">Выберите доп статы</h3>
                  <div class="types-selection__wrapper">
                    <extra-selection
                      v-model="selectedMainStat"
                      :currentArtifact="currentArtifact"
                      :kitSwitched="kitSwitched"
                      @currentDopStatsSelected="currentDopStatsSelected"
                    ></extra-selection>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <custom-popup v-model:show="popupVisible">
      <!-- Popup Error content -->
      <popup-error v-if="popupContentError" :error="error"></popup-error>

      <!-- Popup Default content -->
      <popup-default
        v-else
        @handleCompleteAction="handleCompleteAction"
        @handlePageChange="handlePageChange"
      ></popup-default>
    </custom-popup>
  </div>
</template>

<script setup>
  // imports
  import { ref, onMounted } from "vue";
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";
  import data from "@/data/data";
  import selectionList from "@/components/UI/selectionList.vue";
  import generalSelection from "@/components/controlPanel/generalSelection.vue";
  import extraSelection from "@/components/controlPanel/extraSelection.vue";
  import createBtn from "@/components/UI/createBtn.vue";
  import customPopup from "@/components/UI/popup/customPopup.vue";
  import popupError from "@/components/UI/popup/popupError.vue";
  import popupDefault from "@/components/UI/popup/popupDefault.vue";

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
  const kitSwitched = ref(false);

  // Kit selection on done
  const handleKitSelection = (item) => {
    mainTitle.value = item.name;
    currentKit.value = item;
    currentArtifactImage = currentKit.value["images"][currentTypeIndex.value];

    // reset
    resetCheckboxes();
  };

  const resetCheckboxes = () => {
    // reset current dop stats array
    currentDopStats = [];
    kitSwitched.value = !kitSwitched.value;
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

    // reset
    currentDopStats = [];
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
  const error = "Вы не выбрали дополнительные статы (Минимум 4 шт.)";

  // Change page on artifact created
  const handlePageChange = () => {
    router.push("/kits");
  };

  // Handle complete add artifacts by user
  const handleCompleteAction = () => {
    popupVisible.value = false;
    selectionDone.value = true;

    // reset
    resetCheckboxes();
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
    // console.log(Object.values(currentDopStats).map((item) => item.value));

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
    store.dispatch("addNote", note);
  };

  // set defaults
  onMounted(() => {
    const currentArtifact = "Цветок";
    currentArtifactImage = currentKit.value["images"][0];
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/imports.scss";

  .content-wrapper {
    position: relative;
  }
  .control-panel {
    &__column {
      &:last-child {
        margin-left: 93px;
      }
    }

    &__content-top {
      @include fdrjsb_aic;
      margin-top: 70px;
      margin-bottom: 27px;
    }

    &__content-bottom {
      @include fdrjs_ais;
      margin-bottom: 35px;
    }
  }

  .kit-selection {
    @include fdc;
    &__title {
      font-family: $ff_Mont;
      font-weight: $sb;
      font-size: 3.6rem;
      margin-bottom: 25px;
    }
  }
  .type-selection {
    @include fdcjc_aic;

    &__title {
      font-family: $ff_Mont;
      font-weight: $sb;
      font-size: 2.4rem;
      margin-bottom: 20px;
    }
  }
  .general-selection {
    &__title {
      font-family: $ff_Mont;
      font-size: 2.4rem;
      margin-bottom: 27px;
    }

    &__wrapper {
      border-radius: 12px;
      padding: 21px 17px 56px 19px;
      background: rgba(138, 255, 230, 0.2);
    }
  }

  .types-selection {
    max-width: 625px;

    &__title {
      font-family: $ff_Mont;
      font-weight: $sb;
      font-size: 2.4rem;
      margin-bottom: 27px;
    }

    &__wrapper {
      border-radius: 12px;
      padding: 21px 17px 28px 19px;
      background: rgba(138, 255, 230, 0.2);
    }
  }
</style>
