const { BLOG_URL, CMS_URL } = process.env;

module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/blog',
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: '/blog/:path*',
        destination: `${BLOG_URL}/blog/:path*`,
      },
      {
        source: '/cms',
        destination: `${CMS_URL}/cms`,
      },
      {
        source: '/cms/:path*',
        destination: `${CMS_URL}/cms/:path*`,
      },
    ];
  },
};
