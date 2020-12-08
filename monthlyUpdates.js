var d = new Date();
var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("month").innerHTML = (monthName[d.getMonth()] + " Updates");


var monthlyUpdates = [
    {
        "announcement": "Announcement"
    },
    {
        "announcement": "Announcement"
    },
    {
        "announcement": "Announcement"
    },
    {
        "announcement": "Announcement"
    },
    {
        "announcement": "Announcement"
    }
]

var i;
for (i = 0; i < monthlyUpdates.length; i++) {
    var identity = "text" + i;
    document.getElementById(identity).innerHTML = monthlyUpdates[i].announcement;
}

