const colleges = [
    {
        id: 1,
        name: "Apex College",
        university: "Pokhara University",
        location: "Kathmandu",
        address: "Dillibazar, Kathmandu",
        courses: ["BBA", "BCSIT"],
        phone: "01-4412233",
        website: "apexcollege.edu.np",
        images: ["apex.jpg", "apex1.jpg"],
        galleryPage: "college_gallery/Apex.html"
    },
    {
        id: 2,
        name: "Pokhara College of Management",
        university: "Pokhara University",
        location: "Pokhara",
        address: "Pokhara-3, Kaski",
        courses: ["BCSIT", "BBA"],
        phone: "(061) 544761, 570124",
        website: "pcm.edu.np",
        images: ["pcm1.jpg", "pcm.png"],
        galleryPage: "college_gallery/pcm.html"
    },
    {
        id: 3,
        name: "Uniglobe College",
        university: "Pokhara University",
        location: "Kathmandu",
        address: "Kamaladi, Kathmandu",
        courses: ["BBA"],
        phone: "01-4226677",
        website: "uniglobe.edu.np",
        images: ["uniglobe.jpg", "uniglobe1.png"],
        galleryPage: "college_gallery/uniglobe.html"
    }
];

function displayColleges(list) {
    const grid = document.getElementById("college-grid");
    const countText = document.getElementById("results-count");

    countText.textContent = `Showing ${list.length} college${list.length !== 1 ? 's' : ''}`;

    if (list.length === 0) {
        grid.innerHTML = `<div class="empty-state">No colleges found.</div>`;
        return;
    }

    grid.innerHTML = list.map(college => `
        <div class="college-card">
            <div class="gallery">
                ${college.images.map(img => `
                    <img src="../assets/${img}" alt="${college.name}" class="gallery-img">
                `).join('')}
            </div>
            
            <div class="college-title">
                <div class="college-details">
                    <div class="college-name">${college.name}</div>
                    <div class="college-uni">${college.university}</div>
                </div>
            </div>

            <div class="college-address">${college.address}</div>

            <div class="college-courses">
                ${college.courses.map(course => `<span class="course-badge">${course}</span>`).join('')}
            </div>

            <div class="college-contact">
                <span>${college.phone}</span>
                <a href="https://${college.website}" target="_blank">${college.website}</a>
            </div>

            <button class="college-btn" onclick="window.location.href='${college.galleryPage}'">View Full Profile -></button>
        </div>
    `).join('');
}

function filterColleges() {
    const searchText = document.getElementById("search-input").value.toLowerCase();
    const selectedCourse = document.getElementById("course-filter").value;
    const selectedLocation = document.getElementById("location-filter").value;

    const filtered = colleges.filter(college => {
        const matchesSearch = college.name.toLowerCase().includes(searchText);
        const matchesCourse = selectedCourse === "" || college.courses.includes(selectedCourse);
        const matchesLocation = selectedLocation === "" || college.location === selectedLocation;

        return matchesSearch && matchesCourse && matchesLocation;
    });

    displayColleges(filtered);
}

window.addEventListener("DOMContentLoaded", () => {
    displayColleges(colleges);
});
