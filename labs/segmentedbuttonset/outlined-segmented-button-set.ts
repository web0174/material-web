/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {customElement} from 'lit/decorators.js';

import {OutlinedSegmentedButtonSet} from './internal/outlined-segmented-button-set.js';
import {styles as outlinedStyles} from './internal/outlined-styles.css.js';
import {styles as sharedStyles} from './internal/shared-styles.css.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-outlined-segmented-button-set': MdOutlinedSegmentedButtonSet;
  }
}

/**
 * MdOutlinedSegmentedButtonSet is the custom element for the Material
 * Design outlined segmented button set component.
 * @final
 * @suppress {visibility}
 */
@customElement('md-outlined-segmented-button-set')
export class MdOutlinedSegmentedButtonSet extends OutlinedSegmentedButtonSet {
  static override styles = [sharedStyles, outlinedStyles];
}
