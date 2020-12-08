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

