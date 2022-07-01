/*
 * This file is part of Solana Reference Stake Pool code.
 *
 * Copyright © 2021, mFactory GmbH
 *
 * Solana Reference Stake Pool is free software: you can redistribute it
 * and/or modify it under the terms of the GNU Affero General Public License
 * as published by the Free Software Foundation, either version 3
 * of the License, or (at your option) any later version.
 *
 * Solana Reference Stake Pool is distributed in the hope that it
 * will be useful, but WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.
 * If not, see <https://www.gnu.org/licenses/agpl-3.0.html>.
 *
 * You can be released from the requirements of the Affero GNU General Public License
 * by purchasing a commercial license. The purchase of such a license is
 * mandatory as soon as you develop commercial activities using the
 * Solana Reference Stake Pool code without disclosing the source code of
 * your own applications.
 *
 * The developer of this program can be contacted at <info@mfactory.ch>.
 */

import { Commitment, StakeProgram } from '@solana/web3.js';
import { Endpoint } from '@/store';

const mode = import.meta.env.MODE;
const isProd = mode == 'production';
const isDev = mode == 'development';

export const DEFAULT_APY = 0.07;
export const APY_VALIDATOR_ID = 'Ez4heEN9SzxrjgYA7wBWK8FwxAuYXnmwALADGfpB32E6';
export const EPOCH_RELOAD_DURATION = 60000;
export const WITHDRAW_SOL_ACTIVE = true;
export const SOL_USD_RELOAD_DURATION = 300000;
export const POOL_CONNECTION_DELAY = 30000;

export const GTAG_ID = isProd ? 'G-CS969' : null;

// Stake
export const STAKE_PROGRAM_ID = StakeProgram.programId;

// Connection
export const ENDPOINTS: Endpoint[] = [
  {
    name: 'mainnet',
    url: 'https://mainnet.rpcpool.com/',
    stakePoolAddress: 'CtMyWsrUtAwXWiGr9WjHT5fC3p3fgV8cyGpLTo2LJzG1',
    stakeLimit: 100000,
  },
  {
    name: 'testnet',
    url: 'https://testnet.rpcpool.com/',
    stakePoolAddress: 'AeuEVJrnL5SwftWzchEfqMkKXPxLcZjrFtShdAZ7FwKy',
    stakeLimit: 100000,
  },
  {
    name: 'mainnet-triton',
    url: 'https://mercuria-fronten-1cd8.mainnet.rpcpool.com', // clusterApiUrl('devnet'),
    stakePoolAddress: 'CtMyWsrUtAwXWiGr9WjHT5fC3p3fgV8cyGpLTo2LJzG1',
    stakeLimit: 100000,
  },
];

if (isDev) {
  ENDPOINTS.push({
    name: 'localnet',
    url: 'http://127.0.0.1:8899',
    stakePoolAddress: 'HYgufSTxQ8Ma6qgzQ8n2vD5gPTB7YgP5JjurYCgQqFPR',
  });
}

export const DEFAULT_ENDPOINT = ENDPOINTS[1] as Endpoint;

/**
 * The level of commitment desired when querying state
 * <pre>
 *   'processed': Query the most recent block which has reached 1 confirmation by the connected node
 *   'confirmed': Query the most recent block which has reached 1 confirmation by the cluster
 *   'finalized': Query the most recent block which has been finalized by the cluster
 * </pre>
 */
export const DEFAULT_COMMITMENT: Commitment = 'confirmed';

/// new network and validators description for network selector
/**
export const NETWORKS: network[] = [
  {
    name: 'Solana',
    //    icon: 'https://mainnet.rpcpool.com/',
  }
]; 
*/
export const SOL_VAL_LIST = 'Ez4heEN9SzxrjgYA7wBWK8FwxAuYXnmwALADGfpB32E6';

export const DOCK_VAL_LIST = '3EEtxzbZH4yQBzjUHTXTVvD88V6re2wWW56K6Ys8AK7sufU2';

export const NYM_VAL_LIST = '7DaVaW2E6y8kCNtUrBhx6QGagQ8JDW8wGadfBiiGksQB';
