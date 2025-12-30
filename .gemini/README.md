# Screenwriting Gemini Agent Harness

This harness adapts the production-tested multi-agent workflow from the Claude Code Harness for use with the Gemini family of models. It provides a comprehensive framework for screenplay development using the Fountain format.

## How to Use This Harness

This directory contains the context and instructions that I, your Gemini agent, will use to assist you in writing your screenplay. By defining a set of agents, skills, and commands, it allows you to interact with me in a structured and powerful way, similar to the original Claude harness.

When you want me to perform a task, invoke one of the commands listed below (e.g., `/check-format`). I will use the corresponding file in `.gemini/commands/` to understand the workflow, the files in `.gemini/skills/` to access specialized knowledge, and the personas in `.gemini/agents/` to adopt the correct role for the task.

## Architecture

The harness operates on a three-part model:

### 1. Agents (Personas)
Located in `.gemini/agents/`, these files define the 11 expert personas I can adopt to assist you. When you need a specific type of analysis or writing, you can invoke an agent by name (e.g., "Acting as the Story Architect, analyze the structure...").

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

### 2. Skills (Knowledge Base)
Located in `.gemini/skills/`, these files are my knowledge base for various screenwriting domains. I will automatically reference these documents when a task requires specialized knowledge (e.g., using the `fountain-syntax` skill when validating format).

### 3. Commands (Workflows)
Located in `.gemini/commands/`, these files define the user-invoked slash commands. They provide me with a clear, step-by-step workflow for executing common screenwriting tasks.

---

## Agent Operating Procedures (Replacing Claude Hooks)

The original harness used a "hooks" system for automation. I will replicate the *intent* of these hooks by adhering to the following operating procedures:

*   **Branch Protection**: I will not execute a `git push` command directly to the `main` branch. I will remind you to use a feature branch.
*   **Git Branch Reminder**: Before starting significant new work, I will check the current branch. If you are on `main`, I will recommend creating a new branch according to the project's workflow (`docs/WORKFLOW.md`).
*   **Commit Message Format**: When creating a `git commit`, I will follow the convention `type(scope): description` and can provide the list of valid types upon request.
*   **Fountain Format Reminder**: Before I edit a `.fountain` file, I will remind you of the core formatting rules (scene headings, character names, etc.) to ensure consistency.
*   **Post-Edit Validation**: After editing a `.fountain` file, I will recommend running `/check-format` to validate the changes.

---

## Available Commands

| Category | Commands |
|----------|----------|
| **Workflow** | `/start-scene`, `/end-session`, `/check-continuity`, `/check-format` |
| **Writing** | `/new-scene`, `/new-character`, `/format-dialogue`, `/add-transition`, `/add-note` |
| **Analysis** | `/analyze-structure`, `/analyze-character`, `/page-count`, `/scene-list` |
| **Export** | `/export-pdf`, `/export-fdx`, `/export-html`, `/export-all` |

See the corresponding markdown file in the `.gemini/commands/` directory for details on how each command works.
