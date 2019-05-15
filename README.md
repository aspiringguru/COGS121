Accompanying YouTube video playlist: https://www.youtube.com/playlist?list=PLzV58Zm8FuBIWu1zvGRUfn0Xh6HXRg9cG

### Tips for building Node.js web apps for your team project

- Download and use a LTS (long-term support) version of Node.js instead of the latest one since LTS is more stable.
  - Try to make sure all of your teammates have the same versions of Node.js and npm installed (run `node -v` and `npm -v` to check your version numbers).
- Do not put `node_modules/` in your Git repository. Look at [.gitignore](.gitignore)
  to see how I've ignored it from my repository.
- When you run `npm install` it will install the modules listed in your `package.json` file; to install individual modules that are not listed in `package.json` you need to explicitly mention their names: e.g., `npm install sqlite3`
- Since you're using JavaScript on both the frontend *and* backend, make
  sure you're aware of which code should go in the frontend and which
  should go in the backend. For instance, you should not use jQuery
  (e.g., `$.ajax()`) in your backend code.
- Use `console.log()` in both your frontend and backend code to understand what code is executing and when
  - be especially aware of *asynchronous code* and callback functions, since they often execute not in the order you're expecting
- Always remember to save your code, restart your server, and reload your frontend in your browser to see the latest edits. [nodemon](https://nodemon.io/) can automatically restart your server for you, and some browser extensions can auto-reload webpages.
- [Glitch](https://glitch.com/) provides free web hosting and an entirely
  web-based coding environment for Node.js apps. It can also sync
  with your team's GitHub repository. Feel free to try it as one
  possible way of getting rid of incompatibilities between setups on
  your teammates' computers. (It's not mandatory, though.)
  - For example, here is a [starter Glitch app for Node.js and SQLite](https://glitch.com/~hello-sqlite)
- To get around cross-domain restrictions that some APIs have, the easiest way is to make the API requests from your Node.js backend instead of from your frontend JavaScript code. Then your frontend JavaScript (in browser) can make regular ajax requests to your Node.js backend to query that data. The "[request](https://www.npmjs.com/package/request)" module is a popular one for making API requests on the backend. ([blog post](https://stackabuse.com/the-node-js-request-module/))
- A good general strategy for debugging is to start with a WORKING version, such as trying to get the petsapp tutorial working, and then slowly evolve that version into what you need to do. If you start with something that doesn't work and find yourself semi-randomly commenting out lines, adding lines of code, etc., then that is not a systematic debugging strategy. Instead, try to make a super-simple working version of your code (potentially based on the petsapp tutorial code). And use lots of `console.log()` statements in both your frontend and backend code to figure out what code is executing and with what values.
