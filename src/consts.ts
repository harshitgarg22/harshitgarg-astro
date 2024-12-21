import type { Metadata, Site } from "@types";

export const SITE: Site = {
  TITLE: "Harshit Garg",
  DESCRIPTION: "Landing page for Harshit.",
  EMAIL: "hg1229@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_PUBLICATIONS_ON_HOMEPAGE: 3,
  SITEURL: 'https://harshitgarg.in' // Update here to link the RSS icon to your website rss
};

export const HIGHLIGHTAUTHOR = "Harshit Garg"

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "About Harshit.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const RESEARCH: Metadata = {
  TITLE: "Publications",
  DESCRIPTION:
    "A collection of my publications with links to paper, repositories and live demos.",
};

export const CV: Metadata = {
  TITLE: "CV",
  DESCRIPTION:
    "My cv",
};

export const TAGS: Metadata = {
  TITLE: "TAGS",
  DESCRIPTION:
    "blog tag filter",
};

export const ABOUT: Metadata = {
  TITLE: "ABOUT",
  DESCRIPTION:
    "A self-intro",
};