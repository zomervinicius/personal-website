---
template: BlogPost
path: /eslint-prettier-fast-setup
date: 2020-05-29T14:15:17.809Z
title: Fast eslint and prettier setup
metaDescription: How to setup eslint and prettier using airbnb styles in your
  project in 1 minute
thumbnail: /assets/1-mqxmnhfadmy1xbntj-xvgg.png
---
We all know how boring it is to config eslint and prettier using Airbnb styles.

What If I told you that has a easier way to do it.

I'm talking about a project on github that just make it in one command.

[Fast prettier eslint setup](https://github.com/paulolramos/eslint-prettier-airbnb-react)

All you need to do to install is:

1. Navigate to your app directory where you want to include this style configuration.

   ```bash
   cd my-app
   ```
2. Run this command inside your app's root directory. Note: this command executes the `eslint-prettier-config.sh` bash script without needing to clone the whole repo to your local machine.

   ```bash
   exec 3<&1;bash <&3 <(curl https://raw.githubusercontent.com/paulolramos/eslint-prettier-airbnb-react/master/eslint-prettier-config.sh 2> /dev/null)
   ```
3. Make selections for your preference of package manager (npm or yarn), file format (.js or .json), max-line size, and trailing commas (none, es5, all).
4. Look in your project's root directory and notice the two newly added/updated config files:

   * `.eslintrc.js` (or `.eslintrc.json`)
   * `.prettierrc.js` (or `.prettierrc.json`)

   And it's done! How awesome that can be, right?