<template>
  <section>
    <div class="subheadernext-styled gt-sm">
      <div class="container row justify-end items-center full-height relative-position">
        <div class="q-mr-xl">
          <button
            class="q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle q-btn--rounded bg-third text-primary-gray q-btn--actionable q-focusable q-hoverable"
            tabindex="0"
            type="button"
            style="padding: 2px 30px; min-width: 0px; min-height: 0px; margin-right: 500px"
          >
            <span
              class="q-btn__content text-center col items-center q-anchor--skip justify-center row"
            >
              Refresh list
            </span>
          </button>
        </div>
        <div class="q-mr-xl">Validators</div>
      </div>
    </div>
    <div class="subheader-epoch">
      <epoch />
    </div>
  </section>
</template>

<script type="ts">
  import Epoch from '@/components/Epoch.vue';
          export default {
            components: {
              Epoch,
            }}
</script>
