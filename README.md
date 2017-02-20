# Movie search app

Simple movie search app built with Angular using webpack. Written in ES6.
Forked from [angularjs-webpack starter](https://github.com/preboot/angularjs-webpack)
Styles are [Materialize CSS](http://materializecss.com/)

## Quick start
### Clone the repo
`$ git clone git@github.com:samrae7/angular-movie-search.git`

### Add api key
Inside src folder create a new file, config.js and enter:

```
const API_CONFIG = {
  API_KEY : <<YOUR API KEY FOR THE MOVIE DATABASE>>
};

export {API_CONFIG};
```
Replace `<<YOUR API KEY FOR THE MOVIE DATABASE>>` with an api key from
[The Movie Database](https://www.themoviedb.org/faq/api)
(create a user account, then request a key from your account page).

### Install dependencies with npm

From the project root:
`$ npm install`

### Start the server
`$ npm start`

## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* single run: `npm run build`
* build files and watch: `npm start`

## Testing

### Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`
