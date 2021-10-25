let selects = document.querySelectorAll('.content__select');
const wave = document.createElement('div');
wave.classList.add('wave');
wave.textContent = 'Most popular';
addActiveWave();

selects.forEach(item => {
    item.addEventListener('click', () => {
        clearActiveClasses()
        if (item.classList.contains('active')) {
            item.classList.remove('active')
            wave.remove();
        } else {
            item.classList.add('active');
            addActiveWave();
        }
    })
})

function clearActiveClasses() {
    selects.forEach((item) => {
        item.classList.remove("active");
    });
}

function addActiveWave() {
    let activeSelect = document.querySelector('.content__select.active')
    activeSelect.prepend(wave);
}


