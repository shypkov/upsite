<template>
  <q-select
    class="app-header__network"
    label="Switch Network"
    :options="networks"
    v-model="model"
    color="black"
    text-color="black"
    rounded
    outlined
    emit-value
  />
</template>

<script lang="ts">
  //  import { NETWORKS } from '@/config';
  import { ref, watch } from 'vue';

  export default {
    setup() {
      return {
        model: ref(null),
        networks: ['Solana', 'Dock', 'NYM'],
      };
    },

    watch() {
      console.log(networks);
    },
  };
</script>
