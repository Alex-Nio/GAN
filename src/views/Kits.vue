<template>
  <section>
    <div class="container">
      <div class="kits">
        <kits-list :kits="kits" @pageChange="pageChange"></kits-list>
      </div>
    </div>
    <div v-if="kits.length == 0" class="notes__warning">
      <p>Пожалуйста, сперва добавьте артефакт в отслеживаемые</p>
    </div>
  </section>
</template>

<script setup>
  // imports
  import { ref, computed } from "vue";
  import { useStore } from "vuex";
  import data from "@/data/data";
  import kitsList from "@/components/UI/kitsList.vue";
  import { useRouter } from "vue-router";

  const store = useStore();
  const router = useRouter();

  const pageChange = (kit) => {
    router.push({ name: "notes", params: { title: kit.title } });
  };

  // Set Kits
  const kits = computed(() => {
    const notes = store.getters.getNotes;
    const result = Object.values(
      notes.reduce((acc, { id, title, type }) => {
        if (acc[title]) {
          acc[title].count++;
        } else {
          acc[title] = { id, title, types: [], count: 1 };
        }

        if (!acc[title].types.includes(type)) {
          acc[title].types.push(type);
        }

        return acc;
      }, {})
    );

    // get kits data
    const kitsData = data.kits;
    const artifactTypes = data.artifactTypes;

    // Add images to kits arr with kitItem object
    kitsData.forEach((kit) => {
      result.forEach((kitItem) => {
        if (kit.name === kitItem.title) {
          kit.images = kit.images.map((i) => {
            let values = Object.values(i);
            return values;
          });
          kitItem.images = [...(kitItem.images || []), ...kit.images];
        }
      });
    });

    // return computed items
    return result;
  });
</script>

<style lang="scss">
  @import "@/assets/scss/imports.scss";

  .notes {
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

  .kits {
    width: 100%;
  }
</style>
