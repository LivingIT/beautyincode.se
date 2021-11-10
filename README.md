# Beauty in Code

The Jekyll/Github Pages files for the future beautyincode.se

![Tests](https://github.com/LivingIT/beautyincode.se/workflows/Tests/badge.svg) ![Deploy to dev](https://github.com/LivingIT/beautyincode.se/workflows/Deploy%20to%20dev/badge.svg) ![Deploy to live](https://github.com/LivingIT/beautyincode.se/workflows/Deploy%20to%20live/badge.svg)

## 🐳 Get up and running

The easiest way is to use Docker, then you only need to run

~~~bash
$ docker-compose up --build
~~~

…and you’re good to go!

## 🛠 Workflow

_This repo is automatically deployed from the `master` branch. **Do not commit directly to `master` unless you know what you are doing!**_

Since Github auto-deploys to production from `master`, we're employing a simplified version version of Git Flow, where development is being done on `develop`. When any feature is ready for deployment, make a pull request, make sure any tests pass and merge.

### Development environment

Commits to `develop` are automatically deployed to [https://dev.beautyincode.se](https://dev.beautyincode.se).
