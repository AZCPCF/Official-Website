import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { Search } from "lucide-react";

// Shadcn Imports
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

// --- MOCK DATA (Replace this with your MDX fetching logic) ---
type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: { name: string; avatar: string };
  category: string;
  image: string;
};

const MOCK_POSTS: BlogPost[] = [
  {
    slug: "future-of-mdx",
    title: "The Future of MDX in Web Development",
    excerpt: "Why content as code is becoming the standard for modern documentation and blogs.",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    author: { name: "Alex Dev", avatar: "https://github.com/shadcn.png" },
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "design-systems-101",
    title: "Building Scalable Design Systems",
    excerpt: "A deep dive into tokens, components, and maintaining consistency across apps.",
    date: "Oct 08, 2024",
    readTime: "8 min read",
    author: { name: "Sarah Design", avatar: "https://github.com/vercel.png" },
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "server-actions",
    title: "Mastering Next.js Server Actions",
    excerpt: "Forget API routes. Here is how to mutate data directly from your components.",
    date: "Sep 25, 2024",
    readTime: "6 min read",
    author: { name: "Alex Dev", avatar: "https://github.com/shadcn.png" },
    category: "Tutorial",
    image: "https://images.unsplash.com/photo-1607799275518-d58665d48862?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "css-tricks",
    title: "CSS Tricks You Should Know",
    excerpt: "Modern CSS features that will save you lines of JavaScript.",
    date: "Sep 20, 2024",
    readTime: "4 min read",
    author: { name: "Mike CSS", avatar: "" },
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=1000&auto=format&fit=crop",
  },
];
// -------------------------------------------------------------

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  // In a real app, fetch posts here: const posts = await getPosts();
  const posts = MOCK_POSTS;
  const [featuredPost, ...regularPosts] = posts;

  return (
    <main className="min-h-screen w-full bg-background pb-20 pt-10">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-muted-foreground">
              Insights, tutorials, and updates from the team.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search posts..." 
              className="pl-10 rounded-full bg-secondary/30 border-transparent focus-visible:bg-background focus-visible:border-primary transition-all"
            />
          </div>
        </div>

        {/* Featured Post (Big Card) */}
        {featuredPost && (
          <section className="mb-16">
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="grid gap-8 overflow-hidden rounded-[2rem] bg-secondary/20 border border-border p-6 md:grid-cols-2 md:p-10 transition-all hover:border-primary/50 hover:shadow-lg">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl md:aspect-auto">
                   {/* Replace img with <Image /> in production */}
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="default" className="rounded-full px-3 py-1">
                      {featuredPost.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold leading-tight group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground text-lg line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="mt-4 flex items-center gap-3 pt-4">
                    <Avatar className="h-10 w-10 border-2 border-background">
                      <AvatarImage src={featuredPost.author.avatar} />
                      <AvatarFallback>{featuredPost.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium">{featuredPost.author.name}</p>
                      <p className="text-muted-foreground">{featuredPost.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Regular Posts Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group h-full">
              <Card className="h-full flex flex-col overflow-hidden rounded-3xl border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50">
                {/* Image Area */}
                <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <CardHeader className="space-y-2 p-6">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="rounded-full font-normal text-primary bg-primary/10 hover:bg-primary/20">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>

                <CardContent className="px-6 pb-0 flex-grow">
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>

                <CardFooter className="p-6 pt-6 mt-auto">
                  <div className="flex items-center gap-3 w-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={post.author.avatar} />
                      <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col text-xs">
                       <span className="font-medium">{post.author.name}</span>
                       <span className="text-muted-foreground">{post.date}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-auto rounded-full group-hover:text-primary">
                      Read
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
        
        {/* Empty State Check */}
        {posts.length === 0 && (
           <div className="w-full text-center py-20 bg-secondary/20 rounded-3xl">
              <p className="text-muted-foreground">No posts found. Check back later!</p>
           </div>
        )}

      </div>
    </main>
  );
}