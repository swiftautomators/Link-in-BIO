export function sanitizeUrl(url: string | undefined): string {
    if (!url) return "#";

    const sanitized = url.trim();
    
    // Extract scheme (text before first :)
    const schemeMatch = sanitized.match(/^([^:/?#]+):/);
    if (schemeMatch) {
        const scheme = schemeMatch[1].toLowerCase();
        const blacklist = ["javascript", "data", "vbscript", "file"];
        
        if (blacklist.includes(scheme)) {
            console.warn(`Blocked dangerous URL scheme: ${scheme}`);
            return "#";
        }
    }

    return sanitized;
}

export const EXTERNAL_LINK_PROPS = {
    target: "_blank",
    rel: "noopener noreferrer",
} as const;
