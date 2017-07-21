### Twitter Post Bot
Node.js with post twit and add favorites or get other twits


<br>

<a href="http://www.wtfpl.net/"><img
       src="http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png"
       width="150" height="45" alt="WTFPL" /></a>

* 🌍
* 👍

![url-shortener](public/readme.png)

**Deploy your own shitty url shortener.**

Shitty, works well in heroku environment.
It requires NodeJS and MongoDB.

[![Deploy](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-strip.jpg)]

**Usage In Command Line Interface**

*Install*

```
npm start;
```

*Usage*

```
shorten https://github.com 👎👍
```

**Usage In Programmatic API**

*Install*

```
npm install -g twitter --save
```

*Usage*
```node.js
const tw = require('twitter');
tw.post()....
