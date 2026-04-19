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
                { type: "texte", texte: "<strong>partage le QR code à tout le monde</strong>" },
                
                { type: "separateur" },
                { type: "image", src: "images/qrcodeTHT.png", alt: "QR CODE" },
                ]
         }
     },
    
    {
        title: "MODE D'EMPLOI",
        categorie: "Entraînement",
        tags: ["PDF"],
        desc: "Comment utiliser l'appli",
        pdf: "docs/modedemploi.pdf"
         
     },
    
    {
        title: "CONTACT",
        categorie: "Entraînement",
        tags: ["CONTACT"],
        desc: "votre avis m'intéresse",
        details: {
             contenu: [
                { type: "texte", texte: "N'hésitez pas à m'écrire pour partager votre retour d'expérience sur le site : suggestion, ajout de séance d'entraînement... 🙂" },
                { type: "separateur" },
                { type: "email_contact", adresse: "totalhybridtraining@gmail.com", sujet: "Avis sur le site" },
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
                { type: "image", src: "docs/lexique_crosstraining1.jpg", alt: "Lexique crosstraining 1" },
                { type: "image", src: "docs/lexique_crosstraining2.jpg", alt: "Lexique crosstraining 2" }
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
    
    {
        title: "RAMEUR CONCEPT2 - le levier de réglage : DAMPER",
        categorie: "Entraînement",
        tags: ["technique"],
        desc: "Comment utiliser le DAMPER?",
        details: {
             contenu: [
                { type: "texte", texte: "<strong>Quel niveau de difficulté choisir et quel ressenti?</strong>" },
                 { type: "separateur" },
                { type: "texte", texte: "📌<em>DAMPER bas (1 à 3)</em> : Sensation légère et fluide. Idéal pour travailler la vitesse de réaction et le cardio pur. A utiliser pour l'échauffement." },
                { type: "texte", texte: "📌<em>DAMPER moyen (3 à 5)</em> : Réglage de référence pour les tests de performance (comme le 2000m). C'est le meilleur équilibre entre force et cardio." },
                 { type: "texte", texte: "📌<em>DAMPER haut (6 à 10)</em> : Sensation lourde. Impression de ramer dans de la mélasse ou avec un bateau très chargé. Contre-indiqué pour les longues séances. Plus exigeant pour les muscles, souvent plus lent pour le cardio car la cadence chute." },
                
            ]
         }
     },

    // ══════════════════════════════════════════════════════
    // LEXIQUE DES MOUVEMENTS
    // ══════════════════════════════════════════════════════
    {
        title: "LEXIQUE DES MOUVEMENTS",
        categorie: "Technique",
        tags: ["lexique", "mouvements", "muscles"],
        desc: "Description et muscles sollicités pour chaque mouvement. Recherche par nom ou muscle.",
        details: {
            type_special: "lexique",
            mouvements: [
                
                {
                    id: "burpee",
                    titre: "Burpee",
                    image: "images/mouvements/burpee.png",
                    explication: "Depuis la position debout : descendre au sol (pompe), se relever et sauter avec les bras levés.",
                    muscles: {
                        principaux:  ["Pectoraux", "Quadriceps", "Fessiers"],
                        secondaires: ["Triceps", "Deltoïdes", "Core", "Cardio"]
                    },
                    liens: [
                        
                    ]
                },
                
                {
                    id: "DC",
                    titre: "Dévellopé couché (Bench press)",
                    image: "images/mouvements/DC.png",
                    explication: "Allongé sur un banc, descendre la barre jusqu'à effleurer la poitrine puis pousser jusqu'à l'extension complète des bras, coudes légèrement rentrés.",
                    muscles: {
                        principaux:  ["Pectoraux"],
                        secondaires: ["Triceps", "Deltoïdes"]
                    },
                    liens: [
                        { type: "Mouvement similaire", id: "pompe" }
                    ]
                },
                
                {
                    id: "pompe",
                    titre: "Pompe (Push-up)",
                    image: "images/mouvements/pompe.png",
                    explication: "En appui sur les mains et les pieds, descendre la poitrine jusqu'au sol puis remonter en gardant le corps gainé.",
                    muscles: {
                        principaux:  ["Pectoraux", "Triceps"],
                        secondaires: ["Deltoïdes", "Core", "Rhomboïdes"]
                    },
                    liens: [
                        
                        { type: "Mouvement antagoniste", id: "traction" }
                    ]
                },
                
                {
                    id: "sit-up",
                    titre: "Sit-up",
                    image: "images/mouvements/SITUP.png",
                    explication: "Allongé sur le dos, genoux fléchis, monter le buste jusqu'à la position assise et toucher les chevilles avec les mains.",
                    muscles: {
                        principaux:  ["Abdominaux"],
                        secondaires: ["Fléchisseurs de hanche", "Core"]
                    },
                    liens: [
                        
                    ]
                },
                
                {
                    id: "squat",
                    titre: "Squat",
                    image: "images/mouvements/squat.png",
                    explication: "Pieds écartés à largeur d'épaules, descendre jusqu'aux hanches sous les genoux, dos droit, poitrine haute.",
                    muscles: {
                        principaux:  ["Quadriceps", "Fessiers"],
                        secondaires: ["Ischio-jambiers", "Mollets", "Core"]
                    },
                    liens: [
                        
                        
                    ]
                },
                
                {
                    id: "SDT",
                    titre: "Soulevé de terre (Deadlift)",
                    image: "images/mouvements/SDT.png",
                    explication: "Pieds écartés à largeur de hanches, barre au-dessus des pieds, dos droit et gainé, pousser le sol pour monter avec la barre le long des jambes jusqu'à l'extension complète.",
                    muscles: {
                        principaux:  ["Ischio-jambiers", "Fessiers", "Dorsaux"],
                        secondaires: ["Quadriceps", "Trapèzes", "Core", "Avant-bras"]
                    },
                    liens: [
                        
                        
                    ]
                },
                
                {
                    id: "thruster",
                    titre: "thruster",
                    image: "images/mouvements/thruster.png",
                    explication: "Pieds écartés à largeur de hanches, barre posé sur les clavicules, coude et avant bras à la perpendiculaire de la barre:<br>◾1:descendre sur une flexion de jambe, rentrer le nombril pour être bien stable, dos en position neutre <br>◾2:on évite en position basse d'arrondir le bas du dos. Si c'est le cas, moins descendre lors du mouvement suivant <br>◾3:remonter et utiliser la force de propulsion des jambes pour entamer le mouvement des bras vers le haut <br>◾4:développer pour amener la barre au dessus de votre tête bras tendus, ne pas cambrer. <br>◾Pendant le mouvement, les pieds restent bien campés au sol",
                    muscles: {
                        principaux:  ["Quadriceps", "Deltoïdes (Épaules)", "Fessiers", "Triceps"],
                        secondaires: ["Ischio-jambiers", "Sangle Abdominale et Érecteurs du Rachis", "Trapèzes", "Avant-bras", "Mollets"]
                    },
                    liens: [
                        
                        
                    ]
                },
                
                
                {
                    id: "traction",
                    titre: "Traction (Pull-up)",
                    image: "images/mouvements/traction.png",
                    explication: "Suspendu à une barre, tirer le corps vers le haut jusqu'à ce que le menton dépasse la barre.",
                    muscles: {
                        principaux:  ["Dorsaux", "Biceps"],
                        secondaires: ["Rhomboïdes", "Trapèzes", "Core"]
                    },
                    liens: [
                        { type: "Mouvement antagoniste", id: "pompe" }
                    ]
                },
                
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

    // Carte carnet d'entraînement muscu (toujours affichée en dernier)
    var hasData = false;
    try { hasData = Object.keys(JSON.parse(localStorage.getItem('muscu_carnet') || '{}')).length > 0; } catch(e) {}
    grid.innerHTML +=
        '<div class="card card-muscu">' +
        '<div>' +
        '<span class="tag tag-body">Musculation</span>' +
        '<span class="tag tag-material">CARNET</span>' +
        '<h3>📓 Mon carnet muscu</h3>' +
        '<div class="card-desc">' + (hasData ? "Consulter l'historique de vos séances : reps, poids, progression." : "Aucune séance enregistrée pour l'instant. Lancez une séance depuis \"Créer sa séance\".") + '</div>' +
        '</div>' +
        '<div class="card-buttons">' +
        '<button onclick="openCarnetMuscu()" class="btn-full">' + (hasData ? '📊 Voir mon carnet' : '📋 Carnet vide') + '</button>' +
        '</div>' +
        '</div>';
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

    // Cas spécial : LEXIQUE DES MOUVEMENTS
    if (d.type_special === 'lexique') {
        var htmlLex = '';
        htmlLex += '<div style="margin-bottom:14px;">';
        htmlLex += '<input type="text" id="lexique-search" placeholder="🔍 Rechercher un mouvement ou un muscle..." ';
        htmlLex += 'style="width:100%; padding:10px 14px; border-radius:8px; border:1px solid #ddd; font-size:0.95em; box-sizing:border-box;">';
        htmlLex += '</div>';
        htmlLex += '<div id="lexique-liste">';
        (d.mouvements || []).forEach(function(mv) {
            var princ = (mv.muscles.principaux || []).join(', ');
            var secon = (mv.muscles.secondaires || []).join(', ');
            var mvId  = mv.id ? 'lexique-mv-' + mv.id : '';
            htmlLex += '<div class="lexique-item"' + (mvId ? ' id="' + mvId + '"' : '') +
                       ' data-search="' + (mv.titre + ' ' + princ + ' ' + secon).toLowerCase() + '" ';
            htmlLex += 'style="border-bottom:1px solid #f0f0f0; padding:14px 0;">';
            htmlLex += '<h4 style="margin:0 0 8px; font-size:1em; color:#000;">' + mv.titre + '</h4>';
            if (mv.image) {
                htmlLex += '<img src="' + mv.image + '" alt="' + mv.titre + '" ';
                htmlLex += 'style="max-width:100%; max-height:350px; width:auto; height:auto; display:block; margin:0 auto 10px; border-radius:8px;" onerror="this.style.display=String.fromCharCode(110,111,110,101)">';
            }
            if (mv.youtube) {
                htmlLex += '<iframe src="https://www.youtube.com/embed/' + mv.youtube + '" ' +
                           'style="width:100%; aspect-ratio:16/9; border-radius:8px; border:none; margin-bottom:4px;" allowfullscreen></iframe>' +
                           '<p style="font-size:0.78em; color:#999; text-align:center; margin-bottom:10px;">⚠️ Nécessite une connexion — ' +
                           '<a href="https://www.youtube.com/watch?v=' + mv.youtube + '" target="_blank">ouvrir sur YouTube</a></p>';
            }
            if (mv.video) {
                htmlLex += '<video src="' + mv.video + '" controls ' +
                           'style="max-width:100%; max-height:350px; width:auto; display:block; margin:0 auto 10px; border-radius:8px;"></video>';
            }
            htmlLex += '<p style="font-size:0.9em; color:#444; margin:0 0 8px;">' + mv.explication + '</p>';
            // Badges muscles
            htmlLex += '<div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:8px;">';
            (mv.muscles.principaux || []).forEach(function(m) {
                htmlLex += '<span style="background:#fce4ec; color:#c62828; border-radius:12px; padding:3px 10px; font-size:0.78em; font-weight:700;">💪 ' + m + '</span>';
            });
            (mv.muscles.secondaires || []).forEach(function(m) {
                htmlLex += '<span style="background:#e8f5e9; color:#2e7d32; border-radius:12px; padding:3px 10px; font-size:0.78em; font-weight:700;">+ ' + m + '</span>';
            });
            htmlLex += '</div>';
            // Liens vers mouvements associés
            if (mv.liens && mv.liens.length > 0) {
                htmlLex += '<div style="margin-top:6px; font-size:0.82em; color:#666;">';
                mv.liens.forEach(function(lien) {
                    var targetId = 'lexique-mv-' + lien.id;
                    var label = lien.id.replace(/-/g, ' ');
                    htmlLex += '<span style="margin-right:10px;">🔗 <em>' + lien.type + ' :</em> ' +
                               '<a href="#" onclick="scrollToMouvement(&quot;' + targetId + '&quot;); return false;" ' +
                               'style="color:#1a237e; font-weight:700; text-decoration:none;">' +
                               label + '</a></span>';
                });
                htmlLex += '</div>';
            }
            htmlLex += '</div>';
        });
        htmlLex += '</div>';
        document.getElementById('modal-body').innerHTML = htmlLex;
        document.getElementById('modal-overlay').classList.add('open');
        document.body.style.overflow = 'hidden';
        // Activer la recherche + scroll listener
        setTimeout(function() {
            var input = document.getElementById('lexique-search');
            if (input) {
                input.addEventListener('input', function() {
                    var q = this.value.toLowerCase().trim();
                    document.querySelectorAll('.lexique-item').forEach(function(item) {
                        item.style.display = (!q || item.dataset.search.includes(q)) ? 'block' : 'none';
                    });
                });
            }

        }, 100);
        return;
    }

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
            html += '<div class="conseil-media" style="text-align:center;">' +
                    '<img src="' + bloc.src + '" alt="' + (bloc.alt || '') + '" ' +
                    'style="max-width:100%; max-height:420px; width:auto; height:auto; border-radius:8px; margin-bottom:12px; display:inline-block;">' +
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

        else if (bloc.type === 'lien') {
            html += '<div style="text-align:center; margin:12px 0;">' +
                    '<a href="' + bloc.url + '" class="btn-full" style="display:inline-block;">' +
                    bloc.texte +
                    '</a></div>';
        }

        else if (bloc.type === 'email_contact') {
            var sujetEncode = encodeURIComponent(bloc.sujet || '');
            var gmailUrl = 'https://mail.google.com/mail/?view=cm&to=' + bloc.adresse + '&su=' + sujetEncode;
            html += '<div style="text-align:center; margin:16px 0;">' +
                    '<div style="background:#f0f0f0; border-radius:8px; padding:10px 16px; display:inline-block; margin-bottom:14px;">' +
                    '<span style="font-size:0.82em; color:#666; display:block; margin-bottom:4px;">Adresse email</span>' +
                    '<span style="font-weight:700; color:#222; font-size:1em; user-select:all;">' + bloc.adresse + '</span>' +
                    '</div>' +
                    '<br>' +
                    '<a href="' + gmailUrl + '" target="_blank" class="btn-full" style="display:inline-block;">' +
                    '📧 Ouvrir dans Gmail' +
                    '</a>' +
                    '</div>';
        }

    });

    document.getElementById('modal-body').innerHTML = html;
    document.getElementById('modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function scrollToMouvement(targetId) {
    var target = document.getElementById(targetId);
    if (target) {
        // Effacer la recherche pour que le mouvement cible soit visible
        var input = document.getElementById('lexique-search');
        if (input) {
            input.value = '';
            document.querySelectorAll('.lexique-item').forEach(function(item){ item.style.display='block'; });
        }
        // Highlight temporaire
        target.style.background = '#fffde7';
        target.style.borderRadius = '8px';
        setTimeout(function(){ target.style.background = ''; target.style.borderRadius = ''; }, 1500);
        // scrollIntoView — fonctionne sur PC et smartphone
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function openCarnetMuscu() {
    var CARNET_KEY = 'muscu_carnet';
    var data = {};
    try { data = JSON.parse(localStorage.getItem(CARNET_KEY)) || {}; } catch(e) {}
    var keys = Object.keys(data);

    // Titre et badges
    document.getElementById('modal-title').textContent = 'Mon Carnet Muscu';
    document.getElementById('modal-box').className = 'type-muscu';
    document.getElementById('modal-badges').innerHTML =
        '<span class="modal-badge modal-badge-type">Musculation</span>' +
        '<span class="modal-badge modal-badge-mat">CARNET</span>';

    if (!keys.length) {
        document.getElementById('modal-body').innerHTML =
            '<div style="text-align:center;padding:30px;color:#999;">' +
            '<div style="font-size:2em;margin-bottom:12px;">📋</div>' +
            '<p>Aucune séance enregistrée.<br>Lance une séance muscu depuis <strong>Créer sa séance</strong> pour alimenter ton carnet.</p>' +
            '</div>';
        document.getElementById('modal-overlay').classList.add('open');
        document.body.style.overflow = 'hidden';
        return;
    }

    // Sélecteur de type de séance
    var html = '<div style="margin-bottom:16px;">';
    html += '<label style="font-size:0.8em;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#888;display:block;margin-bottom:6px;">Type de séance</label>';
    html += '<select id="carnet-type-select" style="width:100%;padding:10px;border-radius:8px;border:1px solid #ddd;font-size:0.95em;background:#fff;" onchange="renderCarnetDetail()">';
    keys.forEach(function(nom) {
        html += '<option value="' + nom.replace(/"/g, '&quot;') + '">' + nom + ' (' + data[nom].length + ' séance' + (data[nom].length > 1 ? 's' : '') + ')</option>';
    });
    html += '</select></div>';
    html += '<div id="carnet-detail-content"></div>';

    document.getElementById('modal-body').innerHTML = html;
    document.getElementById('modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';

    // Stocker data pour renderCarnetDetail
    window._carnetData = data;
    setTimeout(renderCarnetDetail, 50);
}

function renderCarnetDetail() {
    var sel = document.getElementById('carnet-type-select');
    if (!sel || !window._carnetData) return;
    var nom = sel.value;
    var seances = window._carnetData[nom] || [];
    var container = document.getElementById('carnet-detail-content');
    if (!container) return;

    var html = '';
    seances.forEach(function(seance, si) {
        var prev = seances[si + 1] || null; // séance précédente
        html += '<div style="background:#f8f8f8;border-radius:10px;padding:14px;margin-bottom:14px;border:1px solid #eee;">';
        // En-tête séance
        html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:6px;">';
        html += '<div>';
        html += '<div style="font-weight:800;font-size:0.95em;color:#000;">' + (si === 0 ? '⭐ Dernière séance' : 'Séance #' + (si + 1)) + '</div>';
        html += '<div style="font-size:0.78em;color:#888;margin-top:2px;">📅 ' + seance.date + ' &nbsp;⏱ ' + seance.duree + '</div>';
        html += '</div>';
        if (si === 0 && seances.length > 1) {
            html += '<div style="font-size:0.72em;background:#e8f5e9;color:#2e7d32;padding:3px 8px;border-radius:10px;font-weight:700;">vs précédente ▼</div>';
        }
        html += '</div>';

        // Exercices
        seance.resultats.forEach(function(exo) {
            // Trouver cet exo dans la séance précédente
            var prevExo = null;
            if (prev) {
                for (var pi = 0; pi < prev.resultats.length; pi++) {
                    if (prev.resultats[pi].nom === exo.nom) { prevExo = prev.resultats[pi]; break; }
                }
            }

            html += '<div style="margin-bottom:10px;">';
            html += '<div style="font-size:0.85em;font-weight:700;color:#1a237e;margin-bottom:4px;">💪 ' + exo.nom + '</div>';

            // Tableau des séries
            html += '<table style="width:100%;border-collapse:collapse;font-size:0.8em;">';
            html += '<tr style="background:#e8eaf6;"><th style="padding:4px 8px;text-align:left;">Série</th><th style="padding:4px 8px;text-align:center;">Reps</th><th style="padding:4px 8px;text-align:center;">Poids</th>' + (prevExo ? '<th style="padding:4px 8px;text-align:center;">Progression</th>' : '') + '</tr>';

            exo.series.forEach(function(serie, idx) {
                var prevSerie = prevExo ? (prevExo.series[idx] || null) : null;
                var progHtml = '';
                if (prevSerie) {
                    var diffReps  = serie.reps  - prevSerie.reps;
                    var diffPoids = serie.poids - prevSerie.poids;
                    var parts = [];
                    if (diffReps  > 0) parts.push('<span style="color:#2e7d32;">+' + diffReps  + ' reps</span>');
                    if (diffReps  < 0) parts.push('<span style="color:#c62828;">'  + diffReps  + ' reps</span>');
                    if (diffPoids > 0) parts.push('<span style="color:#2e7d32;">+' + diffPoids + 'kg</span>');
                    if (diffPoids < 0) parts.push('<span style="color:#c62828;">'  + diffPoids + 'kg</span>');
                    progHtml = parts.length ? parts.join(' ') : '<span style="color:#999;">＝</span>';
                }
                var bg = idx % 2 === 0 ? '#fff' : '#f9f9f9';
                html += '<tr style="background:' + bg + ';">';
                html += '<td style="padding:4px 8px;color:#666;">S' + (idx+1) + '</td>';
                html += '<td style="padding:4px 8px;text-align:center;font-weight:700;">' + serie.reps + '<span style="font-size:0.85em;color:#888;"> r</span></td>';
                html += '<td style="padding:4px 8px;text-align:center;font-weight:700;">' + (serie.poids > 0 ? serie.poids + '<span style="font-size:0.85em;color:#888;"> kg</span>' : '<span style="color:#bbb;">—</span>') + '</td>';
                if (prevExo) html += '<td style="padding:4px 8px;text-align:center;">' + progHtml + '</td>';
                html += '</tr>';
            });
            html += '</table></div>';
        });
        html += '</div>';
    });

    container.innerHTML = html;
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
    window._carnetData = null;
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
