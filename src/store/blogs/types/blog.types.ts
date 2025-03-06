export interface BlogDataTypes {
    Images: string[]; // Array of base64 strings
    bannerImage: string; // Base64 string for the banner image
    createdAt: string; // ISO date string
    description: string; // Description text
    futureImages: string; // Base64 string for future images
    htmlBody: string; // HTML content
    title: string; // Title text
    updatedAt: string; // ISO date string
    authorName?: string; // Author name
}


export interface BlogData {
    blog: BlogDataTypes[];
}

export interface PaginationParams {
    page: number;
    limit: number;
}


interface BlogPost {
    _id: string;
    htmlBody: string;
    description: string;
    bannerImage: string;
    futureImages: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

// Interface for pagination details
interface Page {
    number: number;
    url: string;
}

// Parent interface to encapsulate the full JSON structure
export interface BlogDataResponse {
    blog: BlogPost;
    pages: Page[];
    nextPage: boolean;
    currentPage: number;
    previousPage: boolean;
}
