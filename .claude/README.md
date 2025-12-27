# Screenwriting Claude Code Harness

A production-tested multi-agent workflow system for screenplay development using Fountain format.

## Quick Start

```bash
# Start a writing session
/start-scene opening coffee shop

# Check your work
/check-format
/check-continuity

# Track progress
/page-count
/scene-list

# Export when ready
/export-pdf
```

## Architecture

The harness operates as a **three-layer stack**:

### 1. Hooks (Automatic Guardrails)
- Format reminders before Fountain edits
- Commit message format enforcement
- Branch protection for main
- Session start/end notifications

### 2. Commands (User-Invoked Workflows)
16+ slash commands for common screenwriting tasks:

| Category | Commands |
|----------|----------|
| **Workflow** | `/start-scene`, `/end-session`, `/check-continuity`, `/check-format` |
| **Writing** | `/new-scene`, `/new-character`, `/format-dialogue`, `/add-transition`, `/add-note` |
| **Analysis** | `/analyze-structure`, `/analyze-character`, `/page-count`, `/scene-list` |
| **Export** | `/export-pdf`, `/export-fdx`, `/export-html`, `/export-all` |

### 3. Skills (Model-Invoked Expertise)
13 specialized skills automatically loaded when relevant:

**Core Syntax:**
- `fountain-syntax` - Complete syntax reference
- `scene-headings` - INT/EXT formatting
- `character-dialogue` - Names, extensions, dual dialogue
- `action-description` - Visual writing
- `transitions` - Scene transitions
- `title-page` - Metadata formatting

**Craft:**
- `story-structure` - Three-act, Save the Cat, Hero's Journey
- `character-arcs` - Character development
- `dialogue-craft` - Subtext, voice differentiation
- `scene-analysis` - Pacing and beats

**Production:**
- `format-export` - PDF, FDX, HTML conversion
- `page-estimation` - Runtime calculation
- `continuity-tracking` - Character, timeline, prop tracking

## The 11-Agent Team

| Agent | Role |
|-------|------|
| **Story Analyst** | Requirements → scene breakdown, beats |
| **Story Architect** | Structure, act breaks, narrative arc |
| **Dialogue Writer** | Character voices, subtext |
| **Scene Writer** | Action lines, visual storytelling |
| **Continuity Editor** | Timeline, character, prop consistency |
| **Script Supervisor** | Quality gate, format validation |
| **Standards Reviewer** | Industry compliance |
| **Scene Annotator** | Notes, synopses, sections |
| **Research Specialist** | Location, historical, technical accuracy |
| **Production Coordinator** | Export, format conversion |
| **Session Manager** | Workflow coordination, git integration |

## Fountain Format Reference

```fountain
Title:
    **Seoul Identity**
Credit: Written by
Author: Scott Graham

INT. COFFEE SHOP - DAY

SARAH CHEN (30s, sharp) enters.

SARAH
I need your help.

JOHN (O.S.)
With what?

Sarah turns toward the voice.

SARAH (CONT'D)
(hesitant)
Everything.

                                                      CUT TO:
```

## Git Workflow

### Branch Strategy
```
main
├── draft/v1
│   ├── scene/opening
│   └── revision/dialogue
└── draft/v2
```

### Commit Format
```
type(scope): description

Types: scene, dialogue, action, structure, revision, notes, format
```

## Getting Started

1. Review `SETUP.md` for configuration
2. Run `/start-scene` to begin writing
3. Use `/check-format` to validate
4. Use `/end-session` to complete work

For troubleshooting, see `TROUBLESHOOTING.md`.
