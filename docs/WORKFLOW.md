# Branching and Workflow Standard

A lightweight SAFe-style workflow for Fountain screenwriting projects. Works for both Claude Code agents and human collaborators.

## Branch Naming Taxonomy

### Protected Branches

| Branch | Purpose | Rules |
|--------|---------|-------|
| `main` | Production-ready drafts | Requires PR, no direct push |

### Version Branches

| Pattern | Purpose | Examples |
|---------|---------|----------|
| `draft/v{N}` | Major screenplay versions | `draft/v1`, `draft/v2` |
| `draft/v{N}-{qualifier}` | Named variants | `draft/v2-polish`, `draft/v1-studio` |

### Working Branches

| Pattern | Purpose | Examples |
|---------|---------|----------|
| `scene/{slug}` | Single scene or sequence | `scene/opening`, `scene/midpoint-reveal` |
| `revision/{type}` | Full-script revision pass | `revision/dialogue`, `revision/action` |
| `character/{name}` | Character-focused work | `character/protagonist-arc` |
| `structure/{change}` | Structural reorganization | `structure/reorder-act2` |
| `fix/{issue}` | Targeted fixes | `fix/continuity-sc15`, `fix/format` |
| `export/{format}` | Export preparation | `export/table-read`, `export/competition` |

### Naming Rules

```
type/kebab-case-description

- Type: One of the defined prefixes
- Description: 2-5 words, kebab-case
- No special characters except hyphens

Valid:   scene/coffee-shop-confrontation
Valid:   revision/dialogue-pass
Invalid: my-changes (missing type)
Invalid: scene/TooLongDescriptionHere (wrong case)
```

## Branch Lifecycle

### 1. Creation

```bash
# Ensure starting branch is current
git checkout main  # or draft/v{N}
git pull origin main

# Create working branch
git checkout -b {type}/{description}
```

**Agent Announcement Format:**
```
[Branch Created] {type}/{description}
  From: {parent-branch}
  Purpose: {1-sentence description}
  Target: {where PR will merge to}
```

### 2. Work Phase

```bash
# Make changes with atomic commits
git add {files}
git commit -m "{type}({scope}): {description}"

# Push periodically
git push -u origin {branch-name}

# Validate before completion
/check-format
/check-continuity
```

### 3. Pull Request

- Create PR to target branch (`draft/v{N}` or `main`)
- Fill PR template completely
- Ensure CI passes
- Request review if collaborative

### 4. Merge

- **Squash merge**: For `scene/*`, `fix/*`, `export/*` (clean history)
- **Regular merge**: For `revision/*`, `structure/*`, `character/*` (preserve history)

### 5. Cleanup

```bash
git branch -d {branch-name}
git push origin --delete {branch-name}
```

### Lifecycle Diagram

```
                    +-----------------+
                    |     main        |
                    +--------+--------+
                             |
                    +--------v--------+
                    |   draft/v{N}    |
                    +--------+--------+
                             |
        +--------------------+--------------------+
        |                    |                    |
+-------v-------+    +-------v-------+    +-------v-------+
| scene/{name}  |    | revision/{x}  |    | fix/{issue}   |
+-------+-------+    +-------+-------+    +-------+-------+
        |                    |                    |
        +--------------------+--------------------+
                             |
                    +--------v--------+
                    |   PR Review     |
                    +--------+--------+
                             |
                    +--------v--------+
                    |   draft/v{N}    |
                    +-----------------+
```

## Definition of Done

### All Branches (Required)

- [ ] `/check-format` passes - Fountain syntax valid
- [ ] `/check-continuity` passes - No consistency issues
- [ ] Spell check passes
- [ ] Self-review completed

### By Branch Type

| Branch Type | Additional Requirements |
|-------------|------------------------|
| `scene/*` | Scene has clear purpose (something changes) |
| `revision/*` | Full script impact assessed |
| `character/*` | Character voice consistent throughout |
| `structure/*` | Structure analysis run (`/analyze-structure`) |
| `fix/*` | Issue demonstrably fixed |
| `export/*` | Export generates successfully |
| `draft/*` to `main` | Full validation + Ready for external delivery |

## Decision Tree

```
What are you doing?
        |
   +----+----+----+
   |    |    |    |
Writing  Improving  Fixing  Exporting
   |         |        |        |
   v         v        v        v

Writing New Content:
- Single scene → scene/{slug}
- Multiple scenes → revision/{type}

Improving Existing:
- Character focus → character/{name}
- Structure focus → structure/{change}
- Dialogue/action polish → revision/{type}

Fixing Problems:
- Format issues → fix/format-{desc}
- Continuity issues → fix/continuity-{desc}

Preparing Export:
- Table read → export/table-read
- Competition → export/competition
- PDF delivery → export/final-pdf
```

### Quick Reference

| If you need to... | Use branch |
|-------------------|------------|
| Write a new scene | `scene/{scene-slug}` |
| Polish dialogue across script | `revision/dialogue` |
| Tighten a character's voice | `character/{name}` |
| Move scenes around | `structure/{description}` |
| Fix formatting errors | `fix/format-{description}` |
| Fix continuity issues | `fix/continuity-{description}` |
| Prepare for table read | `export/table-read` |
| Start new major draft | `draft/v{N}` |

## Commit Message Format

```
{type}({scope}): {description}

Types:
- scene: New scene content
- dialogue: Dialogue work
- action: Action/description work
- structure: Structural changes
- revision: Revision pass
- notes: Annotation updates
- format: Formatting fixes
- docs: Documentation
- chore: Maintenance

Examples:
scene(act1): add opening coffee shop sequence
dialogue(protagonist): polish voice in apartment scenes
revision(act2): tighten midpoint pacing
fix(continuity): correct timeline in scenes 15-18
docs: update workflow documentation
```

## For Claude Code Agents

### Branch Creation Protocol

When starting new work:

1. Check current branch (`git branch --show-current`)
2. If on `main` or `draft/v{N}`, create working branch
3. Announce branch creation using standard format
4. Proceed with work

### Standard Announcement

```
[Branch Created] scene/marketplace-confrontation
  From: draft/v2
  Purpose: Write the marketplace confrontation scene
  Target: draft/v2
```

### Commit Protocol

- Use atomic commits (one logical change per commit)
- Follow commit message format
- Include scope when applicable
- End with standard footer on significant commits

### PR Protocol

- Create PR when work is complete
- Use PR template
- Include test plan
- Wait for CI validation

## Portability

This workflow is designed to work with any Fountain screenwriting project:

1. Copy `docs/WORKFLOW.md` to new project
2. Update `.github/PULL_REQUEST_TEMPLATE.md` with DoD checklist
3. Add branch validation to CI workflow
4. Update project `CLAUDE.md` with workflow reference

No project-specific configuration required.
