const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.jsx')) results.push(file);
        }
    });
    return results;
}

const files = walk('./src/components/lecons');
let changedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    
    // Conteneur principal: 0 padding horizontal sur mobile
    if (content.match(/p-2 md:p-6 bg-white/)) {
        content = content.replace(/p-2 md:p-6 bg-white/g, 'px-0 py-2 md:p-6 bg-white w-full max-w-full overflow-hidden');
        changed = true;
    }
    
    // Header
    if (content.match(/px-3 py-6 md:px-8 md:py-12/)) {
        content = content.replace(/px-3 py-6 md:px-8 md:py-12/g, 'px-4 py-6 md:px-8 md:py-12 md:rounded-xl rounded-none');
        changed = true;
    }
    
    // Nav & Main (les seuls qui devraient avoir du padding texte)
    if (content.match(/px-2 py-4 md:px-6 md:py-8/)) {
        content = content.replace(/px-2 py-4 md:px-6 md:py-8/g, 'px-4 py-4 md:px-6 md:py-8 md:rounded-xl rounded-none w-full');
        changed = true;
    }

    // Sections individuelles: on enlève le padding massif et les border-radius sur mobile
    if (content.match(/p-3 md:p-8/)) {
        content = content.replace(/p-3 md:p-8/g, 'px-4 py-6 md:p-8 md:rounded-xl rounded-none');
        changed = true;
    }
    if (content.match(/p-3 md:p-6/)) {
        content = content.replace(/p-3 md:p-6/g, 'px-4 py-4 md:p-6 md:rounded-lg rounded-none');
        changed = true;
    }
    if (content.match(/p-3 md:p-5/)) {
        content = content.replace(/p-3 md:p-5/g, 'px-4 py-4 md:p-5 md:rounded-xl rounded-none');
        changed = true;
    }
    if (content.match(/p-2 md:p-4 bg-white/)) {
        content = content.replace(/p-2 md:p-4 bg-white/g, 'px-4 py-3 md:p-4 bg-white');
        changed = true;
    }

    // Réduction globale des tailles de police (sans affecter le desktop qui utilise déjà md:)
    if (content.match(/\btext-2xl md:text-5xl\b/)) {
        content = content.replace(/\btext-2xl md:text-5xl\b/g, 'text-xl md:text-5xl');
        changed = true;
    }
    // Pour text-xl md:text-3xl
    if (content.match(/\btext-xl md:text-3xl\b/)) {
        content = content.replace(/\btext-xl md:text-3xl\b/g, 'text-lg md:text-3xl');
        changed = true;
    }
    // Pour text-lg md:text-2xl
    if (content.match(/\btext-lg md:text-2xl\b/)) {
        content = content.replace(/\btext-lg md:text-2xl\b/g, 'text-base md:text-2xl');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        changedCount++;
    }
});
console.log(`Modifié ${changedCount} fichiers pour supprimer les espaces vides inutiles et la taille de police.`);
