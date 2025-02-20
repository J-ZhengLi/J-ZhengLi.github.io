// Get elements
const stamp = document.getElementById('stamp');
const lid = document.getElementById('top-lid');
const page = document.getElementById('page');

function loadHtml(html) {
    fetch(html)
        .then(res => res.text())
        .then(htmlText => page.innerHTML = htmlText)
        .catch(error => {
            console.error("failed when loading the desired page '", html, "': ", error)
        })
}

window.onload = function() {
    loadHtml('pages/main.html');
};

// Add click event to the stamp
stamp.addEventListener('click', () => {
    // Toggle the lid open
    lid.classList.toggle('open');
    stamp.classList.toggle('hide');

    // Toggle the page reveal
    page.classList.toggle('show');
});
