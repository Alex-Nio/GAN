<template>
  <section>
    <div class="container">
      <div class="control-panel">
        <div class="control-panel__inner">
          <div class="control-panel__content">
            <div class="card">
              <div class="card__wrapper">
                <div class="card__content">
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
            <div class="card">
              <div class="card__wrapper">
                <div class="card__content">
                  <card-description :currentKit="currentKit"></card-description>
                  <selection-list
                    :mainClass="'types-list'"
                    :items="currentKit.images"
                    :activeClass="'selection-item current'"
                    :passiveClass="'selection-item'"
                    @handleTypeSelection="handleTypeSelection"
                  ></selection-list>
                  {{ selectTitle }}
                  <general-selection
                    v-model="currentArtifact"
                    :mainTitle="mainTitle"
                    @generalSelectionDone="generalSelectionDone"
                  ></general-selection>

                  <create-btn @createNote="createNote"></create-btn>
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
</template>

<script setup>
  // imports
  import { ref, onMounted } from "vue";
  import { useStore } from "vuex";
  import { useRouter } from "vue-router";
  import data from "@/data/data";
  import selectionList from "@/components/UI/selectionList.vue";
  import cardDescription from "@/components/controlPanel/cardDescription.vue";
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

  .control-panel {
    height: 100%;
    min-height: 100vh;
    &__inner {
    }

    &__content {
      @include fdrjsa_ais;
    }
  }
  .card {
    &__wrapper {
    }

    &__content {
    }
  }
  .card-description {
    &__top {
    }

    &__center {
    }

    &__bottom {
    }
  }
</style>
