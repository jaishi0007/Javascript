const div = document.querySelector('.clock');

const tick = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s= now.getSeconds();

    const element = 
    `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
    `;
    div.innerHTML=element;
}

setInterval(tick,1000);