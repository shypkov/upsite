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
  <valstring />
  <section class="faq-section">
    <div class="container">
      <div class="faq-list">
        <div class="faq-item">
          <div class="faq-item__title">What is "staking"?</div>
          <div class="faq-item__body">
            <p>
              "Staking" is like bank deposit, and you use digital assets to get rewards from
              network, like bank rewards you with fixed percent to your deposit. It's secure, fault
              resistant, and fair.
            </p>
            <p> How does it look like? </p>
            <p>
              You are the delegator and you delegate tokens you own to one of the validators who process transactions.
              You dont send assets to validator, you just delegate. The assets is always on your wallet when you delegate.
              Validators only make work(voting for right chain) in network and receive rewards like miners in BtC.
              When work of validator is done (end of the epoch) validator achieves rewards for himself and delegators as well.
            </p>
          </div>
        </div>
        <div class="faq-item">
          <div class="faq-item__title">What is a Stake Pool?</div>
          <div class="faq-item__body">
            <p>
              Stake pool is a digital space to earn rewards with other delegators. "Stake pools" gives easies
              way to stake trusted validators, and it's more easy than miner pools. Users deposit
              SOL or other assets, and can always check and claim rewards. Stakepools could be liquid and solid.
              Liquid stake pool allows you to use unlocked synthezied assets in equal quantity that you staked.
              Liquid pools has it's risks when you have to back all the synthezied actives before unstake.
              Cryptosapiens is a web3 provider which alows you easily select network with best validator and stake assets
            </p>
            <p>
              Read more at
              <a href="https://docs.solana.com/staking">https://docs.solana.com/staking</a>
            </p>
          </div>
        </div>
        <div class="faq-item">
          <div class="faq-item__title">What assets do you have here for a stake?</div>
          <div class="faq-item__body">
            <p>
            <ul>
            <li> Solana network </li>
            <li> Dock network </li>
            <li> NYM network </li>
            <li> Mina network </li>
            </ul>    
            </p>
          </div>
        </div>
        <div class="faq-item">
          <div class="faq-item__title">How to stake?</div>
          <div class="faq-item__body">
            <p>
            <ul>
            <li> Connect your wallet </li>
            <li> Enter the amount of SOL you want to stake </li>
            <li> Click STAKE NOW </li>
            <li> Confirm the transaction in your wallet </li>
            <li> Done, you've staked your SOL! </li>
            </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
   </section>
<!-- additional section  -->
    <section class="faq-special">
        <div class="container">
        <div class="faq-special__items">
        <a class="faq-special__item" href="https://www.orca.so" target="_blank">
        <div class="faq-special__desc">
        <div class="faq-special__title">DON'T HAVE SOLANA YET?</div>
        <div class="faq-special__text">
        <span class="">Exchange any cryptocurrency to SOL at DEX</span>
        </div></div>
        <div class="faq-special__icon">
        <img src="@/assets/img/dolphin-icon.svg" alt=""/></div></a>
        <a class="faq-special__item" href="https://www.okx.com" target="_blank">
        <div class="faq-special__desc">
        <div class="faq-special__title">YOU DON'T HAVE ANY CRYPTOCURRENCY?</div>
        <div class="faq-special__text">
        <span class="">Buy some at CEX, like OKX, MEXC and transfer it to your wallet</span>
        </div>
        </div>
        <div class="faq-special__icon">
        <img src="@/assets/img/compound-usd.svg" alt=""/>
        </div></a>
        <a class="faq-special__item" href="https://phantom.app/" target="_blank">
        <div class="faq-special__desc">
        <div class="faq-special__title">DON'T HAVE A SOLANA WALLET?</div>
        <div class="faq-special__text">
        <span class="">It's easy to use Phantom as an extension of Chrome </span>
        </div>
        </div>
        <div class="faq-special__icon">
        <img src="@/assets/img/phantomlogo.svg" alt=""/>
        </div>
        </a>
        </div>
        </div>
        </section>
</template>

<script type="ts">
import Valstring from '@/components/Valstring.vue'
          export default {
            components: {
              Valstring,
            }}
</script>