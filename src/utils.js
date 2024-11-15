
const allowedTypes = ["PEINTURE", "SCULPTURE", "DESSIN", "ACII_ART"];

export function artworkDataValidator(data) {
    return new Proxy(data, {
        set(target, property, value) {
            switch (property) {
                case 'title':
                case 'artist':
                    if (typeof value !== 'string' || value.trim() === '') {
                        throw new Error(`${property} doit être une chaîne non vide.`);
                    }
                    break;
                case 'type':
                    if (!allowedTypes.includes(value)) {
                        throw new Error(`type doit être parmi les valeurs autorisées : ${allowedTypes.join(', ')}`);
                    }
                    break;
                case 'year':
                    if (value !== undefined && (typeof value !== 'number' || value <= 0 || !Number.isInteger(value))) {
                        throw new Error(`year, s'il est défini, doit être un entier positif.`);
                    }
                    break;
                default:
                    break;
            }

            // Si la validation est réussie, on définit la valeur
            target[property] = value;
            return true;
        }
    });
}