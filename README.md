# Beauty in Code

The Jekyll/Github Pages files for the future beautyincode.se

![Tests](https://github.com/LivingIT/beautyincode.se/workflows/Tests/badge.svg) ![Deploy to dev](https://github.com/LivingIT/beautyincode.se/workflows/Deploy%20to%20dev/badge.svg) ![Deploy to live](https://github.com/LivingIT/beautyincode.se/workflows/Deploy%20to%20live/badge.svg)

## Get up and running

### 🐳 Docker

~~~bash
$ docker-compose up
~~~

This will launch a Jekyll container in Docker.

### 🪛 Node

You only need to run NPM if you wish to rebuild the SVG sprite.

~~~bash
$ npm run svg
~~~

This will run [svg-sprite](https://github.com/svg-sprite/svg-sprite) and build any icons present in `/svg` to the sprite in `/images/sprite.svg`.

## 👩‍💻 Contributing

Adding new stuff? Awesome! Follow these steps:

1. Create a feature branch based on `master` (you can name it whatever you like, for example `my-awesome-feature`)
2. Push this branch to Github once you're done and create a new [pull request](https://github.com/LivingIT/beautyincode.se/pulls).
3. This will run tests on the code making sure everything works as expected.
4. Either ask a colleague to review it, or if you think you're awesome, you can merge it yourself! 💪 _(just make sure that the tests aren't failing 😉)_
5. It's safe to delete your feature branch once the PR has been merged.
6. A merge to `master` will trigger a deploy to our development environment ([https://dev.beautyincode.se](https://dev.beautyincode.se)).

## 🛠 Deploy to production

Deploy to production occur when a release is created on Github. A Github Actions automatically creates the next version to be relased and adds any pull requests merged to the `master` branch since the last release to the release notes.

1. Go to the [releases page](https://github.com/LivingIT/beautyincode.se/releases)
2. Edit the draft release (make sure that it's up to date, i.e. let the automated workflow finish first if you’ve recently merged a PR. If there’s no draft, it likely means that no PRs or commits have been made or that the workflow isn’t finished yet)
3. Make sure that the title field matches the tag field (if the next version is for example `1.6.0` make sure both fields says `v1.6.0`)
4. Check that the release notes contain all relevant info (only merged PRs are automatically added to the notes, if you made commits directly to `master` you need to add those by hand)
5. Publish release

### Development environment

Commits to `master` are automatically deployed to [https://dev.beautyincode.se](https://dev.beautyincode.se).
