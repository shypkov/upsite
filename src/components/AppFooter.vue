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
  <q-footer :class="$style.footer">
    <div class="container">
      <div class="row q-col-gutter-lg">
        <div class="col justify-between d-flex column">
          <div class="text-caption">
            2022 Under Development.
            <br />
            Based on mfactory source
          </div>
        </div>
        <div class="col col-12 col-md-auto justify-between d-flex column">
          <div class="social"> Social </div>
          <div class="q-gutter-md">
            <a
              class="q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--round bg-white text-white q-btn--actionable q-focusable q-hoverable"
              tabindex="0"
              href="https://t.me/crypto_moneya"
              target="_blank"
              ><span class="q-focus-helper"></span>
              <span
                class="q-btn__content text-center col items-center q-anchor--skip justify-center row"
              >
                <svg viewBox="0 0 210 167.4" xmlns="http://www.w3.org/2000/svg" class="q-icon">
                  <path
                    d="m199.4 15.1-30.3 142.2c-2.2 10-8.1 12.5-16.6 7.8l-45.9-33.4-22.2 21.2c-2.5 2.5-4.4 4.4-9.4 4.4l3.4-46.9 85.3-76.9c3.8-3.4-.9-5-5.6-1.9l-105.5 66.4-45.4-14.1c-10-3.1-10-10 2.2-14.7l177.2-68.4c8.5-2.8 15.6 1.9 12.8 14.3z"
                    fill="#455A64"
                  /></svg></span
            ></a>
            <a
              class="q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--round bg-white text-white q-btn--actionable q-focusable q-hoverable"
              tabindex="0"
              href="https://twitter.com/crypto_maniyac"
              target="_blank"
              ><span class="q-focus-helper" tabindex="-1"></span
              ><span
                class="q-btn__content text-center col items-center q-anchor--skip justify-center row"
                ><svg class="q-icon" viewBox="0 0 21 17" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.667 1.93577C19.927 2.30007 19.1239 2.51908 18.3014 2.58093C19.1755 2.07976 19.8187 1.25641 20.0935 0.287027C19.2976 0.767834 18.4245 1.10737 17.5129 1.29061C16.3609 0.0682344 14.5808 -0.329631 13.0181 0.285997C11.4553 0.901626 10.4248 2.4067 10.4161 4.08631C10.4161 4.44473 10.4878 4.73147 10.4878 5.01821C7.17704 4.88223 4.08935 3.31222 2.029 0.717135C1.65586 1.37264 1.45832 2.11341 1.45552 2.86767C1.44199 4.25925 2.14637 5.55963 3.31932 6.30853C2.66784 6.28614 2.03019 6.11446 1.45552 5.80674V5.87843C1.45307 7.83299 2.83519 9.51557 4.75301 9.89276C4.40015 9.97565 4.04 10.0237 3.67775 10.0361C3.41287 10.0479 3.14762 10.0238 2.88921 9.96445C3.44347 11.6426 4.99338 12.7906 6.76018 12.8318C5.30555 13.9702 3.51754 14.5998 1.67058 14.6239C1.33445 14.6358 0.998021 14.6118 0.666992 14.5523C2.55155 15.7568 4.73868 16.403 6.97524 16.4161C14.5738 16.4161 18.6598 10.1078 18.6598 4.73147V4.22968C19.4226 3.55243 20.097 2.78172 20.667 1.93577Z"
                    fill="#455A64"
                  /></svg></span
            ></a>
            <a
              class="q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--round bg-white text-white q-btn--actionable q-focusable q-hoverable"
              tabindex="0"
              href="https://discord.gg/FbSwNUVt93"
              target="_blank"
              ><span class="q-focus-helper" tabindex="-1"></span
              ><span
                class="q-btn__content text-center col items-center q-anchor--skip justify-center row"
                ><svg
                  width="71"
                  height="55"
                  viewBox="0 0 71 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="q-icon"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                      fill="#455A64"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="71" height="55" fill="#455A64" />
                    </clipPath>
                  </defs></svg></span
            ></a>
          </div>
          <div :class="$style.nav" class="row text-caption footer-links">
            <a href="#" target="_blank">Documentation</a>
            <router-link to="/impressum">Legal Disclosure</router-link>
            <router-link to="/privacy">Privacy</router-link>
            <router-link to="/pool-info">Pool Info</router-link>
          </div>
        </div>

        <!--        <div class="col col-12 col-md-auto justify-between q-mt-auto d-flex column">
          <div :class="$style.nav" class="row text-caption footer-links">
            <a href="#" target="_blank">Documentation</a>
            <router-link to="/terms">Terms of Service</router-link>
            <router-link to="/impressum">Legal Disclosure</router-link>
            <router-link to="/privacy">Privacy</router-link>
            <router-link to="/pool-info">Pool Info</router-link>
          </div>
        </div>  -->
      </div>
    </div>
  </q-footer>
</template>

<style lang="scss" module>
  .footer {
    background-color: $gray !important;
    color: #fff !important;
    padding: 2rem 0 1rem;
    @media (max-width: $breakpoint-sm) {
      text-align: center;
    }

    a {
      color: #fff;
      text-decoration: none;
    }
  }

  .nav {
    justify-content: center;
    text-align: center;

    a {
      margin: 0 0.5em;
    }
  }
</style>
<style lang="scss" scope>
  .contact-title {
    text-align: right;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    padding-right: 93px;
    margin-top: -15px;
    margin-bottom: -10px;

    @media (max-width: $breakpoint-sm) {
      text-align: center;
      margin-bottom: 5px;
      padding-right: 0;
    }
  }

  .footer-links {
    @media (max-width: $breakpoint-sm) {
      margin-top: 10px;
    }
  }
</style>
