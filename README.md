# Gridsome WordPress and Bootstrap Starter

A BootstrapVue powered Gridsome starter that uses WordPress for content.

## Features
- **WordPress**
- **Gridsome -** Vue.js & GraphQL powered framework generating static site
- **[BootstrapVue](https://bootstrap-vue.js.org/)** and **[Bootstrap](https://getbootstrap.com/)**
- **Sass**
- Google Fonts Integration
- Paginated Blog, Tags, Categories and Authors archives
- Creation of WordPress static pages (optional)
- All Tags "widget"
- All Categories "widget"
- Estimated read time for posts

## Demo
https://wonderful-montalcini-a601bf.netlify.com/

## Install

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Install this starter

1. `gridsome create my-gridsome-wp-site https://github.com/pehaa/gridsome-starter-wordpress-bootstrap.git`
2. `cd my-gridsome-wp-site` to open folder
3. Set the `baseUrl` to your WordPress site in `gridsome.config.js`
4. Optionally choose which of your WordPress static pages you want to "recreate" in createPages 
5. `gridsome develop` to start local dev server at `http://localhost:8080`
6. Happy coding 🎉🙌

```js
// gridsome.config.js

module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'A WordPress starter for Gridsome',
  plugins: [
    {
      use: '~/src/plugins/wp-source/',
      options: {
        baseUrl: 'https://wp-pehaa.com/explorateurs-frontend/', // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
        perPage: 100, // How many posts to load from server per request (Optional)
        concurrent: 10, // How many requests to run simultaneously (Optional)
        routes: {
          //adds route for "post" post type (Optional)
          post: '/:year/:month/:day/:slug',
          // adds route for "post_tag" post type (Optional)
          post_tag: '/tag/:slug'
        },
        createPages: {
        // include or exclude, default is include
          approach: 'include',
          //an array of page slugs to include or exclude, ex. ['about', 'our-team']
          list: []
        }
      }
    }
  ]
 }

```

## Included templates

This starter includes basic templates for categories, tags, authors, dynamic pages and posts.

## Recreate WordPress static pages

Use exclude or include depending what is more handy in your case.
The `list` should be an array of page slugs.
Pages created this way will use the template from `templates/staticPage.vue`

If you don't want to create any pages:
```js
// gridsome.config.js

  createPages: {
    approach: 'include',
    list: []
  }

```

If you want them all:
```js
// gridsome.config.js

  createPages: {
    approach: 'exlude',
    list: []
  }
```

Only `'sample-page'`:

```js
// gridsome.config.js

  createPages: {
    approach: 'include',
    list: ['sample-page']
  }

```

All pages except `'contact'`:

```js
// gridsome.config.js

  createPages: {
    approach: 'exlude',
    list: ['contact']
  }

```

## Static WordPress page with custom template - example

Do not include `'sample-page'` to the created pages in `gridsome.config.js`. Instead add a `SamplePage.vue` file to `src/pages`

```js
// SamplePage.vue
<template>
  <Layout>
    <h1>{{$page.wordPressPage.title}}</h1>
    <div class="page-content" v-html="$page.wordPressPage.content"/>
  </Layout>
</template>

<page-query>
query Page {
  wordPressPage (path: "/pages/sample-page") {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.wordPressPage.title
    }
  }
}
</script>

```

## Google Fonts integration
This demo uses *Muli (400, 400i and 700)* for the body and *Corben* for most of the headings.
To use other [Google Fonts](https://fonts.google.com/) replace them in `main.js` and adjust the style in `assets/style/_custom.scss` and `assets/style/styles.scss`
```js
// main.js
head.link.push({
    rel: 'stylesheet',
    href: encodeURI('https://fonts.googleapis.com/css?family=Corben&display=swap')
})
```
