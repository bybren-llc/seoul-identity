# Troubleshooting Guide

## Common Issues

### Commands Not Working

**Symptom:** Slash commands don't execute or aren't recognized.

**Solutions:**
1. Verify command files exist in `.claude/commands/`
2. Check file naming (should be `command-name.md`)
3. Ensure Claude Code is running in project directory
4. Restart Claude Code session

### Fountain Validation Errors

**Symptom:** `/check-format` reports errors.

**Common Issues:**

| Error | Cause | Fix |
|-------|-------|-----|
| Missing time of day | Scene heading incomplete | Add `- DAY` or `- NIGHT` |
| Invalid scene heading | Doesn't start with INT/EXT | Use proper prefix |
| Orphaned dialogue | Missing character name | Add character name above |
| Bad parenthetical | Not on own line | Move to own line |

**Example Fix:**
```fountain
// Wrong
INT. WAREHOUSE

// Right
INT. WAREHOUSE - NIGHT
```

### Export Failures

**Symptom:** `/export-pdf` or other exports fail.

**Solutions:**

1. **afterwriting not installed:**
   ```bash
   npm install -g afterwriting
   ```

2. **Fountain syntax errors:**
   ```
   /check-format
   ```
   Fix all errors before exporting.

3. **File permissions:**
   Ensure you have write permissions to output directory.

### Git Integration Issues

**Symptom:** Git-related hooks fail or error.

**Solutions:**

1. **Not a git repository:**
   ```bash
   git init
   ```

2. **No commits yet:**
   Make an initial commit before using git-related features.

3. **Branch protection triggered:**
   If blocked from pushing to main, create a feature branch:
   ```bash
   git checkout -b draft/v1
   ```

### Session State Issues

**Symptom:** Session doesn't remember context between messages.

**Solutions:**
1. Use `/start-scene` to establish context
2. Reference specific files when working
3. Use `/end-session` to properly close sessions

## Fountain Format Issues

### Scene Headings

**Problem:** Text accidentally becomes scene heading.

**Solution:** Escape with `!` prefix:
```fountain
!INTERNAL MEMO - DO NOT DISTRIBUTE
```

### Character Names

**Problem:** Character name not recognized.

**Solutions:**
1. Ensure blank line before character name
2. Use ALL CAPS
3. For mixed case, use `@` prefix: `@McCLANE`

### Dialogue

**Problem:** Dialogue formatting broken.

**Solutions:**
1. No blank line between character name and dialogue
2. Parentheticals on own lines
3. Use `^` for dual dialogue on second character

### Transitions

**Problem:** Transition not formatting correctly.

**Solutions:**
1. Must end with `TO:` or be forced with `>`
2. Must have blank line before
3. Use uppercase

## Agent-Related Issues

### Agent Not Responding Appropriately

**Symptom:** Agent responses don't match expected behavior.

**Solutions:**
1. Explicitly reference agent: "Acting as the Story Architect..."
2. Review agent profile in `.claude/agents/`
3. Provide clear context for what you need

### Wrong Agent for Task

**Solution:** Reference the correct agent explicitly:
- Structure questions → Story Architect
- Dialogue polish → Dialogue Writer
- Consistency checks → Continuity Editor
- Format validation → Script Supervisor

## Performance Issues

### Slow Response Times

**Solutions:**
1. Break large files into sections
2. Use specific file references rather than full screenplay
3. Run analysis commands separately

### Memory/Context Issues

**Solutions:**
1. Start fresh sessions for new major tasks
2. Use `/end-session` to reset cleanly
3. Reference specific scenes rather than entire screenplay

## Getting Help

### Check Documentation
1. `.claude/README.md` - Overview
2. `.claude/SETUP.md` - Configuration
3. Agent profiles in `.claude/agents/`
4. Skill references in `.claude/skills/`

### Report Issues
For harness bugs or feature requests:
1. Document the issue clearly
2. Include steps to reproduce
3. Note Claude Code version

### Reset Harness
If all else fails, re-copy harness files from source:
```bash
# Backup your work first!
cp screenplay.fountain screenplay.fountain.backup

# Re-initialize harness
# (copy fresh .claude/ directory)
```
