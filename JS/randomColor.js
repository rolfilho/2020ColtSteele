function generateRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

document.querySelector('button').addEventListener('click', () => {
    document.querySelector('body').style.backgroundColor = generateRandomColor();
    document.querySelector('h1').innerText = generateRandomColor();
});
