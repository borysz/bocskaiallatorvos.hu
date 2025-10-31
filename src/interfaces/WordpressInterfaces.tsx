export interface WPPage {
    menu_order: number;
    slug: string;
    title: { rendered: string };
    content: { rendered: string };
    meta?: {
        [key: string]: string[] | undefined;
    };
}

export interface WPMedia {
    slug: string;
    guid: { rendered: string };
    caption: { rendered: string };
}

export interface WPPosts {
    id: number;
    menu_order: number;
    slug: string;
    title: { rendered: string };
    excerpt: { rendered: string };
    content: { rendered: string };
    categories: number[];
    featured_image_url: string;
    date_gmt: string;          
    tag_names: string;   
}