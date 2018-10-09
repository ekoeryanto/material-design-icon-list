# Material Desing Icon List

> A fresh list of Google's Material Design Icons

## How fresh is the list?
1. It downloads latest icons from [material.io](https://material.io/tools/icons/) and creates js files. see [here](https://unpkg.com/material-design-icon-list@nightly/dist/) for a list of js files it creates.

2. It will download, build and publish every day with travis schedule so the list always **FRESH**.

## Usage

- Fresh list with CDN method

  ```html
  <script src="https://unpkg.com/material-design-icon-list@nightly"></script>
  ```

- Fresh list with npm/yarn

  - nightly method

  ```sh
  yarn add material-design-icon-list@nightly
  ```

  ```js
  /*
  * app.js
  */
  import ids from 'material-design-icon-list/dist/ids.js'
  ```

  - src method

  ```sh
  yarn add material-design-icon-list
  ```

  ```js
  /*
  * app.js
  */
  import list from 'material-design-icon-list/src/list.js'
  ```

  _Note: we don't use `nightly` tag on install,because `postinstall` script will download the latest list from material.io. But you can of course use the tag_
