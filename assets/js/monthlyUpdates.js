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

const updates = document.getElementById('updates')
var i;
for (i = 0; i < monthlyUpdates.length; i++) {
    const announcement = document.createElement('div')
    announcement.className = 'notice-bar'
    announcement.textContent = monthlyUpdates[i].announcement
    updates.appendChild(announcement)
}

