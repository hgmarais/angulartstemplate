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
#### 7. Install web driver
```
npm run update-webdriver
```
## Folder Structure

Folder/File|Description|Generated|Source Control
---|---|---|---
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
Compile everything in the `ts` folder:
```
gulp tsc
```
The output is placed in `js`<br>
Compile only `ts/app`:
```
gulp tsc:app
```
Compile only `ts/unit`:
```
gulp tsc:unit
```
Compile only `ts/e2e`:
```
gulp tsc:e2e
```
### Run Unit Tests
```
npm run karma
```
The output is placed in `reports/unit`
### Run E2E Tests
First start the web driver and the HTTP server. This only needs to be done once.
```
npm run start-webdriver
npm run server
```
Now the tests can be executed with:
```
npm run protractor
```
The output is placed in `reports/e2e`
