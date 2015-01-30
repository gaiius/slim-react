# Slim/React experiment

Stolen shamelessly from [https://github.com/facebook/react/tree/master/examples/server-rendering](https://github.com/facebook/react/tree/master/examples/server-rendering).

## How to run the demo

+ `npm install`
+ `grunt`
+ `npm start`
+ Finally, open `public/index.php`  in your browser (on a webserver running PHP, of course). View-source to see the rendered markup.
+ Kill the npm process and reload `public/index.php`. You'll notice that the app still works! View-source and you'll see no rendered markup. React is smart enough to recover if server rendering doesn't work.
