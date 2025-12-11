export function formatRepo(repo) {
  return {
    link: repo.svn_url,
    updated: new Date(repo.updated_at).toLocaleDateString('en-US', {
      dateStyle: "short"
    }),
    name: repo.name,
    description: repo.description,
    license: repo.license.name,
    language: repo.language,
    languageBadge: `https://img.shields.io/badge/${repo.language}-000000?style=for-the-badge&logo=${repo.language.toLowerCase()}&logoColor=white`
  }
}