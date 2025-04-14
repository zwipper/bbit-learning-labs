import Link from "next/link";
import { Article } from "@/utils/types";

interface NewsCardProps {
    article: Article;
}

function NewsCard({ article }: NewsCardProps) {
    return (
        <div className="news-card">
            {article.image_url && (
                <div className="news-image">
                    <img 
                        src={article.image_url} 
                        alt={article.title} 
                        className="w-full h-48 object-cover rounded-t"
                    />
                </div>
            )}
            <div className="news-info p-4">
                <h3 className="news-title font-bold text-lg mb-2">{article.title}</h3>
                <p className="news-excerpt line-clamp-3 text-gray-700">
                    {article.body}
                </p>
                <div className="flex justify-between items-center mt-3">
                    <span className="text-sm text-gray-500">
                        By {article.author} • {new Date(article.publish_date).toLocaleDateString()}
                    </span>
                    <Link href={article.url} className="read-more text-blue-600 hover:underline">
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;