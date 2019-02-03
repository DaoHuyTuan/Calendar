let datas = {};
let DOM = {};
const createDOM = function createFirstDOM() {
    DOM =  {
        week: document.getElementById("week")
    }
    init();
}
const init = function initData() {
    datas = {
        // date:"",
        month:"",
        year:"",
        numDayOfMonth:"",
        weekDay:"",
        numDaysOfYear:"",
        namNhuan: "",
        // getDates: function(currentDay) {
        //     date = datas.currentDay().getDate(); 
        //     return date;
        // },
        getMonths: function(currentDay) {
            var data = datas.currentDay().getMonth(); 
            month = data + 1;
            return month;
        },
        getYears: function() {
            year = datas.currentDay().getFullYear();
            return year;
        },
        currentDay:function() {
            var currentDay = new Date();
            return currentDay;
        },
        init: function() {
            datas.month = datas.getMonths();
            datas.year = datas.getYears();
            if(datas.year % 100 == 0) {
                if(datas.year % 400 == 0) {
                    console.log("hello 1");
                     datas.namNhuan = true;
                     datas.numDaysOfYear = 366;
                }else {
                     datas.namNhuan = false;
                     datas.numDaysOfYear = 365;
                }
            }
            else {
                if(datas.year % 4 == 0) {
                    console.log("hello 2")
                     datas.namNhuan = true;
                     datas.numDaysOfYear = 366;
                }else {
                     datas.namNhuan = false;
                     datas.numDaysOfYear = 365;
                }
            }
        }
    }
    datas.init();
}
const createDay = function createAnewDay() {
    
}
createDOM();
console.log(datas)