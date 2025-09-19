const easyProjects = [
    {
        id: "01",
        title: "Counter",
        desc: "Counter that increases when button is clicked.",
        img: "images/01.png",
        badges: ["DOM", "Event Listener"]
    },
    {
        id: "02",
        title: "Digital Clock",
        desc: "Live digital clock application.",
        img: "images/02.png",
        badges: ["Date()", "setInterval"]
    },
    {
        id: "03",
        title: "To-Do List",
        desc: "Add & remove tasks",
        img: "images/03.png",
        badges: ["DOM", "Event Listener"]
    },
    {
        id: "04",
        title: "Random Book Suggestion",
        desc: "Each press of the button recommends a different book.",
        img: "images/04.png",
        badges: ["Math.random()", "Fetch API"]
    },
    {
        id: "05",
        title: "Simple Calculator",
        desc: "Calculator with basic arithmetic operations.",
        img: "images/05.png",
        badges: ["Input", "Switch Case"]
    },
    {
        id: "06",
        title: "Background Color Changer",
        desc: "Changes background with random colors.",
        img: "images/06.png",
        badges: ["DOM", "Math.random()"]
    },
    {
        id: "07",
        title: "Keyboard Key Detector",
        desc: "Captures keyboard key presses.",
        img: "images/07.png",
        badges: ["Keyboard Event", "Event Listener"]
    },
    {
        id: "08",
        title: "Image Slider",
        desc: "Navigate back and forth between images.",
        img: "images/08.png",
        badges: ["DOM", "setInterval", "Slider Logic"]
    },
    {
        id: "09",
        title: "Temperature Converter",
        desc: "Converts Celsius to Kelvin and Fahrenheit.",
        img: "images/09.png",
        badges: ["Input", "Math"]
    },
    {
        id: "10",
        title: "Rock-Paper-Scissors Game",
        desc: "User plays rock-paper-scissors against computer.",
        img: "images/10.png",
        badges: ["Math.random()", "Conditionals"]
    }
];


function renderProjects(projects, containerId) {
    const container = document.getElementById(containerId);

    projects.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${p.img}" alt="${p.title}">
            <div class="card-content">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <div class="badges">
                    ${p.badges.map(b => `<span class="badge">${b}</span>`).join("")}
                </div>
            </div>
            <div class="card-footer">
                <a href="begineer/${p.id}/index.html" target="_blank">Open Project</a>
            </div>
        `;
        container.appendChild(card);
    });
}


renderProjects(easyProjects, "easy-projects");