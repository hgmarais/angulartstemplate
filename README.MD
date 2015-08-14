# Angular TypeScript Project Template
## Getting Started
#### 1. Install [NodeJS](https://nodejs.org/)
#### 2. Install [Bower](http://bower.io/)
```
npm install bower -g
npm install bower-installer -g
```
#### 3. Install [Gulp](http://gulpjs.com/)
```
npm install gulp -g
```
#### 4. Install Web Driver Manager
```
npm install webdriver-manager -g
webdriver-manager update --standalone
```
#### 5. Clone this repo and do the rest from the project root folder.
#### 6. Install Node and Bower dependencies
```
npm install
bower-installer
```
## Folder Structure

Folder/File|Description|Generated|Source Control
---|---|:---:|:---:
bower_components|Third party JS libraries.|yes|no
js|JavaScript compiled from TypeScript.|yes|no
node_modules|NodeJS dependencies.|yes|no
ts|TypeScript source.|no|yes
ts/app|Application source.|no|yes
ts/e2e|End-to-end tests source.|no|yes
ts/unit|Unit tests source.|no|yes
typings|TypeScript definitions.|yes|yes
typings/app|TypeScript definitions for application.|yes|yes
typings/test|TypeScript definitions for tests.|yes|yes
bower.json|Bower configuration.|no|yes
package.json|NPM configuration.|no|yes
gulpfile.js|Gulp configuration.|no|yes
karma.conf.js|Configuration for unit tests.|no|yes
protractor.config.js|Configuration for E22 tests.|no|yes
app.tsd.json|TypeScript definitions configuration for application.|no|yes
test.tsd.json|TypeScript definitions configuration for tests.|no|yes
tslint.json|TypeScript lint configuration.|no|yes

## Usage
### Run Lint
Run lint on all TypeScript files in the `ts/app` folder:
```
gulp lint
```

### Compile TypeScript
Command|Description|Output
---|---|---
gulp tsc|Compile everything in the `ts` folder.|js
gulp tsc:app|Compile only `ts/app`. All files are compiled into a single `app.js` file which is then copied to `www/js`.|js/app
gulp tsc:e2e|Compile only `ts/e2e`.|js/e2e
gulp tsc:unit|Compile only `ts/unit`.|js/unit

### Cleanup
Command|Description
---|---
gulp clean|Deletes all compiled JavaScipt files and test reports.
gulp clean:tsc|Deletes all compiled JavaScript files.
gulp clean:reports|Deletes all test reports.

### Unit Tests
```
npm run karma
```
The output is placed in `reports/unit`
### E2E Tests
First start the web driver and the HTTP server. This only needs to be done once.
```
npm run start-webdriver
npm run e2e-server
```
Now the tests can be executed with:
```
npm run protractor
```
The output is placed in `reports/e2e`
### Manual Tests
```
npm run server
```
Go to http://localhost:8020
