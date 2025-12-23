const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");
const timeCards = document.querySelectorAll(".card-body");

let json;

fetch('./data.json').then((response) => {
    if(!response.ok) return console.log('Oops! Something went wrong.');
    return response.json();
}).then((data) => {
    json = data;
});

function updateCards(period) {
    if (!json) {
        console.log('JSON aún no está cargado');
        return;
    }
    
    timeCards.forEach((timeCard) => {
        const title = timeCard.querySelector('h2').textContent.toLowerCase();
        const titleData = json.find((item) => item.title.toLowerCase() === title);
        
        if (titleData) {
            const currentHours = titleData.timeframes[period].current; 
            const previousHours = titleData.timeframes[period].previous;
            const hrsElement = timeCard.querySelector('.hours');
            const previousElement = timeCard.querySelector('.previous');
            
            hrsElement.textContent = `${currentHours}hrs`;
            previousElement.textContent = `Previous - ${previousHours}hrs`;
        }
    });
}


//   daily
dailyBtn.addEventListener("click", () => {
    dailyBtn.classList.add("active");
    weeklyBtn.classList.remove("active");
    monthlyBtn.classList.remove("active");
    updateCards("daily")
});
  
//   weekly
weeklyBtn.addEventListener("click", () => {
    weeklyBtn.classList.add("active");
    dailyBtn.classList.remove("active");
    monthlyBtn.classList.remove("active");
    updateCards("weekly")
});
  
//   monthly
monthlyBtn.addEventListener("click", () => {
    monthlyBtn.classList.add("active");
    weeklyBtn.classList.remove("active");
    dailyBtn.classList.remove("active");
    updateCards("monthly")
});