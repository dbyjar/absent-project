<template>
  <div>
    <Preloader />
    <Wrapper>
      <Header v-if="!isLandingPage" />
      <Sidebar v-if="!isLandingPage" />
      <PageWrapper>
        <router-view></router-view>
      </PageWrapper>
    </Wrapper>
  </div>
</template>

<script>
import Preloader from '@components/Preloader.vue';
import Wrapper from '@layouts/Wrapper.vue';
import Header from '@layouts/Header.vue';
import Sidebar from '@layouts/Sidebar.vue';
import PageWrapper from '@layouts/PageWrapper.vue';

export default {
  components: {
    Preloader,
    Wrapper,
    Header,
    Sidebar,
    PageWrapper,
  },
  computed: {
    isLandingPage() {
      if (
        this.$route.name === "login"
          || this.$route.name === "absent"
          || this.$route.name === "notFound"
      ) {
        return true
      } else if (this.$route.name === null) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>