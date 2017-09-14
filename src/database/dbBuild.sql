BEGIN;

DROP TABLE IF EXISTS resources CASCADE;

CREATE TABLE resources (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  keywords TEXT
);

INSERT INTO resources (title, url, keywords) VALUES
('Callback HELL', 'callbackhell.com', 'callback, js'),
('Node.js Async Best Practices & Avoiding the Callback Hell', 'blog.risingstack.com/node-js-async-best-practices-avoiding-callback-hell-node-js-at-scale', 'node, async, callback'),
('Level up your user interviews: lessons from the master, Louis Theroux', 'blog.prototypr.io/what-ux-researchers-can-learn-from-louis-theroux-69db740d63ba', 'user, interviews'),
('An opinionated guide to writing developer resumes in 2017',
'medium.freecodecamp.org/how-to-write-a-good-resume-in-2017-b8ea9dfdd3b9', 'developer, guide, resume');

ALTER TABLE resources ADD COLUMN searchtext TSVECTOR;

UPDATE resources SET searchtext = to_tsvector('english', title || ' ' || keywords);

COMMIT;
