/*!
 *   AdminLTE v3.0.0-alpha
 *   Author: Abdullah Almsaeed
 *	 Website: AdminLTE.io <http://adminlte.io>
 *   License: Open source - MIT <http://opensource.org/licenses/MIT>
 */
/*!
 * Bootstrap v4.1.0 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
:root {
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #ffffff;
  --gray: #6c757d;
  --gray-dark: #343a40;
  --primary: #007bff;
  --secondary: #6c757d;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: transparent;
}

@-ms-viewport {
  width: device-width;
}

article, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {
  display: block;
}

body {
  margin: 0;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #ffffff;
}

[tabindex="-1"]:focus {
  outline: 0 !important;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

abbr[title],
abbr[data-original-title] {
  text-decoration: underline;
  text-decoration: underline dotted;
  cursor: help;
  border-bottom: 0;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: 700;
}

dd {
  margin-bottom: .5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

dfn {
  font-style: italic;
}

b,
strong {
  font-weight: bolder;
}

small {
  font-size: 80%;
}

sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -.25em;
}

sup {
  top: -.5em;
}

a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

a:hover {
  color: #0056b3;
  text-decoration: none;
}

a:not([href]):not([tabindex]) {
  color: inherit;
  text-decoration: none;
}

a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {
  color: inherit;
  text-decoration: none;
}

a:not([href]):not([tabindex]):focus {
  outline: 0;
}

pre,
code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

pre {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  -ms-overflow-style: scrollbar;
}

figure {
  margin: 0 0 1rem;
}

img {
  vertical-align: middle;
  border-style: none;
}

svg:not(:root) {
  overflow: hidden;
}

table {
  border-collapse: collapse;
}

caption {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #6c757d;
  text-align: left;
  caption-side: bottom;
}

th {
  text-align: inherit;
}

label {
  display: inline-block;
  margin-bottom: 0.5rem;
}

button {
  border-radius: 0;
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
html [type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

input[type="radio"],
input[type="checkbox"] {
  box-sizing: border-box;
  padding: 0;
}

input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"] {
  -webkit-appearance: listbox;
}

textarea {
  overflow: auto;
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin-bottom: .5rem;
  font-size: 1.5rem;
  line-height: inherit;
  color: inherit;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  outline-offset: -2px;
  -webkit-appearance: none;
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

summary {
  display: list-item;
  cursor: pointer;
}

template {
  display: none;
}

[hidden] {
  display: none !important;
}

h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
}

h1, .h1 {
  font-size: 2.5rem;
}

h2, .h2 {
  font-size: 2rem;
}

h3, .h3 {
  font-size: 1.75rem;
}

h4, .h4 {
  font-size: 1.5rem;
}

h5, .h5 {
  font-size: 1.25rem;
}

h6, .h6 {
  font-size: 1rem;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.display-1 {
  font-size: 6rem;
  font-weight: 300;
  line-height: 1.2;
}

.display-2 {
  font-size: 5.5rem;
  font-weight: 300;
  line-height: 1.2;
}

.display-3 {
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.2;
}

.display-4 {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

small,
.small {
  font-size: 80%;
  font-weight: 400;
}

mark,
.mark {
  padding: 0.2em;
  background-color: #fcf8e3;
}

.list-unstyled, .chart-legend, .contacts-list, .users-list, .mailbox-attachments {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}

.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}

.initialism {
  font-size: 90%;
  text-transform: uppercase;
}

.blockquote {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.blockquote-footer {
  display: block;
  font-size: 80%;
  color: #6c757d;
}

.blockquote-footer::before {
  content: "\2014 \00A0";
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-thumbnail {
  padding: 0.25rem;
  background-color: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);
  max-width: 100%;
  height: auto;
}

.figure {
  display: inline-block;
}

.figure-img {
  margin-bottom: 0.5rem;
  line-height: 1;
}

.figure-caption {
  font-size: 90%;
  color: #6c757d;
}

code,
kbd,
pre,
samp {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

code {
  font-size: 87.5%;
  color: #e83e8c;
  word-break: break-word;
}

a > code {
  color: inherit;
}

kbd {
  padding: 0.2rem 0.4rem;
  font-size: 87.5%;
  color: #ffffff;
  background-color: #212529;
  border-radius: 0.2rem;
  box-shadow: inset 0 -0.1rem 0 rgba(0, 0, 0, 0.25);
}

kbd kbd {
  padding: 0;
  font-size: 100%;
  font-weight: 700;
  box-shadow: none;
}

pre {
  display: block;
  font-size: 87.5%;
  color: #212529;
}

pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}

.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll;
}

.container {
  width: 100%;
  padding-right: 7.5px;
  padding-left: 7.5px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

.container-fluid {
  width: 100%;
  padding-right: 7.5px;
  padding-left: 7.5px;
  margin-right: auto;
  margin-left: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -7.5px;
  margin-left: -7.5px;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

.no-gutters > .col,
.no-gutters > [class*="col-"] {
  padding-right: 0;
  padding-left: 0;
}

.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,
.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,
.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,
.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,
.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,
.col-xl-auto {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 7.5px;
  padding-left: 7.5px;
}

.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: none;
}

.col-1 {
  flex: 0 0 8.333333%;
  max-width: 8.333333%;
}

.col-2 {
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
}

.col-3 {
  flex: 0 0 25%;
  max-width: 25%;
}

.col-4 {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}

.col-5 {
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
}

.col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.col-7 {
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
}

.col-8 {
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
}

.col-9 {
  flex: 0 0 75%;
  max-width: 75%;
}

.col-10 {
  flex: 0 0 83.333333%;
  max-width: 83.333333%;
}

.col-11 {
  flex: 0 0 91.666667%;
  max-width: 91.666667%;
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

.order-first {
  order: -1;
}

.order-last {
  order: 13;
}

.order-0 {
  order: 0;
}

.order-1 {
  order: 1;
}

.order-2 {
  order: 2;
}

.order-3 {
  order: 3;
}

.order-4 {
  order: 4;
}

.order-5 {
  order: 5;
}

.order-6 {
  order: 6;
}

.order-7 {
  order: 7;
}

.order-8 {
  order: 8;
}

.order-9 {
  order: 9;
}

.order-10 {
  order: 10;
}

.order-11 {
  order: 11;
}

.order-12 {
  order: 12;
}

.offset-1 {
  margin-left: 8.333333%;
}

.offset-2 {
  margin-left: 16.666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.333333%;
}

.offset-5 {
  margin-left: 41.666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.333333%;
}

.offset-8 {
  margin-left: 66.666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.333333%;
}

.offset-11 {
  margin-left: 91.666667%;
}

@media (min-width: 576px) {
  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }
  .col-sm-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  .col-sm-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-sm-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-sm-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-sm-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-sm-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-sm-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  .col-sm-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-sm-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .col-sm-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  .col-sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-sm-first {
    order: -1;
  }
  .order-sm-last {
    order: 13;
  }
  .order-sm-0 {
    order: 0;
  }
  .order-sm-1 {
    order: 1;
  }
  .order-sm-2 {
    order: 2;
  }
  .order-sm-3 {
    order: 3;
  }
  .order-sm-4 {
    order: 4;
  }
  .order-sm-5 {
    order: 5;
  }
  .order-sm-6 {
    order: 6;
  }
  .order-sm-7 {
    order: 7;
  }
  .order-sm-8 {
    order: 8;
  }
  .order-sm-9 {
    order: 9;
  }
  .order-sm-10 {
    order: 10;
  }
  .order-sm-11 {
    order: 11;
  }
  .order-sm-12 {
    order: 12;
  }
  .offset-sm-0 {
    margin-left: 0;
  }
  .offset-sm-1 {
    margin-left: 8.333333%;
  }
  .offset-sm-2 {
    margin-left: 16.666667%;
  }
  .offset-sm-3 {
    margin-left: 25%;
  }
  .offset-sm-4 {
    margin-left: 33.333333%;
  }
  .offset-sm-5 {
    margin-left: 41.666667%;
  }
  .offset-sm-6 {
    margin-left: 50%;
  }
  .offset-sm-7 {
    margin-left: 58.333333%;
  }
  .offset-sm-8 {
    margin-left: 66.666667%;
  }
  .offset-sm-9 {
    margin-left: 75%;
  }
  .offset-sm-10 {
    margin-left: 83.333333%;
  }
  .offset-sm-11 {
    margin-left: 91.666667%;
  }
}

@media (min-width: 768px) {
  .col-md {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }
  .col-md-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  .col-md-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-md-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-md-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-md-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-md-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  .col-md-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-md-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .col-md-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  .col-md-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-md-first {
    order: -1;
  }
  .order-md-last {
    order: 13;
  }
  .order-md-0 {
    order: 0;
  }
  .order-md-1 {
    order: 1;
  }
  .order-md-2 {
    order: 2;
  }
  .order-md-3 {
    order: 3;
  }
  .order-md-4 {
    order: 4;
  }
  .order-md-5 {
    order: 5;
  }
  .order-md-6 {
    order: 6;
  }
  .order-md-7 {
    order: 7;
  }
  .order-md-8 {
    order: 8;
  }
  .order-md-9 {
    order: 9;
  }
  .order-md-10 {
    order: 10;
  }
  .order-md-11 {
    order: 11;
  }
  .order-md-12 {
    order: 12;
  }
  .offset-md-0 {
    margin-left: 0;
  }
  .offset-md-1 {
    margin-left: 8.333333%;
  }
  .offset-md-2 {
    margin-left: 16.666667%;
  }
  .offset-md-3 {
    margin-left: 25%;
  }
  .offset-md-4 {
    margin-left: 33.333333%;
  }
  .offset-md-5 {
    margin-left: 41.666667%;
  }
  .offset-md-6 {
    margin-left: 50%;
  }
  .offset-md-7 {
    margin-left: 58.333333%;
  }
  .offset-md-8 {
    margin-left: 66.666667%;
  }
  .offset-md-9 {
    margin-left: 75%;
  }
  .offset-md-10 {
    margin-left: 83.333333%;
  }
  .offset-md-11 {
    margin-left: 91.666667%;
  }
}

@media (min-width: 992px) {
  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }
  .col-lg-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  .col-lg-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-lg-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-lg-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-lg-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-lg-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  .col-lg-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-lg-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .col-lg-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  .col-lg-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-lg-first {
    order: -1;
  }
  .order-lg-last {
    order: 13;
  }
  .order-lg-0 {
    order: 0;
  }
  .order-lg-1 {
    order: 1;
  }
  .order-lg-2 {
    order: 2;
  }
  .order-lg-3 {
    order: 3;
  }
  .order-lg-4 {
    order: 4;
  }
  .order-lg-5 {
    order: 5;
  }
  .order-lg-6 {
    order: 6;
  }
  .order-lg-7 {
    order: 7;
  }
  .order-lg-8 {
    order: 8;
  }
  .order-lg-9 {
    order: 9;
  }
  .order-lg-10 {
    order: 10;
  }
  .order-lg-11 {
    order: 11;
  }
  .order-lg-12 {
    order: 12;
  }
  .offset-lg-0 {
    margin-left: 0;
  }
  .offset-lg-1 {
    margin-left: 8.333333%;
  }
  .offset-lg-2 {
    margin-left: 16.666667%;
  }
  .offset-lg-3 {
    margin-left: 25%;
  }
  .offset-lg-4 {
    margin-left: 33.333333%;
  }
  .offset-lg-5 {
    margin-left: 41.666667%;
  }
  .offset-lg-6 {
    margin-left: 50%;
  }
  .offset-lg-7 {
    margin-left: 58.333333%;
  }
  .offset-lg-8 {
    margin-left: 66.666667%;
  }
  .offset-lg-9 {
    margin-left: 75%;
  }
  .offset-lg-10 {
    margin-left: 83.333333%;
  }
  .offset-lg-11 {
    margin-left: 91.666667%;
  }
}

@media (min-width: 1200px) {
  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }
  .col-xl-1 {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
  .col-xl-2 {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
  .col-xl-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-xl-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  .col-xl-5 {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
  .col-xl-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-xl-7 {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
  .col-xl-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  .col-xl-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-xl-10 {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .col-xl-11 {
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
  }
  .col-xl-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-xl-first {
    order: -1;
  }
  .order-xl-last {
    order: 13;
  }
  .order-xl-0 {
    order: 0;
  }
  .order-xl-1 {
    order: 1;
  }
  .order-xl-2 {
    order: 2;
  }
  .order-xl-3 {
    order: 3;
  }
  .order-xl-4 {
    order: 4;
  }
  .order-xl-5 {
    order: 5;
  }
  .order-xl-6 {
    order: 6;
  }
  .order-xl-7 {
    order: 7;
  }
  .order-xl-8 {
    order: 8;
  }
  .order-xl-9 {
    order: 9;
  }
  .order-xl-10 {
    order: 10;
  }
  .order-xl-11 {
    order: 11;
  }
  .order-xl-12 {
    order: 12;
  }
  .offset-xl-0 {
    margin-left: 0;
  }
  .offset-xl-1 {
    margin-left: 8.333333%;
  }
  .offset-xl-2 {
    margin-left: 16.666667%;
  }
  .offset-xl-3 {
    margin-left: 25%;
  }
  .offset-xl-4 {
    margin-left: 33.333333%;
  }
  .offset-xl-5 {
    margin-left: 41.666667%;
  }
  .offset-xl-6 {
    margin-left: 50%;
  }
  .offset-xl-7 {
    margin-left: 58.333333%;
  }
  .offset-xl-8 {
    margin-left: 66.666667%;
  }
  .offset-xl-9 {
    margin-left: 75%;
  }
  .offset-xl-10 {
    margin-left: 83.333333%;
  }
  .offset-xl-11 {
    margin-left: 91.666667%;
  }
}

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
}

.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.table tbody + tbody {
  border-top: 2px solid #dee2e6;
}

.table .table {
  background-color: #ffffff;
}

.table-sm th,
.table-sm td {
  padding: 0.3rem;
}

.table-bordered {
  border: 1px solid #dee2e6;
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #dee2e6;
}

.table-bordered thead th,
.table-bordered thead td {
  border-bottom-width: 2px;
}

.table-borderless th,
.table-borderless td,
.table-borderless thead th,
.table-borderless tbody + tbody {
  border: 0;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}

.table-hover tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.075);
}

.table-primary,
.table-primary > th,
.table-primary > td {
  background-color: #b8daff;
}

.table-hover .table-primary:hover {
  background-color: #9fcdff;
}

.table-hover .table-primary:hover > td,
.table-hover .table-primary:hover > th {
  background-color: #9fcdff;
}

.table-secondary,
.table-secondary > th,
.table-secondary > td {
  background-color: #d6d8db;
}

.table-hover .table-secondary:hover {
  background-color: #c8cbcf;
}

.table-hover .table-secondary:hover > td,
.table-hover .table-secondary:hover > th {
  background-color: #c8cbcf;
}

.table-success,
.table-success > th,
.table-success > td {
  background-color: #c3e6cb;
}

.table-hover .table-success:hover {
  background-color: #b1dfbb;
}

.table-hover .table-success:hover > td,
.table-hover .table-success:hover > th {
  background-color: #b1dfbb;
}

.table-info,
.table-info > th,
.table-info > td {
  background-color: #bee5eb;
}

.table-hover .table-info:hover {
  background-color: #abdde5;
}

.table-hover .table-info:hover > td,
.table-hover .table-info:hover > th {
  background-color: #abdde5;
}

.table-warning,
.table-warning > th,
.table-warning > td {
  background-color: #ffeeba;
}

.table-hover .table-warning:hover {
  background-color: #ffe8a1;
}

.table-hover .table-warning:hover > td,
.table-hover .table-warning:hover > th {
  background-color: #ffe8a1;
}

.table-danger,
.table-danger > th,
.table-danger > td {
  background-color: #f5c6cb;
}

.table-hover .table-danger:hover {
  background-color: #f1b0b7;
}

.table-hover .table-danger:hover > td,
.table-hover .table-danger:hover > th {
  background-color: #f1b0b7;
}

.table-light,
.table-light > th,
.table-light > td {
  background-color: #fdfdfe;
}

.table-hover .table-light:hover {
  background-color: #ececf6;
}

.table-hover .table-light:hover > td,
.table-hover .table-light:hover > th {
  background-color: #ececf6;
}

.table-dark,
.table-dark > th,
.table-dark > td {
  background-color: #c6c8ca;
}

.table-hover .table-dark:hover {
  background-color: #b9bbbe;
}

.table-hover .table-dark:hover > td,
.table-hover .table-dark:hover > th {
  background-color: #b9bbbe;
}

.table-active,
.table-active > th,
.table-active > td {
  background-color: rgba(0, 0, 0, 0.075);
}

.table-hover .table-active:hover {
  background-color: rgba(0, 0, 0, 0.075);
}

.table-hover .table-active:hover > td,
.table-hover .table-active:hover > th {
  background-color: rgba(0, 0, 0, 0.075);
}

.table .thead-dark th {
  color: #ffffff;
  background-color: #212529;
  border-color: #32383e;
}

.table .thead-light th {
  color: #495057;
  background-color: #e9ecef;
  border-color: #dee2e6;
}

.table-dark {
  color: #ffffff;
  background-color: #212529;
}

.table-dark th,
.table-dark td,
.table-dark thead th {
  border-color: #32383e;
}

.table-dark.table-bordered {
  border: 0;
}

.table-dark.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(255, 255, 255, 0.05);
}

.table-dark.table-hover tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.075);
}

@media (max-width: 575.98px) {
  .table-responsive-sm {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
  .table-responsive-sm > .table-bordered {
    border: 0;
  }
}

@media (max-width: 767.98px) {
  .table-responsive-md {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
  .table-responsive-md > .table-bordered {
    border: 0;
  }
}

@media (max-width: 991.98px) {
  .table-responsive-lg {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
  .table-responsive-lg > .table-bordered {
    border: 0;
  }
}

@media (max-width: 1199.98px) {
  .table-responsive-xl {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
  .table-responsive-xl > .table-bordered {
    border: 0;
  }
}

.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}

.table-responsive > .table-bordered {
  border: 0;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 transparent;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media screen and (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}

.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}

.form-control:focus {
  color: #495057;
  background-color: #ffffff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: inset 0 0 0 transparent, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control:disabled, .form-control[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}

select.form-control:not([size]):not([multiple]) {
  height: calc(2.25rem + 2px);
}

select.form-control:focus::-ms-value {
  color: #495057;
  background-color: #ffffff;
}

.form-control-file,
.form-control-range {
  display: block;
  width: 100%;
}

.col-form-label {
  padding-top: calc(0.375rem + 1px);
  padding-bottom: calc(0.375rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}

.col-form-label-lg {
  padding-top: calc(0.5rem + 1px);
  padding-bottom: calc(0.5rem + 1px);
  font-size: 1.25rem;
  line-height: 1.5;
}

.col-form-label-sm {
  padding-top: calc(0.25rem + 1px);
  padding-bottom: calc(0.25rem + 1px);
  font-size: 0.875rem;
  line-height: 1.5;
}

.form-control-plaintext {
  display: block;
  width: 100%;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  margin-bottom: 0;
  line-height: 1.5;
  color: #212529;
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0;
}

.form-control-plaintext.form-control-sm, .input-group-sm > .form-control-plaintext.form-control,
.input-group-sm > .input-group-prepend > .form-control-plaintext.input-group-text,
.input-group-sm > .input-group-append > .form-control-plaintext.input-group-text,
.input-group-sm > .input-group-prepend > .form-control-plaintext.btn,
.input-group-sm > .input-group-append > .form-control-plaintext.btn, .form-control-plaintext.form-control-lg, .input-group-lg > .form-control-plaintext.form-control,
.input-group-lg > .input-group-prepend > .form-control-plaintext.input-group-text,
.input-group-lg > .input-group-append > .form-control-plaintext.input-group-text,
.input-group-lg > .input-group-prepend > .form-control-plaintext.btn,
.input-group-lg > .input-group-append > .form-control-plaintext.btn {
  padding-right: 0;
  padding-left: 0;
}

.form-control-sm, .input-group-sm > .form-control,
.input-group-sm > .input-group-prepend > .input-group-text,
.input-group-sm > .input-group-append > .input-group-text,
.input-group-sm > .input-group-prepend > .btn,
.input-group-sm > .input-group-append > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

select.form-control-sm:not([size]):not([multiple]), .input-group-sm > select.form-control:not([size]):not([multiple]),
.input-group-sm > .input-group-prepend > select.input-group-text:not([size]):not([multiple]),
.input-group-sm > .input-group-append > select.input-group-text:not([size]):not([multiple]),
.input-group-sm > .input-group-prepend > select.btn:not([size]):not([multiple]),
.input-group-sm > .input-group-append > select.btn:not([size]):not([multiple]) {
  height: calc(1.8125rem + 2px);
}

.form-control-lg, .input-group-lg > .form-control,
.input-group-lg > .input-group-prepend > .input-group-text,
.input-group-lg > .input-group-append > .input-group-text,
.input-group-lg > .input-group-prepend > .btn,
.input-group-lg > .input-group-append > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

select.form-control-lg:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]),
.input-group-lg > .input-group-prepend > select.input-group-text:not([size]):not([multiple]),
.input-group-lg > .input-group-append > select.input-group-text:not([size]):not([multiple]),
.input-group-lg > .input-group-prepend > select.btn:not([size]):not([multiple]),
.input-group-lg > .input-group-append > select.btn:not([size]):not([multiple]) {
  height: calc(2.875rem + 2px);
}

.form-group {
  margin-bottom: 1rem;
}

.form-text {
  display: block;
  margin-top: 0.25rem;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
}

.form-row > .col,
.form-row > [class*="col-"] {
  padding-right: 5px;
  padding-left: 5px;
}

.form-check {
  position: relative;
  display: block;
  padding-left: 1.25rem;
}

.form-check-input {
  position: absolute;
  margin-top: 0.3rem;
  margin-left: -1.25rem;
}

.form-check-input:disabled ~ .form-check-label {
  color: #6c757d;
}

.form-check-label {
  margin-bottom: 0;
}

.form-check-inline {
  display: inline-flex;
  align-items: center;
  padding-left: 0;
  margin-right: 0.75rem;
}

.form-check-inline .form-check-input {
  position: static;
  margin-top: 0;
  margin-right: 0.3125rem;
  margin-left: 0;
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #28a745;
}

.valid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: .5rem;
  margin-top: .1rem;
  font-size: .875rem;
  line-height: 1;
  color: #ffffff;
  background-color: rgba(40, 167, 69, 0.8);
  border-radius: .2rem;
}

.was-validated .form-control:valid, .form-control.is-valid, .was-validated
.custom-select:valid,
.custom-select.is-valid {
  border-color: #28a745;
}

.was-validated .form-control:valid:focus, .form-control.is-valid:focus, .was-validated
.custom-select:valid:focus,
.custom-select.is-valid:focus {
  border-color: #28a745;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}

.was-validated .form-control:valid ~ .valid-feedback,
.was-validated .form-control:valid ~ .valid-tooltip, .form-control.is-valid ~ .valid-feedback,
.form-control.is-valid ~ .valid-tooltip, .was-validated
.custom-select:valid ~ .valid-feedback,
.was-validated
.custom-select:valid ~ .valid-tooltip,
.custom-select.is-valid ~ .valid-feedback,
.custom-select.is-valid ~ .valid-tooltip {
  display: block;
}

.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {
  color: #28a745;
}

.was-validated .form-check-input:valid ~ .valid-feedback,
.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,
.form-check-input.is-valid ~ .valid-tooltip {
  display: block;
}

.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {
  color: #28a745;
}

.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {
  background-color: #71dd8a;
}

.was-validated .custom-control-input:valid ~ .valid-feedback,
.was-validated .custom-control-input:valid ~ .valid-tooltip, .custom-control-input.is-valid ~ .valid-feedback,
.custom-control-input.is-valid ~ .valid-tooltip {
  display: block;
}

.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {
  background-color: #34ce57;
}

.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {
  box-shadow: 0 0 0 1px #ffffff, 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}

.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {
  border-color: #28a745;
}

.was-validated .custom-file-input:valid ~ .custom-file-label::before, .custom-file-input.is-valid ~ .custom-file-label::before {
  border-color: inherit;
}

.was-validated .custom-file-input:valid ~ .valid-feedback,
.was-validated .custom-file-input:valid ~ .valid-tooltip, .custom-file-input.is-valid ~ .valid-feedback,
.custom-file-input.is-valid ~ .valid-tooltip {
  display: block;
}

.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
}

.invalid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: .5rem;
  margin-top: .1rem;
  font-size: .875rem;
  line-height: 1;
  color: #ffffff;
  background-color: rgba(220, 53, 69, 0.8);
  border-radius: .2rem;
}

.was-validated .form-control:invalid, .form-control.is-invalid, .was-validated
.custom-select:invalid,
.custom-select.is-invalid {
  border-color: #dc3545;
}

.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus, .was-validated
.custom-select:invalid:focus,
.custom-select.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

.was-validated .form-control:invalid ~ .invalid-feedback,
.was-validated .form-control:invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback,
.form-control.is-invalid ~ .invalid-tooltip, .was-validated
.custom-select:invalid ~ .invalid-feedback,
.was-validated
.custom-select:invalid ~ .invalid-tooltip,
.custom-select.is-invalid ~ .invalid-feedback,
.custom-select.is-invalid ~ .invalid-tooltip {
  display: block;
}

.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {
  color: #dc3545;
}

.was-validated .form-check-input:invalid ~ .invalid-feedback,
.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,
.form-check-input.is-invalid ~ .invalid-tooltip {
  display: block;
}

.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {
  color: #dc3545;
}

.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {
  background-color: #efa2a9;
}

.was-validated .custom-control-input:invalid ~ .invalid-feedback,
.was-validated .custom-control-input:invalid ~ .invalid-tooltip, .custom-control-input.is-invalid ~ .invalid-feedback,
.custom-control-input.is-invalid ~ .invalid-tooltip {
  display: block;
}

.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {
  background-color: #e4606d;
}

.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {
  box-shadow: 0 0 0 1px #ffffff, 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {
  border-color: #dc3545;
}

.was-validated .custom-file-input:invalid ~ .custom-file-label::before, .custom-file-input.is-invalid ~ .custom-file-label::before {
  border-color: inherit;
}

.was-validated .custom-file-input:invalid ~ .invalid-feedback,
.was-validated .custom-file-input:invalid ~ .invalid-tooltip, .custom-file-input.is-invalid ~ .invalid-feedback,
.custom-file-input.is-invalid ~ .invalid-tooltip {
  display: block;
}

.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

.form-inline {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.form-inline .form-check {
  width: 100%;
}

@media (min-width: 576px) {
  .form-inline label {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
  }
  .form-inline .form-group {
    display: flex;
    flex: 0 0 auto;
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: 0;
  }
  .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }
  .form-inline .form-control-plaintext {
    display: inline-block;
  }
  .form-inline .input-group,
  .form-inline .custom-select {
    width: auto;
  }
  .form-inline .form-check {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    padding-left: 0;
  }
  .form-inline .form-check-input {
    position: relative;
    margin-top: 0;
    margin-right: 0.25rem;
    margin-left: 0;
  }
  .form-inline .custom-control {
    align-items: center;
    justify-content: center;
  }
  .form-inline .custom-control-label {
    margin-bottom: 0;
  }
}

.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media screen and (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}

.btn:hover, .btn:focus {
  text-decoration: none;
}

.btn:focus, .btn.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.btn.disabled, .btn:disabled {
  opacity: 0.65;
  box-shadow: none;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.btn:not(:disabled):not(.disabled):active, .btn:not(:disabled):not(.disabled).active {
  background-image: none;
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

.btn:not(:disabled):not(.disabled):active:focus, .btn:not(:disabled):not(.disabled).active:focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25), inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

a.btn.disabled,
fieldset:disabled a.btn {
  pointer-events: none;
}

.btn-primary {
  color: #ffffff;
  background-color: #007bff;
  border-color: #007bff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075);
}

.btn-primary:hover {
  color: #ffffff;
  background-color: #0069d9;
  border-color: #0062cc;
}

.btn-primary:focus, .btn-primary.focus {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.btn-primary.disabled, .btn-primary:disabled {
  color: #ffffff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,
.show > .btn-primary.dropdown-toggle {
  color: #ffffff;
  background-color: #0062cc;
  border-color: #005cbf;
}

.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,
.show > .btn-primary.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.btn-secondary {
  color: #ffffff;
  background-color: #6c757d;
  border-color: #6c757d;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075);
}

.btn-secondary:hover {
  color: #ffffff;
  background-color: #5a6268;
  border-color: #545b62;
}

.btn-secondary:focus, .btn-secondary.focus {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
}

.btn-secondary.disabled, .btn-secondary:disabled {
  color: #ffffff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,
.show > .btn-secondary.dropdown-toggle {
  color: #ffffff;
  background-color: #545b62;
  border-color: #4e555b;
}

.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,
.show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
}

.btn-success {
  color: #ffffff;
  background-color: #28a745;
  border-color: #28a745;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075);
}

.btn-success:hover {
  color: #ffffff;
  background-color: #218838;
  border-color: #1e7e34;
}

.btn-success:focus, .btn-success.focus {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}

.btn-success.disabled, .btn-success:disabled {
  color: #ffffff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,
.show > .btn-success.dropdown-toggle {
  color: #ffffff;
  background-color: #1e7e34;
  border-color: #1c7430;
}

.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,
.show > .btn-success.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}

.btn-info {
  color: #ffffff;
  background-color: #17a2b8;
  border-color: #17a2b8;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075);
}

.btn-info:hover {
  color: #ffffff;
  background-color: #138496;
  border-color: #117a8b;
}

.btn-info:focus, .btn-info.focus {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
}

.btn-info.disabled, .btn-info:disabled {
  color: #ffffff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,
.show > .btn-info.dropdown-toggle {
  color: #ffffff;
  background-color: #117a8b;
  border-color: #10707f;
}

.btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,
.show > .btn-info.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
}

.btn-warning {
  color: #1F2D3D;
  background-color: #ffc107;
  border-color: #ffc107;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075);
}

.btn-warning:hover {
  color: #1F2D3D;
  background-color: #e0a800;
  border-color: #d39e00;
}

.btn-warning:focus, .btn-warning.focus {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
}

.btn-warning.disabled, .btn-warning:disabled {
  color: #1F2D3D;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,
.show > .btn-warning.dropdown-toggle {
  color: #1F2D3D;
  background-color: #d39e00;
  border-color: #c69500;
}

.btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,
.show > .btn-warning.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
}

.btn-danger {
  color: #ffffff;
  background-color: #dc3545;
  border-color: #dc3545;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075);
}

.btn-danger:hover {
  color: #ffffff;
  background-color: #c82333;
  border-color: #bd2130;
}

.btn-danger:focus, .btn-danger.focus {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
}

.btn-danger.disabled, .btn-danger:disabled {
  color: #ffffff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,
.show > .btn-danger.dropdown-toggle {
  color: #ffffff;
  background-color: #bd2130;
  border-color: #b21f2d;
}

.btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,
.show > .btn-danger.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
}

.btn-light {
  color: #1F2D3D;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075);
}

.btn-light:hover {
  color: #1F2D3D;
  background-color: #e2e6ea;
  border-color: #dae0e5;
}

.btn-light:focus, .btn-light.focus {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
}

.btn-light.disabled, .btn-light:disabled {
  color: #1F2D3D;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,
.show > .btn-light.dropdown-toggle {
  color: #1F2D3D;
  background-color: #dae0e5;
  border-color: #d3d9df;
}

.btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,
.show > .btn-light.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
}

.btn-dark {
  color: #ffffff;
  background-color: #343a40;
  border-color: #343a40;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075);
}

.btn-dark:hover {
  color: #ffffff;
  background-color: #23272b;
  border-color: #1d2124;
}

.btn-dark:focus, .btn-dark.focus {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
}

.btn-dark.disabled, .btn-dark:disabled {
  color: #ffffff;
  background-color: #343a40;
  border-color: #343a40;
}

.btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,
.show > .btn-dark.dropdown-toggle {
  color: #ffffff;
  background-color: #1d2124;
  border-color: #171a1d;
}

.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,
.show > .btn-dark.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
}

.btn-outline-primary {
  color: #007bff;
  background-color: transparent;
  background-image: none;
  border-color: #007bff;
}

.btn-outline-primary:hover {
  color: #ffffff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-outline-primary:focus, .btn-outline-primary.focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.btn-outline-primary.disabled, .btn-outline-primary:disabled {
  color: #007bff;
  background-color: transparent;
}

.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,
.show > .btn-outline-primary.dropdown-toggle {
  color: #ffffff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-primary.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.btn-outline-secondary {
  color: #6c757d;
  background-color: transparent;
  background-image: none;
  border-color: #6c757d;
}

.btn-outline-secondary:hover {
  color: #ffffff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-outline-secondary:focus, .btn-outline-secondary.focus {
  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
}

.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {
  color: #6c757d;
  background-color: transparent;
}

.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,
.show > .btn-outline-secondary.dropdown-toggle {
  color: #ffffff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-secondary.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
}

.btn-outline-success {
  color: #28a745;
  background-color: transparent;
  background-image: none;
  border-color: #28a745;
}

.btn-outline-success:hover {
  color: #ffffff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-outline-success:focus, .btn-outline-success.focus {
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}

.btn-outline-success.disabled, .btn-outline-success:disabled {
  color: #28a745;
  background-color: transparent;
}

.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,
.show > .btn-outline-success.dropdown-toggle {
  color: #ffffff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-success.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}

.btn-outline-info {
  color: #17a2b8;
  background-color: transparent;
  background-image: none;
  border-color: #17a2b8;
}

.btn-outline-info:hover {
  color: #ffffff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-outline-info:focus, .btn-outline-info.focus {
  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
}

.btn-outline-info.disabled, .btn-outline-info:disabled {
  color: #17a2b8;
  background-color: transparent;
}

.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,
.show > .btn-outline-info.dropdown-toggle {
  color: #ffffff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-info.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
}

.btn-outline-warning {
  color: #ffc107;
  background-color: transparent;
  background-image: none;
  border-color: #ffc107;
}

.btn-outline-warning:hover {
  color: #1F2D3D;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-outline-warning:focus, .btn-outline-warning.focus {
  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
}

.btn-outline-warning.disabled, .btn-outline-warning:disabled {
  color: #ffc107;
  background-color: transparent;
}

.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,
.show > .btn-outline-warning.dropdown-toggle {
  color: #1F2D3D;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-warning.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
}

.btn-outline-danger {
  color: #dc3545;
  background-color: transparent;
  background-image: none;
  border-color: #dc3545;
}

.btn-outline-danger:hover {
  color: #ffffff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-outline-danger:focus, .btn-outline-danger.focus {
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
}

.btn-outline-danger.disabled, .btn-outline-danger:disabled {
  color: #dc3545;
  background-color: transparent;
}

.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,
.show > .btn-outline-danger.dropdown-toggle {
  color: #ffffff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-danger.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
}

.btn-outline-light {
  color: #f8f9fa;
  background-color: transparent;
  background-image: none;
  border-color: #f8f9fa;
}

.btn-outline-light:hover {
  color: #1F2D3D;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-outline-light:focus, .btn-outline-light.focus {
  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
}

.btn-outline-light.disabled, .btn-outline-light:disabled {
  color: #f8f9fa;
  background-color: transparent;
}

.btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,
.show > .btn-outline-light.dropdown-toggle {
  color: #1F2D3D;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-light.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
}

.btn-outline-dark {
  color: #343a40;
  background-color: transparent;
  background-image: none;
  border-color: #343a40;
}

.btn-outline-dark:hover {
  color: #ffffff;
  background-color: #343a40;
  border-color: #343a40;
}

.btn-outline-dark:focus, .btn-outline-dark.focus {
  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
}

.btn-outline-dark.disabled, .btn-outline-dark:disabled {
  color: #343a40;
  background-color: transparent;
}

.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,
.show > .btn-outline-dark.dropdown-toggle {
  color: #ffffff;
  background-color: #343a40;
  border-color: #343a40;
}

.btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-dark.dropdown-toggle:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
}

.btn-link {
  font-weight: 400;
  color: #007bff;
  background-color: transparent;
}

.btn-link:hover {
  color: #0056b3;
  text-decoration: none;
  background-color: transparent;
  border-color: transparent;
}

.btn-link:focus, .btn-link.focus {
  text-decoration: none;
  border-color: transparent;
  box-shadow: none;
}

.btn-link:disabled, .btn-link.disabled {
  color: #6c757d;
  pointer-events: none;
}

.btn-lg, .btn-group-lg > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

.btn-sm, .btn-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-block + .btn-block {
  margin-top: 0.5rem;
}

input[type="submit"].btn-block,
input[type="reset"].btn-block,
input[type="button"].btn-block {
  width: 100%;
}

.fade {
  transition: opacity 0.15s linear;
}

@media screen and (prefers-reduced-motion: reduce) {
  .fade {
    transition: none;
  }
}

.fade:not(.show) {
  opacity: 0;
}

.collapse:not(.show) {
  display: none;
}

.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}

@media screen and (prefers-reduced-motion: reduce) {
  .collapsing {
    transition: none;
  }
}

.dropup,
.dropright,
.dropdown,
.dropleft {
  position: relative;
}

.dropdown-toggle::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.175);
}

.dropdown-menu-right {
  right: 0;
  left: auto;
}

.dropup .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 0.125rem;
}

.dropup .dropdown-toggle::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}

.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropright .dropdown-menu {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: 0.125rem;
}

.dropright .dropdown-toggle::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}

.dropright .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropright .dropdown-toggle::after {
  vertical-align: 0;
}

.dropleft .dropdown-menu {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: 0.125rem;
}

.dropleft .dropdown-toggle::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}

.dropleft .dropdown-toggle::after {
  display: none;
}

.dropleft .dropdown-toggle::before {
  display: inline-block;
  width: 0;
  height: 0;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}

.dropleft .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropleft .dropdown-toggle::before {
  vertical-align: 0;
}

.dropdown-menu[x-placement^="top"], .dropdown-menu[x-placement^="right"], .dropdown-menu[x-placement^="bottom"], .dropdown-menu[x-placement^="left"] {
  right: auto;
  bottom: auto;
}

.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}

.dropdown-item:hover, .dropdown-item:focus {
  color: #16181b;
  text-decoration: none;
  background-color: #f8f9fa;
}

.dropdown-item.active, .dropdown-item:active {
  color: #ffffff;
  text-decoration: none;
  background-color: #007bff;
}

.dropdown-item.disabled, .dropdown-item:disabled {
  color: #6c757d;
  background-color: transparent;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-header {
  display: block;
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  color: #6c757d;
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: 0.25rem 1rem;
  color: #212529;
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}

.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  flex: 0 1 auto;
}

.btn-group > .btn:hover,
.btn-group-vertical > .btn:hover {
  z-index: 1;
}

.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,
.btn-group-vertical > .btn:focus,
.btn-group-vertical > .btn:active,
.btn-group-vertical > .btn.active {
  z-index: 1;
}

.btn-group .btn + .btn,
.btn-group .btn + .btn-group,
.btn-group .btn-group + .btn,
.btn-group .btn-group + .btn-group,
.btn-group-vertical .btn + .btn,
.btn-group-vertical .btn + .btn-group,
.btn-group-vertical .btn-group + .btn,
.btn-group-vertical .btn-group + .btn-group {
  margin-left: -1px;
}

.btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.btn-toolbar .input-group {
  width: auto;
}

.btn-group > .btn:first-child {
  margin-left: 0;
}

.btn-group > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group > .btn-group:not(:last-child) > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.btn-group > .btn:not(:first-child),
.btn-group > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.dropdown-toggle-split {
  padding-right: 0.5625rem;
  padding-left: 0.5625rem;
}

.dropdown-toggle-split::after,
.dropup .dropdown-toggle-split::after,
.dropright .dropdown-toggle-split::after {
  margin-left: 0;
}

.dropleft .dropdown-toggle-split::before {
  margin-right: 0;
}

.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {
  padding-right: 0.375rem;
  padding-left: 0.375rem;
}

.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}

.btn-group.show .dropdown-toggle {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

.btn-group.show .dropdown-toggle.btn-link {
  box-shadow: none;
}

.btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.btn-group-vertical .btn,
.btn-group-vertical .btn-group {
  width: 100%;
}

.btn-group-vertical > .btn + .btn,
.btn-group-vertical > .btn + .btn-group,
.btn-group-vertical > .btn-group + .btn,
.btn-group-vertical > .btn-group + .btn-group {
  margin-top: -1px;
  margin-left: 0;
}

.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group-vertical > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.btn-group-vertical > .btn:not(:first-child),
.btn-group-vertical > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.btn-group-toggle > .btn,
.btn-group-toggle > .btn-group > .btn {
  margin-bottom: 0;
}

.btn-group-toggle > .btn input[type="radio"],
.btn-group-toggle > .btn input[type="checkbox"],
.btn-group-toggle > .btn-group > .btn input[type="radio"],
.btn-group-toggle > .btn-group > .btn input[type="checkbox"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}

.input-group > .form-control,
.input-group > .custom-select,
.input-group > .custom-file {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  margin-bottom: 0;
}

.input-group > .form-control:focus,
.input-group > .custom-select:focus,
.input-group > .custom-file:focus {
  z-index: 3;
}

.input-group > .form-control + .form-control,
.input-group > .form-control + .custom-select,
.input-group > .form-control + .custom-file,
.input-group > .custom-select + .form-control,
.input-group > .custom-select + .custom-select,
.input-group > .custom-select + .custom-file,
.input-group > .custom-file + .form-control,
.input-group > .custom-file + .custom-select,
.input-group > .custom-file + .custom-file {
  margin-left: -1px;
}

.input-group > .form-control:not(:last-child),
.input-group > .custom-select:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group > .form-control:not(:first-child),
.input-group > .custom-select:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group > .custom-file {
  display: flex;
  align-items: center;
}

.input-group > .custom-file:not(:last-child) .custom-file-label,
.input-group > .custom-file:not(:last-child) .custom-file-label::after {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group > .custom-file:not(:first-child) .custom-file-label,
.input-group > .custom-file:not(:first-child) .custom-file-label::after {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group-prepend,
.input-group-append {
  display: flex;
}

.input-group-prepend .btn,
.input-group-append .btn {
  position: relative;
  z-index: 2;
}

.input-group-prepend .btn + .btn,
.input-group-prepend .btn + .input-group-text,
.input-group-prepend .input-group-text + .input-group-text,
.input-group-prepend .input-group-text + .btn,
.input-group-append .btn + .btn,
.input-group-append .btn + .input-group-text,
.input-group-append .input-group-text + .input-group-text,
.input-group-append .input-group-text + .btn {
  margin-left: -1px;
}

.input-group-prepend {
  margin-right: -1px;
}

.input-group-append {
  margin-left: -1px;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.input-group-text input[type="radio"],
.input-group-text input[type="checkbox"] {
  margin-top: 0;
}

.input-group > .input-group-prepend > .btn,
.input-group > .input-group-prepend > .input-group-text,
.input-group > .input-group-append:not(:last-child) > .btn,
.input-group > .input-group-append:not(:last-child) > .input-group-text,
.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),
.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group > .input-group-append > .btn,
.input-group > .input-group-append > .input-group-text,
.input-group > .input-group-prepend:not(:first-child) > .btn,
.input-group > .input-group-prepend:not(:first-child) > .input-group-text,
.input-group > .input-group-prepend:first-child > .btn:not(:first-child),
.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.custom-control {
  position: relative;
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5rem;
}

.custom-control-inline {
  display: inline-flex;
  margin-right: 1rem;
}

.custom-control-input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-control-input:checked ~ .custom-control-label::before {
  color: #ffffff;
  background-color: #007bff;
  box-shadow: none;
}

.custom-control-input:focus ~ .custom-control-label::before {
  box-shadow: 0 0 0 1px #ffffff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-control-input:active ~ .custom-control-label::before {
  color: #ffffff;
  background-color: #b3d7ff;
  box-shadow: none;
}

.custom-control-input:disabled ~ .custom-control-label {
  color: #6c757d;
}

.custom-control-input:disabled ~ .custom-control-label::before {
  background-color: #e9ecef;
}

.custom-control-label {
  margin-bottom: 0;
}

.custom-control-label::before {
  position: absolute;
  top: 0.25rem;
  left: 0;
  display: block;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
  content: "";
  user-select: none;
  background-color: #dee2e6;
  box-shadow: inset 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
}

.custom-control-label::after {
  position: absolute;
  top: 0.25rem;
  left: 0;
  display: block;
  width: 1rem;
  height: 1rem;
  content: "";
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.custom-checkbox .custom-control-label::before {
  border-radius: 0.25rem;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #007bff;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23ffffff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
}

.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {
  background-color: #007bff;
  box-shadow: none;
}

.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23ffffff' d='M0 2h4'/%3E%3C/svg%3E");
}

.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {
  background-color: rgba(0, 123, 255, 0.5);
}

.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {
  background-color: rgba(0, 123, 255, 0.5);
}

.custom-radio .custom-control-label::before {
  border-radius: 50%;
}

.custom-radio .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #007bff;
}

.custom-radio .custom-control-input:checked ~ .custom-control-label::after {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23ffffff'/%3E%3C/svg%3E");
}

.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {
  background-color: rgba(0, 123, 255, 0.5);
}

.custom-select {
  display: inline-block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
  background: #ffffff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right 0.75rem center;
  background-size: 8px 10px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  appearance: none;
}

.custom-select:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 5px rgba(128, 189, 255, 0.5);
}

.custom-select:focus::-ms-value {
  color: #495057;
  background-color: #ffffff;
}

.custom-select[multiple], .custom-select[size]:not([size="1"]) {
  height: auto;
  padding-right: 0.75rem;
  background-image: none;
}

.custom-select:disabled {
  color: #6c757d;
  background-color: #e9ecef;
}

.custom-select::-ms-expand {
  opacity: 0;
}

.custom-select-sm {
  height: calc(1.8125rem + 2px);
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 75%;
}

.custom-select-lg {
  height: calc(2.875rem + 2px);
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 125%;
}

.custom-file {
  position: relative;
  display: inline-block;
  width: 100%;
  height: calc(2.25rem + 2px);
  margin-bottom: 0;
}

.custom-file-input {
  position: relative;
  z-index: 2;
  width: 100%;
  height: calc(2.25rem + 2px);
  margin: 0;
  opacity: 0;
}

.custom-file-input:focus ~ .custom-file-label {
  border-color: #80bdff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-file-input:focus ~ .custom-file-label::after {
  border-color: #80bdff;
}

.custom-file-input:lang(en) ~ .custom-file-label::after {
  content: "Browse";
}

.custom-file-label {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  color: #495057;
  background-color: #ffffff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 transparent;
}

.custom-file-label::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: block;
  height: calc(calc(2.25rem + 2px) - 1px * 2);
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  color: #495057;
  content: "Browse";
  background-color: #e9ecef;
  border-left: 1px solid #ced4da;
  border-radius: 0 0.25rem 0.25rem 0;
}

.custom-range {
  width: 100%;
  padding-left: 0;
  background-color: transparent;
  appearance: none;
}

.custom-range:focus {
  outline: none;
}

.custom-range::-moz-focus-outer {
  border: 0;
}

.custom-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  background-color: #007bff;
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.1);
  appearance: none;
}

.custom-range::-webkit-slider-thumb:focus {
  outline: none;
  box-shadow: 0 0 0 1px #ffffff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-range::-webkit-slider-thumb:active {
  background-color: #b3d7ff;
}

.custom-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
  box-shadow: inset 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
}

.custom-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: #007bff;
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.1);
  appearance: none;
}

.custom-range::-moz-range-thumb:focus {
  outline: none;
  box-shadow: 0 0 0 1px #ffffff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-range::-moz-range-thumb:active {
  background-color: #b3d7ff;
}

.custom-range::-moz-range-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
  box-shadow: inset 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
}

.custom-range::-ms-thumb {
  width: 1rem;
  height: 1rem;
  background-color: #007bff;
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.1);
  appearance: none;
}

.custom-range::-ms-thumb:focus {
  outline: none;
  box-shadow: 0 0 0 1px #ffffff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-range::-ms-thumb:active {
  background-color: #b3d7ff;
}

.custom-range::-ms-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  border-width: 0.5rem;
  box-shadow: inset 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
}

.custom-range::-ms-fill-lower {
  background-color: #dee2e6;
  border-radius: 1rem;
}

.custom-range::-ms-fill-upper {
  margin-right: 15px;
  background-color: #dee2e6;
  border-radius: 1rem;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: 0.5rem 1rem;
}

.nav-link:hover, .nav-link:focus {
  text-decoration: none;
}

.nav-link.disabled {
  color: #6c757d;
}

.nav-tabs {
  border-bottom: 1px solid #dee2e6;
}

.nav-tabs .nav-item {
  margin-bottom: -1px;
}

.nav-tabs .nav-link {
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
  border-color: #e9ecef #e9ecef #dee2e6;
}

.nav-tabs .nav-link.disabled {
  color: #6c757d;
  background-color: transparent;
  border-color: transparent;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #495057;
  background-color: #ffffff;
  border-color: #dee2e6 #dee2e6 #ffffff;
}

.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav-pills .nav-link {
  border-radius: 0.25rem;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #ffffff;
  background-color: #007bff;
}

.nav-fill .nav-item {
  flex: 1 1 auto;
  text-align: center;
}

.nav-justified .nav-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}

.tab-content > .tab-pane {
  display: none;
}

.tab-content > .active {
  display: block;
}

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.5rem;
}

.navbar > .container,
.navbar > .container-fluid {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 0.5rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
}

.navbar-brand:hover, .navbar-brand:focus {
  text-decoration: none;
}

.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}

.navbar-nav .dropdown-menu {
  position: static;
  float: none;
}

.navbar-text {
  display: inline-block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.navbar-toggler:hover, .navbar-toggler:focus {
  text-decoration: none;
}

.navbar-toggler:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: no-repeat center center;
  background-size: 100% 100%;
}

@media (max-width: 575.98px) {
  .navbar-expand-sm > .container,
  .navbar-expand-sm > .container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width: 576px) {
  .navbar-expand-sm {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-sm .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: 1rem;
    padding-left: 1rem;
  }
  .navbar-expand-sm > .container,
  .navbar-expand-sm > .container-fluid {
    flex-wrap: nowrap;
  }
  .navbar-expand-sm .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-sm .navbar-toggler {
    display: none;
  }
}

@media (max-width: 767.98px) {
  .navbar-expand-md > .container,
  .navbar-expand-md > .container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width: 768px) {
  .navbar-expand-md {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-md .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: 1rem;
    padding-left: 1rem;
  }
  .navbar-expand-md > .container,
  .navbar-expand-md > .container-fluid {
    flex-wrap: nowrap;
  }
  .navbar-expand-md .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-md .navbar-toggler {
    display: none;
  }
}

@media (max-width: 991.98px) {
  .navbar-expand-lg > .container,
  .navbar-expand-lg > .container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width: 992px) {
  .navbar-expand-lg {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 1rem;
    padding-left: 1rem;
  }
  .navbar-expand-lg > .container,
  .navbar-expand-lg > .container-fluid {
    flex-wrap: nowrap;
  }
  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
}

@media (max-width: 1199.98px) {
  .navbar-expand-xl > .container,
  .navbar-expand-xl > .container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width: 1200px) {
  .navbar-expand-xl {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: 1rem;
    padding-left: 1rem;
  }
  .navbar-expand-xl > .container,
  .navbar-expand-xl > .container-fluid {
    flex-wrap: nowrap;
  }
  .navbar-expand-xl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xl .navbar-toggler {
    display: none;
  }
}

.navbar-expand {
  flex-flow: row nowrap;
  justify-content: flex-start;
}

.navbar-expand > .container,
.navbar-expand > .container-fluid {
  padding-right: 0;
  padding-left: 0;
}

.navbar-expand .navbar-nav {
  flex-direction: row;
}

.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}

.navbar-expand .navbar-nav .nav-link {
  padding-right: 1rem;
  padding-left: 1rem;
}

.navbar-expand > .container,
.navbar-expand > .container-fluid {
  flex-wrap: nowrap;
}

.navbar-expand .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}

.navbar-expand .navbar-toggler {
  display: none;
}

.navbar-light .navbar-brand {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.5);
}

.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
  color: rgba(0, 0, 0, 0.7);
}

.navbar-light .navbar-nav .nav-link.disabled {
  color: rgba(0, 0, 0, 0.3);
}

.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .nav-link.active {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.5);
  border-color: rgba(0, 0, 0, 0.1);
}

.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.navbar-light .navbar-text {
  color: rgba(0, 0, 0, 0.5);
}

.navbar-light .navbar-text a {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-dark .navbar-brand {
  color: #ffffff;
}

.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {
  color: #ffffff;
}

.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.75);
}

.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
  color: white;
}

.navbar-dark .navbar-nav .nav-link.disabled {
  color: rgba(255, 255, 255, 0.25);
}

.navbar-dark .navbar-nav .show > .nav-link,
.navbar-dark .navbar-nav .active > .nav-link,
.navbar-dark .navbar-nav .nav-link.show,
.navbar-dark .navbar-nav .nav-link.active {
  color: #ffffff;
}

.navbar-dark .navbar-toggler {
  color: rgba(255, 255, 255, 0.75);
  border-color: rgba(255, 255, 255, 0.1);
}

.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.75)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.navbar-dark .navbar-text {
  color: rgba(255, 255, 255, 0.75);
}

.navbar-dark .navbar-text a {
  color: #ffffff;
}

.navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {
  color: #ffffff;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #ffffff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card > hr {
  margin-right: 0;
  margin-left: 0;
}

.card > .list-group:first-child .list-group-item:first-child {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.card > .list-group:last-child .list-group-item:last-child {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.card-body {
  flex: 1 1 auto;
  padding: 1.25rem;
}

.card-title {
  margin-bottom: 0.75rem;
}

.card-subtitle {
  margin-top: -0.375rem;
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link:hover {
  text-decoration: none;
}

.card-link + .card-link {
  margin-left: 1.25rem;
}

.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 0 solid rgba(0, 0, 0, 0.125);
}

.card-header:first-child {
  border-radius: calc(0.25rem - 0) calc(0.25rem - 0) 0 0;
}

.card-header + .list-group .list-group-item:first-child {
  border-top: 0;
}

.card-footer {
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 0 solid rgba(0, 0, 0, 0.125);
}

.card-footer:last-child {
  border-radius: 0 0 calc(0.25rem - 0) calc(0.25rem - 0);
}

.card-header-tabs {
  margin-right: -0.625rem;
  margin-bottom: -0.75rem;
  margin-left: -0.625rem;
  border-bottom: 0;
}

.card-header-pills {
  margin-right: -0.625rem;
  margin-left: -0.625rem;
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
}

.card-img {
  width: 100%;
  border-radius: calc(0.25rem - 0);
}

.card-img-top {
  width: 100%;
  border-top-left-radius: calc(0.25rem - 0);
  border-top-right-radius: calc(0.25rem - 0);
}

.card-img-bottom {
  width: 100%;
  border-bottom-right-radius: calc(0.25rem - 0);
  border-bottom-left-radius: calc(0.25rem - 0);
}

.card-deck {
  display: flex;
  flex-direction: column;
}

.card-deck .card {
  margin-bottom: 7.5px;
}

@media (min-width: 576px) {
  .card-deck {
    flex-flow: row wrap;
    margin-right: -7.5px;
    margin-left: -7.5px;
  }
  .card-deck .card {
    display: flex;
    flex: 1 0 0%;
    flex-direction: column;
    margin-right: 7.5px;
    margin-bottom: 0;
    margin-left: 7.5px;
  }
}

.card-group {
  display: flex;
  flex-direction: column;
}

.card-group > .card {
  margin-bottom: 7.5px;
}

@media (min-width: 576px) {
  .card-group {
    flex-flow: row wrap;
  }
  .card-group > .card {
    flex: 1 0 0%;
    margin-bottom: 0;
  }
  .card-group > .card + .card {
    margin-left: 0;
    border-left: 0;
  }
  .card-group > .card:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .card-group > .card:first-child .card-img-top,
  .card-group > .card:first-child .card-header {
    border-top-right-radius: 0;
  }
  .card-group > .card:first-child .card-img-bottom,
  .card-group > .card:first-child .card-footer {
    border-bottom-right-radius: 0;
  }
  .card-group > .card:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .card-group > .card:last-child .card-img-top,
  .card-group > .card:last-child .card-header {
    border-top-left-radius: 0;
  }
  .card-group > .card:last-child .card-img-bottom,
  .card-group > .card:last-child .card-footer {
    border-bottom-left-radius: 0;
  }
  .card-group > .card:only-child {
    border-radius: 0.25rem;
  }
  .card-group > .card:only-child .card-img-top,
  .card-group > .card:only-child .card-header {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  .card-group > .card:only-child .card-img-bottom,
  .card-group > .card:only-child .card-footer {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) {
    border-radius: 0;
  }
  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top,
  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,
  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-header,
  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-footer {
    border-radius: 0;
  }
}

.card-columns .card {
  margin-bottom: 0.75rem;
}

@media (min-width: 576px) {
  .card-columns {
    column-count: 3;
    column-gap: 1.25rem;
    orphans: 1;
    widows: 1;
  }
  .card-columns .card {
    display: inline-block;
    width: 100%;
  }
}

.accordion .card:not(:first-of-type):not(:last-of-type) {
  border-bottom: 0;
  border-radius: 0;
}

.accordion .card:not(:first-of-type) .card-header:first-child {
  border-radius: 0;
}

.accordion .card:first-of-type {
  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.accordion .card:last-of-type {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: #e9ecef;
  border-radius: 0.25rem;
}

.breadcrumb-item + .breadcrumb-item {
  padding-left: 0.5rem;
}

.breadcrumb-item + .breadcrumb-item::before {
  display: inline-block;
  padding-right: 0.5rem;
  color: #6c757d;
  content: "/";
}

.breadcrumb-item + .breadcrumb-item:hover::before {
  text-decoration: underline;
}

.breadcrumb-item + .breadcrumb-item:hover::before {
  text-decoration: none;
}

.breadcrumb-item.active {
  color: #6c757d;
}

.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
}

.page-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #007bff;
  background-color: #ffffff;
  border: 1px solid #dee2e6;
}

.page-link:hover {
  z-index: 2;
  color: #0056b3;
  text-decoration: none;
  background-color: #e9ecef;
  border-color: #dee2e6;
}

.page-link:focus {
  z-index: 2;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.page-link:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.page-item:first-child .page-link {
  margin-left: 0;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.page-item:last-child .page-link {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.page-item.active .page-link {
  z-index: 1;
  color: #ffffff;
  background-color: #007bff;
  border-color: #007bff;
}

.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  cursor: auto;
  background-color: #ffffff;
  border-color: #dee2e6;
}

.pagination-lg .page-link {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  line-height: 1.5;
}

.pagination-lg .page-item:first-child .page-link {
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
}

.pagination-lg .page-item:last-child .page-link {
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}

.pagination-sm .page-link {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
}

.pagination-sm .page-item:first-child .page-link {
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
}

.pagination-sm .page-item:last-child .page-link {
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}

.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
}

.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}

.badge-pill {
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
}

.badge-primary {
  color: #ffffff;
  background-color: #007bff;
}

.badge-primary[href]:hover, .badge-primary[href]:focus {
  color: #ffffff;
  text-decoration: none;
  background-color: #0062cc;
}

.badge-secondary {
  color: #ffffff;
  background-color: #6c757d;
}

.badge-secondary[href]:hover, .badge-secondary[href]:focus {
  color: #ffffff;
  text-decoration: none;
  background-color: #545b62;
}

.badge-success {
  color: #ffffff;
  background-color: #28a745;
}

.badge-success[href]:hover, .badge-success[href]:focus {
  color: #ffffff;
  text-decoration: none;
  background-color: #1e7e34;
}

.badge-info {
  color: #ffffff;
  background-color: #17a2b8;
}

.badge-info[href]:hover, .badge-info[href]:focus {
  color: #ffffff;
  text-decoration: none;
  background-color: #117a8b;
}

.badge-warning {
  color: #1F2D3D;
  background-color: #ffc107;
}

.badge-warning[href]:hover, .badge-warning[href]:focus {
  color: #1F2D3D;
  text-decoration: none;
  background-color: #d39e00;
}

.badge-danger {
  color: #ffffff;
  background-color: #dc3545;
}

.badge-danger[href]:hover, .badge-danger[href]:focus {
  color: #ffffff;
  text-decoration: none;
  background-color: #bd2130;
}

.badge-light {
  color: #1F2D3D;
  background-color: #f8f9fa;
}

.badge-light[href]:hover, .badge-light[href]:focus {
  color: #1F2D3D;
  text-decoration: none;
  background-color: #dae0e5;
}

.badge-dark {
  color: #ffffff;
  background-color: #343a40;
}

.badge-dark[href]:hover, .badge-dark[href]:focus {
  color: #ffffff;
  text-decoration: none;
  background-color: #1d2124;
}

.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: 0.3rem;
}

@media (min-width: 576px) {
  .jumbotron {
    padding: 4rem 2rem;
  }
}

.jumbotron-fluid {
  padding-right: 0;
  padding-left: 0;
  border-radius: 0;
}

.alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.alert-heading {
  color: inherit;
}

.alert-link {
  font-weight: 700;
}

.alert-dismissible {
  padding-right: 4rem;
}

.alert-dismissible .close, .alert-dismissible .mailbox-attachment-close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.75rem 1.25rem;
  color: inherit;
}

.alert-primary {
  color: #004085;
  background-color: #cce5ff;
  border-color: #b8daff;
}

.alert-primary hr {
  border-top-color: #9fcdff;
}

.alert-primary .alert-link {
  color: #002752;
}

.alert-secondary {
  color: #383d41;
  background-color: #e2e3e5;
  border-color: #d6d8db;
}

.alert-secondary hr {
  border-top-color: #c8cbcf;
}

.alert-secondary .alert-link {
  color: #202326;
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

.alert-success hr {
  border-top-color: #b1dfbb;
}

.alert-success .alert-link {
  color: #0b2e13;
}

.alert-info {
  color: #0c5460;
  background-color: #d1ecf1;
  border-color: #bee5eb;
}

.alert-info hr {
  border-top-color: #abdde5;
}

.alert-info .alert-link {
  color: #062c33;
}

.alert-warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}

.alert-warning hr {
  border-top-color: #ffe8a1;
}

.alert-warning .alert-link {
  color: #533f03;
}

.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

.alert-danger hr {
  border-top-color: #f1b0b7;
}

.alert-danger .alert-link {
  color: #491217;
}

.alert-light {
  color: #818182;
  background-color: #fefefe;
  border-color: #fdfdfe;
}

.alert-light hr {
  border-top-color: #ececf6;
}

.alert-light .alert-link {
  color: #686868;
}

.alert-dark {
  color: #1b1e21;
  background-color: #d6d8d9;
  border-color: #c6c8ca;
}

.alert-dark hr {
  border-top-color: #b9bbbe;
}

.alert-dark .alert-link {
  color: #040505;
}

@keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0;
  }
  to {
    background-position: 0 0;
  }
}

.progress {
  display: flex;
  height: 1rem;
  overflow: hidden;
  font-size: 0.75rem;
  background-color: #e9ecef;
  border-radius: 0.25rem;
  box-shadow: inset 0 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
}

.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  text-align: center;
  white-space: nowrap;
  background-color: #007bff;
  transition: width 0.6s ease;
}

@media screen and (prefers-reduced-motion: reduce) {
  .progress-bar {
    transition: none;
  }
}

.progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 1rem 1rem;
}

.progress-bar-animated {
  animation: progress-bar-stripes 1s linear infinite;
}

.media {
  display: flex;
  align-items: flex-start;
}

.media-body {
  flex: 1;
}

.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
}

.list-group-item-action {
  width: 100%;
  color: #495057;
  text-align: inherit;
}

.list-group-item-action:hover, .list-group-item-action:focus {
  color: #495057;
  text-decoration: none;
  background-color: #f8f9fa;
}

.list-group-item-action:active {
  color: #212529;
  background-color: #e9ecef;
}

.list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.list-group-item:first-child {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.list-group-item:hover, .list-group-item:focus {
  z-index: 1;
  text-decoration: none;
}

.list-group-item.disabled, .list-group-item:disabled {
  color: #6c757d;
  background-color: #ffffff;
}

.list-group-item.active {
  z-index: 2;
  color: #ffffff;
  background-color: #007bff;
  border-color: #007bff;
}

.list-group-flush .list-group-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}

.list-group-flush:first-child .list-group-item:first-child {
  border-top: 0;
}

.list-group-flush:last-child .list-group-item:last-child {
  border-bottom: 0;
}

.list-group-item-primary {
  color: #004085;
  background-color: #b8daff;
}

.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {
  color: #004085;
  background-color: #9fcdff;
}

.list-group-item-primary.list-group-item-action.active {
  color: #ffffff;
  background-color: #004085;
  border-color: #004085;
}

.list-group-item-secondary {
  color: #383d41;
  background-color: #d6d8db;
}

.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {
  color: #383d41;
  background-color: #c8cbcf;
}

.list-group-item-secondary.list-group-item-action.active {
  color: #ffffff;
  background-color: #383d41;
  border-color: #383d41;
}

.list-group-item-success {
  color: #155724;
  background-color: #c3e6cb;
}

.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {
  color: #155724;
  background-color: #b1dfbb;
}

.list-group-item-success.list-group-item-action.active {
  color: #ffffff;
  background-color: #155724;
  border-color: #155724;
}

.list-group-item-info {
  color: #0c5460;
  background-color: #bee5eb;
}

.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {
  color: #0c5460;
  background-color: #abdde5;
}

.list-group-item-info.list-group-item-action.active {
  color: #ffffff;
  background-color: #0c5460;
  border-color: #0c5460;
}

.list-group-item-warning {
  color: #856404;
  background-color: #ffeeba;
}

.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {
  color: #856404;
  background-color: #ffe8a1;
}

.list-group-item-warning.list-group-item-action.active {
  color: #ffffff;
  background-color: #856404;
  border-color: #856404;
}

.list-group-item-danger {
  color: #721c24;
  background-color: #f5c6cb;
}

.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {
  color: #721c24;
  background-color: #f1b0b7;
}

.list-group-item-danger.list-group-item-action.active {
  color: #ffffff;
  background-color: #721c24;
  border-color: #721c24;
}

.list-group-item-light {
  color: #818182;
  background-color: #fdfdfe;
}

.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {
  color: #818182;
  background-color: #ececf6;
}

.list-group-item-light.list-group-item-action.active {
  color: #ffffff;
  background-color: #818182;
  border-color: #818182;
}

.list-group-item-dark {
  color: #1b1e21;
  background-color: #c6c8ca;
}

.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {
  color: #1b1e21;
  background-color: #b9bbbe;
}

.list-group-item-dark.list-group-item-action.active {
  color: #ffffff;
  background-color: #1b1e21;
  border-color: #1b1e21;
}

.close, .mailbox-attachment-close {
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #ffffff;
  opacity: .5;
}

.close:hover, .mailbox-attachment-close:hover, .close:focus, .mailbox-attachment-close:focus {
  color: #000;
  text-decoration: none;
  opacity: .75;
}

.close:not(:disabled):not(.disabled), .mailbox-attachment-close:not(:disabled):not(.disabled) {
  cursor: pointer;
}

button.close, button.mailbox-attachment-close {
  padding: 0;
  background-color: transparent;
  border: 0;
  -webkit-appearance: none;
}

.modal-open {
  overflow: hidden;
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: none;
  overflow: hidden;
  outline: 0;
}

.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}

.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -25%);
}

@media screen and (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog {
    transition: none;
  }
}

.modal.show .modal-dialog {
  transform: translate(0, 0);
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - (0.5rem * 2));
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.5);
  outline: 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000;
}

.modal-backdrop.fade {
  opacity: 0;
}

.modal-backdrop.show {
  opacity: 0.5;
}

.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}

.modal-header .close, .modal-header .mailbox-attachment-close {
  padding: 1rem;
  margin: -1rem -1rem -1rem auto;
}

.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #e9ecef;
}

.modal-footer > :not(:first-child) {
  margin-left: .25rem;
}

.modal-footer > :not(:last-child) {
  margin-right: .25rem;
}

.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }
  .modal-dialog-centered {
    min-height: calc(100% - (1.75rem * 2));
  }
  .modal-content {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  }
  .modal-sm {
    max-width: 300px;
  }
}

@media (min-width: 992px) {
  .modal-lg {
    max-width: 800px;
  }
}

.tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  margin: 0;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  opacity: 0;
}

.tooltip.show {
  opacity: 0.9;
}

.tooltip .arrow {
  position: absolute;
  display: block;
  width: 0.8rem;
  height: 0.4rem;
}

.tooltip .arrow::before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-tooltip-top, .bs-tooltip-auto[x-placement^="top"] {
  padding: 0.4rem 0;
}

.bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^="top"] .arrow {
  bottom: 0;
}

.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^="top"] .arrow::before {
  top: 0;
  border-width: 0.4rem 0.4rem 0;
  border-top-color: #000;
}

.bs-tooltip-right, .bs-tooltip-auto[x-placement^="right"] {
  padding: 0 0.4rem;
}

.bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^="right"] .arrow {
  left: 0;
  width: 0.4rem;
  height: 0.8rem;
}

.bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^="right"] .arrow::before {
  right: 0;
  border-width: 0.4rem 0.4rem 0.4rem 0;
  border-right-color: #000;
}

.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^="bottom"] {
  padding: 0.4rem 0;
}

.bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^="bottom"] .arrow {
  top: 0;
}

.bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
  bottom: 0;
  border-width: 0 0.4rem 0.4rem;
  border-bottom-color: #000;
}

.bs-tooltip-left, .bs-tooltip-auto[x-placement^="left"] {
  padding: 0 0.4rem;
}

.bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^="left"] .arrow {
  right: 0;
  width: 0.4rem;
  height: 0.8rem;
}

.bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^="left"] .arrow::before {
  left: 0;
  border-width: 0.4rem 0 0.4rem 0.4rem;
  border-left-color: #000;
}

.tooltip-inner {
  max-width: 200px;
  padding: 0.25rem 0.5rem;
  color: #ffffff;
  text-align: center;
  background-color: #000;
  border-radius: 0.25rem;
}

.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: block;
  max-width: 276px;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
}

.popover .arrow {
  position: absolute;
  display: block;
  width: 1rem;
  height: 0.5rem;
  margin: 0 0.3rem;
}

.popover .arrow::before, .popover .arrow::after {
  position: absolute;
  display: block;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-popover-top, .bs-popover-auto[x-placement^="top"] {
  margin-bottom: 0.5rem;
}

.bs-popover-top .arrow, .bs-popover-auto[x-placement^="top"] .arrow {
  bottom: calc((0.5rem + 1px) * -1);
}

.bs-popover-top .arrow::before, .bs-popover-auto[x-placement^="top"] .arrow::before,
.bs-popover-top .arrow::after,
.bs-popover-auto[x-placement^="top"] .arrow::after {
  border-width: 0.5rem 0.5rem 0;
}

.bs-popover-top .arrow::before, .bs-popover-auto[x-placement^="top"] .arrow::before {
  bottom: 0;
  border-top-color: rgba(0, 0, 0, 0.25);
}


.bs-popover-top .arrow::after,
.bs-popover-auto[x-placement^="top"] .arrow::after {
  bottom: 1px;
  border-top-color: #ffffff;
}

.bs-popover-right, .bs-popover-auto[x-placement^="right"] {
  margin-left: 0.5rem;
}

.bs-popover-right .arrow, .bs-popover-auto[x-placement^="right"] .arrow {
  left: calc((0.5rem + 1px) * -1);
  width: 0.5rem;
  height: 1rem;
  margin: 0.3rem 0;
}

.bs-popover-right .arrow::before, .bs-popover-auto[x-placement^="right"] .arrow::before,
.bs-popover-right .arrow::after,
.bs-popover-auto[x-placement^="right"] .arrow::after {
  border-width: 0.5rem 0.5rem 0.5rem 0;
}

.bs-popover-right .arrow::before, .bs-popover-auto[x-placement^="right"] .arrow::before {
  left: 0;
  border-right-color: rgba(0, 0, 0, 0.25);
}


.bs-popover-right .arrow::after,
.bs-popover-auto[x-placement^="right"] .arrow::after {
  left: 1px;
  border-right-color: #ffffff;
}

.bs-popover-bottom, .bs-popover-auto[x-placement^="bottom"] {
  margin-top: 0.5rem;
}

.bs-popover-bottom .arrow, .bs-popover-auto[x-placement^="bottom"] .arrow {
  top: calc((0.5rem + 1px) * -1);
}

.bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^="bottom"] .arrow::before,
.bs-popover-bottom .arrow::after,
.bs-popover-auto[x-placement^="bottom"] .arrow::after {
  border-width: 0 0.5rem 0.5rem 0.5rem;
}

.bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^="bottom"] .arrow::before {
  top: 0;
  border-bottom-color: rgba(0, 0, 0, 0.25);
}


.bs-popover-bottom .arrow::after,
.bs-popover-auto[x-placement^="bottom"] .arrow::after {
  top: 1px;
  border-bottom-color: #ffffff;
}

.bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^="bottom"] .popover-header::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 1rem;
  margin-left: -0.5rem;
  content: "";
  border-bottom: 1px solid #f7f7f7;
}

.bs-popover-left, .bs-popover-auto[x-placement^="left"] {
  margin-right: 0.5rem;
}

.bs-popover-left .arrow, .bs-popover-auto[x-placement^="left"] .arrow {
  right: calc((0.5rem + 1px) * -1);
  width: 0.5rem;
  height: 1rem;
  margin: 0.3rem 0;
}

.bs-popover-left .arrow::before, .bs-popover-auto[x-placement^="left"] .arrow::before,
.bs-popover-left .arrow::after,
.bs-popover-auto[x-placement^="left"] .arrow::after {
  border-width: 0.5rem 0 0.5rem 0.5rem;
}

.bs-popover-left .arrow::before, .bs-popover-auto[x-placement^="left"] .arrow::before {
  right: 0;
  border-left-color: rgba(0, 0, 0, 0.25);
}


.bs-popover-left .arrow::after,
.bs-popover-auto[x-placement^="left"] .arrow::after {
  right: 1px;
  border-left-color: #ffffff;
}

.popover-header {
  padding: 0.5rem 0.75rem;
  margin-bottom: 0;
  font-size: 1rem;
  color: inherit;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}

.popover-header:empty {
  display: none;
}

.popover-body {
  padding: 0.5rem 0.75rem;
  color: #212529;
}

.carousel {
  position: relative;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-item {
  position: relative;
  display: none;
  align-items: center;
  width: 100%;
  transition: transform 0.6s ease;
  backface-visibility: hidden;
  perspective: 1000px;
}

@media screen and (prefers-reduced-motion: reduce) {
  .carousel-item {
    transition: none;
  }
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}

.carousel-item-next,
.carousel-item-prev {
  position: absolute;
  top: 0;
}

.carousel-item-next.carousel-item-left,
.carousel-item-prev.carousel-item-right {
  transform: translateX(0);
}

@supports (transform-style: preserve-3d) {
  .carousel-item-next.carousel-item-left,
  .carousel-item-prev.carousel-item-right {
    transform: translate3d(0, 0, 0);
  }
}

.carousel-item-next,
.active.carousel-item-right {
  transform: translateX(100%);
}

@supports (transform-style: preserve-3d) {
  .carousel-item-next,
  .active.carousel-item-right {
    transform: translate3d(100%, 0, 0);
  }
}

.carousel-item-prev,
.active.carousel-item-left {
  transform: translateX(-100%);
}

@supports (transform-style: preserve-3d) {
  .carousel-item-prev,
  .active.carousel-item-left {
    transform: translate3d(-100%, 0, 0);
  }
}

.carousel-fade .carousel-item {
  opacity: 0;
  transition-duration: .6s;
  transition-property: opacity;
}

.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-left,
.carousel-fade .carousel-item-prev.carousel-item-right {
  opacity: 1;
}

.carousel-fade .active.carousel-item-left,
.carousel-fade .active.carousel-item-right {
  opacity: 0;
}

.carousel-fade .carousel-item-next,
.carousel-fade .carousel-item-prev,
.carousel-fade .carousel-item.active,
.carousel-fade .active.carousel-item-left,
.carousel-fade .active.carousel-item-prev {
  transform: translateX(0);
}

@supports (transform-style: preserve-3d) {
  .carousel-fade .carousel-item-next,
  .carousel-fade .carousel-item-prev,
  .carousel-fade .carousel-item.active,
  .carousel-fade .active.carousel-item-left,
  .carousel-fade .active.carousel-item-prev {
    transform: translate3d(0, 0, 0);
  }
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  color: #ffffff;
  text-align: center;
  opacity: 0.5;
}

.carousel-control-prev:hover, .carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
  color: #ffffff;
  text-decoration: none;
  outline: 0;
  opacity: .9;
}

.carousel-control-prev {
  left: 0;
}

.carousel-control-next {
  right: 0;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: transparent no-repeat center center;
  background-size: 100% 100%;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
}

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 10px;
  left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  padding-left: 0;
  margin-right: 15%;
  margin-left: 15%;
  list-style: none;
}

.carousel-indicators li {
  position: relative;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  background-color: rgba(255, 255, 255, 0.5);
}

.carousel-indicators li::before {
  position: absolute;
  top: -10px;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 10px;
  content: "";
}

.carousel-indicators li::after {
  position: absolute;
  bottom: -10px;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 10px;
  content: "";
}

.carousel-indicators .active {
  background-color: #ffffff;
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #ffffff;
  text-align: center;
}

.align-baseline {
  vertical-align: baseline !important;
}

.align-top {
  vertical-align: top !important;
}

.align-middle {
  vertical-align: middle !important;
}

.align-bottom {
  vertical-align: bottom !important;
}

.align-text-bottom {
  vertical-align: text-bottom !important;
}

.align-text-top {
  vertical-align: text-top !important;
}

.bg-primary, .label-primary {
  background-color: #007bff !important;
}

a.bg-primary:hover, a.label-primary:hover, a.bg-primary:focus, a.label-primary:focus,
button.bg-primary:hover,
button.label-primary:hover,
button.bg-primary:focus,
button.label-primary:focus {
  background-color: #0062cc !important;
}

.bg-secondary {
  background-color: #6c757d !important;
}

a.bg-secondary:hover, a.bg-secondary:focus,
button.bg-secondary:hover,
button.bg-secondary:focus {
  background-color: #545b62 !important;
}

.bg-success, .alert-success, .label-success {
  background-color: #28a745 !important;
}

a.bg-success:hover, a.alert-success:hover, a.label-success:hover, a.bg-success:focus, a.alert-success:focus, a.label-success:focus,
button.bg-success:hover,
button.alert-success:hover,
button.label-success:hover,
button.bg-success:focus,
button.alert-success:focus,
button.label-success:focus {
  background-color: #1e7e34 !important;
}

.bg-info, .alert-info, .label-info {
  background-color: #17a2b8 !important;
}

a.bg-info:hover, a.alert-info:hover, a.label-info:hover, a.bg-info:focus, a.alert-info:focus, a.label-info:focus,
button.bg-info:hover,
button.alert-info:hover,
button.label-info:hover,
button.bg-info:focus,
button.alert-info:focus,
button.label-info:focus {
  background-color: #117a8b !important;
}

.bg-warning, .alert-warning, .label-warning {
  background-color: #ffc107 !important;
}

a.bg-warning:hover, a.alert-warning:hover, a.label-warning:hover, a.bg-warning:focus, a.alert-warning:focus, a.label-warning:focus,
button.bg-warning:hover,
button.alert-warning:hover,
button.label-warning:hover,
button.bg-warning:focus,
button.alert-warning:focus,
button.label-warning:focus {
  background-color: #d39e00 !important;
}

.bg-danger, .alert-danger,
.alert-error, .label-danger {
  background-color: #dc3545 !important;
}

a.bg-danger:hover, a.alert-danger:hover,
a.alert-error:hover, a.label-danger:hover, a.bg-danger:focus, a.alert-danger:focus,
a.alert-error:focus, a.label-danger:focus,
button.bg-danger:hover,
button.alert-danger:hover,
button.alert-error:hover,
button.label-danger:hover,
button.bg-danger:focus,
button.alert-danger:focus,
button.alert-error:focus,
button.label-danger:focus {
  background-color: #bd2130 !important;
}

.bg-light {
  background-color: #f8f9fa !important;
}

a.bg-light:hover, a.bg-light:focus,
button.bg-light:hover,
button.bg-light:focus {
  background-color: #dae0e5 !important;
}

.bg-dark {
  background-color: #343a40 !important;
}

a.bg-dark:hover, a.bg-dark:focus,
button.bg-dark:hover,
button.bg-dark:focus {
  background-color: #1d2124 !important;
}

.bg-white {
  background-color: #ffffff !important;
}

.bg-transparent {
  background-color: transparent !important;
}

.border {
  border: 1px solid #dee2e6 !important;
}

.border-top {
  border-top: 1px solid #dee2e6 !important;
}

.border-right {
  border-right: 1px solid #dee2e6 !important;
}

.border-bottom {
  border-bottom: 1px solid #dee2e6 !important;
}

.border-left {
  border-left: 1px solid #dee2e6 !important;
}

.border-0 {
  border: 0 !important;
}

.border-top-0 {
  border-top: 0 !important;
}

.border-right-0 {
  border-right: 0 !important;
}

.border-bottom-0 {
  border-bottom: 0 !important;
}

.border-left-0 {
  border-left: 0 !important;
}

.border-primary {
  border-color: #007bff !important;
}

.border-secondary {
  border-color: #6c757d !important;
}

.border-success {
  border-color: #28a745 !important;
}

.border-info {
  border-color: #17a2b8 !important;
}

.border-warning {
  border-color: #ffc107 !important;
}

.border-danger {
  border-color: #dc3545 !important;
}

.border-light {
  border-color: #f8f9fa !important;
}

.border-dark {
  border-color: #343a40 !important;
}

.border-white {
  border-color: #ffffff !important;
}

.rounded {
  border-radius: 0.25rem !important;
}

.rounded-top {
  border-top-left-radius: 0.25rem !important;
  border-top-right-radius: 0.25rem !important;
}

.rounded-right {
  border-top-right-radius: 0.25rem !important;
  border-bottom-right-radius: 0.25rem !important;
}

.rounded-bottom {
  border-bottom-right-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
}

.rounded-left {
  border-top-left-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.rounded-0 {
  border-radius: 0 !important;
}

.clearfix::after {
  display: block;
  clear: both;
  content: "";
}

.d-none {
  display: none !important;
}

.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-table {
  display: table !important;
}

.d-table-row {
  display: table-row !important;
}

.d-table-cell {
  display: table-cell !important;
}

.d-flex, .info-box, .info-box-icon {
  display: flex !important;
}

.d-inline-flex {
  display: inline-flex !important;
}

@media (min-width: 576px) {
  .d-sm-none {
    display: none !important;
  }
  .d-sm-inline {
    display: inline !important;
  }
  .d-sm-inline-block {
    display: inline-block !important;
  }
  .d-sm-block {
    display: block !important;
  }
  .d-sm-table {
    display: table !important;
  }
  .d-sm-table-row {
    display: table-row !important;
  }
  .d-sm-table-cell {
    display: table-cell !important;
  }
  .d-sm-flex {
    display: flex !important;
  }
  .d-sm-inline-flex {
    display: inline-flex !important;
  }
}

@media (min-width: 768px) {
  .d-md-none {
    display: none !important;
  }
  .d-md-inline {
    display: inline !important;
  }
  .d-md-inline-block {
    display: inline-block !important;
  }
  .d-md-block {
    display: block !important;
  }
  .d-md-table {
    display: table !important;
  }
  .d-md-table-row {
    display: table-row !important;
  }
  .d-md-table-cell {
    display: table-cell !important;
  }
  .d-md-flex {
    display: flex !important;
  }
  .d-md-inline-flex {
    display: inline-flex !important;
  }
}

@media (min-width: 992px) {
  .d-lg-none {
    display: none !important;
  }
  .d-lg-inline {
    display: inline !important;
  }
  .d-lg-inline-block {
    display: inline-block !important;
  }
  .d-lg-block {
    display: block !important;
  }
  .d-lg-table {
    display: table !important;
  }
  .d-lg-table-row {
    display: table-row !important;
  }
  .d-lg-table-cell {
    display: table-cell !important;
  }
  .d-lg-flex {
    display: flex !important;
  }
  .d-lg-inline-flex {
    display: inline-flex !important;
  }
}

@media (min-width: 1200px) {
  .d-xl-none {
    display: none !important;
  }
  .d-xl-inline {
    display: inline !important;
  }
  .d-xl-inline-block {
    display: inline-block !important;
  }
  .d-xl-block {
    display: block !important;
  }
  .d-xl-table {
    display: table !important;
  }
  .d-xl-table-row {
    display: table-row !important;
  }
  .d-xl-table-cell {
    display: table-cell !important;
  }
  .d-xl-flex {
    display: flex !important;
  }
  .d-xl-inline-flex {
    display: inline-flex !important;
  }
}

@media print {
  .d-print-none {
    display: none !important;
  }
  .d-print-inline {
    display: inline !important;
  }
  .d-print-inline-block {
    display: inline-block !important;
  }
  .d-print-block {
    display: block !important;
  }
  .d-print-table {
    display: table !important;
  }
  .d-print-table-row {
    display: table-row !important;
  }
  .d-print-table-cell {
    display: table-cell !important;
  }
  .d-print-flex {
    display: flex !important;
  }
  .d-print-inline-flex {
    display: inline-flex !important;
  }
}

.embed-responsive {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
}

.embed-responsive::before {
  display: block;
  content: "";
}

.embed-responsive .embed-responsive-item,
.embed-responsive iframe,
.embed-responsive embed,
.embed-responsive object,
.embed-responsive video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.embed-responsive-21by9::before {
  padding-top: 42.857143%;
}

.embed-responsive-16by9::before {
  padding-top: 56.25%;
}

.embed-responsive-4by3::before {
  padding-top: 75%;
}

.embed-responsive-1by1::before {
  padding-top: 100%;
}

.flex-row {
  flex-direction: row !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-row-reverse {
  flex-direction: row-reverse !important;
}

.flex-column-reverse {
  flex-direction: column-reverse !important;
}

.flex-wrap {
  flex-wrap: wrap !important;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.flex-fill {
  flex: 1 1 auto !important;
}

.flex-grow-0 {
  flex-grow: 0 !important;
}

.flex-grow-1 {
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  flex-shrink: 1 !important;
}

.justify-content-start {
  justify-content: flex-start !important;
}

.justify-content-end {
  justify-content: flex-end !important;
}

.justify-content-center, .info-box-icon {
  justify-content: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.justify-content-around {
  justify-content: space-around !important;
}

.align-items-start {
  align-items: flex-start !important;
}

.align-items-end {
  align-items: flex-end !important;
}

.align-items-center, .info-box-icon {
  align-items: center !important;
}

.align-items-baseline {
  align-items: baseline !important;
}

.align-items-stretch {
  align-items: stretch !important;
}

.align-content-start {
  align-content: flex-start !important;
}

.align-content-end {
  align-content: flex-end !important;
}

.align-content-center {
  align-content: center !important;
}

.align-content-between {
  align-content: space-between !important;
}

.align-content-around {
  align-content: space-around !important;
}

.align-content-stretch {
  align-content: stretch !important;
}

.align-self-auto {
  align-self: auto !important;
}

.align-self-start {
  align-self: flex-start !important;
}

.align-self-end {
  align-self: flex-end !important;
}

.align-self-center {
  align-self: center !important;
}

.align-self-baseline {
  align-self: baseline !important;
}

.align-self-stretch {
  align-self: stretch !important;
}

@media (min-width: 576px) {
  .flex-sm-row {
    flex-direction: row !important;
  }
  .flex-sm-column {
    flex-direction: column !important;
  }
  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-sm-wrap {
    flex-wrap: wrap !important;
  }
  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .flex-sm-fill {
    flex: 1 1 auto !important;
  }
  .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }
  .justify-content-sm-start {
    justify-content: flex-start !important;
  }
  .justify-content-sm-end {
    justify-content: flex-end !important;
  }
  .justify-content-sm-center {
    justify-content: center !important;
  }
  .justify-content-sm-between {
    justify-content: space-between !important;
  }
  .justify-content-sm-around {
    justify-content: space-around !important;
  }
  .align-items-sm-start {
    align-items: flex-start !important;
  }
  .align-items-sm-end {
    align-items: flex-end !important;
  }
  .align-items-sm-center {
    align-items: center !important;
  }
  .align-items-sm-baseline {
    align-items: baseline !important;
  }
  .align-items-sm-stretch {
    align-items: stretch !important;
  }
  .align-content-sm-start {
    align-content: flex-start !important;
  }
  .align-content-sm-end {
    align-content: flex-end !important;
  }
  .align-content-sm-center {
    align-content: center !important;
  }
  .align-content-sm-between {
    align-content: space-between !important;
  }
  .align-content-sm-around {
    align-content: space-around !important;
  }
  .align-content-sm-stretch {
    align-content: stretch !important;
  }
  .align-self-sm-auto {
    align-self: auto !important;
  }
  .align-self-sm-start {
    align-self: flex-start !important;
  }
  .align-self-sm-end {
    align-self: flex-end !important;
  }
  .align-self-sm-center {
    align-self: center !important;
  }
  .align-self-sm-baseline {
    align-self: baseline !important;
  }
  .align-self-sm-stretch {
    align-self: stretch !important;
  }
}

@media (min-width: 768px) {
  .flex-md-row {
    flex-direction: row !important;
  }
  .flex-md-column {
    flex-direction: column !important;
  }
  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-md-wrap {
    flex-wrap: wrap !important;
  }
  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .flex-md-fill {
    flex: 1 1 auto !important;
  }
  .flex-md-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-md-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }
  .justify-content-md-start {
    justify-content: flex-start !important;
  }
  .justify-content-md-end {
    justify-content: flex-end !important;
  }
  .justify-content-md-center {
    justify-content: center !important;
  }
  .justify-content-md-between {
    justify-content: space-between !important;
  }
  .justify-content-md-around {
    justify-content: space-around !important;
  }
  .align-items-md-start {
    align-items: flex-start !important;
  }
  .align-items-md-end {
    align-items: flex-end !important;
  }
  .align-items-md-center {
    align-items: center !important;
  }
  .align-items-md-baseline {
    align-items: baseline !important;
  }
  .align-items-md-stretch {
    align-items: stretch !important;
  }
  .align-content-md-start {
    align-content: flex-start !important;
  }
  .align-content-md-end {
    align-content: flex-end !important;
  }
  .align-content-md-center {
    align-content: center !important;
  }
  .align-content-md-between {
    align-content: space-between !important;
  }
  .align-content-md-around {
    align-content: space-around !important;
  }
  .align-content-md-stretch {
    align-content: stretch !important;
  }
  .align-self-md-auto {
    align-self: auto !important;
  }
  .align-self-md-start {
    align-self: flex-start !important;
  }
  .align-self-md-end {
    align-self: flex-end !important;
  }
  .align-self-md-center {
    align-self: center !important;
  }
  .align-self-md-baseline {
    align-self: baseline !important;
  }
  .align-self-md-stretch {
    align-self: stretch !important;
  }
}

@media (min-width: 992px) {
  .flex-lg-row {
    flex-direction: row !important;
  }
  .flex-lg-column {
    flex-direction: column !important;
  }
  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }
  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .flex-lg-fill {
    flex: 1 1 auto !important;
  }
  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }
  .justify-content-lg-start {
    justify-content: flex-start !important;
  }
  .justify-content-lg-end {
    justify-content: flex-end !important;
  }
  .justify-content-lg-center {
    justify-content: center !important;
  }
  .justify-content-lg-between {
    justify-content: space-between !important;
  }
  .justify-content-lg-around {
    justify-content: space-around !important;
  }
  .align-items-lg-start {
    align-items: flex-start !important;
  }
  .align-items-lg-end {
    align-items: flex-end !important;
  }
  .align-items-lg-center {
    align-items: center !important;
  }
  .align-items-lg-baseline {
    align-items: baseline !important;
  }
  .align-items-lg-stretch {
    align-items: stretch !important;
  }
  .align-content-lg-start {
    align-content: flex-start !important;
  }
  .align-content-lg-end {
    align-content: flex-end !important;
  }
  .align-content-lg-center {
    align-content: center !important;
  }
  .align-content-lg-between {
    align-content: space-between !important;
  }
  .align-content-lg-around {
    align-content: space-around !important;
  }
  .align-content-lg-stretch {
    align-content: stretch !important;
  }
  .align-self-lg-auto {
    align-self: auto !important;
  }
  .align-self-lg-start {
    align-self: flex-start !important;
  }
  .align-self-lg-end {
    align-self: flex-end !important;
  }
  .align-self-lg-center {
    align-self: center !important;
  }
  .align-self-lg-baseline {
    align-self: baseline !important;
  }
  .align-self-lg-stretch {
    align-self: stretch !important;
  }
}

@media (min-width: 1200px) {
  .flex-xl-row {
    flex-direction: row !important;
  }
  .flex-xl-column {
    flex-direction: column !important;
  }
  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }
  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }
  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }
  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }
  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }
  .flex-xl-fill {
    flex: 1 1 auto !important;
  }
  .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }
  .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }
  .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }
  .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }
  .justify-content-xl-start {
    justify-content: flex-start !important;
  }
  .justify-content-xl-end {
    justify-content: flex-end !important;
  }
  .justify-content-xl-center {
    justify-content: center !important;
  }
  .justify-content-xl-between {
    justify-content: space-between !important;
  }
  .justify-content-xl-around {
    justify-content: space-around !important;
  }
  .align-items-xl-start {
    align-items: flex-start !important;
  }
  .align-items-xl-end {
    align-items: flex-end !important;
  }
  .align-items-xl-center {
    align-items: center !important;
  }
  .align-items-xl-baseline {
    align-items: baseline !important;
  }
  .align-items-xl-stretch {
    align-items: stretch !important;
  }
  .align-content-xl-start {
    align-content: flex-start !important;
  }
  .align-content-xl-end {
    align-content: flex-end !important;
  }
  .align-content-xl-center {
    align-content: center !important;
  }
  .align-content-xl-between {
    align-content: space-between !important;
  }
  .align-content-xl-around {
    align-content: space-around !important;
  }
  .align-content-xl-stretch {
    align-content: stretch !important;
  }
  .align-self-xl-auto {
    align-self: auto !important;
  }
  .align-self-xl-start {
    align-self: flex-start !important;
  }
  .align-self-xl-end {
    align-self: flex-end !important;
  }
  .align-self-xl-center {
    align-self: center !important;
  }
  .align-self-xl-baseline {
    align-self: baseline !important;
  }
  .align-self-xl-stretch {
    align-self: stretch !important;
  }
}

.float-left {
  float: left !important;
}

.float-right {
  float: right !important;
}

.float-none {
  float: none !important;
}

@media (min-width: 576px) {
  .float-sm-left {
    float: left !important;
  }
  .float-sm-right {
    float: right !important;
  }
  .float-sm-none {
    float: none !important;
  }
}

@media (min-width: 768px) {
  .float-md-left {
    float: left !important;
  }
  .float-md-right {
    float: right !important;
  }
  .float-md-none {
    float: none !important;
  }
}

@media (min-width: 992px) {
  .float-lg-left {
    float: left !important;
  }
  .float-lg-right {
    float: right !important;
  }
  .float-lg-none {
    float: none !important;
  }
}

@media (min-width: 1200px) {
  .float-xl-left {
    float: left !important;
  }
  .float-xl-right {
    float: right !important;
  }
  .float-xl-none {
    float: none !important;
  }
}

.position-static {
  position: static !important;
}

.position-relative {
  position: relative !important;
}

.position-absolute {
  position: absolute !important;
}

.position-fixed {
  position: fixed !important;
}

.position-sticky {
  position: sticky !important;
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}

@supports (position: sticky) {
  .sticky-top {
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.shadow-none {
  box-shadow: none !important;
}

.w-25 {
  width: 25% !important;
}

.w-50 {
  width: 50% !important;
}

.w-75 {
  width: 75% !important;
}

.w-100 {
  width: 100% !important;
}

.w-auto {
  width: auto !important;
}

.h-25 {
  height: 25% !important;
}

.h-50 {
  height: 50% !important;
}

.h-75 {
  height: 75% !important;
}

.h-100 {
  height: 100% !important;
}

.h-auto {
  height: auto !important;
}

.mw-100 {
  max-width: 100% !important;
}

.mh-100 {
  max-height: 100% !important;
}

.m-0 {
  margin: 0 !important;
}

.mt-0,
.my-0 {
  margin-top: 0 !important;
}

.mr-0,
.mx-0 {
  margin-right: 0 !important;
}

.mb-0,
.my-0 {
  margin-bottom: 0 !important;
}

.ml-0,
.mx-0 {
  margin-left: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.mt-1,
.my-1 {
  margin-top: 0.25rem !important;
}

.mr-1,
.mx-1 {
  margin-right: 0.25rem !important;
}

.mb-1,
.my-1 {
  margin-bottom: 0.25rem !important;
}

.ml-1,
.mx-1 {
  margin-left: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.mt-2,
.my-2 {
  margin-top: 0.5rem !important;
}

.mr-2,
.mx-2 {
  margin-right: 0.5rem !important;
}

.mb-2, .progress-group,
.my-2 {
  margin-bottom: 0.5rem !important;
}

.ml-2,
.mx-2 {
  margin-left: 0.5rem !important;
}

.m-3 {
  margin: 1rem !important;
}

.mt-3,
.my-3 {
  margin-top: 1rem !important;
}

.mr-3,
.mx-3 {
  margin-right: 1rem !important;
}

.mb-3, .small-box, .card, .info-box, .callout,
.my-3 {
  margin-bottom: 1rem !important;
}

.ml-3,
.mx-3 {
  margin-left: 1rem !important;
}

.m-4 {
  margin: 1.5rem !important;
}

.mt-4,
.my-4 {
  margin-top: 1.5rem !important;
}

.mr-4,
.mx-4 {
  margin-right: 1.5rem !important;
}

.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important;
}

.ml-4,
.mx-4 {
  margin-left: 1.5rem !important;
}

.m-5 {
  margin: 3rem !important;
}

.mt-5,
.my-5 {
  margin-top: 3rem !important;
}

.mr-5,
.mx-5 {
  margin-right: 3rem !important;
}

.mb-5,
.my-5 {
  margin-bottom: 3rem !important;
}

.ml-5,
.mx-5 {
  margin-left: 3rem !important;
}

.p-0 {
  padding: 0 !important;
}

.pt-0,
.py-0 {
  padding-top: 0 !important;
}

.pr-0,
.px-0 {
  padding-right: 0 !important;
}

.pb-0,
.py-0 {
  padding-bottom: 0 !important;
}

.pl-0,
.px-0 {
  padding-left: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.pt-1,
.py-1 {
  padding-top: 0.25rem !important;
}

.pr-1,
.px-1 {
  padding-right: 0.25rem !important;
}

.pb-1,
.py-1 {
  padding-bottom: 0.25rem !important;
}

.pl-1,
.px-1 {
  padding-left: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.pt-2,
.py-2 {
  padding-top: 0.5rem !important;
}

.pr-2,
.px-2 {
  padding-right: 0.5rem !important;
}

.pb-2,
.py-2 {
  padding-bottom: 0.5rem !important;
}

.pl-2,
.px-2 {
  padding-left: 0.5rem !important;
}

.p-3 {
  padding: 1rem !important;
}

.pt-3,
.py-3 {
  padding-top: 1rem !important;
}

.pr-3,
.px-3 {
  padding-right: 1rem !important;
}

.pb-3,
.py-3 {
  padding-bottom: 1rem !important;
}

.pl-3,
.px-3 {
  padding-left: 1rem !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.pt-4,
.py-4 {
  padding-top: 1.5rem !important;
}

.pr-4, .card-body.p-0 .table thead > tr > th:last-of-type,
.card-body.p-0 .table thead > tr > td:last-of-type,
.card-body.p-0 .table tbody > tr > th:last-of-type,
.card-body.p-0 .table tbody > tr > td:last-of-type,
.px-4 {
  padding-right: 1.5rem !important;
}

.pb-4,
.py-4 {
  padding-bottom: 1.5rem !important;
}

.pl-4, .card-body.p-0 .table thead > tr > th:first-of-type,
.card-body.p-0 .table thead > tr > td:first-of-type,
.card-body.p-0 .table tbody > tr > th:first-of-type,
.card-body.p-0 .table tbody > tr > td:first-of-type,
.px-4 {
  padding-left: 1.5rem !important;
}

.p-5 {
  padding: 3rem !important;
}

.pt-5,
.py-5 {
  padding-top: 3rem !important;
}

.pr-5,
.px-5 {
  padding-right: 3rem !important;
}

.pb-5,
.py-5 {
  padding-bottom: 3rem !important;
}

.pl-5,
.px-5 {
  padding-left: 3rem !important;
}

.m-auto {
  margin: auto !important;
}

.mt-auto,
.my-auto {
  margin-top: auto !important;
}

.mr-auto,
.mx-auto {
  margin-right: auto !important;
}

.mb-auto,
.my-auto {
  margin-bottom: auto !important;
}

.ml-auto,
.mx-auto {
  margin-left: auto !important;
}

@media (min-width: 576px) {
  .m-sm-0 {
    margin: 0 !important;
  }
  .mt-sm-0,
  .my-sm-0 {
    margin-top: 0 !important;
  }
  .mr-sm-0,
  .mx-sm-0 {
    margin-right: 0 !important;
  }
  .mb-sm-0,
  .my-sm-0 {
    margin-bottom: 0 !important;
  }
  .ml-sm-0,
  .mx-sm-0 {
    margin-left: 0 !important;
  }
  .m-sm-1 {
    margin: 0.25rem !important;
  }
  .mt-sm-1,
  .my-sm-1 {
    margin-top: 0.25rem !important;
  }
  .mr-sm-1,
  .mx-sm-1 {
    margin-right: 0.25rem !important;
  }
  .mb-sm-1,
  .my-sm-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-sm-1,
  .mx-sm-1 {
    margin-left: 0.25rem !important;
  }
  .m-sm-2 {
    margin: 0.5rem !important;
  }
  .mt-sm-2,
  .my-sm-2 {
    margin-top: 0.5rem !important;
  }
  .mr-sm-2,
  .mx-sm-2 {
    margin-right: 0.5rem !important;
  }
  .mb-sm-2,
  .my-sm-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-sm-2,
  .mx-sm-2 {
    margin-left: 0.5rem !important;
  }
  .m-sm-3 {
    margin: 1rem !important;
  }
  .mt-sm-3,
  .my-sm-3 {
    margin-top: 1rem !important;
  }
  .mr-sm-3,
  .mx-sm-3 {
    margin-right: 1rem !important;
  }
  .mb-sm-3,
  .my-sm-3 {
    margin-bottom: 1rem !important;
  }
  .ml-sm-3,
  .mx-sm-3 {
    margin-left: 1rem !important;
  }
  .m-sm-4 {
    margin: 1.5rem !important;
  }
  .mt-sm-4,
  .my-sm-4 {
    margin-top: 1.5rem !important;
  }
  .mr-sm-4,
  .mx-sm-4 {
    margin-right: 1.5rem !important;
  }
  .mb-sm-4,
  .my-sm-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-sm-4,
  .mx-sm-4 {
    margin-left: 1.5rem !important;
  }
  .m-sm-5 {
    margin: 3rem !important;
  }
  .mt-sm-5,
  .my-sm-5 {
    margin-top: 3rem !important;
  }
  .mr-sm-5,
  .mx-sm-5 {
    margin-right: 3rem !important;
  }
  .mb-sm-5,
  .my-sm-5 {
    margin-bottom: 3rem !important;
  }
  .ml-sm-5,
  .mx-sm-5 {
    margin-left: 3rem !important;
  }
  .p-sm-0 {
    padding: 0 !important;
  }
  .pt-sm-0,
  .py-sm-0 {
    padding-top: 0 !important;
  }
  .pr-sm-0,
  .px-sm-0 {
    padding-right: 0 !important;
  }
  .pb-sm-0,
  .py-sm-0 {
    padding-bottom: 0 !important;
  }
  .pl-sm-0,
  .px-sm-0 {
    padding-left: 0 !important;
  }
  .p-sm-1 {
    padding: 0.25rem !important;
  }
  .pt-sm-1,
  .py-sm-1 {
    padding-top: 0.25rem !important;
  }
  .pr-sm-1,
  .px-sm-1 {
    padding-right: 0.25rem !important;
  }
  .pb-sm-1,
  .py-sm-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-sm-1,
  .px-sm-1 {
    padding-left: 0.25rem !important;
  }
  .p-sm-2 {
    padding: 0.5rem !important;
  }
  .pt-sm-2,
  .py-sm-2 {
    padding-top: 0.5rem !important;
  }
  .pr-sm-2,
  .px-sm-2 {
    padding-right: 0.5rem !important;
  }
  .pb-sm-2,
  .py-sm-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-sm-2,
  .px-sm-2 {
    padding-left: 0.5rem !important;
  }
  .p-sm-3 {
    padding: 1rem !important;
  }
  .pt-sm-3,
  .py-sm-3 {
    padding-top: 1rem !important;
  }
  .pr-sm-3,
  .px-sm-3 {
    padding-right: 1rem !important;
  }
  .pb-sm-3,
  .py-sm-3 {
    padding-bottom: 1rem !important;
  }
  .pl-sm-3,
  .px-sm-3 {
    padding-left: 1rem !important;
  }
  .p-sm-4 {
    padding: 1.5rem !important;
  }
  .pt-sm-4,
  .py-sm-4 {
    padding-top: 1.5rem !important;
  }
  .pr-sm-4,
  .px-sm-4 {
    padding-right: 1.5rem !important;
  }
  .pb-sm-4,
  .py-sm-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-sm-4,
  .px-sm-4 {
    padding-left: 1.5rem !important;
  }
  .p-sm-5 {
    padding: 3rem !important;
  }
  .pt-sm-5,
  .py-sm-5 {
    padding-top: 3rem !important;
  }
  .pr-sm-5,
  .px-sm-5 {
    padding-right: 3rem !important;
  }
  .pb-sm-5,
  .py-sm-5 {
    padding-bottom: 3rem !important;
  }
  .pl-sm-5,
  .px-sm-5 {
    padding-left: 3rem !important;
  }
  .m-sm-auto {
    margin: auto !important;
  }
  .mt-sm-auto,
  .my-sm-auto {
    margin-top: auto !important;
  }
  .mr-sm-auto,
  .mx-sm-auto {
    margin-right: auto !important;
  }
  .mb-sm-auto,
  .my-sm-auto {
    margin-bottom: auto !important;
  }
  .ml-sm-auto,
  .mx-sm-auto {
    margin-left: auto !important;
  }
}

@media (min-width: 768px) {
  .m-md-0 {
    margin: 0 !important;
  }
  .mt-md-0,
  .my-md-0 {
    margin-top: 0 !important;
  }
  .mr-md-0,
  .mx-md-0 {
    margin-right: 0 !important;
  }
  .mb-md-0,
  .my-md-0 {
    margin-bottom: 0 !important;
  }
  .ml-md-0,
  .mx-md-0 {
    margin-left: 0 !important;
  }
  .m-md-1 {
    margin: 0.25rem !important;
  }
  .mt-md-1,
  .my-md-1 {
    margin-top: 0.25rem !important;
  }
  .mr-md-1,
  .mx-md-1 {
    margin-right: 0.25rem !important;
  }
  .mb-md-1,
  .my-md-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-md-1,
  .mx-md-1 {
    margin-left: 0.25rem !important;
  }
  .m-md-2 {
    margin: 0.5rem !important;
  }
  .mt-md-2,
  .my-md-2 {
    margin-top: 0.5rem !important;
  }
  .mr-md-2,
  .mx-md-2 {
    margin-right: 0.5rem !important;
  }
  .mb-md-2,
  .my-md-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-md-2,
  .mx-md-2 {
    margin-left: 0.5rem !important;
  }
  .m-md-3 {
    margin: 1rem !important;
  }
  .mt-md-3,
  .my-md-3 {
    margin-top: 1rem !important;
  }
  .mr-md-3,
  .mx-md-3 {
    margin-right: 1rem !important;
  }
  .mb-md-3,
  .my-md-3 {
    margin-bottom: 1rem !important;
  }
  .ml-md-3,
  .mx-md-3 {
    margin-left: 1rem !important;
  }
  .m-md-4 {
    margin: 1.5rem !important;
  }
  .mt-md-4,
  .my-md-4 {
    margin-top: 1.5rem !important;
  }
  .mr-md-4,
  .mx-md-4 {
    margin-right: 1.5rem !important;
  }
  .mb-md-4,
  .my-md-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-md-4,
  .mx-md-4 {
    margin-left: 1.5rem !important;
  }
  .m-md-5 {
    margin: 3rem !important;
  }
  .mt-md-5,
  .my-md-5 {
    margin-top: 3rem !important;
  }
  .mr-md-5,
  .mx-md-5 {
    margin-right: 3rem !important;
  }
  .mb-md-5,
  .my-md-5 {
    margin-bottom: 3rem !important;
  }
  .ml-md-5,
  .mx-md-5 {
    margin-left: 3rem !important;
  }
  .p-md-0 {
    padding: 0 !important;
  }
  .pt-md-0,
  .py-md-0 {
    padding-top: 0 !important;
  }
  .pr-md-0,
  .px-md-0 {
    padding-right: 0 !important;
  }
  .pb-md-0,
  .py-md-0 {
    padding-bottom: 0 !important;
  }
  .pl-md-0,
  .px-md-0 {
    padding-left: 0 !important;
  }
  .p-md-1 {
    padding: 0.25rem !important;
  }
  .pt-md-1,
  .py-md-1 {
    padding-top: 0.25rem !important;
  }
  .pr-md-1,
  .px-md-1 {
    padding-right: 0.25rem !important;
  }
  .pb-md-1,
  .py-md-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-md-1,
  .px-md-1 {
    padding-left: 0.25rem !important;
  }
  .p-md-2 {
    padding: 0.5rem !important;
  }
  .pt-md-2,
  .py-md-2 {
    padding-top: 0.5rem !important;
  }
  .pr-md-2,
  .px-md-2 {
    padding-right: 0.5rem !important;
  }
  .pb-md-2,
  .py-md-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-md-2,
  .px-md-2 {
    padding-left: 0.5rem !important;
  }
  .p-md-3 {
    padding: 1rem !important;
  }
  .pt-md-3,
  .py-md-3 {
    padding-top: 1rem !important;
  }
  .pr-md-3,
  .px-md-3 {
    padding-right: 1rem !important;
  }
  .pb-md-3,
  .py-md-3 {
    padding-bottom: 1rem !important;
  }
  .pl-md-3,
  .px-md-3 {
    padding-left: 1rem !important;
  }
  .p-md-4 {
    padding: 1.5rem !important;
  }
  .pt-md-4,
  .py-md-4 {
    padding-top: 1.5rem !important;
  }
  .pr-md-4,
  .px-md-4 {
    padding-right: 1.5rem !important;
  }
  .pb-md-4,
  .py-md-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-md-4,
  .px-md-4 {
    padding-left: 1.5rem !important;
  }
  .p-md-5 {
    padding: 3rem !important;
  }
  .pt-md-5,
  .py-md-5 {
    padding-top: 3rem !important;
  }
  .pr-md-5,
  .px-md-5 {
    padding-right: 3rem !important;
  }
  .pb-md-5,
  .py-md-5 {
    padding-bottom: 3rem !important;
  }
  .pl-md-5,
  .px-md-5 {
    padding-left: 3rem !important;
  }
  .m-md-auto {
    margin: auto !important;
  }
  .mt-md-auto,
  .my-md-auto {
    margin-top: auto !important;
  }
  .mr-md-auto,
  .mx-md-auto {
    margin-right: auto !important;
  }
  .mb-md-auto,
  .my-md-auto {
    margin-bottom: auto !important;
  }
  .ml-md-auto,
  .mx-md-auto {
    margin-left: auto !important;
  }
}

@media (min-width: 992px) {
  .m-lg-0 {
    margin: 0 !important;
  }
  .mt-lg-0,
  .my-lg-0 {
    margin-top: 0 !important;
  }
  .mr-lg-0,
  .mx-lg-0 {
    margin-right: 0 !important;
  }
  .mb-lg-0,
  .my-lg-0 {
    margin-bottom: 0 !important;
  }
  .ml-lg-0,
  .mx-lg-0 {
    margin-left: 0 !important;
  }
  .m-lg-1 {
    margin: 0.25rem !important;
  }
  .mt-lg-1,
  .my-lg-1 {
    margin-top: 0.25rem !important;
  }
  .mr-lg-1,
  .mx-lg-1 {
    margin-right: 0.25rem !important;
  }
  .mb-lg-1,
  .my-lg-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-lg-1,
  .mx-lg-1 {
    margin-left: 0.25rem !important;
  }
  .m-lg-2 {
    margin: 0.5rem !important;
  }
  .mt-lg-2,
  .my-lg-2 {
    margin-top: 0.5rem !important;
  }
  .mr-lg-2,
  .mx-lg-2 {
    margin-right: 0.5rem !important;
  }
  .mb-lg-2,
  .my-lg-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-lg-2,
  .mx-lg-2 {
    margin-left: 0.5rem !important;
  }
  .m-lg-3 {
    margin: 1rem !important;
  }
  .mt-lg-3,
  .my-lg-3 {
    margin-top: 1rem !important;
  }
  .mr-lg-3,
  .mx-lg-3 {
    margin-right: 1rem !important;
  }
  .mb-lg-3,
  .my-lg-3 {
    margin-bottom: 1rem !important;
  }
  .ml-lg-3,
  .mx-lg-3 {
    margin-left: 1rem !important;
  }
  .m-lg-4 {
    margin: 1.5rem !important;
  }
  .mt-lg-4,
  .my-lg-4 {
    margin-top: 1.5rem !important;
  }
  .mr-lg-4,
  .mx-lg-4 {
    margin-right: 1.5rem !important;
  }
  .mb-lg-4,
  .my-lg-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-lg-4,
  .mx-lg-4 {
    margin-left: 1.5rem !important;
  }
  .m-lg-5 {
    margin: 3rem !important;
  }
  .mt-lg-5,
  .my-lg-5 {
    margin-top: 3rem !important;
  }
  .mr-lg-5,
  .mx-lg-5 {
    margin-right: 3rem !important;
  }
  .mb-lg-5,
  .my-lg-5 {
    margin-bottom: 3rem !important;
  }
  .ml-lg-5,
  .mx-lg-5 {
    margin-left: 3rem !important;
  }
  .p-lg-0 {
    padding: 0 !important;
  }
  .pt-lg-0,
  .py-lg-0 {
    padding-top: 0 !important;
  }
  .pr-lg-0,
  .px-lg-0 {
    padding-right: 0 !important;
  }
  .pb-lg-0,
  .py-lg-0 {
    padding-bottom: 0 !important;
  }
  .pl-lg-0,
  .px-lg-0 {
    padding-left: 0 !important;
  }
  .p-lg-1 {
    padding: 0.25rem !important;
  }
  .pt-lg-1,
  .py-lg-1 {
    padding-top: 0.25rem !important;
  }
  .pr-lg-1,
  .px-lg-1 {
    padding-right: 0.25rem !important;
  }
  .pb-lg-1,
  .py-lg-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-lg-1,
  .px-lg-1 {
    padding-left: 0.25rem !important;
  }
  .p-lg-2 {
    padding: 0.5rem !important;
  }
  .pt-lg-2,
  .py-lg-2 {
    padding-top: 0.5rem !important;
  }
  .pr-lg-2,
  .px-lg-2 {
    padding-right: 0.5rem !important;
  }
  .pb-lg-2,
  .py-lg-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-lg-2,
  .px-lg-2 {
    padding-left: 0.5rem !important;
  }
  .p-lg-3 {
    padding: 1rem !important;
  }
  .pt-lg-3,
  .py-lg-3 {
    padding-top: 1rem !important;
  }
  .pr-lg-3,
  .px-lg-3 {
    padding-right: 1rem !important;
  }
  .pb-lg-3,
  .py-lg-3 {
    padding-bottom: 1rem !important;
  }
  .pl-lg-3,
  .px-lg-3 {
    padding-left: 1rem !important;
  }
  .p-lg-4 {
    padding: 1.5rem !important;
  }
  .pt-lg-4,
  .py-lg-4 {
    padding-top: 1.5rem !important;
  }
  .pr-lg-4,
  .px-lg-4 {
    padding-right: 1.5rem !important;
  }
  .pb-lg-4,
  .py-lg-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-lg-4,
  .px-lg-4 {
    padding-left: 1.5rem !important;
  }
  .p-lg-5 {
    padding: 3rem !important;
  }
  .pt-lg-5,
  .py-lg-5 {
    padding-top: 3rem !important;
  }
  .pr-lg-5,
  .px-lg-5 {
    padding-right: 3rem !important;
  }
  .pb-lg-5,
  .py-lg-5 {
    padding-bottom: 3rem !important;
  }
  .pl-lg-5,
  .px-lg-5 {
    padding-left: 3rem !important;
  }
  .m-lg-auto {
    margin: auto !important;
  }
  .mt-lg-auto,
  .my-lg-auto {
    margin-top: auto !important;
  }
  .mr-lg-auto,
  .mx-lg-auto {
    margin-right: auto !important;
  }
  .mb-lg-auto,
  .my-lg-auto {
    margin-bottom: auto !important;
  }
  .ml-lg-auto,
  .mx-lg-auto {
    margin-left: auto !important;
  }
}

@media (min-width: 1200px) {
  .m-xl-0 {
    margin: 0 !important;
  }
  .mt-xl-0,
  .my-xl-0 {
    margin-top: 0 !important;
  }
  .mr-xl-0,
  .mx-xl-0 {
    margin-right: 0 !important;
  }
  .mb-xl-0,
  .my-xl-0 {
    margin-bottom: 0 !important;
  }
  .ml-xl-0,
  .mx-xl-0 {
    margin-left: 0 !important;
  }
  .m-xl-1 {
    margin: 0.25rem !important;
  }
  .mt-xl-1,
  .my-xl-1 {
    margin-top: 0.25rem !important;
  }
  .mr-xl-1,
  .mx-xl-1 {
    margin-right: 0.25rem !important;
  }
  .mb-xl-1,
  .my-xl-1 {
    margin-bottom: 0.25rem !important;
  }
  .ml-xl-1,
  .mx-xl-1 {
    margin-left: 0.25rem !important;
  }
  .m-xl-2 {
    margin: 0.5rem !important;
  }
  .mt-xl-2,
  .my-xl-2 {
    margin-top: 0.5rem !important;
  }
  .mr-xl-2,
  .mx-xl-2 {
    margin-right: 0.5rem !important;
  }
  .mb-xl-2,
  .my-xl-2 {
    margin-bottom: 0.5rem !important;
  }
  .ml-xl-2,
  .mx-xl-2 {
    margin-left: 0.5rem !important;
  }
  .m-xl-3 {
    margin: 1rem !important;
  }
  .mt-xl-3,
  .my-xl-3 {
    margin-top: 1rem !important;
  }
  .mr-xl-3,
  .mx-xl-3 {
    margin-right: 1rem !important;
  }
  .mb-xl-3,
  .my-xl-3 {
    margin-bottom: 1rem !important;
  }
  .ml-xl-3,
  .mx-xl-3 {
    margin-left: 1rem !important;
  }
  .m-xl-4 {
    margin: 1.5rem !important;
  }
  .mt-xl-4,
  .my-xl-4 {
    margin-top: 1.5rem !important;
  }
  .mr-xl-4,
  .mx-xl-4 {
    margin-right: 1.5rem !important;
  }
  .mb-xl-4,
  .my-xl-4 {
    margin-bottom: 1.5rem !important;
  }
  .ml-xl-4,
  .mx-xl-4 {
    margin-left: 1.5rem !important;
  }
  .m-xl-5 {
    margin: 3rem !important;
  }
  .mt-xl-5,
  .my-xl-5 {
    margin-top: 3rem !important;
  }
  .mr-xl-5,
  .mx-xl-5 {
    margin-right: 3rem !important;
  }
  .mb-xl-5,
  .my-xl-5 {
    margin-bottom: 3rem !important;
  }
  .ml-xl-5,
  .mx-xl-5 {
    margin-left: 3rem !important;
  }
  .p-xl-0 {
    padding: 0 !important;
  }
  .pt-xl-0,
  .py-xl-0 {
    padding-top: 0 !important;
  }
  .pr-xl-0,
  .px-xl-0 {
    padding-right: 0 !important;
  }
  .pb-xl-0,
  .py-xl-0 {
    padding-bottom: 0 !important;
  }
  .pl-xl-0,
  .px-xl-0 {
    padding-left: 0 !important;
  }
  .p-xl-1 {
    padding: 0.25rem !important;
  }
  .pt-xl-1,
  .py-xl-1 {
    padding-top: 0.25rem !important;
  }
  .pr-xl-1,
  .px-xl-1 {
    padding-right: 0.25rem !important;
  }
  .pb-xl-1,
  .py-xl-1 {
    padding-bottom: 0.25rem !important;
  }
  .pl-xl-1,
  .px-xl-1 {
    padding-left: 0.25rem !important;
  }
  .p-xl-2 {
    padding: 0.5rem !important;
  }
  .pt-xl-2,
  .py-xl-2 {
    padding-top: 0.5rem !important;
  }
  .pr-xl-2,
  .px-xl-2 {
    padding-right: 0.5rem !important;
  }
  .pb-xl-2,
  .py-xl-2 {
    padding-bottom: 0.5rem !important;
  }
  .pl-xl-2,
  .px-xl-2 {
    padding-left: 0.5rem !important;
  }
  .p-xl-3 {
    padding: 1rem !important;
  }
  .pt-xl-3,
  .py-xl-3 {
    padding-top: 1rem !important;
  }
  .pr-xl-3,
  .px-xl-3 {
    padding-right: 1rem !important;
  }
  .pb-xl-3,
  .py-xl-3 {
    padding-bottom: 1rem !important;
  }
  .pl-xl-3,
  .px-xl-3 {
    padding-left: 1rem !important;
  }
  .p-xl-4 {
    padding: 1.5rem !important;
  }
  .pt-xl-4,
  .py-xl-4 {
    padding-top: 1.5rem !important;
  }
  .pr-xl-4,
  .px-xl-4 {
    padding-right: 1.5rem !important;
  }
  .pb-xl-4,
  .py-xl-4 {
    padding-bottom: 1.5rem !important;
  }
  .pl-xl-4,
  .px-xl-4 {
    padding-left: 1.5rem !important;
  }
  .p-xl-5 {
    padding: 3rem !important;
  }
  .pt-xl-5,
  .py-xl-5 {
    padding-top: 3rem !important;
  }
  .pr-xl-5,
  .px-xl-5 {
    padding-right: 3rem !important;
  }
  .pb-xl-5,
  .py-xl-5 {
    padding-bottom: 3rem !important;
  }
  .pl-xl-5,
  .px-xl-5 {
    padding-left: 3rem !important;
  }
  .m-xl-auto {
    margin: auto !important;
  }
  .mt-xl-auto,
  .my-xl-auto {
    margin-top: auto !important;
  }
  .mr-xl-auto,
  .mx-xl-auto {
    margin-right: auto !important;
  }
  .mb-xl-auto,
  .my-xl-auto {
    margin-bottom: auto !important;
  }
  .ml-xl-auto,
  .mx-xl-auto {
    margin-left: auto !important;
  }
}

.text-monospace {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.text-justify {
  text-align: justify !important;
}

.text-nowrap {
  white-space: nowrap !important;
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-left {
  text-align: left !important;
}

.text-right {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

@media (min-width: 576px) {
  .text-sm-left {
    text-align: left !important;
  }
  .text-sm-right {
    text-align: right !important;
  }
  .text-sm-center {
    text-align: center !important;
  }
}

@media (min-width: 768px) {
  .text-md-left {
    text-align: left !important;
  }
  .text-md-right {
    text-align: right !important;
  }
  .text-md-center {
    text-align: center !important;
  }
}

@media (min-width: 992px) {
  .text-lg-left {
    text-align: left !important;
  }
  .text-lg-right {
    text-align: right !important;
  }
  .text-lg-center {
    text-align: center !important;
  }
}

@media (min-width: 1200px) {
  .text-xl-left {
    text-align: left !important;
  }
  .text-xl-right {
    text-align: right !important;
  }
  .text-xl-center {
    text-align: center !important;
  }
}

.text-lowercase {
  text-transform: lowercase !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.font-weight-light {
  font-weight: 300 !important;
}

.font-weight-normal {
  font-weight: 400 !important;
}

.font-weight-bold {
  font-weight: 700 !important;
}

.font-italic {
  font-style: italic !important;
}

.text-white {
  color: #ffffff !important;
}

.text-primary {
  color: #007bff !important;
}

a.text-primary:hover, a.text-primary:focus {
  color: #0062cc !important;
}

.text-secondary {
  color: #6c757d !important;
}

a.text-secondary:hover, a.text-secondary:focus {
  color: #545b62 !important;
}

.text-success {
  color: #28a745 !important;
}

a.text-success:hover, a.text-success:focus {
  color: #1e7e34 !important;
}

.text-info {
  color: #17a2b8 !important;
}

a.text-info:hover, a.text-info:focus {
  color: #117a8b !important;
}

.text-warning {
  color: #ffc107 !important;
}

a.text-warning:hover, a.text-warning:focus {
  color: #d39e00 !important;
}

.text-danger {
  color: #dc3545 !important;
}

a.text-danger:hover, a.text-danger:focus {
  color: #bd2130 !important;
}

.text-light {
  color: #f8f9fa !important;
}

a.text-light:hover, a.text-light:focus {
  color: #dae0e5 !important;
}

.text-dark {
  color: #343a40 !important;
}

a.text-dark:hover, a.text-dark:focus {
  color: #1d2124 !important;
}

.text-body {
  color: #212529 !important;
}

.text-muted {
  color: #6c757d !important;
}

.text-black-50 {
  color: rgba(0, 0, 0, 0.5) !important;
}

.text-white-50 {
  color: rgba(255, 255, 255, 0.5) !important;
}

.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.visible {
  visibility: visible !important;
}

.invisible {
  visibility: hidden !important;
}

@media print {
  *,
  *::before,
  *::after {
    text-shadow: none !important;
    box-shadow: none !important;
  }
  a:not(.btn) {
    text-decoration: underline;
  }
  abbr[title]::after {
    content: " (" attr(title) ")";
  }
  pre {
    white-space: pre-wrap !important;
  }
  pre,
  blockquote {
    border: 1px solid #adb5bd;
    page-break-inside: avoid;
  }
  thead {
    display: table-header-group;
  }
  tr,
  img {
    page-break-inside: avoid;
  }
  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }
  h2,
  h3 {
    page-break-after: avoid;
  }
  @page {
    size: a3;
  }
  body {
    min-width: 992px !important;
  }
  .container {
    min-width: 992px !important;
  }
  .navbar {
    display: none;
  }
  .badge {
    border: 1px solid #000;
  }
  .table {
    border-collapse: collapse !important;
  }
  .table td,
  .table th {
    background-color: #ffffff !important;
  }
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #dee2e6 !important;
  }
}

/*
 * Core: General Layout Style
 * -------------------------
 */
html,
body,
.wrapper {
  min-height: 100%;
  overflow-x: hidden;
}

.wrapper {
  position: relative;
}

.layout-boxed .wrapper {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.layout-boxed .wrapper, .layout-boxed .wrapper:before {
  margin: 0 auto;
  max-width: 1250px;
}

@media (min-width: 768px) {
  .content-wrapper,
  .main-footer,
  .main-header {
    transition: margin-left 0.3s ease-in-out;
    margin-left: 250px;
    z-index: 3000;
  }
}

@media screen and (min-width: 768px) and (prefers-reduced-motion: reduce) {
  .content-wrapper,
  .main-footer,
  .main-header {
    transition: none;
  }
}

@media (min-width: 768px) {
  .sidebar-collapse .content-wrapper, .sidebar-collapse
  .main-footer, .sidebar-collapse
  .main-header {
    margin-left: 0;
  }
}

@media (max-width: 991.98px) {
  .content-wrapper, .content-wrapper:before,
  .main-footer,
  .main-footer:before,
  .main-header,
  .main-header:before {
    margin-left: 0;
  }
}

.content-wrapper {
  background: #f4f6f9;
}

.content-wrapper > .content {
  padding: 0 0.5rem;
}

.main-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
}

.main-sidebar, .main-sidebar:before {
  transition: margin-left 0.3s ease-in-out, width 0.3s ease-in-out;
  width: 250px;
}

@media screen and (prefers-reduced-motion: reduce) {
  .main-sidebar, .main-sidebar:before {
    transition: none;
  }
}

.sidebar-collapse .main-sidebar, .sidebar-collapse .main-sidebar:before {
  margin-left: -250px;
}

@media (max-width: 991.98px) {
  .main-sidebar, .main-sidebar:before {
    box-shadow: none !important;
    margin-left: -250px;
  }
  .sidebar-open .main-sidebar, .sidebar-open .main-sidebar:before {
    margin-left: 0;
  }
}

.main-footer {
  padding: 15px;
  color: #555;
  border-top: 1px solid #dee2e6;
  background: #ffffff;
}

.content-header {
  padding: 15px 0.5rem;
}

.content-header h1 {
  font-size: 1.8rem;
  margin: 0;
}

.content-header .breadcrumb {
  margin-bottom: 0;
  padding: 0;
  background: transparent;
  line-height: 1.8rem;
}

.hold-transition .content-wrapper,
.hold-transition .main-header,
.hold-transition .main-footer {
  transition: none !important;
}

/*
 * Component: Main Header
 * ----------------------
 */
.main-header {
  z-index: 1000;
}

.main-header .navbar-nav .nav-item {
  margin: 0;
}

.main-header .nav-link {
  position: relative;
  height: 2.5rem;
}

.main-header .navbar-nav[class*="-right"] .dropdown-menu {
  margin-top: -3px;
  right: 0;
  left: auto;
}

@media (max-width: 575.98px) {
  .main-header .navbar-nav[class*="-right"] .dropdown-menu {
    left: 0;
    right: auto;
  }
}

.navbar-img {
  height: 1.25rem;
  width: auto;
}

.navbar-badge {
  position: absolute;
  top: 9px;
  right: 5px;
  font-size: .6rem;
  font-weight: 300;
  padding: 2px 4px;
}

.btn-navbar {
  border-left-width: 0;
  background-color: transparent;
}

.form-control-navbar {
  border-right-width: 0;
}

.form-control-navbar + .input-group-append {
  margin-left: 0;
}

.form-control-navbar,
.btn-navbar {
  transition: none;
}

.navbar-dark .form-control-navbar,
.navbar-dark .btn-navbar {
  background-color: rgba(255, 255, 255, 0.2);
  border: 0;
}

.navbar-dark .form-control-navbar::placeholder,
.navbar-dark .form-control-navbar + .input-group-append > .btn-navbar {
  color: rgba(255, 255, 255, 0.6);
}

.navbar-dark .form-control-navbar :-moz-placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.navbar-dark .form-control-navbar ::-moz-placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.navbar-dark .form-control-navbar :-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.navbar-dark .form-control-navbar:focus,
.navbar-dark .form-control-navbar:focus + .input-group-append .btn-navbar {
  border: 0 !important;
  background-color: rgba(255, 255, 255, 0.6);
  color: #343a40;
}

.navbar-light .form-control-navbar,
.navbar-light .btn-navbar {
  background-color: #f2f4f6;
  border: 0;
}

.navbar-light .form-control-navbar::placeholder,
.navbar-light .form-control-navbar + .input-group-append > .btn-navbar {
  color: rgba(0, 0, 0, 0.6);
}

.navbar-light .form-control-navbar :-moz-placeholder {
  color: rgba(0, 0, 0, 0.6);
}

.navbar-light .form-control-navbar ::-moz-placeholder {
  color: rgba(0, 0, 0, 0.6);
}

.navbar-light .form-control-navbar :-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.6);
}

.navbar-light .form-control-navbar:focus,
.navbar-light .form-control-navbar:focus + .input-group-append .btn-navbar {
  border: 0 !important;
  background-color: #e9ecef;
  color: #343a40;
}

.brand-link {
  padding: 0.8125rem 0.5rem;
  font-size: 1.25rem;
  display: block;
  line-height: 1.5;
  white-space: nowrap;
}

.brand-link:hover {
  color: #ffffff;
  text-decoration: none;
}

[class*="sidebar-dark"] .brand-link {
  color: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid #4b545c;
}

[class*="sidebar-light"] .brand-link {
  color: rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid #dee2e6;
}

.brand-image {
  float: left;
  line-height: .8;
  max-height: 34px;
  width: auto;
  margin-left: .8rem;
  margin-right: .5rem;
  margin-top: -3px;
}

/**
 * Component: Sidebar
 * ------------------
 */
.main-sidebar {
  z-index: 1100;
  height: 100vh;
  overflow-y: hidden;
}

.sidebar {
  padding-bottom: 0;
  padding-top: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  overflow-y: auto;
  height: calc(100% - 4rem);
}

.user-panel {
  position: relative;
}

[class*="sidebar-dark"] .user-panel {
  border-bottom: 1px solid #4f5962;
}

[class*="sidebar-light"] .user-panel {
  border-bottom: 1px solid #dee2e6;
}

.user-panel,
.user-panel .info {
  overflow: hidden;
  white-space: nowrap;
}

.user-panel .image {
  padding-left: 0.8rem;
  display: inline-block;
}

.user-panel img {
  width: 2.1rem;
  height: auto;
}

.user-panel .info {
  display: inline-block;
  padding: 5px 5px 5px 10px;
}

.user-panel .status,
.user-panel .dropdown-menu {
  font-size: 0.875rem;
}

.nav-sidebar .nav-item > .nav-link {
  margin-bottom: 0.2rem;
}

.nav-sidebar .nav-item > .nav-link .right {
  transition: transform ease-in-out 0.3s;
}

@media screen and (prefers-reduced-motion: reduce) {
  .nav-sidebar .nav-item > .nav-link .right {
    transition: none;
  }
}

.nav-sidebar .nav-link > p > .right {
  position: absolute;
  right: 1rem;
  top: 12px;
}

.nav-sidebar .menu-open > .nav-treeview {
  display: block;
}

.nav-sidebar .menu-open > .nav-link .right {
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

.nav-sidebar > .nav-item {
  margin-bottom: 0;
}

.nav-sidebar > .nav-item .nav-icon {
  text-align: center;
  width: 1.6rem;
  font-size: 1.2rem;
  margin-right: .2rem;
}

.nav-sidebar > .nav-item .float-right {
  margin-top: 3px;
}

.nav-sidebar .nav-treeview {
  display: none;
  list-style: none;
  padding: 0;
}

.nav-sidebar .nav-treeview > .nav-item > .nav-link > .nav-icon {
  width: 1.6rem;
}

.nav-sidebar .nav-header {
  font-size: .9rem;
  padding: 0.5rem;
}

.nav-sidebar .nav-header:not(:first-of-type) {
  padding: 1.7rem 1rem .5rem 1rem;
}

.nav-sidebar .nav-link p {
  display: inline-block;
  margin: 0;
}

#sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1099;
}

@media (max-width: 991.98px) {
  .sidebar-open #sidebar-overlay {
    display: block;
  }
}

.sidebar-dark-primary {
  background-color: #343a40;
}

.sidebar-dark-primary .user-panel a:hover {
  color: #ffffff;
}

.sidebar-dark-primary .user-panel .status {
  color: #C2C7D0;
  background: rgba(255, 255, 255, 0.1);
}

.sidebar-dark-primary .user-panel .status:hover, .sidebar-dark-primary .user-panel .status:focus, .sidebar-dark-primary .user-panel .status:active {
  color: #ffffff;
  background: rgba(247, 247, 247, 0.1);
}

.sidebar-dark-primary .user-panel .dropdown-menu {
  border-color: rgba(242, 242, 242, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.sidebar-dark-primary .user-panel .dropdown-item {
  color: #212529;
}

.sidebar-dark-primary .nav-sidebar > .nav-item > .nav-link:active, .sidebar-dark-primary .nav-sidebar > .nav-item > .nav-link:focus {
  color: #C2C7D0;
}

.sidebar-dark-primary .nav-sidebar > .nav-item.menu-open > .nav-link,
.sidebar-dark-primary .nav-sidebar > .nav-item:hover > .nav-link {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar-dark-primary .nav-sidebar > .nav-item > .nav-link.active {
  color: #ffffff;
  background-color: #007bff;
}

.sidebar-dark-primary .nav-sidebar > .nav-item > .nav-treeview {
  background: transparent;
}

.sidebar-dark-primary .nav-header {
  color: #d0d4db;
  background: inherit;
}

.sidebar-dark-primary .sidebar a {
  color: #C2C7D0;
}

.sidebar-dark-primary .sidebar a:hover {
  text-decoration: none;
}

.sidebar-dark-primary .nav-treeview > .nav-item > .nav-link {
  color: #C2C7D0;
}

.sidebar-dark-primary .nav-treeview > .nav-item > .nav-link:hover {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar-dark-primary .nav-treeview > .nav-item > .nav-link.active, .sidebar-dark-primary .nav-treeview > .nav-item > .nav-link.active:hover {
  color: #343a40;
  background-color: rgba(255, 255, 255, 0.9);
}

.sidebar-light-primary {
  background-color: #ffffff;
}

.sidebar-light-primary .user-panel a:hover {
  color: #212529;
}

.sidebar-light-primary .user-panel .status {
  color: #343a40;
  background: #f4f4f5;
}

.sidebar-light-primary .user-panel .status:hover, .sidebar-light-primary .user-panel .status:focus, .sidebar-light-primary .user-panel .status:active {
  color: #212529;
  background: #ececed;
}

.sidebar-light-primary .user-panel .dropdown-menu {
  border-color: #e7e7e8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.sidebar-light-primary .user-panel .dropdown-item {
  color: #212529;
}

.sidebar-light-primary .nav-sidebar > .nav-item > .nav-link:active, .sidebar-light-primary .nav-sidebar > .nav-item > .nav-link:focus {
  color: #343a40;
}

.sidebar-light-primary .nav-sidebar > .nav-item.menu-open > .nav-link,
.sidebar-light-primary .nav-sidebar > .nav-item:hover > .nav-link {
  color: #212529;
  background-color: #f4f4f5;
}

.sidebar-light-primary .nav-sidebar > .nav-item > .nav-link.active {
  color: #ffffff;
  background-color: #007bff;
}

.sidebar-light-primary .nav-sidebar > .nav-item > .nav-treeview {
  background: transparent;
}

.sidebar-light-primary .nav-header {
  color: #292d32;
  background: inherit;
}

.sidebar-light-primary .sidebar a {
  color: #343a40;
}

.sidebar-light-primary .sidebar a:hover {
  text-decoration: none;
}

.sidebar-light-primary .nav-treeview > .nav-item > .nav-link {
  color: #777;
}

.sidebar-light-primary .nav-treeview > .nav-item > .nav-link.active, .sidebar-light-primary .nav-treeview > .nav-item > .nav-link.active:hover {
  color: #212529;
  background-color: #f4f4f5;
}

.sidebar-light-primary .nav-treeview > .nav-item > .nav-link:hover {
  background-color: #f4f4f5;
}

.sidebar-dark-secondary {
  background-color: #343a40;
}

.sidebar-dark-secondary .user-panel a:hover {
  color: #ffffff;
}

.sidebar-dark-secondary .user-panel .status {
  color: #C2C7D0;
  background: rgba(255, 255, 255, 0.1);
}

.sidebar-dark-secondary .user-panel .status:hover, .sidebar-dark-secondary .user-panel .status:focus, .sidebar-dark-secondary .user-panel .status:active {
  color: #ffffff;
  background: rgba(247, 247, 247, 0.1);
}

.sidebar-dark-secondary .user-panel .dropdown-menu {
  border-color: rgba(242, 242, 242, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.sidebar-dark-secondary .user-panel .dropdown-item {
  color: #212529;
}

.sidebar-dark-secondary .nav-sidebar > .nav-item > .nav-link:active, .sidebar-dark-secondary .nav-sidebar > .nav-item > .nav-link:focus {
  color: #C2C7D0;
}

.sidebar-dark-secondary .nav-sidebar > .nav-item.menu-open > .nav-link,
.sidebar-dark-secondary .nav-sidebar > .nav-item:hover > .nav-link {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar-dark-secondary .nav-sidebar > .nav-item > .nav-link.active {
  color: #ffffff;
  background-color: #6c757d;
}

.sidebar-dark-secondary .nav-sidebar > .nav-item > .nav-treeview {
  background: transparent;
}

.sidebar-dark-secondary .nav-header {
  color: #d0d4db;
  background: inherit;
}

.sidebar-dark-secondary .sidebar a {
  color: #C2C7D0;
}

.sidebar-dark-secondary .sidebar a:hover {
  text-decoration: none;
}

.sidebar-dark-secondary .nav-treeview > .nav-item > .nav-link {
  color: #C2C7D0;
}

.sidebar-dark-secondary .nav-treeview > .nav-item > .nav-link:hover {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar-dark-secondary .nav-treeview > .nav-item > .nav-link.active, .sidebar-dark-secondary .nav-treeview > .nav-item > .nav-link.active:hover {
  color: #343a40;
  background-color: rgba(255, 255, 255, 0.9);
}

.sidebar-light-secondary {
  background-color: #ffffff;
}

.sidebar-light-secondary .user-panel a:hover {
  color: #212529;
}

.sidebar-light-secondary .user-panel .status {
  color: #343a40;
  background: #f4f4f5;
}

.sidebar-light-secondary .user-panel .status:hover, .sidebar-light-secondary .user-panel .status:focus, .sidebar-light-secondary .user-panel .status:active {
  color: #212529;
  background: #ececed;
}

.sidebar-light-secondary .user-panel .dropdown-menu {
  border-color: #e7e7e8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.sidebar-light-secondary .user-panel .dropdown-item {
  color: #212529;
}

.sidebar-light-secondary .nav-sidebar > .nav-item > .nav-link:active, .sidebar-light-secondary .nav-sidebar > .nav-item > .nav-link:focus {
  color: #343a40;
}

.sidebar-light-secondary .nav-sidebar > .nav-item.menu-open > .nav-link,
.sidebar-light-secondary .nav-sidebar > .nav-item:hover > .nav-link {
  color: #212529;
  background-color: #f4f4f5;
}

.sidebar-light-secondary .nav-sidebar > .nav-item > .nav-link.active {
  color: #ffffff;
  background-color: #6c757d;
}

.sidebar-light-secondary .nav-sidebar > .nav-item > .nav-treeview {
  background: transparent;
}

.sidebar-light-secondary .nav-header {
  color: #292d32;
  background: inherit;
}

.sidebar-light-secondary .sidebar a {
  color: #343a40;
}

.sidebar-light-secondary .sidebar a:hover {
  text-decoration: none;
}

.sidebar-light-secondary .nav-treeview > .nav-item > .nav-link {
  color: #777;
}

.sidebar-light-secondary .nav-treeview > .nav-item > .nav-link.active, .sidebar-light-secondary .nav-treeview > .nav-item > .nav-link.active:hover {
  color: #212529;
  background-color: #f4f4f5;
}

.sidebar-light-secondary .nav-treeview > .nav-item > .nav-link:hover {
  background-color: #f4f4f5;
}

.sidebar-dark-success {
  background-color: #343a40;
}

.sidebar-dark-success .user-panel a:hover {
  color: #ffffff;
}

.sidebar-dark-success .user-panel .status {
  color: #C2C7D0;
  background: rgba(255, 255, 255, 0.1);
}

.sidebar-dark-success .user-panel .status:hover, .sidebar-dark-success .user-panel .status:focus, .sidebar-dark-success .user-panel .status:active {
  color: #ffffff;
  background: rgba(247, 247, 247, 0.1);
}

.sidebar-dark-success .user-panel .dropdown-menu {
  border-color: rgba(242, 242, 242, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.sidebar-dark-success .user-panel .dropdown-item {
  color: #212529;
}

.sidebar-dark-success .nav-sidebar > .nav-item > .nav-link:active, .sidebar-dark-success .nav-sidebar > .nav-item > .nav-link:focus {
  color: #C2C7D0;
}

.sidebar-dark-success .nav-sidebar > .nav-item.menu-open > .nav-link,
.sidebar-dark-success .nav-sidebar > .nav-item:hover > .nav-link {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar-dark-success .nav-sidebar > .nav-item > .nav-link.active {
  color: #ffffff;
  background-color: #28a745;
}

.sidebar-dark-success .nav-sidebar > .nav-item > .nav-treeview {
  background: transparent;
}

.sidebar-dark-success .nav-header {
  color: #d0d4db;
  background: inherit;
}

.sidebar-dark-success .sidebar a {
  color: #C2C7D0;
}

.sidebar-dark-success .sidebar a:hover {
  text-decoration: none;
}

.sidebar-dark-success .nav-treeview > .nav-item > .nav-link {
  color: #C2C7D0;
}

.sidebar-dark-success .nav-treeview > .nav-item > .nav-link:hover {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar-dark-success .nav-treeview > .nav-item > .nav-link.active, .sidebar-dark-success .nav-treeview > .nav-item > .nav-link.active:hover {
  color: #343a40;
  background-color: rgba(255, 255, 255, 0.9);
}

.sidebar-light-success {
  background-color: #ffffff;
}

.sidebar-light-success .user-panel a:hover {
  color: #212529;
}

.sidebar-light-success .user-panel .status {
  color: #343a40;
  background: #f4f4f5;
}

.sidebar-light-success .user-panel .status:hover, .sidebar-light-success .user-panel .status:focus, .sidebar-light-success .user-panel .status:active {
  color: #212529;
  background: #ececed;
}

.sidebar-light-success .user-panel .dropdown-menu {
  border-color: #e7e7e8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.sidebar-light-success .user-panel .dropdown-item {
  color: #212529;
}

.sidebar-light-success .nav-sidebar > .nav-item > .nav-link:active, .sidebar-light-success .nav-sidebar > .nav-item > .nav-link:focus {
  color: #343a40;
}

.sidebar-light-success .nav-sidebar > .nav-item.menu-open > .nav-link,
.sidebar-light-success .nav-sidebar > .nav-item:hover > .nav-link {
  color: #212529;
  background-color: #f4f4f5;
}

.sidebar-light-success .nav-sidebar > .nav-item > .nav-link.active {
  color: #ffffff;
  background-color: #28a745;
}

.sidebar-light-success .nav-sidebar > .nav-item > .nav-treeview {
  background: transparent;
}

.sidebar-light-success .nav-header {
  color: #292d32;
  background: inherit;
}

.sidebar-light-success .sidebar a {
  color: #343a40;
}

.sidebar-light-success .sidebar a:hover {
  text-decoration: none;
}

.sidebar-light-success .nav-treeview > .nav-item > .nav-link {
  color: #777;
}

.sidebar-light-success .nav-treeview > .nav-item > .nav-link.active, .sidebar-light-success .nav-treeview > .nav-item > .nav-link.active:hover {
  color: #212529;
  background-color: #f4f4f5;
}

.sidebar-light-success .nav-treeview > .nav-item > .nav-link:hover {
  background-color: #f4f4f5;
}

.sidebar-dark-info {
  background-color: #343a40;
}

.sidebar-dark-info .user-panel a:hover {
  color: #ffffff;
}

.sidebar-dark-info .user-panel .status {
  color: #C2C7D0;
  background: rgba(255, 255, 255, 0.1);
}

.sidebar-dark-info .user-panel .status:hover, .sidebar-dark-info .user-panel .status:focus, .sidebar-dark-info .user-panel .status:active {
  color: #ffffff;
  background: rgba(247, 247, 247, 0.1);
}

.sidebar-dark-info .user-panel .dropdown-menu {
  border-color: rgba(242, 242, 242, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.sidebar-dark-info .user-panel .dropdown-item {
  color: #212529;
}

.sidebar-dark-info .nav-sidebar > .nav-item > .nav-link:active, .sidebar-dark-info .nav-sidebar > .nav-item > .nav-link:focus {
  color: #C2C7D0;
}

.sidebar-dark-info .nav-sidebar > .nav-item.menu-open > .nav-link,
.sidebar-dark-info .nav-sidebar > .nav-item:hover > .nav-link {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar-dark-info .nav-sidebar > .nav-item > .nav-link.active {
  color: #ffffff;
  background-color: #17a2b8;
}

.sidebar-dark-info .nav-sidebar > .nav-item > .nav-treeview {
  background: transparent;
}

.sidebar-dark-info .nav-header {
  color: #d0d4db;
  background: inherit;
}

.sidebar-dark-info .sidebar a {
  color: #C2C7D0;
}

.sidebar-dark-info .sidebar a:hover {
  text-decoration: none;
}

.sidebar-dark-info .nav-treeview > .nav-item > .nav-link {
  color: #C2C7D0;
}

.sidebar-dark-info .nav-treeview > .nav-item > .nav-link:hover {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar-dark-info .nav-treeview > .nav-item > .nav-link.active, .sidebar-dark-info .nav-treeview > .nav-item > .nav-link.active:hover {
  color: #343a40;
  background-color: rgba(255, 255, 255, 0.9);
}

.sidebar-light-info {
  background-color: #ffffff;
}

.sidebar-light-info .user-panel a:hover {
  color: #212529;
}

.sidebar-light-info .user-panel .status {
  color: #343a40;
  background: #f4f4f5;
}

.sidebar-light-info .user-panel .status:hover, .sidebar-light-info .user-panel .status:focus, .sidebar-light-info .user-panel .status:active {
  color: #212529;
  background: #ececed;
}

.sidebar-light-info .user-panel .dropdown-menu {
  border-color: #e7e7e8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.sidebar-light-info .user-panel .dropdown-item {
  color: #212529;
}

.sidebar-light-info .nav-sidebar > .nav-item > .nav-link:active, .sidebar-light-info .nav-sidebar > .nav-item > .nav-link:focus {
  color: #343a40;
}

.sidebar-light-info .nav-sidebar > .nav-item.menu-open > .nav-link,
.sidebar-light-info .nav-sidebar > .nav-item:hover > .nav-link {
  color: #212529;
  background-color: #f4f4f5;
}

.sidebar-light-info .nav-sidebar > .nav-item > .nav-link.active {
  color: #ffffff;
  background-color: #17a2b8;
}

.sidebar-light-info .nav-sidebar > .nav-item > .nav-treeview {
  background: transparent;
}

.sidebar-light-info .nav-header {
  color: #292d32;
  background: inherit;
}

.sidebar-light-info .sidebar a {
  color: #343a40;
}

.sidebar-light-info .sidebar a:hover {
  text-decoration: none;
}

.sidebar-light-info .nav-treeview > .nav-item > .nav-link {
  color: #777;
}

.sidebar-light-info .nav-treeview > .nav-item > .nav-link.active, .sidebar-light-info .nav-treeview > .nav-item > .nav-link.active:hover {
  color: #212529;
  background-color: #f4f4f5;
}

.sidebar-light-info .nav-treeview > .nav-item > .nav-link:hover {
  background-color: #f4f4f5;
}

.sidebar-dark-warning {
  background-color: #343a40;
}

.sidebar-dark-warning .user-panel a:hover {
  color: #ffffff;
}

.sidebar-dark-warning .user-panel .status {
  color: #C2C7D0;
  background: rgba(255, 255, 255, 0.1);
}

.sidebar-dark-warning .user-panel .status:hover, .sidebar-dark-warning .user-panel .status:focus, .sidebar-dark-warning .user-panel .status:active {
  color: #ffffff;
  background: rgba(247, 247, 247, 0.1);
}

.sidebar-dark-warning .user-panel .dropdown-menu {
  border-color: rgba(242, 242, 242, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.sidebar-dark-warning .user-panel .dropdown-item {
  color: #212529;
}

.sidebar-dark-warning .nav-sidebar > .nav-item > .nav-link:active, .sidebar-dark-warning .nav-sidebar > .nav-item > .nav-link:focus {
  color: #C2C7D0;
}

.sidebar-dark-warning .nav-sidebar > .nav-item.menu-open > .nav-link,
.sidebar-dark-warning .nav-sidebar > .nav-item:hover > .nav-link {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar-dark-warning .nav-sidebar > .nav-item > .nav-link.active {
  color: #ffffff;
  background-color: #ffc107;
}

.sidebar-dark-warning .nav-sidebar > .nav-item > .nav-treeview {
  background: transparent;
}

.sidebar-dark-warning .nav-header {
  color: #d0d4db;
  background: inherit;
}

.sidebar-dark-warning .sidebar a {
  color: #C2C7D0;
}

.sidebar-dark-warning .sidebar a:hover {
  text-decoration: none;
}

.sidebar-dark-warning .nav-treeview > .nav-item > .nav-link {
  color: #C2C7D0;
}

.sidebar-dark-warning .nav-treeview > .nav-item > .nav-link:hover {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar-dark-warning .nav-treeview > .nav-item > .nav-link.active, .sidebar-dark-warning .nav-treeview > .nav-item > .nav-link.active:hover {
  color: #343a40;
  background-color: rgba(255, 255, 255, 0.9);
}

.sidebar-light-warning {
  background-color: #ffffff;
}

.sidebar-light-warning .user-panel a:hover {
  color: #212529;
}

.sidebar-light-warning .user-panel .status {
  color: #343a40;
  background: #f4f4f5;
}

.sidebar-light-warning .user-panel .status:hover, .sidebar-light-warning .user-panel .status:focus, .sidebar-light-warning .user-panel .status:active {
  color: #212529;
  background: #ececed;
}

.sidebar-light-warning .user-panel .dropdown-menu {
  border-color: #e7e7e8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.sidebar-light-warning .user-panel .dropdown-item {
  color: #212529;
}

.sidebar-light-warning .nav-sidebar > .nav-item > .nav-link:active, .sidebar-light-warning .nav-sidebar > .nav-item > .nav-link:focus {
  color: #343a40;
}

.sidebar-light-warning .nav-sidebar > .nav-item.menu-open > .nav-link,
.sidebar-light-warning .nav-sidebar > .nav-item:hover > .nav-link {
  color: #212529;
  background-color: #f4f4f5;
}

.sidebar-light-warning .nav-sidebar > .nav-item > .nav-link.active {
  color: #ffffff;
  background-color: #ffc107;
}

.sidebar-light-warning .nav-sidebar > .nav-item > .nav-treeview {
  background: transparent;
}

.sidebar-light-warning .nav-header {
  color: #292d32;
  background: inherit;
}

.sidebar-light-warning .sidebar a {
  color: #343a40;
}

.sidebar-light-warning .sidebar a:hover {
  text-decoration: none;
}

.sidebar-light-warning .nav-treeview > .nav-item > .nav-link {
  color: #777;
}

.sidebar-light-warning .nav-treeview > .nav-item > .nav-link.active, .sidebar-light-warning .nav-treeview > .nav-item > .nav-link.active:hover {
  color: #212529;
  background-color: #f4f4f5;
}

.sidebar-light-warning .nav-treeview > .nav-item > .nav-link:hover {
  background-color: #f4f4f5;
}

.sidebar-dark-danger {
  background-color: #343a40;
}

.sidebar-dark-danger .user-panel a:hover {
  color: #ffffff;
}

.sidebar-dark-danger .user-panel .status {
  color: #C2C7D0;
  background: rgba(255, 255, 255, 0.1);
}

.sidebar-dark-danger .user-panel .status:hover, .sidebar-dark-danger .user-panel .status:focus, .sidebar-dark-danger .user-panel .status:active {
  color: #ffffff;
  background: rgba(247, 247, 247, 0.1);
}

.sidebar-dark-danger .user-panel .dropdown-menu {
  border-color: rgba(242, 242, 242, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.sidebar-dark-danger .user-panel .dropdown-item {
  color: #212529;
}

.sidebar-dark-danger .nav-sidebar > .nav-item > .nav-link:active, .sidebar-dark-danger .nav-sidebar > .nav-item > .nav-link:focus {
  color: #C2C7D0;
}

.sidebar-dark-danger .nav-sidebar > .nav-item.menu-open > .nav-link,
.sidebar-dark-danger .nav-sidebar > .nav-item:hover > .nav-link {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar-dark-danger .nav-sidebar > .nav-item > .nav-link.active {
  color: #ffffff;
  background-color: #dc3545;
}

.sidebar-dark-danger .nav-sidebar > .nav-item > .nav-treeview {
  background: transparent;
}

.sidebar-dark-danger .nav-header {
  color: #d0d4db;
  background: inherit;
}

.sidebar-dark-danger .sidebar a {
  color: #C2C7D0;
}

.sidebar-dark-danger .sidebar a:hover {
  text-decoration: none;
}

.sidebar-dark-danger .nav-treeview > .nav-item > .nav-link {
  color: #C2C7D0;
}

.sidebar-dark-danger .nav-treeview > .nav-item > .nav-link:hover {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar-dark-danger .nav-treeview > .nav-item > .nav-link.active, .sidebar-dark-danger .nav-treeview > .nav-item > .nav-link.active:hover {
  color: #343a40;
  background-color: rgba(255, 255, 255, 0.9);
}

.sidebar-light-danger {
  background-color: #ffffff;
}

.sidebar-light-danger .user-panel a:hover {
  color: #212529;
}

.sidebar-light-danger .user-panel .status {
  color: #343a40;
  background: #f4f4f5;
}

.sidebar-light-danger .user-panel .status:hover, .sidebar-light-danger .user-panel .status:focus, .sidebar-light-danger .user-panel .status:active {
  color: #212529;
  background: #ececed;
}

.sidebar-light-danger .user-panel .dropdown-menu {
  border-color: #e7e7e8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.sidebar-light-danger .user-panel .dropdown-item {
  color: #212529;
}

.sidebar-light-danger .nav-sidebar > .nav-item > .nav-link:active, .sidebar-light-danger .nav-sidebar > .nav-item > .nav-link:focus {
  color: #343a40;
}

.sidebar-light-danger .nav-sidebar > .nav-item.menu-open > .nav-link,
.sidebar-light-danger .nav-sidebar > .nav-item:hover > .nav-link {
  color: #212529;
  background-color: #f4f4f5;
}

.sidebar-light-danger .nav-sidebar > .nav-item > .nav-link.active {
  color: #ffffff;
  background-color: #dc3545;
}

.sidebar-light-danger .nav-sidebar > .nav-item > .nav-treeview {
  background: transparent;
}

.sidebar-light-danger .nav-header {
  color: #292d32;
  background: inherit;
}

.sidebar-light-danger .sidebar a {
  color: #343a40;
}

.sidebar-light-danger .sidebar a:hover {
  text-decoration: none;
}

.sidebar-light-danger .nav-treeview > .nav-item > .nav-link {
  color: #777;
}

.sidebar-light-danger .nav-treeview > .nav-item > .nav-link.active, .sidebar-light-danger .nav-treeview > .nav-item > .nav-link.active:hover {
  color: #212529;
  background-color: #f4f4f5;
}

.sidebar-light-danger .nav-treeview > .nav-item > .nav-link:hover {
  background-color: #f4f4f5;
}

.sidebar-dark-light {
  background-color: #343a40;
}

.sidebar-dark-light .user-panel a:hover {
  color: #ffffff;
}

.sidebar-dark-light .user-panel .status {
  color: #C2C7D0;
  background: rgba(255, 255, 255, 0.1);
}

.sidebar-dark-light .user-panel .status:hover, .sidebar-dark-light .user-panel .status:focus, .sidebar-dark-light .user-panel .status:active {
  color: #ffffff;
  background: rgba(247, 247, 247, 0.1);
}

.sidebar-dark-light .user-panel .dropdown-menu {
  border-color: rgba(242, 242, 242, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.sidebar-dark-light .user-panel .dropdown-item {
  color: #212529;
}

.sidebar-dark-light .nav-sidebar > .nav-item > .nav-link:active, .sidebar-dark-light .nav-sidebar > .nav-item > .nav-link:focus {
  color: #C2C7D0;
}

.sidebar-dark-light .nav-sidebar > .nav-item.menu-open > .nav-link,
.sidebar-dark-light .nav-sidebar > .nav-item:hover > .nav-link {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar-dark-light .nav-sidebar > .nav-item > .nav-link.active {
  color: #ffffff;
  background-color: #f8f9fa;
}

.sidebar-dark-light .nav-sidebar > .nav-item > .nav-treeview {
  background: transparent;
}

.sidebar-dark-light .nav-header {
  color: #d0d4db;
  background: inherit;
}

.sidebar-dark-light .sidebar a {
  color: #C2C7D0;
}

.sidebar-dark-light .sidebar a:hover {
  text-decoration: none;
}

.sidebar-dark-light .nav-treeview > .nav-item > .nav-link {
  color: #C2C7D0;
}

.sidebar-dark-light .nav-treeview > .nav-item > .nav-link:hover {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar-dark-light .nav-treeview > .nav-item > .nav-link.active, .sidebar-dark-light .nav-treeview > .nav-item > .nav-link.active:hover {
  color: #343a40;
  background-color: rgba(255, 255, 255, 0.9);
}

.sidebar-light-light {
  background-color: #ffffff;
}

.sidebar-light-light .user-panel a:hover {
  color: #212529;
}

.sidebar-light-light .user-panel .status {
  color: #343a40;
  background: #f4f4f5;
}

.sidebar-light-light .user-panel .status:hover, .sidebar-light-light .user-panel .status:focus, .sidebar-light-light .user-panel .status:active {
  color: #212529;
  background: #ececed;
}

.sidebar-light-light .user-panel .dropdown-menu {
  border-color: #e7e7e8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.sidebar-light-light .user-panel .dropdown-item {
  color: #212529;
}

.sidebar-light-light .nav-sidebar > .nav-item > .nav-link:active, .sidebar-light-light .nav-sidebar > .nav-item > .nav-link:focus {
  color: #343a40;
}

.sidebar-light-light .nav-sidebar > .nav-item.menu-open > .nav-link,
.sidebar-light-light .nav-sidebar > .nav-item:hover > .nav-link {
  color: #212529;
  background-color: #f4f4f5;
}

.sidebar-light-light .nav-sidebar > .nav-item > .nav-link.active {
  color: #ffffff;
  background-color: #f8f9fa;
}

.sidebar-light-light .nav-sidebar > .nav-item > .nav-treeview {
  background: transparent;
}

.sidebar-light-light .nav-header {
  color: #292d32;
  background: inherit;
}

.sidebar-light-light .sidebar a {
  color: #343a40;
}

.sidebar-light-light .sidebar a:hover {
  text-decoration: none;
}

.sidebar-light-light .nav-treeview > .nav-item > .nav-link {
  color: #777;
}

.sidebar-light-light .nav-treeview > .nav-item > .nav-link.active, .sidebar-light-light .nav-treeview > .nav-item > .nav-link.active:hover {
  color: #212529;
  background-color: #f4f4f5;
}

.sidebar-light-light .nav-treeview > .nav-item > .nav-link:hover {
  background-color: #f4f4f5;
}

.sidebar-dark-dark {
  background-color: #343a40;
}

.sidebar-dark-dark .user-panel a:hover {
  color: #ffffff;
}

.sidebar-dark-dark .user-panel .status {
  color: #C2C7D0;
  background: rgba(255, 255, 255, 0.1);
}

.sidebar-dark-dark .user-panel .status:hover, .sidebar-dark-dark .user-panel .status:focus, .sidebar-dark-dark .user-panel .status:active {
  color: #ffffff;
  background: rgba(247, 247, 247, 0.1);
}

.sidebar-dark-dark .user-panel .dropdown-menu {
  border-color: rgba(242, 242, 242, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.sidebar-dark-dark .user-panel .dropdown-item {
  color: #212529;
}

.sidebar-dark-dark .nav-sidebar > .nav-item > .nav-link:active, .sidebar-dark-dark .nav-sidebar > .nav-item > .nav-link:focus {
  color: #C2C7D0;
}

.sidebar-dark-dark .nav-sidebar > .nav-item.menu-open > .nav-link,
.sidebar-dark-dark .nav-sidebar > .nav-item:hover > .nav-link {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar-dark-dark .nav-sidebar > .nav-item > .nav-link.active {
  color: #ffffff;
  background-color: #343a40;
}

.sidebar-dark-dark .nav-sidebar > .nav-item > .nav-treeview {
  background: transparent;
}

.sidebar-dark-dark .nav-header {
  color: #d0d4db;
  background: inherit;
}

.sidebar-dark-dark .sidebar a {
  color: #C2C7D0;
}

.sidebar-dark-dark .sidebar a:hover {
  text-decoration: none;
}

.sidebar-dark-dark .nav-treeview > .nav-item > .nav-link {
  color: #C2C7D0;
}

.sidebar-dark-dark .nav-treeview > .nav-item > .nav-link:hover {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar-dark-dark .nav-treeview > .nav-item > .nav-link.active, .sidebar-dark-dark .nav-treeview > .nav-item > .nav-link.active:hover {
  color: #343a40;
  background-color: rgba(255, 255, 255, 0.9);
}

.sidebar-light-dark {
  background-color: #ffffff;
}

.sidebar-light-dark .user-panel a:hover {
  color: #212529;
}

.sidebar-light-dark .user-panel .status {
  color: #343a40;
  background: #f4f4f5;
}

.sidebar-light-dark .user-panel .status:hover, .sidebar-light-dark .user-panel .status:focus, .sidebar-light-dark .user-panel .status:active {
  color: #212529;
  background: #ececed;
}

.sidebar-light-dark .user-panel .dropdown-menu {
  border-color: #e7e7e8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.sidebar-light-dark .user-panel .dropdown-item {
  color: #212529;
}

.sidebar-light-dark .nav-sidebar > .nav-item > .nav-link:active, .sidebar-light-dark .nav-sidebar > .nav-item > .nav-link:focus {
  color: #343a40;
}

.sidebar-light-dark .nav-sidebar > .nav-item.menu-open > .nav-link,
.sidebar-light-dark .nav-sidebar > .nav-item:hover > .nav-link {
  color: #212529;
  background-color: #f4f4f5;
}

.sidebar-light-dark .nav-sidebar > .nav-item > .nav-link.active {
  color: #ffffff;
  background-color: #343a40;
}

.sidebar-light-dark .nav-sidebar > .nav-item > .nav-treeview {
  background: transparent;
}

.sidebar-light-dark .nav-header {
  color: #292d32;
  background: inherit;
}

.sidebar-light-dark .sidebar a {
  color: #343a40;
}

.sidebar-light-dark .sidebar a:hover {
  text-decoration: none;
}

.sidebar-light-dark .nav-treeview > .nav-item > .nav-link {
  color: #777;
}

.sidebar-light-dark .nav-treeview > .nav-item > .nav-link.active, .sidebar-light-dark .nav-treeview > .nav-item > .nav-link.active:hover {
  color: #212529;
  background-color: #f4f4f5;
}

.sidebar-light-dark .nav-treeview > .nav-item > .nav-link:hover {
  background-color: #f4f4f5;
}

/*
 * Component: Sidebar Mini
 */
@media (min-width: 992px) {
  .sidebar-mini .nav-sidebar,
  .sidebar-mini .nav-sidebar > .nav-header,
  .sidebar-mini .nav-sidebar .nav-link {
    white-space: nowrap;
    overflow: hidden;
  }
  .sidebar-mini.sidebar-collapse .d-hidden-mini {
    display: none;
  }
  .sidebar-mini.sidebar-collapse .content-wrapper,
  .sidebar-mini.sidebar-collapse .main-footer,
  .sidebar-mini.sidebar-collapse .main-header {
    margin-left: 4.6rem !important;
  }
  .sidebar-mini.sidebar-collapse .nav-sidebar .nav-header {
    display: none;
  }
  .sidebar-mini.sidebar-collapse .sidebar .user-panel > .info,
  .sidebar-mini.sidebar-collapse .nav-sidebar .nav-link p,
  .sidebar-mini.sidebar-collapse .brand-text {
    opacity: 0;
    margin-left: -10px;
  }
  .sidebar-mini.sidebar-collapse .main-sidebar, .sidebar-mini.sidebar-collapse .main-sidebar:before {
    margin-left: 0;
    width: 4.6rem;
  }
  .sidebar-mini.sidebar-collapse .main-sidebar .user-panel .image {
    float: none;
  }
  .sidebar-mini.sidebar-collapse .main-sidebar:hover {
    width: 250px;
  }
  .sidebar-mini.sidebar-collapse .main-sidebar:hover .user-panel {
    text-align: left;
  }
  .sidebar-mini.sidebar-collapse .main-sidebar:hover .user-panel .image {
    float: left;
  }
  .sidebar-mini.sidebar-collapse .main-sidebar:hover .user-panel > .info,
  .sidebar-mini.sidebar-collapse .main-sidebar:hover .nav-sidebar .nav-link p,
  .sidebar-mini.sidebar-collapse .main-sidebar:hover .brand-text {
    opacity: 1;
    margin-left: 0;
    display: inline-block;
  }
  .sidebar-mini.sidebar-collapse .main-sidebar:hover .brand-image {
    margin-right: .5rem;
  }
  .sidebar-mini.sidebar-collapse .main-sidebar:hover .sidebar-form,
  .sidebar-mini.sidebar-collapse .main-sidebar:hover .user-panel > .info {
    display: block !important;
    -webkit-transform: translateZ(0);
  }
  .sidebar-mini.sidebar-collapse .main-sidebar:hover .nav-sidebar > .nav-item > .nav-link > span {
    display: inline-block !important;
  }
  .sidebar-mini.sidebar-collapse .visible-sidebar-mini {
    display: block !important;
  }
}

.nav-sidebar {
  position: relative;
}

.nav-sidebar:hover {
  overflow: visible;
}

.sidebar-form,
.nav-sidebar > .nav-header {
  overflow: hidden;
  text-overflow: clip;
}

.nav-sidebar .nav-item > .nav-link {
  position: relative;
}

.nav-sidebar .nav-item > .nav-link > .float-right {
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -7px;
}

.sidebar .nav-link p,
.main-sidebar .brand-text,
.sidebar .user-panel .info {
  transition: margin-left 0.3s linear, opacity 0.5s ease;
}

@media screen and (prefers-reduced-motion: reduce) {
  .sidebar .nav-link p,
  .main-sidebar .brand-text,
  .sidebar .user-panel .info {
    transition: none;
  }
}

/*
 * Component: Control sidebar. By default, this is the right sidebar.
 */
.control-sidebar {
  position: absolute;
  top: 2.5rem;
  z-index: 830;
}

.control-sidebar, .control-sidebar:before {
  width: 250px;
  right: -250px;
  bottom: 0;
  transition: right 0.3s ease-in-out;
}

@media screen and (prefers-reduced-motion: reduce) {
  .control-sidebar, .control-sidebar:before {
    transition: none;
  }
}

.control-sidebar:before {
  top: 0;
  display: block;
  position: fixed;
  content: " ";
  z-index: -1;
}

@media (min-width: 768px) {
  .control-sidebar-open .control-sidebar, .control-sidebar-open .control-sidebar:before {
    right: 0;
  }
  .control-sidebar-open .content-wrapper,
  .control-sidebar-open .main-footer {
    margin-right: 250px;
  }
}

@media (max-width: 991.98px) {
  .control-sidebar-open .control-sidebar, .control-sidebar-open .control-sidebar:before {
    right: 0;
  }
}

.control-sidebar-slide-open .control-sidebar, .control-sidebar-slide-open .control-sidebar:before {
  right: 0;
}

.control-sidebar-dark,
.control-sidebar-dark a,
.control-sidebar-dark .nav-link {
  color: #C2C7D0;
}

.control-sidebar-dark, .control-sidebar-dark:before {
  background: #343a40;
}

.control-sidebar-dark a:hover {
  color: #ffffff;
}

.control-sidebar-dark h1,
.control-sidebar-dark h2,
.control-sidebar-dark h3,
.control-sidebar-dark h4,
.control-sidebar-dark h5,
.control-sidebar-dark h6,
.control-sidebar-dark label {
  color: #ffffff;
}

.control-sidebar-dark .nav-tabs {
  border-bottom: 0;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 5px;
}

.control-sidebar-dark .nav-tabs .nav-item {
  margin: 0;
}

.control-sidebar-dark .nav-tabs .nav-link {
  position: relative;
  border-radius: 0;
  text-align: center;
  padding: 10px 20px;
}

.control-sidebar-dark .nav-tabs .nav-link, .control-sidebar-dark .nav-tabs .nav-link:hover, .control-sidebar-dark .nav-tabs .nav-link:active, .control-sidebar-dark .nav-tabs .nav-link:focus, .control-sidebar-dark .nav-tabs .nav-link.active {
  border: 0;
}

.control-sidebar-dark .nav-tabs .nav-link:hover, .control-sidebar-dark .nav-tabs .nav-link:active, .control-sidebar-dark .nav-tabs .nav-link:focus, .control-sidebar-dark .nav-tabs .nav-link.active {
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-top-color: transparent;
  color: #ffffff;
}

.control-sidebar-dark .nav-tabs .nav-link.active {
  background-color: #343a40;
}

.control-sidebar-dark .tab-pane {
  padding: 10px 15px;
}

.control-sidebar-light {
  color: #4b545c;
}

.control-sidebar-light, .control-sidebar-light:before {
  background: #ffffff;
  border-left: 1px solid #adb5bd;
}

/*
 * Component: Dropdown menus
 * -------------------------
 */
.dropdown-item-title {
  font-size: 1rem;
  margin: 0;
}

.dropdown-menu-lg {
  min-width: 280px;
  max-width: 300px;
  padding: 0;
}

.dropdown-menu-lg .dropdown-divider {
  margin: 0;
}

.dropdown-menu-lg .dropdown-item {
  padding: 0.5rem 1rem;
}

.dropdown-menu-lg p {
  white-space: normal;
  margin: 0;
}

.dropdown-footer,
.dropdown-header {
  text-align: center;
  display: block;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

/* Add fade animation to dropdown menus by appending
 the class .animated-dropdown-menu to the .dropdown-menu ul (or ol)*/
.open:not(.dropup) > .animated-dropdown-menu {
  backface-visibility: visible !important;
  animation: flipInX 0.7s both;
}

@keyframes flipInX {
  0% {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transition-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transition-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  100% {
    transform: perspective(400px);
  }
}

@-webkit-keyframes flipInX {
  0% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-transition-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-transition-timing-function: ease-in;
  }
  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  100% {
    -webkit-transform: perspective(400px);
  }
}

/* Fix dropdown menu in navbars */
.navbar-custom-menu > .navbar-nav > li {
  position: relative;
}

.navbar-custom-menu > .navbar-nav > li > .dropdown-menu {
  position: absolute;
  right: 0;
  left: auto;
}

@media (max-width: 767.98px) {
  .navbar-custom-menu > .navbar-nav {
    float: right;
  }
  .navbar-custom-menu > .navbar-nav > li {
    position: static;
  }
  .navbar-custom-menu > .navbar-nav > li > .dropdown-menu {
    position: absolute;
    right: 5%;
    left: auto;
    border: 1px solid #ddd;
    background: #ffffff;
  }
}

/*
 * Component: Form
 * ---------------
 */
.form-group.has-icon {
  position: relative;
}

.form-group.has-icon .form-control {
  padding-right: 35px;
}

.form-group.has-icon .form-icon {
  cursor: pointer;
  position: absolute;
  right: 3px;
  top: 0;
  padding: 0.375rem 0.75rem;
  border: 0;
  background-color: transparent;
  font-size: 1rem;
}

/* button groups */
.btn-group-vertical .btn.btn-flat:first-of-type, .btn-group-vertical .btn.btn-flat:last-of-type {
  border-radius: 0;
}

/* Support Font Awesome icons in form-control */
.form-control-feedback.fa {
  line-height: calc(2.25rem + 2px);
}

.input-lg + .form-control-feedback.fa,
.input-group-lg + .form-control-feedback.fa,
.form-group-lg .form-control + .form-control-feedback.fa {
  line-height: calc(2.875rem + 2px);
}

.input-sm + .form-control-feedback.fa,
.input-group-sm + .form-control-feedback.fa,
.form-group-sm .form-control + .form-control-feedback.fa {
  line-height: calc(1.8125rem + 2px);
}

label:not(.form-check-label):not(.custom-file-label) {
  font-weight: 700;
}

/*
 * Component: Progress Bar
 * -----------------------
 */
.progress {
  box-shadow: none;
  border-radius: 1px;
}

.progress-sm {
  height: 10px;
}

.progress-xs {
  height: 7px;
}

.progress-xxs {
  height: 3px;
}

.progress.vertical {
  position: relative;
  width: 30px;
  height: 200px;
  display: inline-block;
  margin-right: 10px;
}

.progress.vertical > .progress-bar {
  width: 100%;
  position: absolute;
  bottom: 0;
}

.progress.vertical.sm, .progress.vertical.progress-sm {
  width: 20px;
}

.progress.vertical.xs, .progress.vertical.progress-xs {
  width: 10px;
}

.progress.vertical.xxs, .progress.vertical.progress-xxs {
  width: 3px;
}

.table tr > td .progress {
  margin: 0;
}

/*
 * Component: Small Box
 * --------------------
 */
.small-box {
  border-radius: 0.25rem;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.125), 0 1px 3px rgba(0, 0, 0, 0.2);
  position: relative;
  display: block;
  margin-bottom: 20px;
}

.small-box > .inner {
  padding: 10px;
}

.small-box > .small-box-footer {
  position: relative;
  text-align: center;
  padding: 3px 0;
  color: #ffffff;
  color: rgba(255, 255, 255, 0.8);
  display: block;
  z-index: 10;
  background: rgba(0, 0, 0, 0.1);
  text-decoration: none;
}

.small-box > .small-box-footer:hover {
  color: #ffffff;
  background: rgba(0, 0, 0, 0.15);
}

.small-box h3 {
  font-size: 38px;
  font-weight: bold;
  margin: 0 0 10px 0;
  white-space: nowrap;
  padding: 0;
}

.small-box p {
  font-size: 15px;
}

.small-box p > small {
  display: block;
  color: #f9f9f9;
  font-size: 13px;
  margin-top: 5px;
}

.small-box h3, .small-box p {
  z-index: 5;
}

.small-box .icon {
  transition: all 0.3s linear;
  position: absolute;
  top: -10px;
  right: 10px;
  z-index: 0;
  font-size: 90px;
  color: rgba(0, 0, 0, 0.15);
}

.small-box:hover {
  text-decoration: none;
}

.small-box:hover .icon {
  font-size: 95px;
}

@media (max-width: 767.98px) {
  .small-box {
    text-align: center;
  }
  .small-box .icon {
    display: none;
  }
  .small-box p {
    font-size: 12px;
  }
}

/*
 * Component: Box
 * --------------
 */
.card {
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.125), 0 1px 3px rgba(0, 0, 0, 0.2);
}

.card.bg-dark,
.card.bg-dark .card-body {
  color: #ffffff;
}

.card.collapsed-card .card-body,
.card.collapsed-card .card-footer {
  display: none;
}

.card .nav.flex-column > li {
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  margin: 0;
}

.card .nav.flex-column > li:last-of-type {
  border-bottom: none;
}

.card.height-control .card-body {
  max-height: 300px;
  overflow: auto;
}

.card .border-right {
  border-right: 1px solid rgba(0, 0, 0, 0.125);
}

.card .border-left {
  border-left: 1px solid rgba(0, 0, 0, 0.125);
}

.card > .overlay,
.card > .loading-img,
.overlay-wrapper > .overlay,
.overlay-wrapper > .loading-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.card .overlay,
.overlay-wrapper .overlay {
  z-index: 50;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 0.25rem;
}

.card .overlay > .fa,
.overlay-wrapper .overlay > .fa {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -15px;
  margin-top: -15px;
  color: #000;
  font-size: 30px;
}

.card .overlay.dark,
.overlay-wrapper .overlay.dark {
  background: rgba(0, 0, 0, 0.5);
}

.card-header::after,
.card-body::after,
.card-footer::after {
  display: block;
  clear: both;
  content: "";
}

.card-header {
  position: relative;
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.collapsed-card .card-header {
  border-bottom: none;
}

.card-header > .card-tools {
  position: absolute;
  right: 1rem;
  top: .5rem;
}

.card-header > .card-tools [data-toggle="tooltip"] {
  position: relative;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0;
}

.btn-tool {
  padding: .25rem .5rem;
  font-size: 0.875rem;
  background: transparent;
  color: #adb5bd;
}

.btn-group.show .btn-tool, .btn-tool:hover {
  color: #495057;
}

.show .btn-tool, .btn-tool:focus {
  box-shadow: none !important;
}

.card-body > .table {
  margin-bottom: 0;
}

.card-body > .table > thead > tr > th,
.card-body > .table > thead > tr > td {
  border-top-width: 0;
}

.card-body .fc {
  margin-top: 5px;
}

.card-body .full-width-chart {
  margin: -19px;
}

.card-body.p-0 .full-width-chart {
  margin: -9px;
}

.chart-legend {
  margin: 10px 0;
}

@media (max-width: 576px) {
  .chart-legend > li {
    float: left;
    margin-right: 10px;
  }
}

.card-comments {
  background: #f7f7f7;
}

.card-comments .card-comment {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.card-comments .card-comment::after {
  display: block;
  clear: both;
  content: "";
}

.card-comments .card-comment:last-of-type {
  border-bottom: 0;
}

.card-comments .card-comment:first-of-type {
  padding-top: 0;
}

.card-comments .card-comment img {
  float: left;
}

.card-comments .comment-text {
  margin-left: 40px;
  color: #555;
}

.card-comments .username {
  color: #444;
  display: block;
  font-weight: 600;
}

.card-comments .text-muted {
  font-weight: 400;
  font-size: 12px;
}

.todo-list {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: auto;
}

.todo-list > li {
  border-radius: 2px;
  padding: 10px;
  background: #f4f4f4;
  margin-bottom: 2px;
  border-left: 2px solid #e6e7e8;
  color: #444;
}

.todo-list > li:last-of-type {
  margin-bottom: 0;
}

.todo-list > li > input[type='checkbox'] {
  margin: 0 10px 0 5px;
}

.todo-list > li .text {
  display: inline-block;
  margin-left: 5px;
  font-weight: 600;
}

.todo-list > li .label {
  margin-left: 10px;
  font-size: 9px;
}

.todo-list > li .tools {
  display: none;
  float: right;
  color: #dc3545;
}

.todo-list > li .tools > .fa, .todo-list > li .tools > .glyphicon, .todo-list > li .tools > .ion {
  margin-right: 5px;
  cursor: pointer;
}

.todo-list > li:hover .tools {
  display: inline-block;
}

.todo-list > li.done {
  color: #999;
}

.todo-list > li.done .text {
  text-decoration: line-through;
  font-weight: 500;
}

.todo-list > li.done .label {
  background: #adb5bd !important;
}

.todo-list .danger {
  border-left-color: #dc3545;
}

.todo-list .warning {
  border-left-color: #ffc107;
}

.todo-list .info {
  border-left-color: #17a2b8;
}

.todo-list .success {
  border-left-color: #28a745;
}

.todo-list .primary {
  border-left-color: #007bff;
}

.todo-list .handle {
  display: inline-block;
  cursor: move;
  margin: 0 5px;
}

.card-input {
  max-width: 200px;
}

.card-primary:not(.card-outline) .card-header {
  background-color: #007bff;
  border-bottom: 0;
}

.card-primary:not(.card-outline) .card-header,
.card-primary:not(.card-outline) .card-header a {
  color: #ffffff;
}

.card-primary.card-outline {
  border-top: 3px solid #007bff;
}

.bg-primary .btn-tool, .label-primary .btn-tool,
.bg-primary-gradient .btn-tool,
.card-primary:not(.card-outline) .btn-tool {
  color: rgba(255, 255, 255, 0.8);
}

.bg-primary .btn-tool:hover, .label-primary .btn-tool:hover,
.bg-primary-gradient .btn-tool:hover,
.card-primary:not(.card-outline) .btn-tool:hover {
  color: #ffffff;
}

.card-secondary:not(.card-outline) .card-header {
  background-color: #6c757d;
  border-bottom: 0;
}

.card-secondary:not(.card-outline) .card-header,
.card-secondary:not(.card-outline) .card-header a {
  color: #ffffff;
}

.card-secondary.card-outline {
  border-top: 3px solid #6c757d;
}

.bg-secondary .btn-tool,
.bg-secondary-gradient .btn-tool,
.card-secondary:not(.card-outline) .btn-tool {
  color: rgba(255, 255, 255, 0.8);
}

.bg-secondary .btn-tool:hover,
.bg-secondary-gradient .btn-tool:hover,
.card-secondary:not(.card-outline) .btn-tool:hover {
  color: #ffffff;
}

.card-success:not(.card-outline) .card-header {
  background-color: #28a745;
  border-bottom: 0;
}

.card-success:not(.card-outline) .card-header,
.card-success:not(.card-outline) .card-header a {
  color: #ffffff;
}

.card-success.card-outline {
  border-top: 3px solid #28a745;
}

.bg-success .btn-tool, .alert-success .btn-tool, .label-success .btn-tool,
.bg-success-gradient .btn-tool,
.card-success:not(.card-outline) .btn-tool {
  color: rgba(255, 255, 255, 0.8);
}

.bg-success .btn-tool:hover, .alert-success .btn-tool:hover, .label-success .btn-tool:hover,
.bg-success-gradient .btn-tool:hover,
.card-success:not(.card-outline) .btn-tool:hover {
  color: #ffffff;
}

.card-info:not(.card-outline) .card-header {
  background-color: #17a2b8;
  border-bottom: 0;
}

.card-info:not(.card-outline) .card-header,
.card-info:not(.card-outline) .card-header a {
  color: #ffffff;
}

.card-info.card-outline {
  border-top: 3px solid #17a2b8;
}

.bg-info .btn-tool, .alert-info .btn-tool, .label-info .btn-tool,
.bg-info-gradient .btn-tool,
.card-info:not(.card-outline) .btn-tool {
  color: rgba(255, 255, 255, 0.8);
}

.bg-info .btn-tool:hover, .alert-info .btn-tool:hover, .label-info .btn-tool:hover,
.bg-info-gradient .btn-tool:hover,
.card-info:not(.card-outline) .btn-tool:hover {
  color: #ffffff;
}

.card-warning:not(.card-outline) .card-header {
  background-color: #ffc107;
  border-bottom: 0;
}

.card-warning:not(.card-outline) .card-header,
.card-warning:not(.card-outline) .card-header a {
  color: #1F2D3D;
}

.card-warning.card-outline {
  border-top: 3px solid #ffc107;
}

.bg-warning .btn-tool, .alert-warning .btn-tool, .label-warning .btn-tool,
.bg-warning-gradient .btn-tool,
.card-warning:not(.card-outline) .btn-tool {
  color: rgba(31, 45, 61, 0.8);
}

.bg-warning .btn-tool:hover, .alert-warning .btn-tool:hover, .label-warning .btn-tool:hover,
.bg-warning-gradient .btn-tool:hover,
.card-warning:not(.card-outline) .btn-tool:hover {
  color: #1F2D3D;
}

.card-danger:not(.card-outline) .card-header {
  background-color: #dc3545;
  border-bottom: 0;
}

.card-danger:not(.card-outline) .card-header,
.card-danger:not(.card-outline) .card-header a {
  color: #ffffff;
}

.card-danger.card-outline {
  border-top: 3px solid #dc3545;
}

.bg-danger .btn-tool, .alert-danger .btn-tool, .alert-error .btn-tool, .label-danger .btn-tool,
.bg-danger-gradient .btn-tool,
.card-danger:not(.card-outline) .btn-tool {
  color: rgba(255, 255, 255, 0.8);
}

.bg-danger .btn-tool:hover, .alert-danger .btn-tool:hover, .alert-error .btn-tool:hover, .label-danger .btn-tool:hover,
.bg-danger-gradient .btn-tool:hover,
.card-danger:not(.card-outline) .btn-tool:hover {
  color: #ffffff;
}

.card-light:not(.card-outline) .card-header {
  background-color: #f8f9fa;
  border-bottom: 0;
}

.card-light:not(.card-outline) .card-header,
.card-light:not(.card-outline) .card-header a {
  color: #1F2D3D;
}

.card-light.card-outline {
  border-top: 3px solid #f8f9fa;
}

.bg-light .btn-tool,
.bg-light-gradient .btn-tool,
.card-light:not(.card-outline) .btn-tool {
  color: rgba(31, 45, 61, 0.8);
}

.bg-light .btn-tool:hover,
.bg-light-gradient .btn-tool:hover,
.card-light:not(.card-outline) .btn-tool:hover {
  color: #1F2D3D;
}

.card-dark:not(.card-outline) .card-header {
  background-color: #343a40;
  border-bottom: 0;
}

.card-dark:not(.card-outline) .card-header,
.card-dark:not(.card-outline) .card-header a {
  color: #ffffff;
}

.card-dark.card-outline {
  border-top: 3px solid #343a40;
}

.bg-dark .btn-tool,
.bg-dark-gradient .btn-tool,
.card-dark:not(.card-outline) .btn-tool {
  color: rgba(255, 255, 255, 0.8);
}

.bg-dark .btn-tool:hover,
.bg-dark-gradient .btn-tool:hover,
.card-dark:not(.card-outline) .btn-tool:hover {
  color: #ffffff;
}

/*
 * Component: Info Box
 * -------------------
 */
.info-box {
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.125), 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  padding: .5rem;
  min-height: 80px;
  background: #ffffff;
}

.info-box .progress {
  background-color: rgba(0, 0, 0, 0.125);
  margin: 5px 0;
  height: 2px;
}

.info-box .progress .progress-bar {
  background-color: #ffffff;
}

.info-box-icon {
  border-radius: 0.25rem;
  display: block;
  width: 70px;
  text-align: center;
  font-size: 30px;
}

.info-box-icon > img {
  max-width: 100%;
}

.info-box-content {
  padding: 5px 10px;
  flex: 1;
}

.info-box-number {
  display: block;
  font-weight: 700;
}

.progress-description,
.info-box-text {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.info-box.bg-primary, .info-box.label-primary,
.info-box.bg-primary-gradient {
  color: #ffffff;
}

.info-box.bg-primary .progress-bar, .info-box.label-primary .progress-bar,
.info-box.bg-primary-gradient .progress-bar {
  background-color: #ffffff;
}

.info-box.bg-secondary,
.info-box.bg-secondary-gradient {
  color: #ffffff;
}

.info-box.bg-secondary .progress-bar,
.info-box.bg-secondary-gradient .progress-bar {
  background-color: #ffffff;
}

.info-box.bg-success, .info-box.alert-success, .info-box.label-success,
.info-box.bg-success-gradient {
  color: #ffffff;
}

.info-box.bg-success .progress-bar, .info-box.alert-success .progress-bar, .info-box.label-success .progress-bar,
.info-box.bg-success-gradient .progress-bar {
  background-color: #ffffff;
}

.info-box.bg-info, .info-box.alert-info, .info-box.label-info,
.info-box.bg-info-gradient {
  color: #ffffff;
}

.info-box.bg-info .progress-bar, .info-box.alert-info .progress-bar, .info-box.label-info .progress-bar,
.info-box.bg-info-gradient .progress-bar {
  background-color: #ffffff;
}

.info-box.bg-warning, .info-box.alert-warning, .info-box.label-warning,
.info-box.bg-warning-gradient {
  color: #1F2D3D;
}

.info-box.bg-warning .progress-bar, .info-box.alert-warning .progress-bar, .info-box.label-warning .progress-bar,
.info-box.bg-warning-gradient .progress-bar {
  background-color: #1F2D3D;
}

.info-box.bg-danger, .info-box.alert-danger,
.info-box.alert-error, .info-box.label-danger,
.info-box.bg-danger-gradient {
  color: #ffffff;
}

.info-box.bg-danger .progress-bar, .info-box.alert-danger .progress-bar, .info-box.alert-error .progress-bar, .info-box.label-danger .progress-bar,
.info-box.bg-danger-gradient .progress-bar {
  background-color: #ffffff;
}

.info-box.bg-light,
.info-box.bg-light-gradient {
  color: #1F2D3D;
}

.info-box.bg-light .progress-bar,
.info-box.bg-light-gradient .progress-bar {
  background-color: #1F2D3D;
}

.info-box.bg-dark,
.info-box.bg-dark-gradient {
  color: #ffffff;
}

.info-box.bg-dark .progress-bar,
.info-box.bg-dark-gradient .progress-bar {
  background-color: #ffffff;
}

.info-box-more {
  display: block;
}

.progress-description {
  margin: 0;
}

/*
 * Component: Timeline
 * -------------------
 */
.timeline {
  position: relative;
  margin: 0 0 30px 0;
  padding: 0;
  list-style: none;
}

.timeline:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #ddd;
  left: 31px;
  margin: 0;
  border-radius: 0.25rem;
}

.timeline > li {
  position: relative;
  margin-right: 10px;
  margin-bottom: 15px;
}

.timeline > li::after {
  display: block;
  clear: both;
  content: "";
}

.timeline > li > .timeline-item {
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.125), 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  margin-top: 0;
  background: #ffffff;
  color: #444;
  margin-left: 60px;
  margin-right: 15px;
  padding: 0;
  position: relative;
}

.timeline > li > .timeline-item > .time {
  color: #999;
  float: right;
  padding: 10px;
  font-size: 12px;
}

.timeline > li > .timeline-item > .timeline-header {
  margin: 0;
  color: #555;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  padding: 10px;
  font-size: 16px;
  line-height: 1.1;
}

.timeline > li > .timeline-item > .timeline-header > a {
  font-weight: 600;
}

.timeline > li > .timeline-item > .timeline-body, .timeline > li > .timeline-item > .timeline-footer {
  padding: 10px;
}

.timeline > li > .fa,
.timeline > li > .glyphicon,
.timeline > li > .ion {
  width: 30px;
  height: 30px;
  font-size: 15px;
  line-height: 30px;
  position: absolute;
  background: #adb5bd;
  border-radius: 50%;
  text-align: center;
  left: 18px;
  top: 0;
}

.timeline > .time-label > span {
  font-weight: 600;
  padding: 5px;
  display: inline-block;
  background-color: #ffffff;
  border-radius: 4px;
}

.timeline-inverse > li > .timeline-item {
  background: #f8f9fa;
  border: 1px solid #ddd;
  box-shadow: none;
}

.timeline-inverse > li > .timeline-item > .timeline-header {
  border-bottom-color: #ddd;
}

/*
 * Component: Button
 * -----------------
 */
.btn.btn-flat {
  border-radius: 0;
  box-shadow: none;
  border-width: 1px;
}

.btn.btn-file {
  position: relative;
  overflow: hidden;
}

.btn.btn-file > input[type='file'] {
  position: absolute;
  top: 0;
  right: 0;
  min-width: 100%;
  min-height: 100%;
  font-size: 100px;
  text-align: right;
  opacity: 0;
  outline: none;
  background: white;
  cursor: inherit;
  display: block;
}

.btn-default {
  background-color: #f4f4f4;
  color: #444;
  border-color: #ddd;
}

.btn-default:hover, .btn-default:active, .btn-default.hover {
  background-color: #e7e7e7;
}

.btn-app {
  border-radius: 3px;
  position: relative;
  padding: 15px 5px;
  margin: 0 0 10px 10px;
  min-width: 80px;
  height: 60px;
  text-align: center;
  color: #666;
  border: 1px solid #ddd;
  background-color: #f4f4f4;
  font-size: 12px;
}

.btn-app > .fa,
.btn-app > .glyphicon,
.btn-app > .ion {
  font-size: 20px;
  display: block;
}

.btn-app:hover {
  background: #f4f4f4;
  color: #444;
  border-color: #aaa;
}

.btn-app:active, .btn-app:focus {
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

.btn-app > .badge {
  position: absolute;
  top: -3px;
  right: -10px;
  font-size: 10px;
  font-weight: 400;
}

/*
 * Component: Callout
 * ------------------
 */
.callout {
  border-radius: 0.25rem;
  background-color: #ffffff;
  padding: .5rem 1rem .5rem .5rem;
  border-left: 5px solid #eee;
}

.callout a {
  color: #ffffff;
  text-decoration: underline;
}

.callout a:hover {
  color: #eee;
}

.callout p:last-child {
  margin-bottom: 0;
}

.callout.callout-danger {
  border-left-color: #bd2130;
}

.callout.callout-warning {
  border-left-color: #d39e00;
}

.callout.callout-info {
  border-left-color: #117a8b;
}

.callout.callout-success {
  border-left-color: #1e7e34;
}

/*
 * Component: alert
 * ----------------
 */
.alert .icon {
  margin-right: 10px;
}

.alert .close, .alert .mailbox-attachment-close {
  color: #000;
  opacity: .2;
}

.alert .close:hover, .alert .mailbox-attachment-close:hover {
  opacity: .5;
}

.alert a {
  color: #ffffff;
  text-decoration: underline;
}

.alert-success {
  border-color: #23923d;
}

.alert-danger,
.alert-error {
  border-color: #d32535;
}

.alert-warning {
  border-color: #edb100;
}

.alert-info {
  border-color: #148ea1;
}

/*
 * Component: Nav
 * --------------
 */
.nav-pills .nav-link {
  color: #6c757d;
}

.nav-pills .nav-link:not(.active):hover {
  color: #007bff;
}

/*
 * Component: Products List
 * ------------------------
 */
.products-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.products-list > .item {
  border-radius: 0.25rem;
  padding: 10px 0;
  background: #ffffff;
}

.products-list > .item::after {
  display: block;
  clear: both;
  content: "";
}

.products-list .product-img {
  float: left;
}

.products-list .product-img img {
  width: 50px;
  height: 50px;
}

.products-list .product-info {
  margin-left: 60px;
}

.products-list .product-title {
  font-weight: 600;
}

.products-list .product-description {
  display: block;
  color: #6c757d;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.product-list-in-card > .item {
  border-radius: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}

.product-list-in-card > .item:last-of-type {
  border-bottom-width: 0;
}

/*
 * Component: Table
 * ----------------
 */
.table.no-border,
.table.no-border td,
.table.no-border th {
  border: 0;
}

.table.text-center, .table.text-center td, .table.text-center th {
  text-align: center;
}

.table-valign-middle thead > tr > th,
.table-valign-middle thead > tr > td,
.table-valign-middle tbody > tr > th,
.table-valign-middle tbody > tr > td {
  vertical-align: middle;
}

/*
 * Component: Label
 * ----------------
 */
.label-default {
  background-color: #adb5bd;
  color: #444;
}

/*
 * Component: Direct Chat
 * ----------------------
 */
.direct-chat .card-body {
  position: relative;
  overflow-x: hidden;
  padding: 0;
}

.direct-chat.chat-pane-open .direct-chat-contacts {
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  transform: translate(0, 0);
}

.direct-chat-messages {
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  transform: translate(0, 0);
  padding: 10px;
  height: 250px;
  overflow: auto;
}

.direct-chat-msg,
.direct-chat-text {
  display: block;
}

.direct-chat-msg {
  margin-bottom: 10px;
}

.direct-chat-msg::after {
  display: block;
  clear: both;
  content: "";
}

.direct-chat-messages,
.direct-chat-contacts {
  transition: transform .5s ease-in-out;
}

.direct-chat-text {
  border-radius: 0.3rem;
  position: relative;
  padding: 5px 10px;
  background: #d2d6de;
  border: 1px solid #d2d6de;
  margin: 5px 0 0 50px;
  color: #444;
}

.direct-chat-text:after, .direct-chat-text:before {
  position: absolute;
  right: 100%;
  top: 15px;
  border: solid transparent;
  border-right-color: #d2d6de;
  content: ' ';
  height: 0;
  width: 0;
  pointer-events: none;
}

.direct-chat-text:after {
  border-width: 5px;
  margin-top: -5px;
}

.direct-chat-text:before {
  border-width: 6px;
  margin-top: -6px;
}

.right .direct-chat-text {
  margin-right: 50px;
  margin-left: 0;
}

.right .direct-chat-text:after, .right .direct-chat-text:before {
  right: auto;
  left: 100%;
  border-right-color: transparent;
  border-left-color: #d2d6de;
}

.direct-chat-img {
  border-radius: 50%;
  float: left;
  width: 40px;
  height: 40px;
}

.right .direct-chat-img {
  float: right;
}

.direct-chat-info {
  display: block;
  margin-bottom: 2px;
  font-size: 0.875rem;
}

.direct-chat-name {
  font-weight: 600;
}

.direct-chat-timestamp {
  color: #999;
}

.direct-chat-contacts-open .direct-chat-contacts {
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  transform: translate(0, 0);
}

.direct-chat-contacts {
  -webkit-transform: translate(101%, 0);
  -ms-transform: translate(101%, 0);
  transform: translate(101%, 0);
  position: absolute;
  top: 0;
  bottom: 0;
  height: 250px;
  width: 100%;
  background: #222d32;
  color: #ffffff;
  overflow: auto;
}

.contacts-list > li {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 0;
}

.contacts-list > li::after {
  display: block;
  clear: both;
  content: "";
}

.contacts-list > li:last-of-type {
  border-bottom: none;
}

.contacts-list-img {
  border-radius: 50%;
  width: 40px;
  float: left;
}

.contacts-list-info {
  margin-left: 45px;
  color: #ffffff;
}

.contacts-list-name,
.contacts-list-status {
  display: block;
}

.contacts-list-name {
  font-weight: 600;
}

.contacts-list-status {
  font-size: 0.875rem;
}

.contacts-list-date {
  color: #aaa;
  font-weight: normal;
}

.contacts-list-msg {
  color: #999;
}

.direct-chat-danger .right > .direct-chat-text {
  background: #dc3545;
  border-color: #dc3545;
  color: #ffffff;
}

.direct-chat-danger .right > .direct-chat-text:after, .direct-chat-danger .right > .direct-chat-text:before {
  border-left-color: #dc3545;
}

.direct-chat-primary .right > .direct-chat-text {
  background: #007bff;
  border-color: #007bff;
  color: #ffffff;
}

.direct-chat-primary .right > .direct-chat-text:after, .direct-chat-primary .right > .direct-chat-text:before {
  border-left-color: #007bff;
}

.direct-chat-warning .right > .direct-chat-text {
  background: #ffc107;
  border-color: #ffc107;
  color: #1F2D3D;
}

.direct-chat-warning .right > .direct-chat-text:after, .direct-chat-warning .right > .direct-chat-text:before {
  border-left-color: #ffc107;
}

.direct-chat-info .right > .direct-chat-text {
  background: #17a2b8;
  border-color: #17a2b8;
  color: #ffffff;
}

.direct-chat-info .right > .direct-chat-text:after, .direct-chat-info .right > .direct-chat-text:before {
  border-left-color: #17a2b8;
}

.direct-chat-success .right > .direct-chat-text {
  background: #28a745;
  border-color: #28a745;
  color: #ffffff;
}

.direct-chat-success .right > .direct-chat-text:after, .direct-chat-success .right > .direct-chat-text:before {
  border-left-color: #28a745;
}

/*
 * Component: Users List
 * ---------------------
 */
.users-list > li {
  width: 25%;
  float: left;
  padding: 10px;
  text-align: center;
}

.users-list > li img {
  border-radius: 50%;
  max-width: 100%;
  height: auto;
}

.users-list > li > a:hover,
.users-list > li > a:hover .users-list-name {
  color: #999;
}

.users-list-name,
.users-list-date {
  display: block;
}

.users-list-name {
  font-size: 0.875rem;
  color: #444;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.users-list-date {
  color: #999;
  font-size: 12px;
}

/*
 * Component: Carousel
 * -------------------
 */
.carousel-control.left, .carousel-control.right {
  background-image: none;
}

.carousel-control > .fa {
  font-size: 40px;
  position: absolute;
  top: 50%;
  z-index: 5;
  display: inline-block;
  margin-top: -20px;
}

/*
 * Component: Social Widgets
 * -------------------------
 */
.card-widget {
  border: none;
  position: relative;
}

.widget-user .widget-user-header {
  padding: 1rem;
  height: 120px;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.widget-user .widget-user-username {
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 25px;
  font-weight: 300;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

.widget-user .widget-user-desc {
  margin-top: 0;
}

.widget-user .widget-user-image {
  position: absolute;
  top: 65px;
  left: 50%;
  margin-left: -45px;
}

.widget-user .widget-user-image > img {
  width: 90px;
  height: auto;
  border: 3px solid #ffffff;
}

.widget-user .card-footer {
  padding-top: 40px;
}

.widget-user-2 .widget-user-header {
  padding: 1rem;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.widget-user-2 .widget-user-username {
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 25px;
  font-weight: 300;
}

.widget-user-2 .widget-user-desc {
  margin-top: 0;
}

.widget-user-2 .widget-user-username,
.widget-user-2 .widget-user-desc {
  margin-left: 75px;
}

.widget-user-2 .widget-user-image > img {
  width: 65px;
  height: auto;
  float: left;
}

/*
 * Page: Mailbox
 * -------------
 */
.mailbox-messages > .table {
  margin: 0;
}

.mailbox-controls {
  padding: 5px;
}

.mailbox-controls.with-border {
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}

.mailbox-read-info {
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  padding: 10px;
}

.mailbox-read-info h3 {
  font-size: 20px;
  margin: 0;
}

.mailbox-read-info h5 {
  margin: 0;
  padding: 5px 0 0 0;
}

.mailbox-read-time {
  color: #999;
  font-size: 13px;
}

.mailbox-read-message {
  padding: 10px;
}

.mailbox-attachments li {
  float: left;
  width: 200px;
  border: 1px solid #eee;
  margin-bottom: 10px;
  margin-right: 10px;
}

.mailbox-attachment-name {
  font-weight: bold;
  color: #666;
}

.mailbox-attachment-icon,
.mailbox-attachment-info,
.mailbox-attachment-size {
  display: block;
}

.mailbox-attachment-info {
  padding: 10px;
  background: #f4f4f4;
}

.mailbox-attachment-size {
  color: #999;
  font-size: 12px;
}

.mailbox-attachment-icon {
  text-align: center;
  font-size: 65px;
  color: #666;
  padding: 20px 10px;
}

.mailbox-attachment-icon.has-img {
  padding: 0;
}

.mailbox-attachment-icon.has-img > img {
  max-width: 100%;
  height: auto;
}

/*
 * Page: Lock Screen
 * -----------------
 */
/* ADD THIS CLASS TO THE <BODY> TAG */
.lockscreen {
  background: #e9ecef;
}

.lockscreen-logo {
  font-size: 35px;
  text-align: center;
  margin-bottom: 25px;
  font-weight: 300;
}

.lockscreen-logo a {
  color: #444;
}

.lockscreen-wrapper {
  max-width: 400px;
  margin: 0 auto;
  margin-top: 10%;
}

/* User name [optional] */
.lockscreen .lockscreen-name {
  text-align: center;
  font-weight: 600;
}

/* Will contain the image and the sign in form */
.lockscreen-item {
  border-radius: 4px;
  padding: 0;
  background: #ffffff;
  position: relative;
  margin: 10px auto 30px auto;
  width: 290px;
}

/* User image */
.lockscreen-image {
  border-radius: 50%;
  position: absolute;
  left: -10px;
  top: -25px;
  background: #ffffff;
  padding: 5px;
  z-index: 10;
}

.lockscreen-image > img {
  border-radius: 50%;
  width: 70px;
  height: 70px;
}

/* Contains the password input and the login button */
.lockscreen-credentials {
  margin-left: 70px;
}

.lockscreen-credentials .form-control {
  border: 0;
}

.lockscreen-credentials .btn {
  background-color: #ffffff;
  border: 0;
  padding: 0 10px;
}

.lockscreen-footer {
  margin-top: 10px;
}

/*
 * Page: Login & Register
 * ----------------------
 */
.login-logo,
.register-logo {
  font-size: 35px;
  text-align: center;
  margin-bottom: 25px;
  font-weight: 300;
}

.login-logo a,
.register-logo a {
  color: #444;
}

.login-page,
.register-page {
  background: #e9ecef;
}

.login-box,
.register-box {
  width: 360px;
  margin: 7% auto;
}

@media (max-width: 576px) {
  .login-box,
  .register-box {
    width: 90%;
    margin-top: 20px;
  }
}

.login-box-body,
.register-box-body {
  background: #ffffff;
  padding: 20px;
  border-top: 0;
  color: #666;
}

.login-box-body .form-control-feedback,
.register-box-body .form-control-feedback {
  color: #777;
}

.login-box-msg,
.register-box-msg {
  margin: 0;
  text-align: center;
  padding: 0 20px 20px 20px;
}

.social-auth-links {
  margin: 10px 0;
}

/*
 * Page: 400 and 500 error pages
 * ------------------------------
 */
.error-page {
  width: 600px;
  margin: 20px auto 0 auto;
}

@media (max-width: 767.98px) {
  .error-page {
    width: 100%;
  }
}

.error-page > .headline {
  float: left;
  font-size: 100px;
  font-weight: 300;
}

@media (max-width: 767.98px) {
  .error-page > .headline {
    float: none;
    text-align: center;
  }
}

.error-page > .error-content {
  margin-left: 190px;
  display: block;
}

@media (max-width: 767.98px) {
  .error-page > .error-content {
    margin-left: 0;
  }
}

.error-page > .error-content > h3 {
  font-weight: 300;
  font-size: 25px;
}

@media (max-width: 767.98px) {
  .error-page > .error-content > h3 {
    text-align: center;
  }
}

/*
 * Page: Invoice
 * -------------
 */
.invoice {
  position: relative;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.invoice-title {
  margin-top: 0;
}

/*
 * Page: Profile
 * -------------
 */
.profile-user-img {
  margin: 0 auto;
  width: 100px;
  padding: 3px;
  border: 3px solid #adb5bd;
}

.profile-username {
  font-size: 21px;
  margin-top: 5px;
}

.post {
  border-bottom: 1px solid #adb5bd;
  margin-bottom: 15px;
  padding-bottom: 15px;
  color: #666;
}

.post:last-of-type {
  border-bottom: 0;
  margin-bottom: 0;
  padding-bottom: 0;
}

.post .user-block {
  margin-bottom: 15px;
}

/*
 * Plugin: Full Calendar
 * ---------------------
 */
.fc-button {
  background: #f4f4f4;
  background-image: none;
  color: #444;
  border-color: #ddd;
  border-bottom-color: #ddd;
}

.fc-button:hover, .fc-button:active, .fc-button.hover {
  background-color: #e9e9e9;
}

.fc-header-title h2 {
  font-size: 15px;
  line-height: 1.6em;
  color: #666;
  margin-left: 10px;
}

.fc-header-right {
  padding-right: 10px;
}

.fc-header-left {
  padding-left: 10px;
}

.fc-widget-header {
  background: #fafafa;
}

.fc-grid {
  width: 100%;
  border: 0;
}

.fc-widget-header:first-of-type,
.fc-widget-content:first-of-type {
  border-left: 0;
  border-right: 0;
}

.fc-widget-header:last-of-type,
.fc-widget-content:last-of-type {
  border-right: 0;
}

.fc-toolbar {
  padding: 1rem;
  margin: 0;
}

.fc-day-number {
  font-size: 20px;
  font-weight: 300;
  padding-right: 10px;
}

.fc-color-picker {
  list-style: none;
  margin: 0;
  padding: 0;
}

.fc-color-picker > li {
  float: left;
  font-size: 30px;
  margin-right: 5px;
  line-height: 30px;
}

.fc-color-picker > li .fa {
  transition: transform linear .3s;
}

.fc-color-picker > li .fa:hover {
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
}

#add-new-event {
  transition: all linear .3s;
}

.external-event {
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.125), 0 1px 3px rgba(0, 0, 0, 0.2);
  padding: 5px 10px;
  font-weight: bold;
  margin-bottom: 4px;
  border-radius: 0.25rem;
  cursor: move;
}

.external-event:hover {
  box-shadow: inset 0 0 90px rgba(0, 0, 0, 0.2);
}

/*
 * Plugin: Select2
 * ---------------
 */
.select2-container--default.select2-container--focus, .select2-container--default:focus, .select2-container--default:active,
.select2-selection.select2-container--focus,
.select2-selection:focus,
.select2-selection:active {
  outline: none;
}

.select2-container--default .select2-selection--single,
.select2-selection .select2-selection--single {
  border: 1px solid #d2d6de;
  padding: 6px 12px;
  height: 34px;
}

.select2-container--default.select2-container--open {
  border-color: #007bff;
}

.select2-dropdown {
  border: 1px solid #d2d6de;
}

.select2-container--default .select2-results__option--highlighted[aria-selected] {
  background-color: #007bff;
  color: white;
}

.select2-results__option {
  padding: 6px 12px;
  user-select: none;
  -webkit-user-select: none;
}

.select2-container .select2-selection--single .select2-selection__rendered {
  padding-left: 0;
  padding-right: 0;
  height: auto;
  margin-top: -4px;
}

.select2-container[dir="rtl"] .select2-selection--single .select2-selection__rendered {
  padding-right: 6px;
  padding-left: 20px;
}

.select2-container--default .select2-selection--single .select2-selection__arrow {
  height: 28px;
  right: 3px;
}

.select2-container--default .select2-selection--single .select2-selection__arrow b {
  margin-top: 0;
}

.select2-dropdown .select2-search__field,
.select2-search--inline .select2-search__field {
  border: 1px solid #d2d6de;
}

.select2-dropdown .select2-search__field:focus,
.select2-search--inline .select2-search__field:focus {
  outline: none;
  border: 1px solid #007bff;
}

.select2-container--default .select2-results__option[aria-disabled=true] {
  color: #999;
}

.select2-container--default .select2-results__option[aria-selected=true] {
  background-color: #ddd;
}

.select2-container--default .select2-results__option[aria-selected=true], .select2-container--default .select2-results__option[aria-selected=true]:hover {
  color: #444;
}

.select2-container--default .select2-selection--multiple {
  border: 1px solid #d2d6de;
}

.select2-container--default .select2-selection--multiple:focus {
  border-color: #007bff;
}

.select2-container--default.select2-container--focus .select2-selection--multiple {
  border-color: #d2d6de;
}

.select2-container--default .select2-selection--multiple .select2-selection__choice {
  background-color: #007bff;
  border-color: #006fe6;
  padding: 1px 10px;
  color: #ffffff;
}

.select2-container--default .select2-selection--multiple .select2-selection__choice__remove {
  margin-right: 5px;
  color: rgba(255, 255, 255, 0.7);
}

.select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover {
  color: #ffffff;
}

.select2-container .select2-selection--single .select2-selection__rendered {
  padding-right: 10px;
}

/*
 * General: Miscellaneous
 * ----------------------
 */
a.text-muted:hover {
  color: #007bff !important;
}

.border-transparent {
  border-color: transparent !important;
}

.description-block {
  display: block;
  margin: 10px 0;
  text-align: center;
}

.description-block.margin-bottom {
  margin-bottom: 25px;
}

.description-block > .description-header {
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 16px;
}

.description-block > .description-text {
  text-transform: uppercase;
}

.bg-primary, .label-primary,
.bg-primary a,
.label-primary a {
  color: #ffffff !important;
}

.bg-secondary,
.bg-secondary a {
  color: #ffffff !important;
}

.bg-success, .alert-success, .label-success,
.bg-success a,
.alert-success a,
.label-success a {
  color: #ffffff !important;
}

.bg-info, .alert-info, .label-info,
.bg-info a,
.alert-info a,
.label-info a {
  color: #ffffff !important;
}

.bg-warning, .alert-warning, .label-warning,
.bg-warning a,
.alert-warning a,
.label-warning a {
  color: #1F2D3D !important;
}

.bg-danger, .alert-danger,
.alert-error, .label-danger,
.bg-danger a,
.alert-danger a,
.alert-error a,
.label-danger a {
  color: #ffffff !important;
}

.bg-light,
.bg-light a {
  color: #1F2D3D !important;
}

.bg-dark,
.bg-dark a {
  color: #ffffff !important;
}

.bg-gray {
  color: #000;
  background-color: #adb5bd;
}

.bg-gray-light {
  background-color: #f2f4f5;
  color: #1F2D3D !important;
}

.bg-black {
  background-color: #000;
  color: #ffffff !important;
}

.bg-white {
  background-color: #ffffff;
  color: #1F2D3D !important;
}

[class^="bg-"].disabled {
  opacity: .65;
}

.link-muted {
  color: #5d6974;
}

.link-muted:hover, .link-muted:focus {
  color: #464f58;
}

.link-black {
  color: #666;
}

.link-black:hover, .link-black:focus {
  color: #999;
}

.hide {
  display: none !important;
}

.no-border {
  border: 0 !important;
}

.no-shadow {
  box-shadow: none !important;
}

.list-unstyled, .chart-legend, .contacts-list, .users-list, .mailbox-attachments {
  list-style: none;
  margin: 0;
  padding: 0;
}

.list-group-unbordered > .list-group-item {
  border-left: 0;
  border-right: 0;
  border-radius: 0;
  padding-left: 0;
  padding-right: 0;
}

.flat {
  border-radius: 0 !important;
}

.jqstooltip {
  padding: 5px !important;
  width: auto !important;
  height: auto !important;
}

.bg-primary-gradient {
  background: #007bff;
  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #007bff), color-stop(1, #3395ff));
  background: -ms-linear-gradient(bottom, #007bff, #3395ff);
  background: -moz-linear-gradient(center bottom, #007bff 0%, #3395ff 100%);
  background: -o-linear-gradient(#3395ff, #007bff);
  color: #ffffff;
}

.bg-secondary-gradient {
  background: #6c757d;
  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #6c757d), color-stop(1, #868e96));
  background: -ms-linear-gradient(bottom, #6c757d, #868e96);
  background: -moz-linear-gradient(center bottom, #6c757d 0%, #868e96 100%);
  background: -o-linear-gradient(#868e96, #6c757d);
  color: #ffffff;
}

.bg-success-gradient {
  background: #28a745;
  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #28a745), color-stop(1, #34ce57));
  background: -ms-linear-gradient(bottom, #28a745, #34ce57);
  background: -moz-linear-gradient(center bottom, #28a745 0%, #34ce57 100%);
  background: -o-linear-gradient(#34ce57, #28a745);
  color: #ffffff;
}

.bg-info-gradient {
  background: #17a2b8;
  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #17a2b8), color-stop(1, #1fc8e3));
  background: -ms-linear-gradient(bottom, #17a2b8, #1fc8e3);
  background: -moz-linear-gradient(center bottom, #17a2b8 0%, #1fc8e3 100%);
  background: -o-linear-gradient(#1fc8e3, #17a2b8);
  color: #ffffff;
}

.bg-warning-gradient {
  background: #ffc107;
  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #ffc107), color-stop(1, #ffce3a));
  background: -ms-linear-gradient(bottom, #ffc107, #ffce3a);
  background: -moz-linear-gradient(center bottom, #ffc107 0%, #ffce3a 100%);
  background: -o-linear-gradient(#ffce3a, #ffc107);
  color: #1F2D3D;
}

.bg-danger-gradient {
  background: #dc3545;
  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #dc3545), color-stop(1, #e4606d));
  background: -ms-linear-gradient(bottom, #dc3545, #e4606d);
  background: -moz-linear-gradient(center bottom, #dc3545 0%, #e4606d 100%);
  background: -o-linear-gradient(#e4606d, #dc3545);
  color: #ffffff;
}

.bg-light-gradient {
  background: #f8f9fa;
  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #f8f9fa), color-stop(1, white));
  background: -ms-linear-gradient(bottom, #f8f9fa, white);
  background: -moz-linear-gradient(center bottom, #f8f9fa 0%, white 100%);
  background: -o-linear-gradient(white, #f8f9fa);
  color: #1F2D3D;
}

.bg-dark-gradient {
  background: #343a40;
  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #343a40), color-stop(1, #4b545c));
  background: -ms-linear-gradient(bottom, #343a40, #4b545c);
  background: -moz-linear-gradient(center bottom, #343a40 0%, #4b545c 100%);
  background: -o-linear-gradient(#4b545c, #343a40);
  color: #ffffff;
}

.description-block .description-icon {
  font-size: 16px;
}

.list-header {
  font-size: 15px;
  padding: 10px 4px;
  font-weight: bold;
  color: #666;
}

.list-seperator {
  height: 1px;
  background: rgba(0, 0, 0, 0.125);
  margin: 15px 0 9px 0;
}

.list-link > a {
  padding: 4px;
  color: #777;
}

.list-link > a:hover {
  color: #222;
}

.user-block::after {
  display: block;
  clear: both;
  content: "";
}

.user-block img {
  width: 40px;
  height: 40px;
  float: left;
}

.user-block .username,
.user-block .description,
.user-block .comment {
  display: block;
  margin-left: 50px;
}

.user-block .username {
  font-size: 16px;
  font-weight: 600;
}

.user-block .description {
  color: #999;
  font-size: 13px;
}

.user-block.user-block-sm .username,
.user-block.user-block-sm .description,
.user-block.user-block-sm .comment {
  margin-left: 40px;
}

.user-block.user-block-sm .username {
  font-size: 14px;
}

.img-sm, .card-comments .card-comment img, .user-block.user-block-sm img,
.img-md,
.img-lg {
  float: left;
}

.img-sm, .card-comments .card-comment img, .user-block.user-block-sm img {
  width: 30px !important;
  height: 30px !important;
}

.img-sm + .img-push, .card-comments .card-comment img + .img-push, .user-block.user-block-sm img + .img-push {
  margin-left: 40px;
}

.img-md {
  width: 60px;
  height: 60px;
}

.img-md + .img-push {
  margin-left: 70px;
}

.img-lg {
  width: 100px;
  height: 100px;
}

.img-lg + .img-push {
  margin-left: 110px;
}

.img-bordered {
  border: 3px solid #adb5bd;
  padding: 3px;
}

.img-bordered-sm {
  border: 2px solid #adb5bd;
  padding: 2px;
}

.img-rounded {
  border-radius: 0.25rem;
}

.img-circle {
  border-radius: 50%;
}

.img-size-64,
.img-size-50,
.img-size-32 {
  height: auto;
}

.img-size-64 {
  width: 64px;
}

.img-size-50 {
  width: 50px;
}

.img-size-32 {
  width: 32px;
}

.size-32,
.size-40,
.size-50 {
  display: block;
  text-align: center;
}

.size-32 {
  width: 32px;
  height: 32px;
  line-height: 32px;
}

.size-40 {
  width: 40px;
  height: 40px;
  line-height: 40px;
}

.size-50 {
  width: 50px;
  height: 50px;
  line-height: 50px;
}

.attachment-block {
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 5px;
  margin-bottom: 10px;
  background: #f7f7f7;
}

.attachment-block .attachment-img {
  max-width: 100px;
  max-height: 100px;
  height: auto;
  float: left;
}

.attachment-block .attachment-pushed {
  margin-left: 110px;
}

.attachment-block .attachment-heading {
  margin: 0;
}

.attachment-block .attachment-text {
  color: #555;
}

.connectedSortable {
  min-height: 100px;
}

.ui-helper-hidden-accessible {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sort-highlight {
  background: #f4f4f4;
  border: 1px dashed #ddd;
  margin-bottom: 10px;
}

.chart {
  position: relative;
  overflow: hidden;
}

.flex-1 {
  flex: 1;
}

/*
 * Misc: print
 * -----------
 */
@media print {
  .no-print, .main-sidebar,
  .main-header,
  .content-header {
    display: none !important;
  }
  .content-wrapper,
  .main-footer {
    margin-left: 0 !important;
    min-height: 0 !important;
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  .layout-fixed .content-wrapper {
    padding-top: 0 !important;
  }
  .invoice {
    width: 100%;
    border: 0;
    margin: 0;
    padding: 0;
  }
  .invoice-col {
    float: left;
    width: 33.3333333%;
  }
  .table-responsive {
    overflow: auto;
  }
  .table-responsive > .table tr th,
  .table-responsive > .table tr td {
    white-space: normal !important;
  }
}

.text-bold, .text-bold.table td, .text-bold.table th {
  font-weight: 700;
}

.text-sm {
  font-size: 0.875rem;
}

.text-xs {
  font-size: 1rem;
}

.text-lg {
  font-size: 1.25rem;
}

.text-xl {
  font-size: 2rem;
}

.elevation-0 {
  box-shadow: none;
}

.elevation-1, .sidebar-dark-primary .nav-sidebar > .nav-item > .nav-link.active, .sidebar-light-primary .nav-sidebar > .nav-item > .nav-link.active, .sidebar-dark-secondary .nav-sidebar > .nav-item > .nav-link.active, .sidebar-light-secondary .nav-sidebar > .nav-item > .nav-link.active, .sidebar-dark-success .nav-sidebar > .nav-item > .nav-link.active, .sidebar-light-success .nav-sidebar > .nav-item > .nav-link.active, .sidebar-dark-info .nav-sidebar > .nav-item > .nav-link.active, .sidebar-light-info .nav-sidebar > .nav-item > .nav-link.active, .sidebar-dark-warning .nav-sidebar > .nav-item > .nav-link.active, .sidebar-light-warning .nav-sidebar > .nav-item > .nav-link.active, .sidebar-dark-danger .nav-sidebar > .nav-item > .nav-link.active, .sidebar-light-danger .nav-sidebar > .nav-item > .nav-link.active, .sidebar-dark-light .nav-sidebar > .nav-item > .nav-link.active, .sidebar-light-light .nav-sidebar > .nav-item > .nav-link.active, .sidebar-dark-dark .nav-sidebar > .nav-item > .nav-link.active, .sidebar-light-dark .nav-sidebar > .nav-item > .nav-link.active, .callout {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.elevation-2 {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.elevation-3 {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.elevation-4 {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.elevation-5 {
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}

/*# sourceMappingURL=adminlte.css.map */