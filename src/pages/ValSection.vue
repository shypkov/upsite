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
              <div class="validator-item__apy column q-mr-sm justify-start"> REWARDS </div>
              <div class="validator-item__address column q-mr-sm justify-start"> ADDRESS </div>
              <div class="validator-item__stake column q-mr-sm justify-start"> STAKED TOTAL </div>
              <div class="validator-item__btns column q-mr-sm justify-start"> CONNECTION </div>

              <div class="validators-and-stakes__list">
                <div
                  class="fit row wrap justify-start items-start content-start"
                  style="min-height: 100px"
                >
                  <div class="stake-accounts-container">
                    <div class="q-px-md q-pt-sm">
                      <div class="validator-item row justify-start q-pb-md">
                        <!-- validator image -->
                        <div class="validator-item__logo column q-mr-md q-mt-sm justify-start">
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
                        <!-- Validator title -->

                        <div
                          class="validator-item__name__details column q-mr-md q-mt-sm justify-start"
                        >
                          <div class="q-mt-xs"
                            >Psixoz
                            <!----></div
                          >
                          <div class="validator-item__name_details q-mt-xs"
                            >The Bright Brotherhood of Blockchains
                            <!----></div
                          >
                        </div>
                        <!-- APY Section -->
                        <div class="validator-item__apy column q-mr-sm q-mt-sm justify-start">
                          <div class="validator-item__apy__fee q-mt-xs"> Fee: <b>10.00%</b></div>
                          <div class="validator-item__apy__val q-mt-xs">
                            APY: <b>4.21%</b></div
                          ></div
                        >
                        <!-- adress section -->
                        <div
                          class="validator-item__address column q-mr-sm q-mt-sm items-center justify-start"
                        >
                          <div>
                            <span class="validator-item__address__text q-mr-xs"
                              >Ez4heEN...fpB32E6</span
                            >
                            <button
                              class="q-btn q-btn-item non-selectable no-outline q-btn--flat q-btn--round q-btn--actionable q-focusable q-hoverable q-btn--dense"
                              tabindex="0"
                              type="button"
                            >
                              <span
                                class="q-btn__content text-center col items-center q-anchor--skip justify-center row"
                              >
                                <svg
                                  fill="none"
                                  height="20"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  width="20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                  />
                                </svg> </span></button
                          ></div>
                          <a
                            class="q-btn q-btn-item non-selectable no-outline q-btn--outline q-btn--rectangle q-btn--rounded text-primary-gray q-btn--actionable q-focusable q-hoverable q-mt-xs validator-item__address__link"
                            tabindex="0"
                            href="https://www.validators.app/validators/mainnet/Ez4heEN9SzxrjgYA7wBWK8FwxAuYXnmwALADGfpB32E6"
                            target="_blank"
                            style="
                              font-size: 12px;
                              padding: 0px 12px;
                              min-width: 0px;
                              min-height: 0px;
                            "
                            ><span class="q-focus-helper" tabindex="-1"></span
                            ><span
                              class="q-btn__content text-center col items-center q-anchor--skip justify-center row"
                              ><span class="q-icon on-left" aria-hidden="true" role="img"
                                ><img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAABaCAMAAACMsogLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAITgAACE4AUWWMWAAAALxUExURUdwTJ41pAOue7oxygDQmt0A/wD/fwAAAABtVoIAgrkxyb0yzR1JXP/o/wCfbV2rgLsxywCXawDOmADQmr0xznknjgDTncAz0LUxxbAuwMEz0n4hiXoghroyy5soqQCWaQDWngC3hQDWnqYsta8swIAhjADSnLQxxgDSmwCwfQCOYcMz1ADBjQCOY30giXAcfoAii8Iz0wDUnb8y0ADUncIz0roxygCEWrEuwbQvxooklnMhgACOYr8z0L8z0HoghgDQmKstuwDQmwC1gXwgiJYno78y0L8y0ACNYbgwyX0giH0giAO8h7gvyboxzACKYACKXbsxy3cfhXQigQCygcMz074yzogilQCSZQCaawCqeQCIXa4uvb8z0MQ01qUrs30giIYiksU01wDFkgC0ggDAjQDFkADSmwDUnQDKk8Mz0wDGkQDKlXcfhACPYwCRZL8z0gDFkH4hiQC4hgC9inwfh7wxzACLX8U01o0lmsY018Y018U11wDWnwDHkwDOmADHkwDWngDQmwDGkACkdACNYQCQYwC7hwB4UnAce8Iz0gCPYgCJXwChcgCNYMM01YAgiMIz1LgwyX0giKEqr5MmoX0hicMz1JImngDTnQDXn7wwygDGkQDSmwDSm70yzQDLlgCdbgCSZgCJXwCLXgCOYgCNYXoghgCdbwCOYgCHXMIz0qUrs38hi3gZh3wgh3wgiH0ghwDPmgDXnwCldr8z0ADRnACcawDPmbswy8Ez0pYoogCYawDPmgDMlpImngCMYACNYQCPYgB3UQCYZwCQZACQZACFXACLXwBzUIkkloEhi4EijJUooQDOmACkdQDPmogkkwDMlgCpeJcopwCygADKlwCdb6MssQDIlKIprnoghaYsswB+WQC1gpImnwC+ibUxxQDIkwCodwB1UIommAB1UAB8VqYstH8ESQAEmgD//wBJ/7oxmADOmboyyrkxyQDNmADRm7wyzADPmrgxyLUwxADHkgDKlaotuQDMl6tRPXcAAADpdFJOUwADA/7+AQEBAgL+/QMBBwL9Cv39/gf++xQK7PpNIf7+9hz+6hD++hr9DQ/a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"
                                /> </span
                              ><span class="block">Validator Info</span></span
                            >
                          </a></div
                        >
                        <!-- staked quantity -->
                        <div class="validator-item__stake q-mr-sm q-mt-sm justify-center">
                          <div class="validator-item__stake__sol q-mb-sm">
                            <span>STAKED:</span> <b>0&nbsp;SOL</b>
                          </div>
                        </div>
                        <!-- connect button -->
                        <div class="validator-item__btns q-mt-sm justify-center">
                          <!----><!--
                          <button
                            class="q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle q-btn--rounded bg-primary-gray text-white q-btn--actionable q-focusable q-hoverable"
                            tabindex="0"
                            type="button"
                            ><span
                              class="q-btn__content text-center col items-center q-anchor--skip justify-center row"
                            >
                              CONNECT WALLET
                            </span></button
                          >-->
                          <connect-wallet />
                        </div>
                        <!--end of 1st iteration-->
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
  import Apy from '@/components/Apy.vue';
  import ConnectWallet from '@/components/ConnectWallet.vue';

  export default {
    components: {
      WalletBalance,
      Epoch,
      subheadernext,
      Apy,
      ConnectWallet,
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
