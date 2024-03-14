function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left, 10);

    if (left > 0) { 
        dodger.style.left = `${left - 10}px`; 
    }
}
console.log(`Before moving right, position: ${dodger.style.left}`);
function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left, 10);
    const gameWidth = document.getElementById('game').clientWidth;
    const dodgerWidth = dodger.offsetWidth;

    if (left + dodgerWidth + 10 <= gameWidth) {
        dodger.style.left = `${left + 10}px`;
    }
}