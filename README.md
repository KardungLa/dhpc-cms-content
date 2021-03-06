# dhPLUS CMS View Component

This is a small custom web component, meant to display static HTML content, stored in the dhPLUS repository.
## Usage

```html
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Testing the Web Component</title>
        <base href="/">
    </head>
    <body>
        <dhpc-cms-content data-id="https://dh.plus.ac.at/rest/demo"></dhpc-cms-content>

        <script src="https://dh.plus.ac.at/assets/dhpc/dhpc-cms-content.js" type="text/javascript">
    </body>
</html>
```

## Features (upcoming)

* Create Navigation Menu out of page hierarchy.

## Development
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `npm run build:component` to build the web component. The build artifacts will be stored in the `dhpc/` directory. 

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).



