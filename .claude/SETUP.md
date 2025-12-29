# Harness Setup Guide

## Prerequisites

### Required
- Claude Code CLI installed
- Git initialized in project

### Recommended
- Node.js (for afterwriting CLI exports)
- afterwriting CLI: `npm install -g afterwriting`

## Initial Configuration

### 1. Verify Harness Structure
```
.claude/
├── README.md
├── SETUP.md
├── TROUBLESHOOTING.md
├── hooks-config.json
├── agents/        (11 agent profiles)
├── commands/      (16+ commands)
├── skills/        (13 skill directories)
└── hooks/         (shell scripts)
```

### 2. Configure Git
Ensure git is configured for the project:
```bash
git config user.name "Your Name"
git config user.email "your@email.com"
```

### 3. Set Up Screenplay File
Create or configure your main Fountain file with title page:
```fountain
Title:
    **Your Screenplay Title**
Credit: Written by
Author: Your Name
Draft date: [Date]
Contact: your@email.com
```

## Customization

### Modify Hooks
Edit `.claude/hooks-config.json` to:
- Add custom format reminders
- Adjust branch protection rules
- Customize session messages

### Add Custom Commands
Create new `.md` files in `.claude/commands/`:
```markdown
# /your-command

Description of what the command does.

## Arguments
- `[arg]` - Description

## Workflow
1. Step one
2. Step two

## Success Criteria
- [ ] Criterion one
```

### Extend Skills
Add new skill directories in `.claude/skills/`:
```
.claude/skills/your-skill/
└── SKILL.md
```

## Agent Configuration

### Invoking Agents
Agents are invoked through context. Reference agent profiles:
```
Acting as the Story Architect, analyze the structure...
Acting as the Dialogue Writer, polish the dialogue...
```

### Agent Profiles Location
All agent profiles in `.claude/agents/`:
- `story-analyst.md`
- `story-architect.md`
- `dialogue-writer.md`
- `scene-writer.md`
- `continuity-editor.md`
- `script-supervisor.md`
- `standards-reviewer.md`
- `scene-annotator.md`
- `research-specialist.md`
- `production-coordinator.md`
- `session-manager.md`

## Export Configuration

### afterwriting Installation
```bash
npm install -g afterwriting
```

### PDF Configuration
Create `pdf-config.json` for custom PDF settings:
```json
{
  "print_title_page": true,
  "scenes_numbers": "none",
  "print_notes": false
}
```

### Export Commands
- `/export-pdf` - Industry-standard PDF
- `/export-fdx` - Final Draft XML
- `/export-html` - Web preview
- `/export-all` - All formats

## Verification

### Test Harness Setup
```bash
# In Claude Code, run:
/page-count
/check-format
```

### Verify Commands Available
Start a session and observe the command list in session start message.

## Next Steps

1. Start with `/start-scene` for your first scene
2. Use `/check-format` regularly
3. Run `/end-session` to commit progress
4. See `TROUBLESHOOTING.md` for common issues
