[papers-please]() [![Travis](https://img.shields.io/travis/papers-please/papers-please.svg?style=flat-square)](https://travis-ci.org/papers-please/papers-please)
==========

> TODO
>
> TODO

- [Production site](https://papers-please.herokuapp.com/)

## Installation

> You first need to clone the project on your computer.

From the command-line:

```sh
git clone git@github.com:papers-please/papers-please.git
cd papers-please
```

Our main dependencies are:

- [Node.js](nodejs.org) JavaScript runtime and the [npm](https://www.npmjs.com/) ecosystem.

> If you don't already have those installed, use `brew install node`.

To install our dependencies, run:

```sh
npm install
```

## Working on the project

> Everything mentioned in the installation process should already be done.

~~~sh
# Start the server and the development tools.
npm run start
# Voilà!
# You can then go to http://localhost:3000/ to see the site running.
# When you feel like it, you can run the tests.
npm run test
~~~

Other tasks:

~~~
npm run build
npm run dist
~~~

## Deployment

The site is deployed on [Heroku](http://heroku.com/).

> To deploy the site, you'll need the Heroku Toolbelt: `brew install heroku-toolbelt`, an Heroku Account, and contributor access on the project.

You'll also need to do some configuration beforehand:

~~~sh
# First log in to Heroku.
heroku login
# Add the Heroku remote to the repository.
heroku git:remote -r heroku -a papers-please
# Retrieve the deploy branch from GitHub.
git fetch --all
~~~

Then for each deploy:

~~~sh
# Switch to the deploy branch.
git checkout deploy
# Merge it with master.
git merge master
# Rebuild the project.
npm run build
# Commit the new build.
git add . && git commit -m 'Deploy latest version'
# Push it to GitHub, and Travis will pick it up.
git push origin deploy
# Alternatively, manual deploy
git push heroku deploy:master
~~~

### Other deployment configuration

Only when we set up the Heroku Dyno:

~~~sh
heroku config:add ENV=production
heroku config:add TZ="Pacific/Auckland"
heroku ps:scale web=1
~~~

To configure deployment from Travis:

~~~sh
travis setup heroku
~~~
