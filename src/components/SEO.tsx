import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DEFAULT_SEO_CONFIG } from '../config/seo';
import type { SEOProps } from '../types/seo';

export const SEO: React.FC<SEOProps> = ({
  title = DEFAULT_SEO_CONFIG.title,
  description = DEFAULT_SEO_CONFIG.description,
  keywords = DEFAULT_SEO_CONFIG.keywords,
  image = DEFAULT_SEO_CONFIG.image,
  url = DEFAULT_SEO_CONFIG.url,
  type = DEFAULT_SEO_CONFIG.type,
  author = DEFAULT_SEO_CONFIG.author,
  twitterHandle = DEFAULT_SEO_CONFIG.twitterHandle,
}) => {
  const siteUrl = url.endsWith('/') ? url.slice(0, -1) : url;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Additional SEO */}
      <link rel="canonical" href={url} />
      
      {/* Additional Meta */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#10b981" /> {/* Emerald-500 for theme color */}
    </Helmet>
  );
};