var d = new Date();
var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("month").innerHTML = (monthName[d.getMonth()] + " Updates");


var monthlyUpdates = [
    {
        "announcement": "We welcome the new recruits in SSIT! 🧑‍💻 👩‍💻"
    },
    {
        "announcement": "Successfully completed GitMash 🎮"
    },
    {
        "announcement": "App Dev Projects on the way 🏄🏻‍♂️"
    },
    {
        "announcement": "Project for farmers is being made."
    },
    {
        "announcement": "Accomplishment: Data Science project of COVID-19"
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

