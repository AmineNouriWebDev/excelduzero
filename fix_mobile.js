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
    
    // Conteneur principal
    if (content.match(/p-6 bg-white/)) {
        content = content.replace(/p-6 bg-white/g, 'p-2 md:p-6 bg-white');
        changed = true;
    }
    if (content.match(/p-4 md:p-6 bg-white/)) {
        content = content.replace(/p-4 md:p-6 bg-white/g, 'p-2 md:p-6 bg-white');
        changed = true;
    }
    if (content.match(/p-4 bg-white/)) {
        content = content.replace(/p-4 bg-white/g, 'p-2 md:p-4 bg-white');
        changed = true;
    }
    
    // Header
    if (content.match(/px-8 py-12/)) {
        content = content.replace(/px-8 py-12/g, 'px-3 py-6 md:px-8 md:py-12');
        changed = true;
    }
    
    // Nav & Main
    if (content.match(/px-6 py-8/)) {
        content = content.replace(/px-6 py-8/g, 'px-2 py-4 md:px-6 md:py-8');
        changed = true;
    }
    
    // Sections & padding interne
    if (content.match(/\bp-8\b/)) {
        content = content.replace(/\bp-8\b/g, 'p-3 md:p-8');
        changed = true;
    }
    if (content.match(/\bp-6\b/) && !content.match(/md:p-6/)) {
        content = content.replace(/\bp-6\b/g, 'p-3 md:p-6');
        changed = true;
    }
    if (content.match(/\bp-5\b/)) {
        content = content.replace(/\bp-5\b/g, 'p-3 md:p-5');
        changed = true;
    }

    // Réduction globale des tailles de police (sans affecter le desktop qui utilise déjà md:)
    if (content.match(/\btext-4xl md:text-5xl\b/)) {
        content = content.replace(/\btext-4xl md:text-5xl\b/g, 'text-2xl md:text-5xl');
        changed = true;
    }
    // Pour text-3xl sans md:
    if (content.match(/(?<!md:)text-3xl/)) {
        content = content.replace(/(?<!md:)text-3xl/g, 'text-xl md:text-3xl');
        changed = true;
    }
    // Pour text-2xl sans md:
    if (content.match(/(?<!md:)text-2xl/)) {
        content = content.replace(/(?<!md:)text-2xl/g, 'text-lg md:text-2xl');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        changedCount++;
    }
});
console.log(`Modifié ${changedCount} fichiers pour l'optimisation mobile.`);
