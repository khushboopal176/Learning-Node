## Spinning up a basic web server in node is easier than it might sound.

### Requirements

1. You know about installing packages from npm. The folders in this series are supposed to be standalone node.js projects. Before starting any part of the series, please run `npm init` in the folder. You are provided with `ref.js` in each folder for reference but you are expected to make a separate file `index.js` for working. 

### Steps

1. The package we'll be using for this purpose is [express](https://www.npmjs.com/package/express). It is a server-side Web Framework for Node.js and offers the skeleton in which you can plug any templating engine or database. Don't worry if you don't understand templating yet.
    > Install the express package

2. To see a website in action, you need a URL. A URL is composed of 2 parts: **Hostname** and **Route**. 
    > In `github.com/parasg1999`, `github.com` is the hostname and `/parasg1999` is the route.

3. On any computer, the first 1024 ports are reserved and can't be used by normal users. Ports like 80, 443 are reserved for **HTTP** and **HTTPS** respectively. So in order to setup your server, you'll also need to specify the port.
    > When you write `github.com`, it is actually using `github.com:80` if using **HTTP** and `github.com:443` if using **HTTPS**.

4. Now that you know the basics, let's start. The express package is fairly simple to use. 
    > See `ref.js` for the magic! 

5. Next we'll see how to make beautiful websites with express.