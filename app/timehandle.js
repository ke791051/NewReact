// 打包模組
module.exports = {
    // 建立getTime方法
    getTime(){
        let time = new Date();
        return (`${time.getFullYear()}年${(time.getMonth()+1)}月${time.getDate()}日${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
    }
}