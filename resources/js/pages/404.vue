<template>
  <div class="error-box mt-3">
    <div class="error-body text-center">
      <h1 class="error-title text-danger">404</h1>
      <h3 class="text-uppercase error-subtitle">PAGE NOT FOUND !</h3>
      <p class="text-muted m-t-30 m-b-30">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
      <button
        type="button"
        class="btn btn-danger btn-rounded waves-effect waves-light m-b-40 text-white"
        @click="$router.push({
          name: 'dashboard'
        })"
      >
        Back to Dashboard
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error-box {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative!important;

  .error-title {
    font-size: 180px !important;
    font-weight: 900;
    line-height: 210px;
    text-shadow: 4px 4px 0 #fff, 6px 6px 0 #11142d;
  }
}
</style>