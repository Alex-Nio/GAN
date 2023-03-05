<template>
  <div id="extra-container">
    <ul class="extra-checkboxes-list">
      <li
        v-for="dopStat in dopStats.filter((item) => item.value !== modelValue)"
        :class="{
          'extra-checkboxes-list__item': true,
          disabled: blocked && !dopStat.checked,
        }"
      >
        <input
          type="checkbox"
          :id="dopStat.value"
          :value="dopStat.value"
          :disabled="blocked && !dopStat.checked"
          @change="checkboxToggle(dopStat)"
          v-model="dopStat.checked"
        /><label :for="dopStat.value">{{ dopStat.value }}</label>
      </li>
    </ul>
  </div>
</template>
<script setup>
  import data from "@/data/data";
  import { ref, watch, onMounted } from "vue";

  const props = defineProps({
    modelValue: String,
    currentArtifact: String,
  });
  const emit = defineEmits(["currentDopStatsSelected"]);

  const dopStats = ref(data.dopStats);
  const blocked = ref(false);

  let currentDopStats = [];

  const checkboxToggle = (dopStat) => {
    currentDopStats.push(dopStat);

    if (dopStats.value.filter((item) => item.checked).length === 4) {
      blocked.value = true;
    } else {
      blocked.value = false;
    }

    if (currentDopStats.length === 4) {
      emit("currentDopStatsSelected", currentDopStats);
      currentDopStats = [];
    }
  };

  // reset all checkboxes to their default values
  watch(
    () => [props.modelValue, props.currentArtifact],
    () => {
      if (props.modelValue === "Выберите верхний стат") {
        blocked.value = true;
      } else {
        blocked.value = false;
      }

      dopStats.value.forEach((value) => {
        value.checked = false;
      });
    }
  );

  onMounted(() => {
    dopStats.value.forEach((value) => {
      value.checked = false;
    });
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/imports.scss";
  $valueColor: #000;
  $checkbox-background: rgba(255, 255, 255, 0.9);
  $checkbox-border: 2px solid rgba(139, 139, 139, 0.3);

  $checkbox-checked-background: rgba(60, 46, 155, 0.64);
  $checkbox-checked-border: 2px solid rgba(60, 46, 155, 0.64);

  #extra-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .extra-checkboxes-list {
    list-style: none;
  }
  .extra-checkboxes-list li {
    display: inline-flex;
    margin: 0 5px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  .extra-checkboxes-list li label {
    display: inline-block;
    background-color: $checkbox-background;
    border: $checkbox-border;
    color: $primary;
    border-radius: 25px;
    white-space: nowrap;
    margin: 3px 0px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition: all 0.2s;
  }

  .extra-checkboxes-list li label {
    display: flex;
    align-items: center;
    padding: 8px 22px 8px 12px;
    cursor: pointer;
  }

  .extra-checkboxes-list li label::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    padding: 2px 6px 2px 2px;
    content: "";
    width: 24px;
    height: 24px;
    background: url("@/assets/img/icons/checkbox-arrow.svg") no-repeat center / 24px 24px;
    transition: transform 0.3s ease-in-out;
  }

  .extra-checkboxes-list li input[type="checkbox"]:checked + label::before {
    content: "";
    width: 24px;
    height: 24px;
    background: url("@/assets/img/icons/close-icon.png") no-repeat center / 24px 24px;
    transform: rotate(-360deg);
    transition: transform 0.3s ease-in-out;
  }

  .extra-checkboxes-list li input[type="checkbox"]:checked + label {
    border: $checkbox-checked-border;
    background-color: $checkbox-checked-background;
    color: #fff;
    transition: all 0.2s;
  }

  .extra-checkboxes-list li input[type="checkbox"] {
    display: absolute;
  }
  .extra-checkboxes-list li input[type="checkbox"] {
    position: absolute;
    opacity: 0;
  }
  // .extra-checkboxes-list li input[type="checkbox"]:focus + label {
  //   border: 2px solid #000;
  // }

  .extra-checkboxes-list li input[type="checkbox"]:disabled + label {
    background-color: rgba(113, 112, 112, 0.464);
  }
</style>
