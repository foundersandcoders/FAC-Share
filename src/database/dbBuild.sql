BEGIN;

DROP TABLE IF EXISTS resources CASCADE;

CREATE TABLE resources (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  keywords TEXT
);

INSERT INTO resources (title, url, keywords) VALUES ('Callback HELL', 'http://callbackhell.com/', 'callback, js'), ('Node.js Async Best Practices & Avoiding the Callback Hell', 'https://blog.risingstack.com/node-js-async-best-practices-avoiding-callback-hell-node-js-at-scale/', 'node, async, callback');

ALTER TABLE resources ADD COLUMN searchtext TSVECTOR;

UPDATE resources SET searchtext = to_tsvector('english', title || ' ' || keywords);

COMMIT;
