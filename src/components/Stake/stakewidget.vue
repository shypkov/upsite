<template>
  <div class="validator-item__stakebtn">
    <q-btn
      label="STAKE"
      class="bg-third text-primary-gray"
      outline
      rounded
      @click="show = true"
      v-if="connected"
    >
      <q-dialog v-model="show">
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <iframe
              id="staking-kiwi-widget-0"
              scrolling="no"
              frameborder="0"
              allowtransparency="true"
              allowfullscreen="true"
              class=""
              style="position: static; visibility: visible; width: 472px; height: 302px"
              title="Staking Kiwi widget"
              src="https://widget.staking.kiwi/?validator=Ez4heEN9SzxrjgYA7wBWK8FwxAuYXnmwALADGfpB32E6&theme=light"
            ></iframe>
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-btn>
  </div>
</template>

<script src="https://widget.staking.kiwi/js/widget.min.js"></script>
