<template>
  <div>
    <Preloader />
    <Wrapper>
      <Header></Header>
      <Sidebar></Sidebar>
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
}
</script>