<template>
  <div id="app">
    <div class="navigation" style="position: fixed;top: 0;width: 100%">
      <div class="analyze-check-div">
        <span id="home" class="pick" @click="checktype(1)" onmouseover="">首页</span>
        <span id="product" @click="checktype(2)">作品集</span>
        <span id="honor" @click="checktype(3)">个人荣誉</span>
        <span id="connection" @click="checktype(4)">联系我们</span>
      </div>
      <div
        style="border-bottom:1px solid #ffffff;margin:-10px 10px;float: left ;height: 50px;width: 220px;line-height: 50px">
        <img src="../static/img/icon/放大镜.svg" style="float: left;margin-top: 15px">
        <input type="text" placeholder="请输入关键字搜索" class="filterText" v-model="t1" @keyup="get($event)"
               @keydown.down="changeDown()" @keydown.up.prevent="changeUp()">
        <ul v-show="t1!=''" style="font-size: 12px;background: #FFFFFF;margin: 0;list-style: none;padding: 20px">
          <li v-for="(value,key) in myData" :class="{gray:key==nowIndex}">{{value}}</li>
        </ul>
      </div>
      <label id="time" class="time"></label>
      <label class="time" style="margin-right: 10px"><img src="../static/img/icon/时间.svg"
                                                          style="width: 20px;height: 20px;margin-top: 15px ;"></label>
    </div>
    <div class="navigation-bottom" style="clear: both;position: fixed;bottom: 0;width: 100%">
      <span>CopyRight : huanghaichuan</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        interval: null,
        isShow_product: false,
        dateLable: 2339,
        myData: [],
        t1: "",
        nowIndex: -1,
        src: "",
        dateobj: ""
      }
    },


    methods: {


      onInit: function () {
        setInterval(function () {
          var date = new Date();
          var seperator1 = '-';
          var seperator2 = ':';
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var strDate = date.getDate();
          var strHour = date.getHours();
          var strMin = date.getMinutes();
          var strSec = date.getSeconds();
          if (month >= 1 && month <= 9) {
            month = '0' + month;
          }
          if (strDate >= 0 && strDate <= 9) {
            strDate = '0' + strDate;
          }
          if (strHour >= 0 && strHour <= 9) {
            strHour = '0' + strHour;
          }
          if (strMin >= 0 && strMin <= 9) {
            strMin = '0' + strMin;
          }
          if (strSec >= 0 && strSec <= 9) {
            strSec = '0' + strSec;
          }
          var currentdate = month + seperator1 + strDate + " ";
          var currenttime = strHour + seperator2 + strMin + seperator2 + strSec;
          this.dateobj = {date: year + "-" + currentdate, time: currenttime};
          document.getElementById("time").innerText = this.dateobj.date + this.dateobj.time;
        }, 1000);
      },

      getNowFormatDate: function () {

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

      checktype: function (type) {
        switch (type) {
          case 1:
            this.$router.push("/");

            document.getElementById("home").style.background = "#6ECDA2";
            document.getElementById("product").style.background = "rgb(0, 66, 121)";
            document.getElementById("honor").style.background = "rgb(0, 66, 121)";
            document.getElementById("connection").style.background = "rgb(0, 66, 121)";
            break;
          case 2:
            this.$router.push("/Product");

            document.getElementById("home").style.background = "rgb(0, 66, 121)";
            document.getElementById("product").style.background = "#6ECDA2";
            document.getElementById("honor").style.background = "rgb(0, 66, 121)";
            document.getElementById("connection").style.background = "rgb(0, 66, 121)";
            break;
          case 3:
            this.$router.push("/Honor");

            document.getElementById("home").style.background = "rgb(0, 66, 121)";
            document.getElementById("product").style.background = "rgb(0, 66, 121)";
            document.getElementById("honor").style.background = "#6ECDA2";
            document.getElementById("connection").style.background = "rgb(0, 66, 121)";
            break;
          case 4:

            this.$router.push("/Connect");
            document.getElementById("home").style.background = "rgb(0, 66, 121)";
            document.getElementById("product").style.background = "rgb(0, 66, 121)";
            document.getElementById("honor").style.background = "rgb(0, 66, 121)";
            document.getElementById("connection").style.background = "#6ECDA2";
            break;
        }
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
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    min-width: 800px;
  }
</style>
