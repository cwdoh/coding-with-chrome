/**
 * @fileoverview BUILD configuration for Coding with Chrome main files.
 *
 * @license Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author mbordihn@google.com (Markus Bordihn)
 */
var closureBuilder = require('closure-builder');
var glob = closureBuilder.globSupport();



/**
 * Background
 */
closureBuilder.build({
  name: 'CwC Background',
  srcs: ['app/js/background.js'],
  out: 'genfiles/js/background.js'
});


/**
 * Application data
 */
closureBuilder.build({
  name: 'CwC Debug',
  resources: [
    'app/js/debug.js'
  ],
  out: 'genfiles/js/'
});


/**
 * Editor
 */
closureBuilder.build({
  name: 'CwC Editor',
  srcs: ['app/js/editor.js'],
  out: 'genfiles/js/editor.js'
});


/**
 * Loader
 */
closureBuilder.build({
  name: 'CwC Loader',
  srcs: ['app/js/loader.js'],
  out: 'genfiles/js/loader.js'
});


/**
 * UI Builder
 */
closureBuilder.build({
  name: 'cwc.ui.Builder',
  srcs: glob([
    'src/**/*.js',
    'gensoyfiles/**/*.js',
    '!src/{frameworks,frameworks/**}'
  ]),
  deps: glob([
    'node_modules/blockly/blocks/**/*.js',
    'node_modules/blockly/core/**/*.js',
    'node_modules/blockly/generators/**/*.js',
    'node_modules/blockly/msg/**/*.js'
  ]),
  externs: glob([
    'build/externs/*.js'
  ]),
  out: 'genfiles/js/cwc_ui.js'
});
