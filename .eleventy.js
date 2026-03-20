module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "source/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "source/css": "css" });
  eleventyConfig.addPassthroughCopy({ "source/script.js": "script.js" });
  eleventyConfig.addPassthroughCopy({ "source/data": "data"});

  return {
    dir: {
      input: "source",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "public",
    },
    passthroughFileCopy: true,
  };
};
