import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import axios from "axios";

export interface CoverFormats {
    large?: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: string | null;
        size: number;
        width: number;
        height: number;
        sizeInBytes: number;
    };
    medium?: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: string | null;
        size: number;
        width: number;
        height: number;
        sizeInBytes: number;
    };
    small?: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: string | null;
        size: number;
        width: number;
        height: number;
        sizeInBytes: number;
    };
    thumbnail?: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: string | null;
        size: number;
        width: number;
        height: number;
        sizeInBytes: number;
    };
}

export interface Cover {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: CoverFormats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface Author {
    id: number;
    documentId: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface Category {
    id: number;
    documentId: string;
    name: string;
    slug: string;
    description: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface RichTextBlock {
    __component: "shared.rich-text";
    id: number;
    body: string;
}

export interface QuoteBlock {
    __component: "shared.quote";
    id: number;
    title: string;
    body: string;
}

export interface MediaBlock {
    __component: "shared.media";
    id: number;
}

export interface SliderBlock {
    __component: "shared.slider";
    id: number;
}

export type Block = RichTextBlock | QuoteBlock | MediaBlock | SliderBlock;

export interface Post {
    id: number;
    documentId: string;
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover?: Cover;
    author?: Author;
    category?: Category;
    blocks?: Block[];
}

export interface StrapiPostsResponse {
    data: Post[];
}

const BlogDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const token = "44ab308082b0784773ba9746b9828ebf62c5ae0649934bcf6ced96da340f9eb04e5fc11fc38371a535215b8fdf23403c4a768d8708490decb93440982fe5df0fc8b08b9ebb4b0f54cc4ca7087b2efd4ca9991c71993b9b6b0284b2409182c123edc18ee2232dc81a5f39bdcdc1dfa6486ec9f4959a90e43bd1c80ec98ea0b0d9"


    useEffect(() => {
        if (!slug) return;

        axios
            .get(`https://uplifting-darling-2b497743a0.strapiapp.com/api/articles?filters[slug][$eq]=${slug}&populate=*`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                if (res.data.data.length > 0) setPost(res.data.data[0]);
            })
            .catch((err) => console.error(err));
    }, [slug]);

    if (!post) return <p>Betöltés...</p>;

    return (
        <section id="blogITem" className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
            <div className="container mx-auto px-4 py-12">
                <Link to="/blog" className="text-teal-600 hover:underline mb-4 inline-block">
                    ← Vissza a listához
                </Link>
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1> 
                </div>
                <div className="space-y-6">
                    {post.blocks?.map((block) => {
                        switch (block.__component) {
                            case "shared.rich-text":
                                /*return <div key={block.id} dangerouslySetInnerHTML={{ __html: block.body }} className="mb-6" />;*/
                                return <ReactMarkdown>{block.body}</ReactMarkdown>;
                            /*case "shared.quote":
                                return (
                                    <blockquote key={block.id} className="border-l-4 border-teal-600 pl-4 italic mb-6">
                                        <p>{block.body}</p>
                                        <cite className="block mt-1 font-bold">{block.title}</cite>
                                    </blockquote>
                                );
                            case "shared.media":
                                return <div key={block.id} className="mb-6">[Media blokk – implementáld szükség szerint]</div>;
                            case "shared.slider":
                                return <div key={block.id} className="mb-6">[Slider blokk – implementáld szükség szerint]</div>;*/
                            default:
                                return null;
                        }
                    })}
                </div>
                {/*<div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.data }} />*/}
            </div>
        </section>
    );
};

export default BlogDetail;
