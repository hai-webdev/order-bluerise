// 多页配置
module.exports = {
  // 页面名称（对应 chunk 名）
  index: {
    js: "./src/pages/index", // 页面入口js
    html: "./src/pages/index/index.html", // 页面使用的html模板
    out: "index.html", // 输出目录中的页面文件名
  },
  productList: {
    js: "./src/pages/product_list",
    html: "./src/pages/product_list/index.html",
    out: "product_list.html",
  },
  newProduct: {
    js: "./src/pages/newProduct",
    html: "./src/pages/newProduct/index.html",
    out: "new_product.html",
  },
  productView: {
    js: "./src/pages/product_view",
    html: "./src/pages/product_view/index.html",
    out: "product_view.html",
  },
  story: {
    js: "./src/pages/story",
    html: "./src/pages/story/index.html",
    out: "story.html",
  },
  download: {
    js: "./src/pages/download",
    html: "./src/pages/download/index.html",
    out: "download.html",
  },
  about: {
    js: "./src/pages/about",
    html: "./src/pages/about/index.html",
    out: "about.html",
  },
  contact: {
    js: "./src/pages/contact",
    html: "./src/pages/contact/index.html",
    out: "contact.html",
  },
};
