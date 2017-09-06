BEGIN;

DROP TABLE IF EXISTS resources CASCADE;

CREATE TABLE resources (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  URL TEXT NOT NULL
);

INSERT INTO resources (title, URL) VALUES ('Callback HELL', 'http://callbackhell.com/'), ('Node.js Async Best Practices & Avoiding the Callback Hell', 'https://blog.risingstack.com/node-js-async-best-practices-avoiding-callback-hell-node-js-at-scale/');

COMMIT;
