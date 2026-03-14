/* jshint esversion: 6 */

// Données Run Tempo — 12 niveaux (partagées avec script.js)
const runTempoNiveaux = [
    { n: 1, phases: [
        { min: "10-11", vitesse: "9 à 10 km/h", type: "effort" }, { min: "11-12", vitesse: "Récupération", type: "recup" },
        { min: "12-14", vitesse: "8 à 9 km/h", type: "effort" }, { min: "14-15", vitesse: "Récupération", type: "recup" },
        { min: "15-18", vitesse: "7,5 à 8,5 km/h", type: "effort" }, { min: "18-19", vitesse: "Récupération", type: "recup" },
        { min: "19-23", vitesse: "7,5 à 8,5 km/h", type: "effort" }, { min: "23-24", vitesse: "Récupération", type: "recup" },
        { min: "24-27", vitesse: "8 à 9 km/h", type: "effort" }, { min: "27-28", vitesse: "Récupération", type: "recup" },
        { min: "28-30", vitesse: "8,5 à 9,5 km/h", type: "effort" }, { min: "30-31", vitesse: "Récupération", type: "recup" },
        { min: "31-32", vitesse: "9,5 à 10,5 km/h", type: "effort" }, { min: "32-33", vitesse: "Récupération", type: "recup" }
    ]},
    { n: 2, phases: [
        { min: "10-11", vitesse: "9,5 à 10,5 km/h", type: "effort" }, { min: "11-12", vitesse: "Récupération", type: "recup" },
        { min: "12-14", vitesse: "8,5 à 9,5 km/h", type: "effort" }, { min: "14-15", vitesse: "Récupération", type: "recup" },
        { min: "15-18", vitesse: "8 à 9 km/h", type: "effort" }, { min: "18-19", vitesse: "Récupération", type: "recup" },
        { min: "19-23", vitesse: "8 à 9 km/h", type: "effort" }, { min: "23-24", vitesse: "Récupération", type: "recup" },
        { min: "24-27", vitesse: "8,5 à 9,5 km/h", type: "effort" }, { min: "27-28", vitesse: "Récupération", type: "recup" },
        { min: "28-30", vitesse: "9 à 10 km/h", type: "effort" }, { min: "30-31", vitesse: "Récupération", type: "recup" },
        { min: "31-32", vitesse: "10 à 11 km/h", type: "effort" }, { min: "32-33", vitesse: "Récupération", type: "recup" }
    ]},
    { n: 3, phases: [
        { min: "10-11", vitesse: "10 à 11 km/h", type: "effort" }, { min: "11-12", vitesse: "Récupération", type: "recup" },
        { min: "12-14", vitesse: "9 à 10 km/h", type: "effort" }, { min: "14-15", vitesse: "Récupération", type: "recup" },
        { min: "15-18", vitesse: "8,5 à 9,5 km/h", type: "effort" }, { min: "18-19", vitesse: "Récupération", type: "recup" },
        { min: "19-23", vitesse: "8,5 à 9,5 km/h", type: "effort" }, { min: "23-24", vitesse: "Récupération", type: "recup" },
        { min: "24-27", vitesse: "9 à 10 km/h", type: "effort" }, { min: "27-28", vitesse: "Récupération", type: "recup" },
        { min: "28-30", vitesse: "9,5 à 10,5 km/h", type: "effort" }, { min: "30-31", vitesse: "Récupération", type: "recup" },
        { min: "31-32", vitesse: "10,5 à 11,5 km/h", type: "effort" }, { min: "32-33", vitesse: "Récupération", type: "recup" }
    ]},
    { n: 4, phases: [
        { min: "10-11", vitesse: "10,5 à 11,5 km/h", type: "effort" }, { min: "11-12", vitesse: "Récupération", type: "recup" },
        { min: "12-14", vitesse: "9,5 à 10,5 km/h", type: "effort" }, { min: "14-15", vitesse: "Récupération", type: "recup" },
        { min: "15-18", vitesse: "9 à 10 km/h", type: "effort" }, { min: "18-19", vitesse: "Récupération", type: "recup" },
        { min: "19-23", vitesse: "9 à 10 km/h", type: "effort" }, { min: "23-24", vitesse: "Récupération", type: "recup" },
        { min: "24-27", vitesse: "9,5 à 10,5 km/h", type: "effort" }, { min: "27-28", vitesse: "Récupération", type: "recup" },
        { min: "28-30", vitesse: "10 à 11 km/h", type: "effort" }, { min: "30-31", vitesse: "Récupération", type: "recup" },
        { min: "31-32", vitesse: "11 à 12 km/h", type: "effort" }, { min: "32-33", vitesse: "Récupération", type: "recup" }
    ]},
    { n: 5, phases: [
        { min: "10-11", vitesse: "11 à 12 km/h", type: "effort" }, { min: "11-12", vitesse: "Récupération", type: "recup" },
        { min: "12-14", vitesse: "10 à 11 km/h", type: "effort" }, { min: "14-15", vitesse: "Récupération", type: "recup" },
        { min: "15-18", vitesse: "9,5 à 10,5 km/h", type: "effort" }, { min: "18-19", vitesse: "Récupération", type: "recup" },
        { min: "19-23", vitesse: "9,5 à 10,5 km/h", type: "effort" }, { min: "23-24", vitesse: "Récupération", type: "recup" },
        { min: "24-27", vitesse: "10 à 11 km/h", type: "effort" }, { min: "27-28", vitesse: "Récupération", type: "recup" },
        { min: "28-30", vitesse: "10,5 à 11,5 km/h", type: "effort" }, { min: "30-31", vitesse: "Récupération", type: "recup" },
        { min: "31-32", vitesse: "11,5 à 12,5 km/h", type: "effort" }, { min: "32-33", vitesse: "Récupération", type: "recup" }
    ]},
    { n: 6, phases: [
        { min: "10-11", vitesse: "11,5 à 12,5 km/h", type: "effort" }, { min: "11-12", vitesse: "Récupération", type: "recup" },
        { min: "12-14", vitesse: "10,5 à 11,5 km/h", type: "effort" }, { min: "14-15", vitesse: "Récupération", type: "recup" },
        { min: "15-18", vitesse: "10 à 11 km/h", type: "effort" }, { min: "18-19", vitesse: "Récupération", type: "recup" },
        { min: "19-23", vitesse: "10 à 11 km/h", type: "effort" }, { min: "23-24", vitesse: "Récupération", type: "recup" },
        { min: "24-27", vitesse: "10,5 à 11,5 km/h", type: "effort" }, { min: "27-28", vitesse: "Récupération", type: "recup" },
        { min: "28-30", vitesse: "11 à 12 km/h", type: "effort" }, { min: "30-31", vitesse: "Récupération", type: "recup" },
        { min: "31-32", vitesse: "12 à 13 km/h", type: "effort" }, { min: "32-33", vitesse: "Récupération", type: "recup" }
    ]},
    { n: 7, phases: [
        { min: "10-11", vitesse: "12 à 13 km/h", type: "effort" }, { min: "11-12", vitesse: "Récupération", type: "recup" },
        { min: "12-14", vitesse: "11 à 12 km/h", type: "effort" }, { min: "14-15", vitesse: "Récupération", type: "recup" },
        { min: "15-18", vitesse: "10,5 à 11,5 km/h", type: "effort" }, { min: "18-19", vitesse: "Récupération", type: "recup" },
        { min: "19-23", vitesse: "10,5 à 11,5 km/h", type: "effort" }, { min: "23-24", vitesse: "Récupération", type: "recup" },
        { min: "24-27", vitesse: "11 à 12 km/h", type: "effort" }, { min: "27-28", vitesse: "Récupération", type: "recup" },
        { min: "28-30", vitesse: "11,5 à 12,5 km/h", type: "effort" }, { min: "30-31", vitesse: "Récupération", type: "recup" },
        { min: "31-32", vitesse: "12,5 à 13,5 km/h", type: "effort" }, { min: "32-33", vitesse: "Récupération", type: "recup" }
    ]},
    { n: 8, phases: [
        { min: "10-11", vitesse: "13 à 14 km/h", type: "effort" }, { min: "11-12", vitesse: "Récupération", type: "recup" },
        { min: "12-14", vitesse: "11,5 à 12,5 km/h", type: "effort" }, { min: "14-15", vitesse: "Récupération", type: "recup" },
        { min: "15-18", vitesse: "11 à 12 km/h", type: "effort" }, { min: "18-19", vitesse: "Récupération", type: "recup" },
        { min: "19-23", vitesse: "11 à 12 km/h", type: "effort" }, { min: "23-24", vitesse: "Récupération", type: "recup" },
        { min: "24-27", vitesse: "11,5 à 12,5 km/h", type: "effort" }, { min: "27-28", vitesse: "Récupération", type: "recup" },
        { min: "28-30", vitesse: "12,5 à 13,5 km/h", type: "effort" }, { min: "30-31", vitesse: "Récupération", type: "recup" },
        { min: "31-32", vitesse: "13,5 à 14,5 km/h", type: "effort" }, { min: "32-33", vitesse: "Récupération", type: "recup" }
    ]},
    { n: 9, phases: [
        { min: "10-11", vitesse: "13,5 à 14,5 km/h", type: "effort" }, { min: "11-12", vitesse: "Récupération", type: "recup" },
        { min: "12-14", vitesse: "12 à 13 km/h", type: "effort" }, { min: "14-15", vitesse: "Récupération", type: "recup" },
        { min: "15-18", vitesse: "11,5 à 12,5 km/h", type: "effort" }, { min: "18-19", vitesse: "Récupération", type: "recup" },
        { min: "19-23", vitesse: "11,5 à 12,5 km/h", type: "effort" }, { min: "23-24", vitesse: "Récupération", type: "recup" },
        { min: "24-27", vitesse: "12 à 13 km/h", type: "effort" }, { min: "27-28", vitesse: "Récupération", type: "recup" },
        { min: "28-30", vitesse: "13 à 14 km/h", type: "effort" }, { min: "30-31", vitesse: "Récupération", type: "recup" },
        { min: "31-32", vitesse: "14 à 15 km/h", type: "effort" }, { min: "32-33", vitesse: "Récupération", type: "recup" }
    ]},
    { n: 10, phases: [
        { min: "10-11", vitesse: "14 à 15 km/h", type: "effort" }, { min: "11-12", vitesse: "Récupération", type: "recup" },
        { min: "12-14", vitesse: "12,5 à 13,5 km/h", type: "effort" }, { min: "14-15", vitesse: "Récupération", type: "recup" },
        { min: "15-18", vitesse: "12 à 13 km/h", type: "effort" }, { min: "18-19", vitesse: "Récupération", type: "recup" },
        { min: "19-23", vitesse: "12 à 13 km/h", type: "effort" }, { min: "23-24", vitesse: "Récupération", type: "recup" },
        { min: "24-27", vitesse: "12,5 à 13,5 km/h", type: "effort" }, { min: "27-28", vitesse: "Récupération", type: "recup" },
        { min: "28-30", vitesse: "13,5 à 14,5 km/h", type: "effort" }, { min: "30-31", vitesse: "Récupération", type: "recup" },
        { min: "31-32", vitesse: "14,5 à 15,5 km/h", type: "effort" }, { min: "32-33", vitesse: "Récupération", type: "recup" }
    ]},
    { n: 11, phases: [
        { min: "10-11", vitesse: "14,5 à 15,5 km/h", type: "effort" }, { min: "11-12", vitesse: "Récupération", type: "recup" },
        { min: "12-14", vitesse: "13 à 14 km/h", type: "effort" }, { min: "14-15", vitesse: "Récupération", type: "recup" },
        { min: "15-18", vitesse: "12,5 à 13,5 km/h", type: "effort" }, { min: "18-19", vitesse: "Récupération", type: "recup" },
        { min: "19-23", vitesse: "12,5 à 13,5 km/h", type: "effort" }, { min: "23-24", vitesse: "Récupération", type: "recup" },
        { min: "24-27", vitesse: "13 à 14 km/h", type: "effort" }, { min: "27-28", vitesse: "Récupération", type: "recup" },
        { min: "28-30", vitesse: "14 à 15 km/h", type: "effort" }, { min: "30-31", vitesse: "Récupération", type: "recup" },
        { min: "31-32", vitesse: "15,5 à 16,5 km/h", type: "effort" }, { min: "32-33", vitesse: "Récupération", type: "recup" }
    ]},
    { n: 12, phases: [
        { min: "10-11", vitesse: "15 à 16 km/h", type: "effort" }, { min: "11-12", vitesse: "Récupération", type: "recup" },
        { min: "12-14", vitesse: "13,5 à 14,5 km/h", type: "effort" }, { min: "14-15", vitesse: "Récupération", type: "recup" },
        { min: "15-18", vitesse: "13 à 14 km/h", type: "effort" }, { min: "18-19", vitesse: "Récupération", type: "recup" },
        { min: "19-23", vitesse: "13 à 14 km/h", type: "effort" }, { min: "23-24", vitesse: "Récupération", type: "recup" },
        { min: "24-27", vitesse: "13,5 à 14,5 km/h", type: "effort" }, { min: "27-28", vitesse: "Récupération", type: "recup" },
        { min: "28-30", vitesse: "14,5 à 15,5 km/h", type: "effort" }, { min: "30-31", vitesse: "Récupération", type: "recup" },
        { min: "31-32", vitesse: "16 à 17 km/h", type: "effort" }, { min: "32-33", vitesse: "Récupération", type: "recup" }
    ]}
];

const workoutsCourse = [
    {
        title: "Séance TEMPO pyramidale",
        material: ["tapis-incurve"],
        body: "bas",
        duration: 40,
        type: "CARDIO",
        level: "Moyen",
        desc: "Séance pyramidale de 40 minutes sur tapis incurvé. 12 niveaux disponibles (correspond aux paliers du Luc Léger).",
        details: {
            format_label: "CARDIO PYRAMIDAL — 40 MINUTES",
            type_special: "run_tempo",
            conseil: "Séance parfaite sur tapis incurvé. Le niveau correspond approximativement aux paliers du Luc Léger. Min 1-10 : échauffement avec 3 accélérations de 30 sec. Min 33-40 : récupération course lente.",
            niveaux: runTempoNiveaux
        }
    },
    {
        title: "Séances course à pied guidées",
        material: ["poids-corps"],
        body: "complet",
        duration: 0,
        type: "CARDIO",
        level: "Moyen",
        desc: "Séances de course à pied guidées avec l'application Decathlon Coach.",
        pdf: "docs/AppliDecat.pdf"
    }
];

function displayWorkoutsCourse() {
    const grid = document.getElementById('course-grid');
    if (!grid) return;
    grid.innerHTML = '';
    workoutsCourse.forEach(function(workout) {
        const typeClass = 'card-cardio';
        const durationText = workout.duration === 0 ? 'Temps libre' : workout.duration + ' min';
        const materialTags = workout.material.map(function(m) {
            return '<span class="tag tag-material">' + m + '</span>';
        }).join('');
        const btnHtml = workout.details
            ? '<button onclick="openModalCourse(' + workoutsCourse.indexOf(workout) + ')" class="btn-full">📋 Voir la séance</button>'
            : '<a href="' + workout.pdf + '" target="_blank" class="btn-full">Afficher la séance</a>';
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

function openModalCourse(index) {
    const w = workoutsCourse[index];
    const d = w.details;
    if (!d) return;
    document.getElementById('modal-title').textContent = w.title;
    const box = document.getElementById('modal-box');
    box.className = 'type-cardio';
    const durationText = w.duration === 0 ? 'Temps libre' : w.duration + ' min';
    const levelClass = 'modal-badge-level-' + w.level.toLowerCase();
    const matList = w.material.join(', ');
    document.getElementById('modal-badges').innerHTML =
        '<span class="modal-badge modal-badge-type">' + w.type + '</span>' +
        '<span class="modal-badge modal-badge-body">' + w.body + '</span>' +
        '<span class="modal-badge modal-badge-time">⏱ ' + durationText + '</span>' +
        '<span class="modal-badge modal-badge-mat">🏃 ' + matList + '</span>' +
        '<span class="modal-badge ' + levelClass + '">' + w.level + '</span>';

    // Cas spécial Run Tempo
    if (d.type_special === 'run_tempo') {
        let html = '<p class="modal-format-label">' + d.format_label + '</p>';
        html += '<div class="run-tempo-selector"><p class="modal-section-title">Choisir votre niveau</p>';
        html += '<div class="niveau-buttons">';
        for (var i = 1; i <= 12; i++) {
            var activeClass = i === 1 ? ' active' : '';
            html += '<button class="btn-niveau' + activeClass + '" onclick="selectNiveauCourse(' + i + ')" id="btn-niveau-c-' + i + '">' + i + '</button>';
        }
        html += '</div></div><div id="run-tempo-phases-course"></div>';
        if (d.conseil) html += '<div class="modal-conseil"><strong>💡 Conseil</strong>' + d.conseil + '</div>';
        document.getElementById('modal-body').innerHTML = html;
        window._runTempoNiveauxCourse = d.niveaux;
        selectNiveauCourse(1);
        document.getElementById('modal-overlay').classList.add('open');
        document.body.style.overflow = 'hidden';
        return;
    }

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

function selectNiveauCourse(n) {
    var niveaux = window._runTempoNiveauxCourse;
    if (!niveaux) return;
    var niveau = niveaux.find(function(nv) { return nv.n === n; });
    if (!niveau) return;
    for (var i = 1; i <= 12; i++) {
        var btn = document.getElementById('btn-niveau-c-' + i);
        if (btn) btn.className = 'btn-niveau' + (i === n ? ' active' : '');
    }
    var phaseHtml = '<p class="modal-intro">Min 1-10 : Échauffement — course lente avec 3 accélérations de 30 sec</p>';
    phaseHtml += '<ul class="modal-exercises run-tempo-list">';
    niveau.phases.forEach(function(p) {
        var cls = p.type === 'effort' ? 'run-effort' : 'run-recup';
        var icon = p.type === 'effort' ? '🏃' : '😮‍💨';
        phaseHtml += '<li class="' + cls + '"><span class="run-min">Min ' + p.min + '</span><span class="run-speed">' + icon + ' ' + p.vitesse + '</span></li>';
    });
    phaseHtml += '</ul><p class="modal-intro" style="margin-top:10px">Min 33-40 : Récupération — course lente</p>';
    var container = document.getElementById('run-tempo-phases-course');
    if (container) container.innerHTML = phaseHtml;
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

window.addEventListener('DOMContentLoaded', function() {
    displayWorkoutsCourse();
    const overlay = document.getElementById('modal-overlay');
    if (overlay) overlay.addEventListener('click', function(e) { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });
    const btnClose = document.getElementById('modal-close');
    if (btnClose) btnClose.addEventListener('click', closeModal);
    const backButton = document.getElementById('backToTop');
    if (backButton) {
        window.onscroll = function() { backButton.style.display = (window.scrollY > 300) ? 'block' : 'none'; };
        backButton.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    }
});
