<template>
  <b-button class="read-more border-0 mb-5" variant="primary" :to="post.path">
    <span><b class="text-uppercase">Read More</b><span v-html="readingTime"/></span>
  </b-button>
</template>

<script>
import FormatedDate from "~/components/FormatedDate.vue"

export default {
  components: {
    FormatedDate
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    readingTime() {
      const wordsCountApprox = this.post.content.split(' ').filter((e) => e.length > 2).length
      const timeInMins = Math.round(wordsCountApprox/200)
      return ` &asymp;${Math.max(1, timeInMins)}min`
    }
  }
}
</script>
