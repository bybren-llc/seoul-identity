# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a screenwriting project for "Seoul Identity" by Scott Graham. The screenplay is written in Fountain format (.fountain), a plain-text markup language for screenwriting.

This repository uses a **multi-agent screenwriting harness** adapted from the WTFB Safe Agentic Workflow methodology.

## Quick Start Commands

### Workflow
```
/start-scene [description]  - Begin scene work with context
/end-session               - Complete session, commit progress
/check-format              - Validate Fountain syntax
/check-continuity          - Check consistency across script
```

### Writing
```
/new-scene [location]      - Add formatted scene heading
/new-character [name]      - Add character with tracking
/format-dialogue [name]    - Format dialogue block
/add-transition [type]     - Insert transition
/add-note [content]        - Add writer's note
```

### Analysis
```
/page-count                - Current page estimate
/scene-list                - List all scenes
/analyze-structure         - Structure analysis
/analyze-character [name]  - Character arc analysis
```

### Export
```
/export-pdf                - Generate industry-standard PDF
/export-fdx                - Generate Final Draft XML
/export-html               - Generate HTML preview
/export-all                - Generate all formats
```

## 11-Agent Team

| Agent | Responsibility |
|-------|---------------|
| **Story Analyst** | Beat breakdown, requirements decomposition |
| **Story Architect** | Three-act structure, narrative arc |
| **Dialogue Writer** | Character voice, subtext, polish |
| **Scene Writer** | Action lines, visual storytelling |
| **Continuity Editor** | Timeline, character, prop consistency |
| **Script Supervisor** | Quality gate, format validation |
| **Standards Reviewer** | Industry compliance |
| **Scene Annotator** | Notes, synopses, organization |
| **Research Specialist** | Location, historical, technical accuracy |
| **Production Coordinator** | Export, format conversion |
| **Session Manager** | Workflow coordination, git integration |

Reference agent profiles: `.claude/agents/`

## Fountain Format Reference

### Scene Headings
```fountain
INT. COFFEE SHOP - DAY
EXT. SEOUL STREET - NIGHT
INT./EXT. CAR (MOVING) - CONTINUOUS
```

### Character & Dialogue
```fountain
SARAH
(hesitant)
I don't know about this.

JOHN (V.O.)
Trust me.
```

### Extensions
- `(V.O.)` - Voice Over
- `(O.S.)` - Off Screen
- `(CONT'D)` - Continued
- `^` after name - Dual dialogue

### Action
Present tense, visual, economical paragraphs.

### Transitions
```fountain
CUT TO:
FADE OUT.
>SMASH CUT TO:
```

### Notes & Sections
```fountain
[[This is a note - hidden in output]]
# Act One
## Sequence 1
= Synopsis text here
```

Full syntax reference: `.claude/skills/fountain-syntax/SKILL.md`

## Repository Structure

```
src/                           Screenplay source files
├── seoul-identity.fountain    Main screenplay

source-materials/              Original source documents
├── SEOUL_IDENTITY_v3.pdf
└── SEOUL_IDENTITY_v3.docx

exports/                       Generated outputs
├── pdf/
├── fdx/
└── html/

.claude/
├── agents/        11 agent profiles
├── commands/      16+ slash commands
├── skills/        13 skill modules
├── hooks/         Workflow hooks
└── hooks-config.json

scripts/           Validation scripts
patterns/          Scene and story patterns
templates/         Screenplay templates
docs/              Documentation

.cspell/           Spell check configuration
```

## Validation

Run validation before commits:
```bash
npm run validate        # Full validation (fountain + md + spell)
npm run lint:fountain   # Fountain syntax only
npm run lint:md         # Markdown lint only
npm run lint:spell      # Spell check only
```

Pre-commit hooks run automatically on staged files.

## Git Workflow

See `docs/WORKFLOW.md` for complete branching and workflow documentation.

### Branch Taxonomy

| Type | Pattern | Use Case |
|------|---------|----------|
| Protected | `main` | Production-ready drafts only |
| Version | `draft/v{N}` | Major screenplay versions |
| Scene | `scene/{slug}` | Single scene work |
| Revision | `revision/{type}` | Full-script passes |
| Character | `character/{name}` | Character-focused work |
| Structure | `structure/{change}` | Reorganization |
| Fix | `fix/{issue}` | Targeted fixes |
| Export | `export/{format}` | Export preparation |

### Branch Creation (Agents)

When starting new work, create a branch and announce:

```
[Branch Created] scene/coffee-shop-confrontation
  From: draft/v2
  Purpose: Write the coffee shop confrontation scene
  Target: draft/v2
```

### Commit Format

```
type(scope): description

Types: scene, dialogue, action, structure, revision, notes, format, docs, chore
```

### Definition of Done

All branches require:
- `/check-format` passes
- `/check-continuity` passes
- Spell check passes
- Self-review completed

## Skills (Auto-Loaded)

**Core Syntax:** fountain-syntax, scene-headings, character-dialogue, action-description, transitions, title-page

**Craft:** story-structure, character-arcs, dialogue-craft, scene-analysis

**Production:** format-export, page-estimation, continuity-tracking

## VS Code Setup

The project recommends the British English spell checker extension for VS Code.

## Key Principles

1. **Pattern Discovery First**: Check `patterns/` before creating new approaches
2. **Continuity Tracking**: Maintain character, timeline, and prop consistency
3. **Format Validation**: Run `/check-format` before export
4. **Git Integration**: Commit at logical checkpoints
5. **Quality Gates**: Script Supervisor approval before delivery
