/* jshint esversion: 6 */

const workoutsVelo = [
    {
        title: "Séance BikeERG orientée FORCE",
        material: ["bike-erg"],
        body: "bas",
        duration: 40,
        type: "CARDIO",
        level: "Intense",
        desc: "Séance de fractionné force pendant 40 minutes. 10 x 1min effort / 1min récup.",
        details: {
            format_label: "SÉANCE CARDIO — 40 MINUTES",
            exercises: [
                { text: "🔥 Échauffement : 10 minutes (damper 2-3)" },
                { text: "⚡ Fractionné : 20 minutes — 10 fois :" },
                { text: "→ 1 minute d'effort (damper et RPM selon niveau, min. 70-75 RPM)" },
                { text: "→ 1 minute de récupération" },
                { text: "🏁 Récupération : 10 minutes (damper 2-3)" }
            ],
            conseil: "40 minutes avec 20 de fractionné. Adapter le damper (minimum 4) et le RPM. Le RPM doit rester constant pendant les minutes d'effort (minimum 70-75)."
        }
    },
    {
        title: "Séance BikeERG intervalle 30min",
        material: ["bike-erg"],
        body: "bas",
        duration: 30,
        type: "CARDIO",
        level: "Moyen",
        desc: "Séance de fractionné pendant 30 minutes. 10 x 1min intensité max / 1min récup.",
        details: {
            format_label: "SÉANCE CARDIO — 30 MINUTES",
            exercises: [
                { text: "🔥 Échauffement : 10 minutes (damper 2-3)" },
                { text: "⚡ Fractionné : 10 minutes — 10 fois :" },
                { text: "→ 1 minute intensité max (pédalage le plus rapide possible)" },
                { text: "→ 1 minute de récupération" },
                { text: "🏁 Récupération : 10 minutes (damper 2-3)" }
            ],
            conseil: "Adapter le damper (minimum 3) et le RPM selon votre niveau."
        }
    }
];

function displayWorkoutsVelo() {
    const grid = document.getElementById('velo-grid');
    if (!grid) return;
    grid.innerHTML = '';
    workoutsVelo.forEach(function(workout) {
        const typeClass = 'card-cardio';
        const durationText = workout.duration + ' min';
        const materialTags = workout.material.map(function(m) {
            return '<span class="tag tag-material">' + m + '</span>';
        }).join('');
        const btnHtml = workout.details
            ? '<button onclick="openModalVelo(' + workoutsVelo.indexOf(workout) + ')" class="btn-full">📋 Voir la séance</button>'
            : '<a href="' + workout.pdf + '" target="_blank" class="btn-full">Ouvrir la fiche PDF</a>';
        grid.innerHTML += '<div class="card ' + typeClass + '">' +
            '<div>' +
            materialTags +
            '<span class="tag tag-body">' + workout.body + '</span>' +
            '<span class="tag tag-time">' + durationText + '</span>' +
            '<span class="tag tag-' + workout.level.toLowerCase() + '">' + workout.level + '</span>' +
            '<h3>' + workout.title + '</h3>' +
            '<div class="card-desc">' + workout.desc + '</div>' +
            '</div>' +
            '<div class="card-buttons">' + btnHtml + '</div>' +
            '</div>';
    });
}

function openModalVelo(index) {
    const w = workoutsVelo[index];
    const d = w.details;
    if (!d) return;
    document.getElementById('modal-title').textContent = w.title;
    const box = document.getElementById('modal-box');
    box.className = 'type-cardio';
    const durationText = w.duration + ' min';
    const levelClass = 'modal-badge-level-' + w.level.toLowerCase();
    const matList = w.material.join(', ');
    document.getElementById('modal-badges').innerHTML =
        '<span class="modal-badge modal-badge-type">' + w.type + '</span>' +
        '<span class="modal-badge modal-badge-body">' + w.body + '</span>' +
        '<span class="modal-badge modal-badge-time">⏱ ' + durationText + '</span>' +
        '<span class="modal-badge modal-badge-mat">🚴 ' + matList + '</span>' +
        '<span class="modal-badge ' + levelClass + '">' + w.level + '</span>';
    let html = '<p class="modal-format-label">' + d.format_label + '</p>';
    if (d.intro) html += '<p class="modal-intro">' + d.intro + '</p>';
    html += '<ul class="modal-exercises">';
    d.exercises.forEach(function(ex) { html += '<li>' + ex.text + '</li>'; });
    html += '</ul>';
    if (d.conseil) html += '<div class="modal-conseil"><strong>💡 Conseil</strong>' + d.conseil + '</div>';
    document.getElementById('modal-body').innerHTML = html;
    document.getElementById('modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

window.addEventListener('DOMContentLoaded', function() {
    displayWorkoutsVelo();
    const overlay = document.getElementById('modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', function(e) { if (e.target === overlay) closeModal(); });
    }
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });
    const btnClose = document.getElementById('modal-close');
    if (btnClose) btnClose.addEventListener('click', closeModal);
    const backButton = document.getElementById('backToTop');
    if (backButton) {
        window.onscroll = function() {
            backButton.style.display = (window.scrollY > 300) ? 'block' : 'none';
        };
        backButton.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
