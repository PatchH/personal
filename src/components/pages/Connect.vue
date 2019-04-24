<template>
  <div id="connectionPage" style="font-size: 50px;text-align: center;margin-top: 20%">
    にいはお，私たちに連絡してください?
  </div>
</template>

<script>
  import jquery from 'jquery';
  import vueresource from 'vue-resource';

  export default {
    name: 'HelloWorld',

    data() {
      return {
        interval: null,
        isShow_product: false,
        dateLable: 2339,
        myData: [],
        t1: "",
        nowIndex: -1,
        src: ""
      }
    },


    methods: {
      mounted: function () {

      }
    }
  }
</script>
<style>
</style>
