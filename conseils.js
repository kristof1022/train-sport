/* jshint esversion: 6 */

const conseils = [

    // --- EXEMPLE AVEC MODALE RICHE ---
    {
        title: "PARTAGE MOI",
        categorie: "Entraînement",
        tags: ["QR CODE"],
        desc: "QR CODE de l'appli",
        details: {
             contenu: [
                { type: "texte", texte: "<strong>partage le QR code à tous le monde</strong>" },
                
                { type: "separateur" },
                { type: "image", src: "images/qrcodeapp.png", alt: "QR CODE" },
                ]
         }
     },
    
    {
        title: "CROSSTRAINING — Lexique",
        categorie: "Entraînement",
        tags: ["crosstraining", "lexique", "matériel"],
        desc: "Deux fiches sur le crosstraining : un lexique matériels et entraînement / un guide des mouvements.",
        details: {
            contenu: [
                { type: "image", src: "docs/lexique_crossfit1.jpg", alt: "Lexique crosstraining 1" },
                { type: "image", src: "docs/lexique_crossfit2.jpg", alt: "Lexique crosstraining 2" }
            ]
        }
    },
    
    //{
    //    title: "CONCENTRIQUE / EXCENTRIQUE : Le cycle du mouvement",
    //    categorie: "Entraînement",
     //   tags: ["technique"],
    //    desc: "Deux phases dans le mouvement à identifier pour progresser.",
    //    details: {
    //         contenu: [
    //             { type: "texte", texte: "Dans presque chaque exercice de renforcement, le muscle passe par deux phases distinctes. Savoir les identifier et les manipuler est la clé pour progresser." },
    //             { type: "separateur" },
     //            { type: "texte", texte: "<strong style='font-size:1.1em; color:#000;'>📌 1-la phase concentrique :</strong>" },
    //             { type: "texte", texte: "• Pieds écartés à largeur d'épaules\n• Genoux dans l'axe des pieds\n• Dos droit, poitrine haute\n• Descendre jusqu'aux hanches sous les genoux" },
    //             { type: "image", src: "images/squat.jpg", alt: "Position du squat" },
    //             { type: "youtube", id: "VOTRE_ID_YOUTUBE" },
    //             { type: "video_locale", src: "videos/squat.mp4" }
    //         ]
    //     }
     //},
    
    {
        title: "ECHAUFFEMENT",
        categorie: "Entraînement",
        tags: ["technique"],
        desc: "A quoi ça sert?",
        details: {
             contenu: [
                { type: "texte", texte: "<strong>Pourquoi s'échauffer ?</strong>" },
                { type: "texte", texte: "L'échauffement est <em>indispensable</em> avant tout effort." },
                { type: "separateur" },
                 { type: "texte", texte: "<strong style='font-size:1.1em; color:#000;'>📌 Les 3 règles d'or :</strong>" },
                 { type: "separateur" },
                { type: "texte", texte: "• <strong>5 à 10 minutes</strong> minimum" },
                { type: "texte", texte: "• Progressif et <em>jamais statique</em>" },
                { type: "texte", texte: "• Spécifique à la séance du jour" },
            ]
         }
     },

    // --- EXEMPLE AVEC LIEN PDF ---
    // {
    //     title: "Mon conseil en PDF",
    //     categorie: "Nutrition",
    //     tags: ["nutrition", "récupération"],
    //     desc: "Description courte du conseil.",
    //     pdf: "docs/mon_conseil.pdf"
    // },

    // --- EXEMPLE MODALE COMPLÈTE (texte + image + vidéo) ---
    // {
    //     title: "Les bases du squat",
    //     categorie: "Technique",
    //     tags: ["technique", "jambes"],
    //     desc: "Apprendre le squat correctement pour éviter les blessures.",
    //     details: {
    //         contenu: [
    //             { type: "texte", texte: "Le squat est un mouvement fondamental du crosstraining. Voici les points clés à respecter :" },
    //             { type: "texte", texte: "• Pieds écartés à largeur d'épaules\n• Genoux dans l'axe des pieds\n• Dos droit, poitrine haute\n• Descendre jusqu'aux hanches sous les genoux" },
    //             { type: "image", src: "images/squat.jpg", alt: "Position du squat" },
    //             { type: "youtube", id: "VOTRE_ID_YOUTUBE" },
    //             { type: "video_locale", src: "videos/squat.mp4" }
    //         ]
    //     }
    // },

];

// Correspondance catégorie → couleur de carte
const categorieStyle = {
    "Lexique":      { cardClass: "card-muscu",    btnColor: "" },
    "Technique":    { cardClass: "card-for-time",  btnColor: "" },
    "Nutrition":    { cardClass: "card-hyrox",     btnColor: "" },
    "Récupération": { cardClass: "card-emom",      btnColor: "" },
    "Matériel":     { cardClass: "card-tabata",    btnColor: "" },
    "Programme":    { cardClass: "card-amrap",     btnColor: "" }
};

function displayConseils() {
    const grid = document.getElementById('conseils-grid');
    if (!grid) return;
    grid.innerHTML = '';

    conseils.forEach(function(conseil, index) {
        const style = categorieStyle[conseil.categorie] || { cardClass: "card-muscu" };
        const tagHtml = (conseil.tags || []).map(function(t) {
            return '<span class="tag tag-material">' + t + '</span>';
        }).join('');

        const btnHtml = conseil.details ?
            '<button onclick="openModalConseil(' + index + ')" class="btn-full">📖 Lire l\'article</button>' :
            '<a href="' + conseil.pdf + '" target="_blank" class="btn-full">📄 Ouvrir le PDF</a>';

        grid.innerHTML +=
            '<div class="card ' + style.cardClass + '">' +
            '<div>' +
            '<span class="tag tag-body">' + conseil.categorie + '</span>' +
            tagHtml +
            '<h3>' + conseil.title + '</h3>' +
            '<div class="card-desc">' + conseil.desc + '</div>' +
            '</div>' +
            '<div class="card-buttons">' + btnHtml + '</div>' +
            '</div>';
    });
}

function openModalConseil(index) {
    const c = conseils[index];
    const d = c.details;
    if (!d) return;

    // Titre
    document.getElementById('modal-title').textContent = c.title;

    // Style carte
    const style = categorieStyle[c.categorie] || { cardClass: "card-muscu" };
    const typeKey = style.cardClass.replace('card-', '');
    document.getElementById('modal-box').className = 'type-' + typeKey;

    // Badges
    const tagBadges = (c.tags || []).map(function(t) {
        return '<span class="modal-badge modal-badge-mat">' + t + '</span>';
    }).join('');
    document.getElementById('modal-badges').innerHTML =
        '<span class="modal-badge modal-badge-type">' + c.categorie + '</span>' +
        tagBadges;

    // Corps — blocs de contenu
    let html = '';
    (d.contenu || []).forEach(function(bloc) {

        if (bloc.type === 'texte') {
            // Texte : supporte les sauts de ligne avec \n
            var lignes = bloc.texte.split('\n');
            html += '<div class="conseil-texte">';
            lignes.forEach(function(ligne) {
                html += '<p>' + ligne + '</p>';
            });
            html += '</div>';
        }

        else if (bloc.type === 'image') {
            html += '<div class="conseil-media">' +
                    '<img src="' + bloc.src + '" alt="' + (bloc.alt || '') + '" ' +
                    'style="width:100%; border-radius:8px; margin-bottom:12px;">' +
                    '</div>';
        }

        else if (bloc.type === 'youtube') {
            html += '<div class="conseil-media">' +
                    '<iframe src="https://www.youtube.com/embed/' + bloc.id + '" ' +
                    'style="width:100%; aspect-ratio:16/9; border-radius:8px; border:none; margin-bottom:4px;" ' +
                    'allowfullscreen></iframe>' +
                    '<p style="font-size:0.78em; color:#999; text-align:center; margin-bottom:12px;">' +
                    '⚠️ Nécessite une connexion — ' +
                    '<a href="https://www.youtube.com/watch?v=' + bloc.id + '" target="_blank">ouvrir sur YouTube</a>' +
                    '</p></div>';
        }

        else if (bloc.type === 'video_locale') {
            html += '<div class="conseil-media">' +
                    '<video src="' + bloc.src + '" controls ' +
                    'style="width:100%; border-radius:8px; margin-bottom:12px;"></video>' +
                    '</div>';
        }

        else if (bloc.type === 'conseil') {
            html += '<div class="modal-conseil">' +
                    '<strong>💡 Conseil</strong>' + bloc.texte +
                    '</div>';
        }

        else if (bloc.type === 'separateur') {
            html += '<hr style="border:none; border-top:1px solid #eee; margin:14px 0;">';
        }

    });

    document.getElementById('modal-body').innerHTML = html;
    document.getElementById('modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
}

window.addEventListener('DOMContentLoaded', function() {
    displayConseils();
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
