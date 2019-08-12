<template>
  <Pager :info="info" linkClass="page-link rounded" class="pagination justify-content-center"/>
</template>

<script>
import { Pager } from 'gridsome'

export default {
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  components: {
    Pager
  }
}
</script>
