# AGENTS.md - Screenwriting Agent Team Reference

This document provides a quick reference for the 11-agent screenwriting team.

## Team Overview

The agent team is organized into four functional areas:

| Area | Agents |
|------|--------|
| **Story & Structure** | Story Analyst, Story Architect |
| **Writing** | Dialogue Writer, Scene Writer, Scene Annotator |
| **Quality & Continuity** | Continuity Editor, Script Supervisor, Standards Reviewer |
| **Research & Production** | Research Specialist, Production Coordinator, Session Manager |

## Agent Profiles

### Story Analyst

**File:** `.claude/agents/story-analyst.md`

**Primary Role:** Requirements decomposition specialist

**Responsibilities:**

- Break down story concepts into scene-by-scene breakdowns
- Identify narrative beats and turning points
- Map character arcs across the screenplay
- Create beat sheets from loglines or treatments

**Invoke for:**

- Initial story breakdown
- Beat sheet creation
- Scene purpose analysis
- Acceptance criteria for story elements

---

### Story Architect

**File:** `.claude/agents/story-architect.md`

**Primary Role:** Structural authority

**Responsibilities:**

- Define and validate three-act structure
- Place major plot points at proper page counts
- Balance storylines
- Validate structural paradigms

**Invoke for:**

- Structure analysis
- Act break validation
- Pacing assessment
- Narrative arc design

**Stop-the-Line Authority:** Can halt work for major structural problems.

---

### Dialogue Writer

**File:** `.claude/agents/dialogue-writer.md`

**Primary Role:** Voice specialist

**Responsibilities:**

- Create and maintain distinct character voices
- Layer subtext beneath surface meaning
- Polish dialogue for rhythm and speakability
- Handle exposition through conflict

**Invoke for:**

- Dialogue polish passes
- Voice differentiation
- Subtext development
- Exposition techniques

---

### Scene Writer

**File:** `.claude/agents/scene-writer.md`

**Primary Role:** Visual storytelling specialist

**Responsibilities:**

- Write clear, visual, economical action
- Create strong visual imagery
- Maintain proper pacing (1 page ≈ 1 minute)
- Construct scenes that enter late and leave early

**Invoke for:**

- Action/description writing
- Scene construction
- Visual storytelling
- Pacing adjustments

---

### Continuity Editor

**File:** `.claude/agents/continuity-editor.md`

**Primary Role:** Consistency guardian

**Responsibilities:**

- Track story chronology
- Verify character knowledge and location consistency
- Monitor prop and wardrobe continuity
- Validate timeline logic

**Invoke for:**

- Continuity checks
- Timeline validation
- Character tracking
- Prop and wardrobe tracking

---

### Script Supervisor

**File:** `.claude/agents/script-supervisor.md`

**Primary Role:** Quality gate controller

**Responsibilities:**

- Verify Fountain syntax throughout
- Ensure consistent formatting
- Proofread for errors
- Validate cross-references

**Invoke for:**

- Format validation
- Pre-export review
- Quality assurance
- Error checking

**Gate Authority:** Controls quality gate before export/delivery.

---

### Standards Reviewer

**File:** `.claude/agents/standards-reviewer.md`

**Primary Role:** Industry compliance specialist

**Responsibilities:**

- Verify industry-standard requirements
- Check page count for target market
- Validate title page and presentation
- Ensure submission readiness

**Invoke for:**

- Competition submission prep
- Industry format compliance
- Page count validation
- Professional presentation review

---

### Scene Annotator

**File:** `.claude/agents/scene-annotator.md`

**Primary Role:** Documentation specialist

**Responsibilities:**

- Manage script notes [[in brackets]]
- Create section headers for navigation
- Write scene synopses
- Manage boneyard (cut material)

**Invoke for:**

- Note organization
- Synopsis writing
- Script organization
- Archiving cut material

---

### Research Specialist

**File:** `.claude/agents/research-specialist.md`

**Primary Role:** Information authority

**Responsibilities:**

- Location research and accuracy
- Technical accuracy for professions
- Historical research and period details
- Cultural authenticity

**Invoke for:**

- Location briefs
- Technical accuracy checks
- Historical research
- Fact verification

---

### Production Coordinator

**File:** `.claude/agents/production-coordinator.md`

**Primary Role:** Delivery specialist

**Responsibilities:**

- Manage export to PDF, FDX, HTML
- Coordinate delivery workflow
- Maintain version control for deliveries
- Verify export quality

**Invoke for:**

- Export management
- Format conversion
- Delivery packaging
- Version management

---

### Session Manager

**File:** `.claude/agents/session-manager.md`

**Primary Role:** Workflow coordinator

**Responsibilities:**

- Initialize writing sessions
- Track session state and progress
- Manage git integration
- Route tasks to appropriate agents

**Invoke for:**

- Session management
- Git coordination
- Workflow orchestration
- Status tracking

---

## Agent Invocation

### Direct Invocation

```
Acting as the Story Architect, analyze the structure of Act Two...
```

### Task-Based Invocation

The system automatically engages relevant agents based on task type:

- Structure questions → Story Architect
- Dialogue work → Dialogue Writer
- Consistency checks → Continuity Editor
- Export → Production Coordinator

### Collaboration Patterns

**Story Development:**
Story Analyst → Story Architect → Scene Writer + Dialogue Writer

**Quality Review:**
Script Supervisor → Continuity Editor → Standards Reviewer

**Delivery:**
Script Supervisor → Standards Reviewer → Production Coordinator

## Key Principles

1. **Equal Voice:** All agents have equal weight in their domain
2. **Stop-the-Line:** Story Architect and Script Supervisor can halt work for critical issues
3. **Pattern Discovery:** Check existing patterns before creating new ones
4. **Evidence-Based:** All claims require verification
5. **Quality Gates:** Certain agents control gates that must be passed
