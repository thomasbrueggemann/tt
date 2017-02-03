#!/usr/bin/env node

var thesaurus = require("thesaurus-com");
var dictcc = require("dictcc-js");

var args = process.argv;
var word = args[2];

dictcc.translate("en", "de", word, function(res, err) {
  console.log(res);
});

console.log(thesaurus.search(word));
