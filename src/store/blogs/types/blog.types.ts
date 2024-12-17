export interface BlogDataTypes {
    Images: string[]; // Array of base64 strings
    bannerImage: string; // Base64 string for the banner image
    createdAt: string; // ISO date string
    description: string; // Description text
    futureImages: string; // Base64 string for future images
    htmlBody: string; // HTML content
    title: string; // Title text
    updatedAt: string; // ISO date string
}


export interface BlogData {
    blog: BlogDataTypes[];
}

export interface PaginationParams {
    page: number;
    limit: number;
}