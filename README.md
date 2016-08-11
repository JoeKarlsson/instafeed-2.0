# InstaFeed2

Made by Joe Carlson - 2016
See more at www.callmejoe.net

Basic example usage of factory method to make a request to the instagram api to get a certian amount of images with an Angular.js switchable grid.

###Update
This project has been converted into an NPM package [Check it out here.](https://www.npmjs.com/package/angular-instafeed)

[Check out a live demo of this plugin here](https://www.callmejoe.net/portfolio/instafeed-angular-js-instagram-feed/)

## Installing
* Download and unpack [Angular Instafeed](https://github.com/JoeKarlsson1/Angular-Instafeed). Or alternatively checkout from source:

    ```bash
    $ git clone https://github.com/JoeKarlsson1/Angular-Instafeed
    ```

    ```bash
    $ cd angular-instafeed
    ```

* Next, inside the project, you need to [register as a Instagram Developer](https://instagram.com/developer/clients/manage/) to get your Client ID
* You will also need to get your user ID go run this program. To get your User ID, go to [this site](http://jelled.com/instagram/lookup-user-id) and enter your Instagram user name to get your user ID.
  *  Note: Your User ID is different than your User Name. Your User ID is a string that looks like `12345678`
* Once you have these, navigate to `src/app/instaConfig.js` and configure your `client_id` and your `user_id`
* Run the app anyway your usually run your web apps. Or open ```index.html`` in the browser.

**Note:** If you are instested in installing this via NPM, I got cha covered. [Check it out here.](https://www.npmjs.com/package/angular-instafeed)

##Contributing
1. Fork it!
2. Create your feature branch: ```git checkout -b my-new-feature```
3. Commit your changes: ```git commit -am 'Add some feature'```
4. Push to the branch: ````git push origin my-new-feature````
5. Submit a pull request :D

See more at www.callmejoe.net

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.10.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/route/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
