# Screenwriting Gemini Agent Harness

This harness adapts the production-tested multi-agent workflow from the Claude Code Harness for use with Google's Gemini CLI. It provides a comprehensive framework for screenplay development using the Fountain format.

## How to Use This Harness

This directory contains the configuration and instructions for Gemini CLI to assist you in writing your screenplay. The harness uses **native Gemini CLI slash commands** (`.toml` files) for workflows, with agent profiles and skills loaded via the `GEMINI.md` context file.

### Invoking Commands

Commands are native Gemini CLI slash commands. Type them directly:

```
/check-format
/new-scene coffee shop morning
/analyze-character Jake
```

### Using Agents

Request a specific agent persona when you need specialized expertise:

```
Acting as the Story Architect, analyze the structure of Act Two.
```

## Architecture

The harness operates on a three-part model:

### 1. Commands (Slash Commands)

Located in `.gemini/commands/` as **TOML files**. These are native Gemini CLI custom commands that execute specific workflows.

**Format:**
```toml
description = "Brief description of the command"

prompt = """
Detailed instructions for Gemini to follow.
Use {{args}} for user arguments.
Use !{command} for shell execution.
Reference skills with @path/to/skill.md
"""
```

### 2. Agents (Personas)

Located in `.gemini/agents/`, these markdown files define the 11 expert personas. They are imported into `GEMINI.md` using the `@file.md` syntax and loaded automatically as context.

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

### 3. Skills (Knowledge Base)

Located in `.gemini/skills/`, these markdown files contain specialized screenwriting knowledge. They are imported via `GEMINI.md` and referenced in command prompts.

---

## Available Commands

| Category | Commands |
|----------|----------|
| **Workflow** | `/start-scene`, `/end-session`, `/check-continuity`, `/check-format`, `/new-branch` |
| **Writing** | `/new-scene`, `/new-character`, `/format-dialogue`, `/add-transition`, `/add-note` |
| **Analysis** | `/analyze-structure`, `/analyze-character`, `/page-count`, `/scene-list` |
| **Export** | `/export-pdf`, `/export-fdx`, `/export-html`, `/export-all` |

---

## Operating Procedures

These guidelines replace Claude's hook system:

- **Branch Protection**: Do not execute `git push` directly to `main`
- **Git Branch Reminder**: Before significant work, check branch and recommend creating one if on `main`
- **Commit Message Format**: Use `type(scope): description` convention
- **Fountain Format Reminder**: Validate format rules before editing `.fountain` files
- **Post-Edit Validation**: Recommend `/check-format` after screenplay edits

---

## File Structure

```
.gemini/
├── README.md              # This file
├── SETUP.md               # Configuration guide
├── TROUBLESHOOTING.md     # Problem-solving reference
│
├── agents/                # 11 agent profiles (.md)
│   ├── story-analyst.md
│   ├── story-architect.md
│   ├── dialogue-writer.md
│   └── ...
│
├── commands/              # 18 slash commands (.toml)
│   ├── check-format.toml
│   ├── new-scene.toml
│   ├── export-pdf.toml
│   └── ...
│
└── skills/                # 13 knowledge modules (.md)
    ├── fountain-syntax/SKILL.md
    ├── story-structure/SKILL.md
    └── ...
```

---

## Context Loading

The `GEMINI.md` file at the project root imports all agents and skills using Gemini CLI's `@file.md` syntax:

```markdown
## Agent Profiles
@.gemini/agents/story-analyst.md
@.gemini/agents/dialogue-writer.md
...

## Skills
@.gemini/skills/fountain-syntax/SKILL.md
...
```

This ensures all context is loaded when Gemini CLI starts.

---

## Further Documentation

- **SETUP.md** - Initial configuration and customization
- **TROUBLESHOOTING.md** - Common issues and solutions
- **docs/WORKFLOW.md** - Git branching and commit conventions
