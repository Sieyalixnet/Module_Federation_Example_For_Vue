# DESCRIPTION

This code is an example of Webpack Module Federation which is for Vue instead of React in <https://github.com/Tecvan-fe/webpack-book-samples/blob/HEAD/MF-micro-fe>.

## Files: Unsep

This is an example that normal Vue.JS project with vue-router. I want to seperate the User page by using Module Federation.

You can watch the example by dev-server:

```bash
cd ./UnSep
npm install
npm run d
```

If you want to build them (NOT recommended):

```bash
cd ./UnSep
npm install
npm run b
```

## Files: MF

This is the result by using Module Federation to seperate the User page from Host.

You can watch the example by dev-server, you need to serve both of them:

```bash
cd ./MF/User
npm install
npm run d
```

```bash
cd ./MF/Host
npm install
npm run d
```

**YOU SHOULD SERVE THEM IN RIGHT ORDER, OR YOU NEED TO REFRESH THE HOST PAGE.**

You can build them just like UnSep, you need to build and serve both of them in right port, NOT recommended.
