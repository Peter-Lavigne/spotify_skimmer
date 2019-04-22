<h1>Spotify Skimmer</h1>

Site for for quick and easy bulk-filtering of spotify playlists. It has saved me _hundreds_ of clicks.

You can use it here: [http://spotify-skimmer.surge.sh](http://spotify-skimmer.surge.sh)

<h4>Deploying:</h4>

`npm run build`

`mv build/index.html build/200.html` (see [this article](https://medium.com/@Jeff_Duke_io/how-to-deploy-an-app-using-react-and-react-router4-fe5f02a27a97))

`surge build spotify-skimmer.surge.sh`

<h4>Developing</h4>

Switch the comments on the variable `redirectUri` in `src/components/Authorize.js`

`npm start`
