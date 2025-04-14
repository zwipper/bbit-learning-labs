import React from 'react';
import { Article } from '../utils/types';
import NewsCard from './NewsCard';

interface NewsFeedProps {
    articles: Article[];
}

function NewsFeed({ articles }: NewsFeedProps) {
    return (
        <div className="stories-container">
            <div className="stories-grid">
                {articles.map((article, index) => (
                    <NewsCard key={`article-${index}`} article={article} />
                ))}
                
                {/* Display a message if there are no articles */}
                {articles.length === 0 && (
                    <div className="col-span-full text-center py-8 text-gray-500">
                        No news articles available at the moment.
                    </div>
                )}
            </div>
        </div>
    );
}

export default NewsFeed;