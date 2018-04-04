(function (name, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') { // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) { // requirejs - amd canon
        define(factory);
    } else if (window) { // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('howManyDays', function () {
    /**
     * @description 某年某月有多少天
     * @param {Number} year - 年
     * @param {Number} month - 月
     * */
    function howManyDays(year, month) {
        // 为什么不使用日期对象(Date)做，因为nodejs和浏览器解析有差异
        let twoMonthDays = 28;
        // 能被4整数但是不能被100整除或者能直接被400整除
        const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        if (isLeapYear) {
            twoMonthDays = 29;
        }
        const day31 = [1, 3, 5, 7, 8, 10, 12];
        const day30 = [4, 6, 9, 11];
        month = Number(month);
        if (month === 2) {
            return twoMonthDays;
        } else if (day31.indexOf(month) !== -1) {
            return 31;
        } else if (day30.indexOf(month) !== -1) {
            return 30;
        }
    }

    return howManyDays;
});
