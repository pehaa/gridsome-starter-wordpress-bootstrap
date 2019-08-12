<template>
  <Layout>
    <h1 class="text-center text-uppercase h5 font-family-sans-serif mb-5">Category: {{ $page.category.title }} </h1>
    <Post :post="node" v-for="{ node } in $page.category.belongsTo.edges" :key="node.id"/>
    <Pagination :info="$page.category.belongsTo.pageInfo"/>
  </Layout>
</template>

<page-query>
query Category($path: String, $page: Int) {
  category: wordPressCategory(path: $path) {
    title
    belongsTo(page: $page, perPage: 10) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on WordPressPost {
            date
            id
            title
            path
            content
            excerpt
            categories {
              id
              title
              path
            }
            author {
              name
              path
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Post from '~/components/Post.vue'
import Pagination from '~/components/Pagination.vue'

export default {
  components: {
    Post,
    Pagination
  },
  metaInfo () {
    return {
      title: this.$page.category.title
    }
  }
}
</script>
