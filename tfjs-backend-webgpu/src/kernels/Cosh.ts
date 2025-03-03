/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

import {Cosh, KernelConfig} from '@tensorflow/tfjs-core';

import {unaryKernelFunc} from '../kernel_utils/kernel_funcs_utils';

import {UnaryOpType} from './unary_op_util';

export const cosh = unaryKernelFunc({opType: UnaryOpType.COSH});

export const coshConfig: KernelConfig = {
  kernelName: Cosh,
  backendName: 'webgpu',
  kernelFunc: cosh
};
