var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-I-1",
  "level": "1",
  "url": "sec-I-1.html",
  "type": "Section",
  "number": "",
  "title": "<span class=\"process-math\">\\(\\S I.1\\text{:}\\)<\/span> Sets and Elements",
  "body": " : Sets and Elements  This week we covered the following topics:  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
