<template>
  <b-col lg="3" class="bg-light mt-4 mt-lg-5 p-4 rounded">
    <aside class="mb-5">
      <h2 class="mb-3 font-family-sans-serif h4">About</h2>
      <p>Hello! You're looking at a <a href="https://bootstrap-vue.js.org">BootstrapVue</a> powered <a href="https://gridsome.org">Gridsome</a> starter that uses WordPress for content. Let me tell you that Gridsome is simply awesome!  Happy coding! <span class="text-primary">&hearts;</span></p>
    </aside>
    <tags-widget class="mb-5"/>
    <categories-widget class="mb-5"/>
  </b-col>
</template>


<script>
import TagsWidget from '~/components/TagsWidget.vue'
import CategoriesWidget from '~/components/CategoriesWidget.vue'

export default {
  components: {
    TagsWidget,
    CategoriesWidget
  }
}
</script>
