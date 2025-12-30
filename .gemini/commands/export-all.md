# /export-all

Generate all output formats (PDF, FDX, HTML) at once.

## Arguments
- `[version]` - Optional: Version number (default: 1.0)
- `[options]` - Optional: `draft`, `final`

## Workflow

### Step 1: Pre-Export Validation
Run comprehensive validation:
- Fountain syntax check
- Title page verification
- Standards review
- Page count confirmation

### Step 2: Generate Filenames
```
[Title]_v[Version]_[YYYYMMDD].pdf
[Title]_v[Version]_[YYYYMMDD].fdx
[Title]_v[Version]_[YYYYMMDD].html
```

### Step 3: Execute All Exports
```bash
afterwriting --source screenplay.fountain --pdf --output file.pdf
afterwriting --source screenplay.fountain --fdx --output file.fdx
afterwriting --source screenplay.fountain --html --output file.html
```

### Step 4: Verify All Outputs
- Check all files created
- Verify sizes
- Confirm formats

### Step 5: Generate Report

```markdown
## Export Complete: All Formats

### Files Generated
| Format | Filename | Size | Status |
|--------|----------|------|--------|
| PDF | name.pdf | X KB | ✓ |
| FDX | name.fdx | X KB | ✓ |
| HTML | name.html | X KB | ✓ |

### Screenplay Info
- **Title**: [title]
- **Version**: [version]
- **Pages**: [count]
- **Date**: [date]

All formats ready for delivery.
```

## Export Package

### Directory Structure
```
exports/
├── Seoul_Identity_v1.0_20251227/
│   ├── Seoul_Identity_v1.0_20251227.pdf
│   ├── Seoul_Identity_v1.0_20251227.fdx
│   ├── Seoul_Identity_v1.0_20251227.html
│   └── export_manifest.md
```

### Export Manifest
```markdown
# Export Manifest

## Screenplay
- **Title**: Seoul Identity
- **Author**: Scott Graham
- **Version**: 1.0
- **Export Date**: 2025-12-27
- **Pages**: 98

## Files
- PDF: Seoul_Identity_v1.0_20251227.pdf (245 KB)
- FDX: Seoul_Identity_v1.0_20251227.fdx (312 KB)
- HTML: Seoul_Identity_v1.0_20251227.html (156 KB)

## Verification
- All files generated successfully
- Page count verified
- Format validation passed
```

## Options

### Draft Export
- Includes "DRAFT" watermark on PDF
- Marks all files with DRAFT in name
- For internal review

### Final Export
- Clean PDF without watermarks
- Full validation required
- For submission/delivery

## Example Output

```markdown
## Export Complete: All Formats

### Files Generated
| Format | Filename | Size | Status |
|--------|----------|------|--------|
| PDF | Seoul_Identity_v1.0_20251227.pdf | 245 KB | ✓ |
| FDX | Seoul_Identity_v1.0_20251227.fdx | 312 KB | ✓ |
| HTML | Seoul_Identity_v1.0_20251227.html | 156 KB | ✓ |

### Screenplay Info
- **Title**: Seoul Identity
- **Author**: Scott Graham
- **Version**: 1.0
- **Pages**: 98
- **Date**: December 27, 2025

### Validation
- ✓ Fountain syntax valid
- ✓ Title page complete
- ✓ Page count: 98 pages
- ✓ All formats generated

### Notes
- FDX: 5 [[notes]] not transferred (Fountain-specific)
- All core content preserved across formats

All formats ready for delivery.
```

## Success Criteria
- [ ] All three formats generated
- [ ] Files correctly named
- [ ] Sizes reasonable
- [ ] Validation passed
- [ ] Manifest created
