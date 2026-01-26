module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addLiquidFilter("where_related", function (allPosts, related) {
    if (!related || !Array.isArray(related)) return [];
    return allPosts.filter(post => related.includes(post.fileSlug));
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
    pathPrefix: "/site/"
  };

};
