import React, { createContext, useContext, useEffect, useState } from "react";

// ----- Típusok -----
interface WPPage {
    menu_order: number;
    slug: string;
    title: { rendered: string };
    content: { rendered: string };
}

interface WPMedia {
    slug: string;
    guid: { rendered: string };
    caption: { rendered: string };
}
interface CmsContextType {
    pages: WPPage[];
    media: WPMedia[];
    loading: boolean;
    error: string | null;
    refresh: () => void;
}

const CmsContext = createContext<CmsContextType | undefined>(undefined);

export const CmsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pages, setPages] = useState<WPPage[]>([]);
  const [media, setMedia] = useState<WPMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState(false); // 👈 új

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      try {
        const [pagesRes, mediaRes] = await Promise.all([
          fetch(`${apiUrl}/pages?_fields=menu_order,slug,title,content&orderby=menu_order&order=asc`),
          fetch(`${apiUrl}/media?_fields=slug,guid,caption`),
        ]);

        const [pagesData, mediaData] = await Promise.all([
          pagesRes.json(),
          mediaRes.json(),
        ]);

        if (!isMounted) return;

        setPages(pagesData);
        setMedia(mediaData);
        setError(null);
        setReady(true); // 👈 csak ha minden adat bejött
      } catch {
        if (isMounted) setError("Hiba történt az adatok lekérésekor.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [apiUrl]);

  // Skeleton betöltő komponens
  if (!ready || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-4xl space-y-6 p-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <CmsContext.Provider value={{ pages, media, loading, error, refresh: () => window.location.reload() }}>
      {children}
    </CmsContext.Provider>
  );
};

export const useCms = (): CmsContextType => {
  const context = useContext(CmsContext);
  if (!context) {
    throw new Error("useCms csak CmsProvider-en belül használható!");
  }
  return context;
};