# Movie search app

Built with [angularjs-webpack starter](https://github.com/preboot/angularjs-webpack)

## Quick start
### Clone the repo
$ git clone git@github.com:samrae7/angular-movie-search.git

### Add api key
Inside src folder create a new file, config.js and enter:
```
const API_CONFIG = {
  API_KEY : <<YOUR API KEY FOR THE MOVIE DATABASE>>
};

export {API_CONFIG};
```

You will need to replace YOUR API KEY FOR THE MOVIE DATABASE with an api key from
[The Movie Database](https://www.themoviedb.org/faq/api)
(create a user account, then request a key from your account page).

### cd into the project folder and install dependencies with npm
$ npm install

### start the server
$ npm start

### run tests

`$ npm run test-watch`

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

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

# License

[MIT](/LICENSE)
