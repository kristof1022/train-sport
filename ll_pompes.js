/* jshint esversion: 6 */

const workoutsLL = [
    {
        title: "Séances Fractionné course",
        material: ["poids-corps"],
        body: "complet",
        duration: 0,
        type: "CARDIO",
        level: "Moyen",
        desc: "Séances de fractionné en course à pied pour s'améliorer au Luc Léger. Deux niveaux : débutant et confirmé.",
        details: {
            format_label: "FRACTIONNÉ COURSE À PIED",
            type_special: "fractionne",
            conseil: "S'échauffer en courant 10 minutes avant chaque séance. Alterner courses rapides et récupérations, sur piste (distances) ou en nature (temps d'effort)."
        }
    },
    {
        title: "Séance Pompes",
        material: ["poids-corps"],
        body: "haut",
        duration: 0,
        type: "MUSCU",
        level: "Facile",
        desc: "Programme progressif pour améliorer son nombre maximum de répétitions en pompes.",
        details: {
            format_label: "PROGRAMME POMPES PROGRESSIF",
            exercises: [
                { text: "1️⃣ Faire son maximum de pompes en une série" },
                { text: "2️⃣ Diviser ce résultat par 2 → c'est votre nombre de reps par série" },
                { text: "3️⃣ Réaliser 5 séries de (max ÷ 2) avec 1min30 à 2min de repos entre chaque" },
                { text: "4️⃣ Répéter 1 à 2 fois par jour" }
            ],
            intro: "La formule est simple :",
            exemple: {
                titre: "Exemple concret",
                texte: "Votre max est 26 pompes → vous faites 5 × 13. Pour progresser, ajoutez 1 rep sur la 1ère série d'abord, puis les suivantes progressivement :",
                series: ["13 13 13 13 13", "14 13 13 13 13", "14 14 13 13 13", "14 14 14 13 13", "…"]
            },
            gainage: [
                { text: "🧱 Gainage en appui sur les coudes" },
                { text: "🧱 Gainage en appui sur les mains" },
                { text: "🧱 Gainage de côté (gauche et droit)" },
                { text: "🧱 Gainage commando" }
            ],
            conseil: "Rien ne vous empêche d'ajouter des reps sur les genoux. Le gainage statique ou dynamique peut vous aider à vous tonifier en complément."
        }
    }
];

// Données fractionné
const fractionneSéances = {
    debutant: [
        { seance: "10 × 200m vite", recup: "100m de récupération" },
        { seance: "12 × 30 sec effort", recup: "30 sec de récupération" },
        { seance: "6 × 400m", recup: "200m de récupération" },
        { seance: "8 × 1 min effort", recup: "1 min de récupération" },
        { seance: "3 × 800m", recup: "400m de récupération" },
        { seance: "3 × 3 min effort", recup: "1 min 30 de récupération" },
        { seance: "3 × 1000m", recup: "400m de récupération" },
        { seance: "3 × 5 min effort", recup: "2 min 30 de récupération" },
        { seance: "2 × 2000m", recup: "600m de récupération" }
    ],
    confirme: [
        { seance: "2 × (8 × 200m)", recup: "r=40s, R=2min entre séries" },
        { seance: "2 × (10 × 30sec-30sec)", recup: "R=2min entre séries" },
        { seance: "10 × 400m", recup: "Récup = 1 min" },
        { seance: "10 × 1min30", recup: "Récup = 1 min" },
        { seance: "6 × 800m", recup: "R = 1 min 30" },
        { seance: "7 × 3 min", recup: "R = 1 min 30" },
        { seance: "5 × 1000m", recup: "R = 2 min" },
        { seance: "5 × 4 min", recup: "R = 2 min" },
        { seance: "3000m - 2000m - 1000m", recup: "R = 2 min 30" }
    ]
};

function displayWorkoutsLL() {
    const grid = document.getElementById('ll-grid');
    if (!grid) return;
    grid.innerHTML = '';
    workoutsLL.forEach(function(workout) {
        const typeClass = workout.type === 'CARDIO' ? 'card-cardio' : 'card-muscu';
        const durationText = workout.duration === 0 ? 'Temps libre' : workout.duration + ' min';
        const materialTags = workout.material.map(function(m) {
            return '<span class="tag tag-material">' + m + '</span>';
        }).join('');
        const btnHtml = workout.details
            ? '<button onclick="openModalLL(' + workoutsLL.indexOf(workout) + ')" class="btn-full">📋 Voir la séance</button>'
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

function openModalLL(index) {
    const w = workoutsLL[index];
    const d = w.details;
    if (!d) return;
    document.getElementById('modal-title').textContent = w.title;
    const box = document.getElementById('modal-box');
    box.className = w.type === 'CARDIO' ? 'type-cardio' : 'type-muscu';
    const durationText = w.duration === 0 ? 'Temps libre' : w.duration + ' min';
    const levelClass = 'modal-badge-level-' + w.level.toLowerCase();
    const matList = w.material.join(', ');
    document.getElementById('modal-badges').innerHTML =
        '<span class="modal-badge modal-badge-type">' + w.type + '</span>' +
        '<span class="modal-badge modal-badge-body">' + w.body + '</span>' +
        '<span class="modal-badge modal-badge-time">⏱ ' + durationText + '</span>' +
        '<span class="modal-badge modal-badge-mat">🏃 ' + matList + '</span>' +
        '<span class="modal-badge ' + levelClass + '">' + w.level + '</span>';

    // Cas spécial fractionné : tableau débutant / confirmé
    if (d.type_special === 'fractionne') {
        let html = '<p class="modal-format-label">' + d.format_label + '</p>';
        html += '<p class="modal-intro">🔥 S\'échauffer 10 minutes avant chaque séance.</p>';

        // Tableau débutant
        html += '<div class="modal-scaled" style="margin-bottom:12px">';
        html += '<p class="modal-section-title">🟢 Coureur Débutant</p>';
        html += '<ul class="modal-exercises">';
        fractionneSéances.debutant.forEach(function(s) {
            html += '<li><strong>' + s.seance + '</strong> — ' + s.recup + '</li>';
        });
        html += '</ul></div>';

        // Tableau confirmé
        html += '<div class="modal-scaled">';
        html += '<p class="modal-section-title">🔴 Coureur Confirmé (- de 40min au 10km)</p>';
        html += '<ul class="modal-exercises">';
        fractionneSéances.confirme.forEach(function(s) {
            html += '<li><strong>' + s.seance + '</strong> — ' + s.recup + '</li>';
        });
        html += '</ul></div>';

        if (d.conseil) html += '<div class="modal-conseil"><strong>💡 Conseil</strong>' + d.conseil + '</div>';
        document.getElementById('modal-body').innerHTML = html;
        document.getElementById('modal-overlay').classList.add('open');
        document.body.style.overflow = 'hidden';
        return;
    }

    // Cas spécial pompes
    let html = '<p class="modal-format-label">' + d.format_label + '</p>';
    if (d.intro) html += '<p class="modal-intro">' + d.intro + '</p>';
    html += '<ul class="modal-exercises">';
    d.exercises.forEach(function(ex) { html += '<li>' + ex.text + '</li>'; });
    html += '</ul>';

    // Exemple concret
    if (d.exemple) {
        html += '<div class="modal-scaled">';
        html += '<p class="modal-section-title">📊 ' + d.exemple.titre + '</p>';
        html += '<p class="modal-intro">' + d.exemple.texte + '</p>';
        html += '<ul class="modal-exercises">';
        d.exemple.series.forEach(function(s) { html += '<li style="font-family:monospace;letter-spacing:4px;font-weight:bold">' + s + '</li>'; });
        html += '</ul></div>';
    }

    // Gainage complémentaire
    if (d.gainage) {
        html += '<div class="modal-scaled">';
        html += '<p class="modal-section-title">Gainage complémentaire</p>';
        html += '<ul class="modal-exercises">';
        d.gainage.forEach(function(ex) { html += '<li>' + ex.text + '</li>'; });
        html += '</ul></div>';
    }

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
    displayWorkoutsLL();
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
