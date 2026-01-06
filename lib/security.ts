export function sanitizeUrl(url: string | undefined): string {
    if (!url) return "#";

    // Basic protection against javascript: protocols
    const sanitized = url.trim();
    if (sanitized.toLowerCase().startsWith("javascript:")) {
        return "#";
    }

    return sanitized;
}

export const EXTERNAL_LINK_PROPS = {
    target: "_blank",
    rel: "noopener noreferrer",
} as const;
