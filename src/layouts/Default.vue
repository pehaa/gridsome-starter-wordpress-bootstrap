<template>
  <div>
    <b-container>
      <header class="py-4 py-sm-5">
        <b-navbar class="p-0" toggleable="lg" type="light">
          <b-navbar-brand>
            <b-navbar-brand class="font-family-headings" to="/">
              <span class="h3 text-dark">Gridsome</span>
            </b-navbar-brand>
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto ">
              <b-nav-item to="/" exact-active-class="active">Home</b-nav-item>
              <b-nav-item to="/about" active-class="active">About</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </header>
      <b-row class="align-items-start">
        <transition name="fade" appear>
          <b-col tag="main" cols="12" lg="9" class="bg-white p-0 rounded shadow-lg">
            <div class="overflow-hidden p-4 p-sm-5 ">
              <slot/>
            </div>
          </b-col>
        </transition>
        <site-sidebar/>
      </b-row>
    </b-container>
    <site-footer/>
  </div>
</template>

<script>
import SiteSidebar from '~/components/SiteSidebar.vue'
import SiteFooter from '~/components/SiteFooter.vue'
export default {
  components: {
    SiteSidebar,
    SiteFooter
  }
}
</script>

<style>
.fade-enter-active {
  transition: .5s;
}

.fade-enter {
  opacity: 0;
}
</style>
