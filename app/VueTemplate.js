import Vue from 'vue';
import timehandle from './timehandle.js';

//宣告Vue物件
const vuetimer = new Vue({
    //宣告目標的DOM元素
    el: '#vueTimer',
    //設定資料
    data: {
        //時間資料由methods區段產生，故給予參數time空字串
        time: ''
    },
    //發生重新渲染時調用的函示
    methods:{
        //設定更新時間的update方法
        update(){
            //給予參數time時間資料
            this.time = timehandle.getTime();
            //使用時間計時器，每一秒呼叫一次更新時間的方法
            setInterval(this.update, 1000)
        }
    },
    //掛載資料至DOM元件上
    mounted: function() {
        this.update()
  }
})
