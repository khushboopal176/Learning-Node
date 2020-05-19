## Static Content may be an HTML page, an image, or a CSS file. Let's see how you can display those pretty pages for the users.

### Requirements

1. You have completed setting up a basic web server.

### Steps

1. Now if you've completed the first part, you know that you can send whatever you want and it will be displayed. But you generally want your websites to look good so the user likes using them.

2. Now we'll see how to make beautiful websites with express. We can show content to users in 2 ways:
    - By sending formatted code like `<b>Bold text</b>`. This can be good for small code and doesn't look very good.
    - By showing an HTML file. While HTML has its own shortcomings like showing only static content, we'll address this issue later.

3. Rendering HTML files
    - First you'll have to tell express where to look for static files. This is done by using `express.static('<dirname>')`
    - Now that express knows where your files are stored, you can simple go to `localhost:PORT/<filename>` to display the HTML,image or PDF just to mention a few.

4. Now that you know the basics, let's start. See the file `ref.js` for the magic! 

> **Bonus:**
> 
> You've seen that `res.send('something')` will display that `something` and going to `localhost:PORT/<filename>` will display the file. 
>
>Now, there is a `redirect` function called as `res.redirect('<URL>')` which can be used to go to another route when a request to a particular route is made. You should try to modify the code such that when the person visits `localhost:PORT`, your `home.html` file (for example) is shown to that person.