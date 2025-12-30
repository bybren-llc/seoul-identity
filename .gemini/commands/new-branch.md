# /new-branch

Create a new working branch following the standard naming convention.

## Arguments

- `[type]` - Optional branch type (scene, revision, character, structure, fix, export)
- `[description]` - Optional branch description

## Workflow

### Step 1: Determine Branch Type

If no type provided, prompt user to select:

| Type | Use Case |
|------|----------|
| `scene` | Single scene work |
| `revision` | Full-script revision pass |
| `character` | Character-focused work |
| `structure` | Reorganization |
| `fix` | Targeted fixes |
| `export` | Export preparation |

### Step 2: Get Description

If no description provided, ask:
- What specific work will this branch contain?
- Generate kebab-case slug (2-5 words)

### Step 3: Validate Branch Name

Check that:
- Type is valid (one of the defined types)
- Description is kebab-case
- Description is 2-5 words
- No special characters except hyphens
- Branch doesn't already exist

### Step 4: Determine Parent Branch

1. Check current branch
2. If on `main`, suggest `draft/v{latest}` as parent
3. If on `draft/v{N}`, use as parent
4. Confirm with user

### Step 5: Create Branch

```bash
git checkout {parent-branch}
git pull origin {parent-branch}
git checkout -b {type}/{description}
```

### Step 6: Announce Creation

Output standard announcement:

```
[Branch Created] {type}/{description}
  From: {parent-branch}
  Purpose: {user-provided or generated description}
  Target: {parent-branch}
```

## Branch Naming Rules

```
type/kebab-case-description

Valid:
- scene/coffee-shop-confrontation
- revision/dialogue-pass
- character/protagonist-arc
- fix/continuity-act2

Invalid:
- my-changes (missing type)
- scene/TooLongDescriptionHere (wrong case)
- scene/a (too short)
```

## Success Criteria

- [ ] Branch type is valid
- [ ] Description follows kebab-case
- [ ] Branch created successfully
- [ ] Announcement output displayed
- [ ] Ready to work

## Example

```
User: /new-branch scene marketplace
Assistant: Creating branch for marketplace scene work...

Current branch: main
Suggested parent: main (no draft branches exist)

Creating: scene/marketplace-confrontation

[Branch Created] scene/marketplace-confrontation
  From: main
  Purpose: Write the marketplace confrontation scene
  Target: main

Ready to work on scene/marketplace-confrontation.
```
