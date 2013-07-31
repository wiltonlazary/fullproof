// This file was autogenerated by calcdeps.py
goog.addDependency("../../../ydn-db-text/src/alltests.js", [], []);
goog.addDependency("../../../ydn-db-text/src/common-testutils.js", ['fullproof.tests'], ['fullproof.ScoreEntry']);
goog.addDependency("../../../ydn-db-text/src/crud.js", ['ydn.db.crud.Storage.text'], ['fullproof.ScoringEngine', 'ydn.db.crud.Storage']);
goog.addDependency("../../../ydn-db-text/src/resultsets.js", ['fullproof.ResultSet'], ['fullproof.ScoreEntry', 'ydn.db.KeyRange']);
goog.addDependency("../../../ydn-db-text/src/scoring-engine.js", ['fullproof.ScoringEngine'], ['fullproof.Analyzer', 'fullproof.ResultSet', 'ydn.db.schema.fulltext.Engine']);
goog.addDependency("../../../ydn-db-text/src/analyzer/analyzer.js", ['fullproof.Analyzer'], ['fullproof.ScoreEntry', 'fullproof.normalizer.Normalizer', 'fullproof.normalizer.english', 'goog.array', 'net.kornr.unicode']);
goog.addDependency("../../../ydn-db-text/src/analyzer/score-entry.js", ['fullproof.ScoreEntry'], ['ydn.db.schema.fulltext.Index']);
goog.addDependency("../../../ydn-db-text/src/config/text.js", [], ['ydn.db.crud.Storage.text']);
goog.addDependency("../../../ydn-db-text/src/normalizer/normalizer.js", ['fullproof.normalizer.Normalizer'], []);
goog.addDependency("../../../ydn-db-text/src/normalizer/stop-word-remover.js", ['fullproof.normalizer.StopWordRemover'], ['fullproof.normalizer.Normalizer']);
goog.addDependency("../../../ydn-db-text/src/normalizer/english/english.js", ['fullproof.normalizer.english'], ['fullproof.normalizer.StopWordRemover', 'fullproof.normalizer.english.Metaphone', 'fullproof.normalizer.english.PorterStemmer', 'fullproof.normalizer.english.stopwords']);
goog.addDependency("../../../ydn-db-text/src/normalizer/english/metaphone.js", ['fullproof.normalizer.english.Metaphone'], []);
goog.addDependency("../../../ydn-db-text/src/normalizer/english/porter-stemmer.js", ['fullproof.normalizer.english.PorterStemmer'], []);
goog.addDependency("../../../ydn-db-text/src/normalizer/english/stopword-remover.js", ['fullproof.normalizer.english.stopwords'], []);
goog.addDependency("../../../ydn-db-text/src/normalizer/french/simpleform.js", [], []);
goog.addDependency("../../../ydn-db-text/src/normalizer/french/stopword-remover.js", [], []);
goog.addDependency("../../../ydn-db-text/src/normalizer/unicode/categ_letters_numbers.js", [], []);
goog.addDependency("../../../ydn-db-text/src/normalizer/unicode/normalizer_lowercase.js", [], []);
goog.addDependency("../../../ydn-db-text/src/normalizer/unicode/normalizer_lowercase_nomark.js", [], []);
goog.addDependency("../../../ydn-db-text/src/normalizer/unicode/normalizers.js", ['fullproof.normalizer'], ['net.kornr.unicode']);
goog.addDependency("../../../ydn-db-text/src/normalizer/unicode/unicode.js", ['net.kornr.unicode'], ['goog.asserts']);
