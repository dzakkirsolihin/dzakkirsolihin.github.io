import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Dzakkir - Project Portfolio',
  description = 'Software Engineering Student passionate about crafting intuitive and user-friendly digital experiences.',
  keywords = 'software engineer, web developer, react developer, frontend developer, portfolio',
  ogImage = '/profile.png'
}) => {
  const siteUrl = window.location.origin;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Muhammad Dzakkir" />
      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
};

export default SEO;