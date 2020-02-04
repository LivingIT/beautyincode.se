# Beauty in Code

The Jekyll/Github Pages files for the future beautyincode.se

![🧪 Tests](https://github.com/LivingIT/beautyincode.se/workflows/Test%20%F0%9F%A7%AA/badge.svg)

![🚀 Dev build status](https://github.com/LivingIT/beautyincode.se/workflows/Deploy%20to%20dev%20%F0%9F%9A%80/badge.svg)

![🚀 Live build status](https://github.com/LivingIT/beautyincode.se/workflows/Deploy%20%F0%9F%9A%80/badge.svg)

## 🐳 Get up and running

The easiest way is to use Docker, then you only need to run

~~~bash
$ docker-compose up
~~~

…and you’re good to go!

## 🛠 Workflow

_This repo is automatically deployed from the `master` branch. **Do not commit directly to `master` unless you know what you are doing!**_

Since Github auto-deploys from `master`, we're employing a simplified version version of Git Flow, where development is henceforth being done only on `develop`. When any feature is ready for deployment, make a pull request, make sure any tests pass (WIP) and merge.
