import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export interface Post {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

const BlogList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const token = "44ab308082b0784773ba9746b9828ebf62c5ae0649934bcf6ced96da340f9eb04e5fc11fc38371a535215b8fdf23403c4a768d8708490decb93440982fe5df0fc8b08b9ebb4b0f54cc4ca7087b2efd4ca9991c71993b9b6b0284b2409182c123edc18ee2232dc81a5f39bdcdc1dfa6486ec9f4959a90e43bd1c80ec98ea0b0d9"

  useEffect(() => {
    axios
        .get("https://uplifting-darling-2b497743a0.strapiapp.com/api/articles", {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => setPosts(res.data.data))
        .catch((err) => console.error(err));
  }, []);

  return (
    <section id="blogList" className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
           Minden amit az állatgyógyászatról tudni kell!
          </p>
        </div>
        <div className="space-y-6">
            {posts.map((post) => (
            <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="block p-6 bg-white rounded shadow hover:shadow-lg transition"
            >
                <h2 className="text-2xl font-semibold">{post.title}</h2>
            </Link>
            ))}
        </div>
        </div>
    </section>
  );
};

export default BlogList;
