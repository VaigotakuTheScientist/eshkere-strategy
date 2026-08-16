# Eshkere Strategy repository guide

Read `docs/PROJECT.md` before proposing or making strategic or project changes. Read `docs/WEBSITE.md` before making website changes; it is authoritative for the V1 product scope.

- Treat this repository primarily as the user's persistent personal strategy and working context. A website is also an established project goal, but the strategy must not be reduced to the website.
- Within Eshkere Strategy, treat AI Safety as the ultimate objective and power as instrumental; do not project that objective onto the broader Eshkere concept.
- Treat Eshkere as a broader, evolving idea with possible future projects or an organization. Keep it distinct from Eshkere Strategy unless the user decides otherwise.
- Do not turn underspecified ideas into settled facts. Record uncertainty, alternatives, and open questions explicitly.
- Do not block operational work merely because a personal fact is unknown. When a decision is reversible, choose a conservative working default or range, label it as an estimate or hypothesis, and keep confirmed personal facts distinct. Ask only when authority, irreversibility, or material risk genuinely requires the user.
- Prioritize operational work using: **Current state → bottlenecks → strategies → opportunities → prioritization → next actions**. Do not expand the abstract Eshkere philosophy unless a missing assumption blocks progress.
- Keep `docs/PROJECT.md` concise and current whenever the user provides durable context or makes a strategic or project decision.
- Keep detailed financial inputs and calculations in `docs/FINANCES.md`, and opportunity, project, and application records in `docs/OPPORTUNITIES.md`.
- Distinguish confirmed context from working hypotheses and Codex suggestions.
- Distinguish `TBD`, zero, and costs paid directly by someone else. Do not score broad search clusters as though they were concrete opportunities.
- Treat all tracked content as public. The user has explicitly approved including useful personal operational data such as approximate financial ranges and opportunity or application details. Avoid unnecessary precision and use the ignored `private/` directory for anything the user wants kept private. Never commit credentials, financial-account data, identity documents or numbers, precise addresses, private medical records, or confidential information from other people.
- Preserve relevant user changes and avoid unrelated edits.
- Treat the website as a curated public interface to Eshkere Strategy, not a repository mirror or the homepage of broader Eshkere. Never publish strategy documents automatically; website content must be deliberately curated.
- Preserve the Eshkere Strategy / broader Eshkere distinction. Do not invent accomplishments, projects, metrics, or opportunity status, and do not expose information excluded by `docs/WEBSITE.md`.
- Maintain the V1 accessibility and static-site constraints. Do not add dependencies or features outside V1 without a demonstrated implementation necessity, and do not turn deferred non-goals into TODOs merely because they are listed.
- Keep frequently changing public operational content centralized in `web/src/data/site.ts`.
- Build, check, and locally verify website changes before committing them.
