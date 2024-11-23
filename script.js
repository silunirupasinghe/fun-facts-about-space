const facts = [
    "The first computer programmer was Ada Lovelace in the 1800s.",
    "The first computer virus was created in 1983.",
    "The first high-level programming language was Fortran, developed in the 1950s.",
    "The term 'debugging' was coined by Grace Hopper when a moth was removed from a computer.",
    "JavaScript was created in just 10 days by Brendan Eich in 1995."
];

document.getElementById('factButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').textContent = facts[randomIndex];
});
