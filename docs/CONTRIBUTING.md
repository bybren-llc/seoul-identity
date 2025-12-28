# Contributing to Your Screenplay

This guide explains how to work in your screenplay workspace, whether you're working solo or collaborating with editors, co-writers, or reviewers.

## Collaboration Roles

| Role | Responsibilities |
|------|------------------|
| **Writer** | Creates scenes, dialogue, action |
| **Co-Writer** | Contributes scenes, may own specific acts |
| **Editor** | Reviews structure, pacing, consistency |
| **Script Supervisor** | Validates format, continuity, standards |
| **Reviewer** | Approves PRs before merge |

## Branch Workflow

### For Major Changes
Create a branch for significant work:

```
draft/v2         - Major rewrites
scene/opening    - Specific scene work
revision/dialogue - Revision passes
```

### Quick Fixes
Small typos or formatting fixes can go directly to main.

## Pull Request Process

### 1. Create your branch
```
git checkout -b draft/v2
```

### 2. Write and validate
- Use `/check-format` to validate Fountain syntax
- Use `/check-continuity` for consistency
- Commit at logical checkpoints

### 3. Push and create PR
```
git push -u origin draft/v2
```
Then create a Pull Request on GitHub.

### 4. Request Review
Assign reviewers based on the type of change:

| Change Type | Suggested Reviewer |
|-------------|-------------------|
| New scenes | Editor, Co-Writer |
| Dialogue polish | Dialogue specialist |
| Structure changes | Story Editor |
| Format/continuity | Script Supervisor |
| Final draft | All stakeholders |

### 5. CI Validation
The following checks run automatically:
- Fountain syntax validation
- Markdown linting
- Spell check
- Workspace structure check

### 6. Address Feedback
- Reviewers comment directly on the PR
- Push additional commits to address notes
- Re-request review when ready

### 7. Merge when approved
Once checks pass and reviewers approve, merge to main.

## Working with Multiple Contributors

### Avoiding Conflicts
- **Communicate**: Let collaborators know which scenes you're working on
- **Small PRs**: Easier to review and less likely to conflict
- **Sync often**: Pull from main before starting new work

### Scene Ownership
For larger projects, consider assigning scene ownership:

```
Act One: Writer A
Act Two: Writer B
Act Three: Writer A
Polish Pass: Editor
```

### Review Etiquette
- **Be specific**: "Line 42 feels rushed" > "Pacing issues"
- **Suggest alternatives**: Offer solutions, not just problems
- **Respect the voice**: Maintain the writer's style
- **Use comments**: GitHub PR comments for discussion

## Commit Message Format

```
type(scope): description

Types:
- scene: New or modified scene
- dialogue: Dialogue changes
- action: Action/description changes
- structure: Story structure changes
- revision: Revision pass work
- notes: Notes, comments, documentation
- format: Formatting fixes
```

## Workspace Structure

Your workspace should maintain this structure:

```
your-screenplay/
├── screenplay.fountain     # Main screenplay (at root!)
├── CLAUDE.md              # AI assistant instructions
├── package.json           # Validation scripts
├── cspell.json           # Spell check config
│
├── source-materials/      # Original documents, research
├── exports/              # Generated PDFs, FDX files
├── templates/            # Beat sheets, character registry
├── scripts/              # Validation scripts
├── patterns/             # Story patterns, templates
└── docs/                 # Documentation
```

## Validation Commands

Before committing:

| Command | What it checks |
|---------|----------------|
| `/check-format` | Fountain syntax, scene headings |
| `/check-continuity` | Timeline, character, prop consistency |
| `npm run validate` | Full validation suite |

## Tips

- **Commit often**: Small, logical commits are easier to review
- **Use branches**: Keep main clean for stable drafts
- **Run validation**: Catch issues before pushing
- **Write good messages**: Future you will thank you
