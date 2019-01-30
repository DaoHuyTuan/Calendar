const weekDay = function (day,month,year) {
    const stringDate = year + "-" + month + "-" + day;
    console.log(stringDate)
    var date = new Date(stringDate);
    var d = date.getDay();
    datas.weekDay = d;
    
}
const daysOfMonth = function getNumberDaysOfMonth(month,year) {
    var days = new Date(year,month,0);
    var numDays = days.getDate();
    datas.numDayOfMonth = numDays;

}
const positionDays = function positionDaysOfMonth(weekDay,numDayOfMonth) {
    var blankDay;
    blankDay = weekDay -2;
    if(weekDay == 1) {
        blankDay = weekDay;
    }
    if(weekDay < 1) {
        blankDay = 5;
    }
    var startDays = 0;
    console.log(weekDay)
    console.log(numDayOfMonth)
    console.log(blankDay)
    for(startDays;startDays <= blankDay;startDays++) {
        if(startDays < blankDay) {
            console.log(startDays)
            createDays(0);
        }
        else {
            for(var i = 0;i<= numDayOfMonth ;i++){
                console.log("hello")
                createDays(i)
            }
        }
    }
    
}
const createDays = function createElementDay(numDay) {
    var boxDay;
    if(numDay == 0) {
        boxDay = "<div class=''></div>";
    }else {
        boxDay = "<div class='days'>"+ numDay + "</div>";
    }
    
    DOM.week.innerHTML += boxDay;
}

weekDay(01,12,datas.year);
daysOfMonth(12,datas.year);
positionDays(datas.weekDay,datas.numDayOfMonth)