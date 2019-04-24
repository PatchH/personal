<template>
    <div id="productPage" style="margin-top: 100px">
      <div class="products">
        <div class="item">
          <div class="img"><img src="../../../static/img/1-1.jpg"></div>
          <div class="des">作品1</div>
        </div>
        <div class="item">
          <div class="img"><img src="../../../static/img/1-2.jpg"></div>
          <div class="des">作品2</div>
        </div>
        <div class="item">
          <div class="img"><img src="../../../static/img/1-3.jpg"></div>
          <div class="des">作品3</div>
        </div>
        <div class="item">
          <div class="img"><img src="../../../static/img/1-4.jpg"></div>
          <div class="des">作品4</div>
        </div>
      </div>
      <div class="products">
        <div class="item">
          <div class="img"><img src="../../../static/img/1-5.jpg"></div>
          <div class="des">作品5</div>
        </div>
        <div class="item">
          <div class="img"><img src="../../../static/img/1-6.jpg"></div>
          <div class="des">作品6</div>
        </div>
        <div class="item">
          <div class="img"><img src="../../../static/img/2.jpg"></div>
          <div class="des">作品7</div>
        </div>
        <div class="item">
          <div class="img"><img src="../../../static/img/3.jpg"></div>
          <div class="des">作品8</div>
        </div>
      </div>
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

      toggle_show: function () {
        this.isShow_product = true;
      },
    },
    mounted: function () {

    }

  }
</script>
<style>

</style>
