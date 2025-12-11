import { getBadge } from "./getBadge.js";

export function formatRepo(repo) {
  return {
    link: repo.svn_url,
    updated: new Date(repo.updated_at).toLocaleDateString('en-US', {
      dateStyle: "short"
    }),
    name: repo.name,
    description: repo.description,
    license: repo.license?.name ?? 'none',
    language: repo.language,
    languageBadge: getBadge(repo.language),
    topics: repo.topics ?? [],
  }
}