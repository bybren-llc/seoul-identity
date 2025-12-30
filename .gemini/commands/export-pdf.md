# /export-pdf

Generate a formatted PDF from the Fountain screenplay.

## Arguments
- `[output]` - Optional: Output filename (default: auto-generated)
- `[options]` - Optional: `draft`, `final`, `anonymous`

## Workflow

### Step 1: Pre-Export Validation
Run format validation:
- Check Fountain syntax
- Verify title page
- Confirm no blocking errors

### Step 2: Prepare Export
Determine settings:
- Title page inclusion
- Scene numbers (off for specs)
- Notes visibility (off for delivery)
- Watermark (if draft)

### Step 3: Execute Export
Using available tools (afterwriting, Highland, etc.):
```bash
afterwriting --source screenplay.fountain --pdf --output output.pdf
```

### Step 4: Verify Output
- Confirm file created
- Check file size
- Verify page count
- Sample formatting check

### Step 5: Report Results

```markdown
## PDF Export Complete

📄 **File**: [filename].pdf
📊 **Size**: [X] KB
📖 **Pages**: [Y]
✅ **Status**: Success

Ready for delivery.
```

## Export Options

### Standard (Default)
- Title page: Yes
- Scene numbers: No
- Notes: Hidden
- Watermark: None

### Draft
- Title page: Yes
- Scene numbers: No
- Notes: Hidden
- Watermark: "DRAFT"

### Final
- Title page: Yes
- Scene numbers: No
- Notes: Hidden
- Watermark: None
- Extra validation

### Anonymous
- Title page: Minimal (no author)
- Scene numbers: No
- Notes: Hidden
- Watermark: None
- For competition submission

## Filename Convention

Auto-generated names:
```
[Title]_v[Version]_[YYYYMMDD].pdf

Examples:
Seoul_Identity_v1.0_20251227.pdf
Seoul_Identity_DRAFT_20251227.pdf
Seoul_Identity_ANONYMOUS_20251227.pdf
```

## Pre-Export Checklist

### Required
- [ ] No Fountain syntax errors
- [ ] Title page present
- [ ] All scenes have valid headings

### Recommended
- [ ] Script Supervisor approval
- [ ] Standards Reviewer approval
- [ ] All [[notes]] resolved

### For Submission
- [ ] Page count within target
- [ ] No scene numbers
- [ ] No WGA registration numbers
- [ ] Contact info current

## Error Handling

### Common Issues
| Error | Cause | Fix |
|-------|-------|-----|
| Export fails | Syntax error | Run `/check-format` |
| Wrong page count | Font/margin issue | Check config |
| Missing title | No title page | Add metadata |
| Garbled text | Encoding issue | Check file encoding |

## Example Output

```markdown
## PDF Export Complete

📄 **File**: Seoul_Identity_v1.0_20251227.pdf
📊 **Size**: 245 KB
📖 **Pages**: 98
✅ **Status**: Success

### Export Details
- Format: Industry Standard
- Font: Courier 12pt
- Title Page: Included
- Scene Numbers: None
- Notes: Hidden

### Verification
- ✓ File opens correctly
- ✓ Page count matches estimate
- ✓ Title page renders properly
- ✓ Formatting correct

Ready for delivery.
```

## Success Criteria
- [ ] PDF file created
- [ ] Correct page count
- [ ] Title page present
- [ ] Formatting correct
- [ ] File size reasonable
