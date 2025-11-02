import { useEffect, useState } from 'react';
import { MetaTags } from '../components/blog/MetaTags';
import { Link } from '../components/blog/Link';
import { ArrowLeft, Calendar, Clock, Loader2 } from 'lucide-react';
import { WPPosts } from '../interfaces/WordpressInterfaces';
import { getReadTime } from '../components/blog/BlogReadTimeCalculator';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useCms } from '../context/CmsContext';


export function BlogDetail() {
    const [post, setPost] = useState<WPPosts | null>(null);
    const { slug } = useParams<{ slug: string }>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { posts } = useCms();

    const navigate = useNavigate();
    const location = useLocation();

    const from = (location.state as { from?: string })?.from || '/blog';
    console.log(from, location.state)


    useEffect(() => {
        async function fetchPost() {
            try {
                setLoading(true);

                const filteredPost = posts.filter(item => item.categories.includes(3) && item.slug === slug);

                if (error) throw error;

                if (!filteredPost) {
                    setError('Blog post not found');
                    return;
                }

                setPost(
                    Array.isArray(filteredPost) && filteredPost.length > 0
                        ? filteredPost[0]
                        : {} as WPPosts
                );
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load blog post');
            } finally {
                setLoading(false);
            }
        }

        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-600 text-lg">Bejegyzés betöltése...</p>
                </div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
                <div className="text-center max-w-md mx-auto px-4">
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6">
                        <p className="text-red-600 font-medium mb-2">Error</p>
                        <p className="text-red-500 text-sm">{error || 'Post not found'}</p>
                    </div>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Vissza a blogokhoz
                    </Link>
                </div>
            </div>
        );
    }

    const currentUrl = `${window.location.origin}/blog/${post.slug}`;

    return (
        <>
            <MetaTags
                title={post.title.rendered}
                description={post.excerpt.rendered}
                ogImage={post.featured_image_url}
                url={currentUrl}
            />

            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors duration-300 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                        Vissza a blogokhoz
                    </Link>

                    <header className="mb-12 animate-fadeIn">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            {post.title.rendered}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                            <div className="flex items-center gap-2">
                                {/*<User className="w-5 h-5 text-blue-600" />
                <span className="font-medium">{post.author}</span>*/}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-brandButton" />
                                <time dateTime={post.date_gmt}>
                                    {new Date(post.date_gmt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </time>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-brandButton" />
                                <span>{getReadTime(post.content.rendered)}</span>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-12 animate-scaleIn">
                            <img
                                src={post.featured_image_url}
                                alt={post.title.rendered}
                                className="w-full h-auto max-h-[600px] object-cover"
                            />
                        </div>
                    </header>

                    <div
                        className="prose prose-lg prose-gray max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8
              prose-img:mx-auto prose-img:max-w-full prose-img:h-auto
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700
              prose-strong:text-gray-900 prose-strong:font-semibold
              animate-fadeIn"
                        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                    />

                    <footer className="mt-16 pt-8 border-t border-gray-200">
                        <button onClick={() => navigate(from)}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-brandButton text-white rounded-xl hover:bg-brandButtonHover transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Vissza a blogokhoz
                        </button>
                    </footer>
                </article>
            </div>
        </>
    );
}
