# Gemini Code Agent Project: Seoul Identity Screenplay

This document provides a comprehensive overview of the "Seoul Identity" screenplay project for the Gemini Code Agent. It outlines the project's purpose, structure, and the key workflows for interacting with it.

## Project Overview

This is a non-code project containing the screenplay for the feature film "Seoul Identity." While the primary artifact is a `.fountain` text file, the project is managed with the rigor of a software development project, utilizing tools like `git`, `npm`, and GitHub Actions for version control, quality assurance, and workflow automation.

*   **Purpose**: To develop and maintain the screenplay for a spy thriller film.
*   **Core Artifact**: `seoul-identity.fountain` - A plain text file containing the screenplay in Fountain format.
*   **Key Technologies**:
    *   **Fountain**: A simple markup syntax for writing, editing, and sharing screenplays in plain text.
    *   **Node.js/npm**: Used for managing development dependencies and running validation scripts.
    *   **GitHub Actions**: For automated validation of branch names, file formats, and project structure.

## Interacting with the Project

This project employs a structured, SAFe-style workflow. Adherence to these conventions is crucial for maintaining the integrity of the project.

### Validation

Before committing or creating a pull request, always run the local validation suite to ensure your changes meet the project standards.

To run all validation checks:
```bash
npm run validate
```

This command will:
1.  Validate the `.fountain` file syntax.
2.  Lint all Markdown files.
3.  Perform a spell check on both Markdown and Fountain files.

### Workflow

The project follows a specific branching and commit message strategy. Please refer to `docs/WORKFLOW.md` for a complete guide.

**Key points:**

*   **Branching**: Create new branches from `main` or a `draft/v{N}` branch. Branch names must follow the convention `{type}/{description}` (e.g., `scene/new-chase-sequence`).
*   **Committing**: Commit messages should follow the format `{type}({scope}): {description}` (e.g., `scene(act2): add car chase through Itaewon`).
*   **Pull Requests**: All changes are merged via Pull Requests. Ensure all CI checks pass before merging.

### Exporting the Screenplay

While not explicitly defined in the scripts, the `fountain-js` library can be used to export the screenplay to other formats like PDF or Final Draft (.fdx). The `exports/` directory is the designated location for these files.

## Directory Structure

*   `.claude/`: Contains configuration and documentation related to the Claude AI model (legacy).
*   `.github/`: Contains GitHub Actions workflows for CI/CD.
*   `.vscode/`: Contains workspace-specific VS Code settings.
*   `docs/`: Project documentation, including the critical `WORKFLOW.md`.
*   `exports/`: The designated output directory for exported screenplay formats (PDF, FDX, etc.).
*   `patterns/`: Contains information about scene patterns.
*   `scripts/`: Houses validation scripts, like the Fountain syntax validator.
*   `source-materials/`: Contains inspirational and source materials for the screenplay.
*   `templates/`: Contains templates for various project-related documents.
*   `seoul-identity.fountain`: The master screenplay file.
*   `package.json`: Defines project dependencies and scripts.
*   `README.md`: Provides a high-level, IMDb-style overview of the film project.
