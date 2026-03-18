import React from 'react'
import config from '../../config/website'

const SEO = () => {
  const title = config.siteTitle
  const description = config.siteDescription
  const homeURL = config.siteUrl
  const image = `${homeURL}${config.siteLogo}`

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: homeURL,
    headline: config.siteHeadline,
    inLanguage: 'en',
    mainEntityOfPage: homeURL,
    description: config.siteDescription,
    name: config.siteTitle,
    author: { '@type': 'Person', name: config.author },
    copyrightHolder: { '@type': 'Person', name: config.author },
    creator: { '@type': 'Person', name: config.author },
    publisher: { '@type': 'Person', name: config.author },
    image: { '@type': 'ImageObject', url: image },
  }

  return (
    <>
      <html lang={config.siteLanguage} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.userTwitter || ''} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>
    </>
  )
}

export default SEO
