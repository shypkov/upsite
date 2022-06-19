<!--
  - This file is part of Solana Reference Stake Pool code.
  -
  - Copyright © 2021, mFactory GmbH
  -
  - Solana Reference Stake Pool is free software: you can redistribute it
  - and/or modify it under the terms of the GNU Affero General Public License
  - as published by the Free Software Foundation, either version 3
  - of the License, or (at your option) any later version.
  -
  - Solana Reference Stake Pool is distributed in the hope that it
  - will be useful, but WITHOUT ANY WARRANTY; without even the implied
  - warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
  - See the GNU Affero General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with this program.
  - If not, see <https://www.gnu.org/licenses/agpl-3.0.html>.
  -
  - You can be released from the requirements of the Affero GNU General Public License
  - by purchasing a commercial license. The purchase of such a license is
  - mandatory as soon as you develop commercial activities using the
  - Solana Reference Stake Pool code without disclosing the source code of
  - your own applications.
  -
  - The developer of this program can be contacted at <info@mfactory.ch>.
  -->

<template>
  <subheadernext />
  <!--  <section class="firstlook-section">
    <div class="container">
      <div class="firstlook__body">
        <div class="lt-sm flex">
          <div class="total-stacked-alter flex justify-center q-mx-auto">
            <stacked-and-liquidity />
          </div>
        </div>

      </div>
          </div>

  <div class="row justify-between relative-position">
    <div class="col col-12 col-md-4 q-pr-md firstlook__wallet" v-if="connected">
      <wallet-balance />
    </div>
    <div v-else class="firstlook__placeholder">
      <img alt="" class="firstlook__placeholder__icon" src="@/assets/img/sol-logo.svg" />
    </div>
      </div>

    
  <div class="col col-12 col-md-8 q-pl-md q-ml-auto">   </div> -->
  <section class="validators-and-stakes">
    <div class="bg-white">
      <div class="containernext">
        <div class="validators-and-stakes__title q-py-md">
          <div class="validators-and-stakes__title__text"> Select the trusted Validator </div>
          <div class="q-card q-my-md full-width validators-and-stakes__main">
            <div
              class="q-card__section q-card__section--vert validators-and-stakes__list__head validator-item row justify-between"
            >
              <div class="validator-item__name column q-mr-sm justify-start"> VALIDATOR </div>
              <div class="validator-item__apy column q-mr-sm q-pl-sm justify-start"> REWARDS </div>
              <div class="validator-item__address column q-mr-sm justify-start"> ADDRESS </div>
              <div class="validator-item__stake column q-mr-sm justify-start"> STAKED TOTAL </div>
              <div class="validator-item__btns column q-mr-sm justify-start"> CONNECTION </div>

              <div class="validators-and-stakes__list">
                <div class="relative-position">
                  <div
                    class="fit row wrap justify-start items-start content-start"
                    style="min-height: 100px"
                  >
                    <div class="stake-accounts-container col-12">
                      <div class="q-px-md q-pt-sm">
                        <div class="q-py-none">
                          <div class="validator-item row justify-start q-pb-md">
                            <div class="validator-item__logo column q-mr-md q-mt-sm justify-center">
                              <a
                                href="https://www.validators.app/validators/Ez4heEN9SzxrjgYA7wBWK8FwxAuYXnmwALADGfpB32E6?network=mainnet"
                                target="_blank"
                              >
                                <div class="q-avatar shadow-1" style="font-size: 60px">
                                  <div class="q-avatar__content row flex-center overflow-hidden">
                                    <div class="q-img q-img--menu" role="img">
                                      <!--                                      <div class="q-img__container absolute-full">-->
                                      <img
                                        class="q-img__image q-img__image--with-transition q-img__image--loaded"
                                        loading="lazy"
                                        fetchpriority="auto"
                                        aria-hidden="true"
                                        draggable="false"
                                        src="https://s3.amazonaws.com/keybase_processed_uploads/bdb14a64778732545b81974407e0f005_360_360.jpg"
                                        alt="psixoz"
                                      />
                                      <!--<div style="padding-bottom: 100%;"></div>
<img class="q-img__image q-img__image--with-transition q-img__image--loaded" loading="lazy" fetchpriority="auto" aria-hidden="true" draggable="false" src="https://keybase.io/cogent_crypto/picture" style="object-fit: cover; object-position: 50% 50%;">
-->
                                      <!-- </div>-->
                                      <!--<div class="q-img__content absolute-full q-anchor--skip"></div>-->
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div class="validator-item__name column q-mr-sm q-mt-sm justify-start">
                              <div class="q-mt-xs"
                                >Psixoz
                                <!----></div
                              >
                              <div class="validator-item__name__details q-mt-xs"
                                >The Bright Brotherhood of Blockchains
                                <!----></div
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import { computed } from 'vue';
  import { useWalletStore } from '@/store';
  //  import StakeBox from '@/components/Stake/StakeBox.vue';
  import WalletBalance from '@/components/WalletBalance.vue';
  import subheadernext from '@/components/Subheadernext.vue';
  //  import StackedAndLiquidity from '@/components/StackedAndLiquidity.vue';
  import Epoch from '@/components/Epoch.vue';

  export default {
    components: {
      WalletBalance,
      Epoch,
      subheadernext,
      //      StakeBox,
      //      StackedAndLiquidity,
    },
    setup() {
      const wallet = useWalletStore();

      return {
        connected: computed(() => wallet.connected),
      };
    },
  };
</script>
