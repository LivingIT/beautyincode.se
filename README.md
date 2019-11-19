# Beauty in Code

The Jekyll/Github Pages files for the future beautyincode.se

## 🐳 Get up and running

The easiest way is to use Docker, then you only need to run

~~~bash
$ docker-compose up
~~~

…and you’re good to go!

## 🛠 Workflow

_This repo is automatically deployed from the `master` branch. **Do not commit directly to `master` unless you know what you are doing!**_

Since Github auto-deploys from `master`, we're employing a simplified version version of Git Flow, where development is henceforth being done only on `develop`. When any feature is ready for deployment, make a pull request, make sure any tests pass (WIP) and merge.

### ℹ️ Status of the branches

**`master`** – Contains a simplified version of the 2019 version of the site that serves as a temporary solution until the 2020 version is done.

**`develop`** – This is where development of the 2020 version of the site is being done. No merging will be done to `master` until the design and content is ready.
