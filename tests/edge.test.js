'use strict'

/**
 * @module
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import cycleAgentsTest from './src/cycle-agents-test'

// ----------------------------------------
// Tests
// ----------------------------------------

cycleAgentsTest('is_edge', 'Should be Microsoft Edge', 'Should be NOT Microsoft Edge', [
  'is_windows_phone', 'is_edge_ios', 'is_edge_android'
])
