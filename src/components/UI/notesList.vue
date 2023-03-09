<template>
  <div class="notes__wrapper">
    <ul v-if="filteredNotes.length != 0" class="notes-list">
      <note-item
        v-for="(note, index) in filteredNotes"
        class="note-item"
        :note="note"
        :class="{ completed: note.completed }"
        :key="note.title"
      ></note-item>
    </ul>
    <div class="notes__warning" v-else>
      <p>Пожалуйста, сперва добавьте артефакт в отслеживаемые</p>
    </div>
  </div>
</template>

<script setup>
  import noteItem from "@/components/UI/noteItem.vue";

  const props = defineProps({
    filteredNotes: {
      type: Array,
    },
  });
</script>

<style lang="scss" scoped>
  .notes {
    width: 100%;
    &__wrapper {
    }

    &__warning {
    }
  }
  .notes-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
    grid-column-gap: 10px;
    grid-row-gap: 6px;
    align-items: center;
  }
  .note-item {
  }
</style>
