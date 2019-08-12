<template>
  <ul class="list-inline">
    <li class="list-inline-item m-0" v-for="(category, index) in categories" :key="category.id">
      <g-link class="text-uppercase font-weight-bold mx-1" :to="category.path">{{ category.title }}</g-link>
      <span v-if="index < categories.length - 1">&middot;</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>
