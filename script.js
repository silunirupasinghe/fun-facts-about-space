const spaceFacts = [
    "Venus is the hottest planet in our solar system.",
    "A day on Venus is longer than a year on Venus.",
    "Jupiter has the shortest day of all the planets.",
    "The Milky Way galaxy will collide with the Andromeda Galaxy in about 4.5 billion years.",
    "There are more stars in the universe than grains of sand on all the Earth's beaches."
];

document.getElementById('factButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * spaceFacts.length);
    document.getElementById('factDisplay').textContent = spaceFacts[randomIndex];
});
