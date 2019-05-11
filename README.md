### Tips for building Node.js web apps for your team project

- Use a LTS (long-term support) version of Node.js instead of the latest one since LTS is more stable.
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
- Try to make sure all of your teammates have the same versions of
  Node.js and npm installed (run `node -v` and `npm -v` to check your
  version numbers).
- [Glitch](https://glitch.com/) provides free web hosting and an entirely
  web-based coding environment for Node.js apps. It can also sync
  with your team's GitHub repository. Feel free to try it as one
  possible way of getting rid of incompatibilities between setups on
  your teammates' computers. (It's not mandatory, though.)
  - For example, here is a [starter Glitch app for Node.js and SQLite](https://glitch.com/~hello-sqlite)
