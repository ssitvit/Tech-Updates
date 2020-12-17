var d = new Date();
var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("month").innerHTML = (monthName[d.getMonth()] + " Updates");


var monthlyUpdates = [
    {
        "announcement": "Tech Team is recruiting !!!"
    },
    {
        "announcement": "Two android projects have started."
    },
    {
        "announcement": "Cool Github projects on the way."
    },
    {
        "announcement": "Project for farmers is being made."
    },
    {
        "announcement": "Covid project of data science completed!"
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

