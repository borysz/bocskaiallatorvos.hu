import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface MetaAttributes {
    title?: string;
    description?: string;
    canonical?: string;
    og_title?: string;
    og_description?: string;
    og_url?: string;
    og_image?: string;
    twitter_title?: string;
    twitter_description?: string;
    twitter_image?: string;
    robots?: string;
    schema?: any;
}

const apiUrl = import.meta.env.VITE_API_URL;

const MetaFetcher = () => {
    const location = useLocation();
    const [meta, setMeta] = useState<MetaAttributes>({});

    useEffect(() => {
        const fetchMeta = async () => {
            try {
                const slug = location.pathname.replace(/^\/+|\/+$/g, "") || "fooldal";
                const res = await fetch(
                    `${apiUrl}/pages?slug=${slug}&_embed`
                );
                const data = await res.json();
                if (Array.isArray(data) && data.length > 0) {
                    const page = data[0];
                    const ogImageUrl = page._embedded?.["wp:featuredmedia"]?.[0].source_url;
                    setMeta({
                        title: page.meta.meta_title[0],
                        description: page.meta.meta_description,
                        //canonical: headJson.canonical,
                        og_title: page.meta.meta_title,
                        og_description: page.meta.meta_descriptionn,
                        og_url: window.location.origin + location.pathname,
                        og_image: ogImageUrl,
                        twitter_title: page.meta.meta_title,
                        twitter_description: page.meta.meta_description,
                        twitter_image: ogImageUrl,
                        robots: 'index, follow',
                        //schema: headJson.schema,
                    });
                }
            } catch (err) {
                console.error("Meta fetch error:", err);
            }
        };
        fetchMeta();
    }, [location]);

    useEffect(() => {

        const setMetaTag = (attrName: "name" | "property", name: string, value: string) => {
            let selector = `meta[${attrName}="${name}"]`;
            let elem = document.querySelector(selector) as HTMLMetaElement | null;
            if (!elem) {
                elem = document.createElement("meta");
                elem.setAttribute(attrName, name);
                document.head.appendChild(elem);
            }
            elem.setAttribute("content", value);
        };

        if (meta.robots) {
            setMetaTag("name", "robots", meta.robots);
        }
        if (meta.title) document.title = meta.title;

        if (meta.description) {
            setMetaTag("name", "description", meta.description);
        }
        /*if (meta.canonical) {
            let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
            if (!link) {
                link = document.createElement('link');
                link.setAttribute('rel', 'canonical');
                document.head.appendChild(link);
            }
            link.setAttribute('href', meta.canonical);
        } */
        if (meta.og_title) {
            setMetaTag("property", "og:title", meta.og_title);
        }
        if (meta.og_description) {
            setMetaTag("property", "og:description", meta.og_description);
        }
        if (meta.og_url) {
            setMetaTag("property", "og:url", meta.og_url);
        }
        if (meta.og_image && meta.og_image.length > 0) {
            setMetaTag("property", "og:image", meta.og_image);
        }
        if (meta.twitter_title) {
            setMetaTag("property", "twitter:title", meta.twitter_title);
        }
        if (meta.twitter_description) {
            setMetaTag("property", "twitter:description", meta.twitter_description);
        }
        if (meta.twitter_image) {
            setMetaTag("property", "twitter:image", meta.twitter_image);
        }
    }, [meta]);

    return null;
};

export default MetaFetcher;
