const scholarships = [
    {
        id: 1,
        name: "Pokhara University Central Scholarship",
        org: "Pokhara University Scheme",
        type: "Government",
        deadline: "31 July 2026",
        amount: "Full Tuition Waiver",
        courses: ["BBA", "BCSIT"],
        eligibility: "Nepali citizens from government schools.",
        link: "#"
    },
    {
        id: 2,
        name: "PU Semester Merit Scholarship",
        org: "Pokhara University Affiliated",
        type: "Merit-Based",
        deadline: "15 Aug 2026",
        amount: "NPR 30,000/sem",
        courses: ["BBA", "BCSIT"],
        eligibility: "Students securing 1st Rank in semester exams.",
        link: "#"
    },
    {
        id: 3,
        name: "Ncell Digital Futures Scholarship",
        org: "Ncell Foundation",
        type: "Private",
        deadline: "30 Sep 2026",
        amount: "NPR 50,000/yr",
        courses: ["BCSIT"],
        eligibility: "Female students enrolled in tech or IT.",
        link: "#"
    }
];

const savedScholarships = new Set();

function getBadgeClass(type) {
    if (type === "Government") return "badge-govt";
    if (type === "Merit-Based") return "badge-merit";
    if (type === "Private") return "badge-private";
    return "";
}

function displayScholarships(list) {
    const grid = document.getElementById("scholarship-grid");
    const countText = document.getElementById("results-count");

    countText.textContent = `Showing ${list.length} scholarship${list.length !== 1 ? 's' : ''}`;

    if (list.length === 0) {
        grid.innerHTML = `<div class="empty-state">No scholarships found.</div>`;
        return;
    }

    grid.innerHTML = list.map(s => {
        const isSaved = savedScholarships.has(s.id);
        return `
            <div class="scholarship-card">
                <div class="badge-row">
                    <span class="scholarship-badge ${getBadgeClass(s.type)}">${s.type}</span>
                </div>
                <div class="scholarship-name">${s.name}</div>
                <div class="scholarship-org">${s.org}</div>
                
                <div class="scholarship-info-box">
                    <span class="info-item">Deadline: ${s.deadline}</span>
                    <span class="info-item">Value: ${s.amount}</span>
                </div>
                
                <div class="scholarship-eligibility">
                    <strong>Eligibility:</strong> ${s.eligibility}
                </div>
                
                <div class="scholarship-actions">
                    <a class="apply-btn" href="${s.link}">Apply Now ↗</a>
                    <button class="save-btn ${isSaved ? 'saved' : ''}" onclick="toggleSave(${s.id})">
                        ${isSaved ? '✓ Saved' : 'Save'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function filterScholarships() {
    const searchText = document.getElementById("search-input").value.toLowerCase();
    const selectedType = document.getElementById("type-filter").value;
    const selectedCourse = document.getElementById("course-filter").value;

    const filtered = scholarships.filter(s => {
        const matchesSearch = s.name.toLowerCase().includes(searchText) || s.org.toLowerCase().includes(searchText);
        const matchesType = selectedType === "" || s.type === selectedType;
        const matchesCourse = selectedCourse === "" || s.courses.includes(selectedCourse);

        return matchesSearch && matchesType && matchesCourse;
    });

    displayScholarships(filtered);
}

function toggleSave(id) {
    if (savedScholarships.has(id)) {
        savedScholarships.delete(id);
    } else {
        savedScholarships.add(id);
    }
    filterScholarships();
}

window.addEventListener("DOMContentLoaded", () => {
    displayScholarships(scholarships);
});
