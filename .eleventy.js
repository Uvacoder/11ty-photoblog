module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      layouts: "_includes"
    },
    passthroughFileCopy: true
  }; 
};
