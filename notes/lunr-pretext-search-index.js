var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-I-1",
  "level": "1",
  "url": "sec-I-1.html",
  "type": "Worksheet",
  "number": "",
  "title": "Introduction and <span class=\"process-math\">\\(\\S I.1\\text{:}\\)<\/span> Sets and Elements",
  "body": " Introduction and : Sets and Elements    Why? Traditional Calculus vs. Math 156    Motivation: Sets and Elements    Definition: Set   A set is      The following exercises will introduce the important notation (i.e., symbols) used to to communicate sets, and the various ways we can build them.   Activity: Sets and Elements   The following are examples of sets. Use them to answer the questions.                                     Do you think any sets are the same? Explain your reasoning.      The following express TRUE statements. Write out what you think they mean using an English sentence.                            What questions or observations do you have about sets so far?        Activity: Set Builder Notation   For large or more complicated sets, it's not always convenient (or possible) to write out every element of the set as we did previously. To communicate these sets, we can use set builder notation . The following are examples of sets using set builder notation. Use them to answer the questions.                                It is true that . Write an English sentence that describes set builder notation for .      For , write out the sets explicitly, or describe what they are in more common language. Are any sets equal?      Determine if the following are TRUE or FALSE.                    Some Special Sets   The following are commonly used sets that have special notation:                           Practice: True or False?                                        "
},
{
  "id": "xr-why",
  "level": "2",
  "url": "sec-I-1.html#xr-why",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Why? Traditional Calculus vs. Math 156.",
  "body": " Why? Traditional Calculus vs. Math 156  "
},
{
  "id": "xr-motivation",
  "level": "2",
  "url": "sec-I-1.html#xr-motivation",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Motivation: Sets and Elements.",
  "body": " Motivation: Sets and Elements  "
},
{
  "id": "xr-def-set",
  "level": "2",
  "url": "sec-I-1.html#xr-def-set",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Definition: Set.",
  "body": " Definition: Set   A set is   "
},
{
  "id": "xr-act1",
  "level": "2",
  "url": "sec-I-1.html#xr-act1",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Activity: Sets and Elements.",
  "body": " Activity: Sets and Elements   The following are examples of sets. Use them to answer the questions.                                     Do you think any sets are the same? Explain your reasoning.      The following express TRUE statements. Write out what you think they mean using an English sentence.                            What questions or observations do you have about sets so far?    "
},
{
  "id": "sec-I-1-4-1",
  "level": "2",
  "url": "sec-I-1.html#sec-I-1-4-1",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Activity: Set Builder Notation.",
  "body": " Activity: Set Builder Notation   For large or more complicated sets, it's not always convenient (or possible) to write out every element of the set as we did previously. To communicate these sets, we can use set builder notation . The following are examples of sets using set builder notation. Use them to answer the questions.                                It is true that . Write an English sentence that describes set builder notation for .      For , write out the sets explicitly, or describe what they are in more common language. Are any sets equal?      Determine if the following are TRUE or FALSE.                "
},
{
  "id": "sec-I-1-5-1",
  "level": "2",
  "url": "sec-I-1.html#sec-I-1-5-1",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Some Special Sets.",
  "body": " Some Special Sets   The following are commonly used sets that have special notation:                         "
},
{
  "id": "sec-I-1-5-2",
  "level": "2",
  "url": "sec-I-1.html#sec-I-1-5-2",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "Practice: True or False?",
  "body": " Practice: True or False?                                      "
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
