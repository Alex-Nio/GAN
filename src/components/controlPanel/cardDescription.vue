<template>
  <div class="card-description">
    <div class="card-description__top">
      <p>Картинка данжа</p>
      <p>Описание данжа</p>
    </div>
    <div class="card-description__center">
      <p>Тип артефакта: {{ data.artifactTypes[currentTypeIndex]["type"] }}</p>
      <p>Название комплекта: {{ mainTitle }}</p>
      <p>Бонусы сета</p>
    </div>
    <div class="card-description__bottom">
      <p>В какие дни по расписанию</p>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    currentKit: {
      type: Object,
    },
  });
</script>

<style lang="scss" scoped></style>
