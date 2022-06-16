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
  <q-header :class="!$q.dark.isActive ? 'bg-white text-dark' : null" class="app-header">
    <div class="container">
      <q-toolbar>
        <router-link class="app-header__logo" to="/">
          <app-logo />
        </router-link>
        <div class="xs-hide">
          <!--          <stacked-and-liquidity />-->
          <siteversion />
        </div>
        <q-space />
        <div class="app-header__epoch">
          <!--          <epoch /> -->
        </div>
        <q-space />
        <div class="text-right">
          <div class="app-header__links">
            <router-link
              class="q-btn q-btn-item non-selectable no-outline q-btn--outline q-btn--rectangle q-btn--rounded q-btn--actionable q-focusable q-hoverable q-mb-sm app-header__links-btn"
              to="/FaqSection"
              exact
            >
              FAQ
            </router-link>
            <!--            <a
              class="q-btn q-btn-item non-selectable no-outline q-btn--outline q-btn--rectangle q-btn--rounded q-btn--actionable q-focusable q-hoverable q-mb-sm app-header__links-btn"
              tabindex="0"
              href="/FaqSection"
            >
              <span class="q-focus-helper" tabindex="-1"> </span>
              <span
                class="q-btn__content text-center col items-center q-anchor--skip justify-center row"
              >
                FAQ
              </span>
            </a>
            <a
              class="q-btn q-btn-item non-selectable no-outline q-btn--outline q-btn--rectangle q-btn--rounded q-btn--actionable q-focusable q-hoverable q-mb-sm q-ml-sm app-header__links-btn"
              tabindex="0"
              href="/validators"
            >
              <span class="q-focus-helper" tabindex="-1"></span>
              <span
                class="q-btn__content text-center col items-center q-anchor--skip justify-center row"
              >
                Validators
              </span>
            </a>
            -->
          </div>
          <div class="q-gutter-sm justify-end flex wrap">
            <cluster-selector />
            <connect-wallet />
          </div>
        </div>
      </q-toolbar>
    </div>
  </q-header>
</template>

<script lang="ts">
  import AppLogo from '@/components/AppLogo.vue';
  import ClusterSelector from '@/components/ClusterSelector.vue';
  //  import StackedAndLiquidity from '@/components/StackedAndLiquidity.vue';
  import ConnectWallet from '@/components/ConnectWallet.vue';
  import siteversion from '@/components/Siteversion.vue';
  //import Epoch from '@/components/Epoch.vue';
  import FaqSection from '@/pages/FaqSection.vue';

  export default {
    components: {
      //      Epoch,
      FaqSection,
      siteversion,
      AppLogo,
      ClusterSelector,
      //      StackedAndLiquidity,
      ConnectWallet,
    },
  };
</script>
