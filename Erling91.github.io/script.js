console.log('working!');

let theme = localStorage.getItem('theme');

if(theme == null) {
    setTheme('light');
} else {
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (let i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        console.log('option clicked:', mode);
        setTheme(mode);
    })
}

function setTheme(mode) {
    if(mode == 'dark') {
        document.getElementById('theme-style').href = 'black.css'
    } else if(mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css'
    } else {
        document.getElementById('theme-style').href = 'default.css'
    }

    localStorage.setItem('theme', mode);
}