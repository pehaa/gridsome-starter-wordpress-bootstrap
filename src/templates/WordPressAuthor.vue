<template>
  <Layout>
    <header class="mb-4">
      <b-img v-if="$page.author.avatars.avatar96" :src="$page.author.avatars.avatar96" width="64" rounded="circle" fluid thumbnail center class="mb-3 shadow" alt=""/>
      <h1 class="text-center text-uppercase h5 font-family-sans-serif">Author: {{ $page.author.name }} </h1>
      <div class="my-3 p-4 bg-light description" v-if="$page.author.description" v-html="$page.author.description"/>
    </header>
    <Post :post="node" v-for="{ node } in $page.author.belongsTo.edges" :key="node.id"/>
    <Pagination :info="$page.author.belongsTo.pageInfo"/>
  </Layout>
</template>

<page-query>
query Author($path: String, $page: Int) {
  author: wordPressAuthor(path: $path) {
    name
    id
    path
    description
    avatars {
      avatar96
    }
    belongsTo(
      page: $page
      perPage: 10
      filter: { typeName: { eq: WordPressPost } }
    ) @paginate {
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
      title: this.$page.author.name
    }
  }
}
</script>

<style scoped>
.description {
  font-size: 0.8125rem;
}
</style>
