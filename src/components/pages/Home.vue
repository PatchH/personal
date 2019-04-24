<template>
  <div id="lxy">

    <div id="homePage">
      <div class="main" id="productList">
        <swiper :options='swiperOption' class="swiper">
          <swiper-slide class="swiper-slide" v-for="(item,index) in slide" :key="index">

            <div class="subdiv"><img :src="item"></div>

          </swiper-slide>
          <div class='swiper-pagination' slot='pagination'></div>
        </swiper>
      </div>
        <!--</div>-->
      <div
        style="width:100%;height: 1px;background: #FFFFFF;margin: 20px 10px;box-shadow: 1px 1px 10px 1px #6ECDA2"></div>
      <div class="author">
        <div id="photo">
          <img src="http://tao.goulew.com/users/upfile/201303/201303241431352big.jpg"
               style="width: 200px;height: 200px;margin: 20px 10px;border-radius: 100px ;float:left">
        </div>
        <div class="introduce">
          <div class="content">
            <h1><p> 阿拉斯加雪橇犬</p></h1>
            <p>阿拉斯加雪橇犬,(拉丁学名：<strong>Alaskan
              Malamute</strong>），也叫<a href="img/DSC_383.jpg">阿拉斯加犬</a>，是最古老的极地雪橇犬之一，它的名字取自
              <i><strong>爱斯基摩人</strong></i>的伊努伊特族的一个叫做马拉缪特的部落。这个部落生活在阿拉斯加西部一个叫做科策布(Kotzebue)的岸边。
              在阿拉斯加成为美国领土的一部分之前，这一地区叫做Alashak或是Alyeska，翻译出来就是“广阔的土地”。</p>
            <p>这种犬与同在阿拉斯加的其它犬种不同，四肢强壮有力...<a href="#nowline">显示全部</a></p>
          </div>
          <label class="edit"><a href="#">编辑</a></label>
        </div>
        <!--<div class="news">-->
        <!--<h3>最新动态</h3>-->
        <!--<p>努伊特族的一个叫做马拉缪特的部落。这个部落生活在阿拉斯加西部一个叫做科策布(Kotzebue)的岸边....</p>-->
        <!--</div>-->
        <input style="display: none">
      </div>
    </div>
  </div>
</template>

<script>
  import jquery from 'jquery';
  import vueresource from 'vue-resource';
  import "swiper/dist/css/swiper.css";
  import {swiper, swiperSlide} from "vue-awesome-swiper";

  export default {
    name: 'HelloWorld',

    data() {
      return {
        slide: ["../../../static/img/1-1.jpg", "../../../static/img/1-2.jpg", "../../../static/img/1-3.jpg", "../../../static/img/1-4.jpg", "../../../static/img/1-5.jpg", "../../../static/img/1-6.jpg"],
        swiperOption: {
          loop: true,
          slidesPerView: 4,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },

        interval: null,
        isShow_product: false,
        dateLable: 2339,
        myData: [],
        t1: "",
        nowIndex: -1,
        src: ""
      }
    },

    components: {swiper, swiperSlide},
    methods: {


      onInit: function () {
      },

      changeDown: function () {
        this.nowIndex++;

        if (this.nowIndex == this.myData.length) this.nowIndex = -1;

        this.t1 = this.myData[this.nowIndex];
      },
      changeUp: function () {
        this.nowIndex--;

        if (this.nowIndex == 0) this.nowIndex = this.myData.length;
        this.t1 = this.myData[this.nowIndex];
      },

      get: function (ev) {

        if (ev.keyCode == 38 || ev.keyCode == 40) return;
        if (ev.keyCode == 13) {
          window.open("http://www.baidu.com/s?wd=" + this.t1);
          this.t1 = "";
        }
        this.$http.jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + this.t1, {
          jsonp: "cb"
        }).then(function (res) {
          this.myData = res.data.s;
        }, function (res) {
          alert(res.status)
        });
      },

      startCarousel: function () {
        var preLeft = 0;
        var list = document.querySelector("#productList");
        list.scrollLeft = 0;

        setTimeout(function () {
          this.interval = setInterval(function () {
            if (preLeft != (list.scrollWidth - list.offsetWidth)) {
              list.scrollLeft += 1;
              preLeft = list.scrollLeft;
            } else {
              clearInterval(this.interval);
              setTimeout(this.startCarousel, 500);
            }
          }, 100);
        }, 100);
      },

      close: function () {
        this.isShow_product = false;
      },

      toggle_show: function () {
        this.isShow_product = true;
      },
    },
    mounted: function () {
      this.onInit();
    }
  }
</script>
<style>
  .navigation {
    height: 50px;
    font-size: 36px;
    color: black;
    background: rgb(0, 66, 121);
    text-align: center;
  }

  .navigation .analyze-check-div {
    display: inline-block;
    margin: 10px 20px;
  }

  .navigation .analyze-check-div span {
    display: inline-block;
    color: white;

    width: 140px;
    height: 30px;
    float: left;

    text-align: center;
    line-height: 30px;
    font-size: 18px;
  }

  .navigation .analyze-check-div span:hover {
    font-size: 26px;

    /*box-shadow: 0px 5px 0px 0px #FFFFFF;*/
  }

  .time {
    display: inline-block;
    color: white;

    height: 50px;
    float: right;

    line-height: 50px;
    font-size: 14px;

    margin-right: 30px;
  }

  .pick {
    background: #6ECDA2;
  }

  .author {
    width: 100%;
    height: 300px;
    font-size: 20px;
    color: black;
    margin-top: 30px;
  }

  .main {
    width: calc(100% - 20px);
    height: 450px;
    margin-top: 50px;
    margin-left: 10px;
    background: #f6f5ec;
  }

  .subdiv {
    width: 33.3%;
    height: 400px;
    margin: 30px 30px;
  }

  .subdiv img {
    marign:0 auto;
    width: 400px;
    height: 380px;
    display: block;
  }


  .navigation-bottom {
    height: 50px;
    background: rgb(0, 66, 121);
    text-align: center;
  }

  .navigation-bottom span {
    height: 50px;
    font-size: 16px;
    color: white;
    text-align: center;
    line-height: 50px;
  }

  .author .introduce {
    width: 20%;
    height: 260px;
    line-height: 20px;
    font-size: 12px;
    float: left;
    margin-left: 1%;
  }

  .introduce .content {
    width: 100%;
    height: 240px;
    line-height: 20px;
    font-size: 12px;
    overflow-y: hidden;
    overflow-x: hidden;
  }

  .introduce .edit {
    line-height: 20px;
    font-size: 14px;
    float: right;
  }

  .author .photo {
    width: 10%;
    height: 250px;
    float: left;
  }

  .author .baidu {
    margin-left: 3%;
    width: 50%;
    height: 250px;
    float: left;
    box-shadow: 5px 2px 3px 1px bisque;
    border: 2px solid bisque;
  }

  .author .news {
    margin-left: 2%;
    width: 10%;
    height: 250px;
    line-height: 20px;
    float: left;
  }

  .mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .modal {
    width: 930px;
    height: 480px;
    position: absolute;
    z-index: 100;
    left: 50%;
    top: 40%;
    background: rgb(0, 66, 121);
    transform: translate3d(-50%, -50%, 0)
  }

  .clone {
    position: absolute;
    right: 10px;
    top: 5px;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: all 0.1s ease-out;
  }

  .fade-leave-active {
    transition: all 0.1s ease-out;
    opacity: 0;
  }

  .Popout {
    margin-top: 20px;
    height: 420px;
    width: 930px;
    background-color: bisque;
  }

  .modal span {
    padding: 30px 40%;
    color: #9F9E66;
    font-size: 26px;
    letter-spacing: 1px;
    position: relative;
    margin-top: 20px;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #263146;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #6ECDA2;
  }

  .products {
    width: calc(100% - 20px);
    height: 320px;
    line-height: 320px;
    white-space: nowrap;
    display: -webkit-box;
    margin: 80px 0px;
  }

  .products .item {
    width: 20%;
    background: white;
    height: 340px;
    text-align: center;
    margin: 0px 2.5%;
    display: inline-block;
    border: 2px solid #0B71C7;
  }

  .item .des {
    font-size: 14px;
    color: black;

    height: 60px;
    width: 100%;
    line-height: 60px;
    text-align: center;

  }

  .item .img {
    width: 100%;
    height: 280px;
  }

  .item img {
    width: 100%;
    height: 280px;
  }

  .filterText {
    outline: none;
    border: none;
    background-color: transparent !important;
    color: white;
  }

  p {
    text-indent: 30px;
  }

  li {
    display: list-item;
    text-align: -webkit-match-parent;
    color: #000;
    font: 14px arial;
    line-height: 22px;
    padding: 0 8px;
    position: relative;
    cursor: default;
    text-align: left;
  }

  .gray {
    background: gainsboro;
  }
</style>
