export interface NewsItem {
    _id: string;
    heading: string;
    mainDescription: string;
    description1: string;
    description2: string;
    finalDescription: string;
    heroBanner: string;
    featureImage: string;
    subFeatureImage1: string;
    subFeatureImage2: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface Page {
    number: number;
    url: string;
}

export interface NewsResponse {
    news: NewsItem[];
    pages: Page[];
    nextPage: boolean;
    currentPage: number;
    previousPage: boolean;
}
