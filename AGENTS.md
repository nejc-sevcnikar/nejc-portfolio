# Project guidance for AI assistants

Follow these instructions when working in this repository. If a request is unclear or conflicts with these rules, ask the user before making the affected change.

## Vault boundary

- “Vault” means the `Portfolio_website` folder that contains the user's second brain.
- Edit files in the Vault only when the user directly instructs you to do so. Do not infer permission to edit the Vault from a website task.
- Update no more than one Vault file at a time. The exception is when a change requires updating usages or references: additional Vault file edits must be limited to those directly related usage or reference updates.
- When documenting a component, record which other components, compositions, and layouts it connects to or is used by. Keep these references accurate when changing usages.

## Source folder responsibilities

- `src/components/`: small, adaptable UI building blocks.
- `src/compositions/`: reusable UI sections assembled from components. Organize these by feature, with `shared/` for compositions shared across features (for example, `src/compositions/projects/` and `src/compositions/shared/`).
- `src/hooks/`: shared React hooks. Keep a hook used by only one component with that component.
- `src/utils/`: shared helper functions and general-purpose utilities. Keep feature-specific helpers with their feature when practical.
- `src/layouts/`: predefined page layouts built from components and compositions.
- `src/assets/`: images, icons, fonts, and other static assets.
- `src/routes/`: TanStack Start route definitions and URL-specific wiring. Use routes to connect the appropriate layout and page content.

## File creation and implementation

- When first creating a React component file under `src/components/`, `src/compositions/`, or `src/layouts/`, create a valid, minimal component scaffold rather than a file containing only a placeholder. Include an exported props interface with an optional `placeholder?: string` prop, a named component that renders that prop with `ComponentName` as its default text, and a default export. Do not use `memo` by default; add it only when there is a clear reason. Keep the initial scaffold free of unrelated logic and styling.
- Every component, composition, or layout must have a matching SCSS module file beside it, named `ComponentName.module.scss`, and import that file from its TSX file. The SCSS module may be empty initially.
- After that file has been created, add implementation only in response to a later, explicit user request. Keep creation and implementation as separate steps so the user can review the new file before code is added.
- AI assistants must not build a complete component independently. They may make focused, moderate changes to existing components. For larger or complete component work, explain the proposed changes and ask the user to implement them or give explicit direction for the specific work.
- AI assistants may fully implement a composition only when all of its component dependencies have already been defined and the user explicitly requests the implementation. Follow an existing similar composition when one is available.
- For layouts, follow the user's explicit request and reuse defined components and compositions. Ask before making a substantial layout implementation if its scope or intended structure is unclear.

## Code size and organization

- Keep components and compositions to about 100–150 lines where practical. Treat 150 lines as the normal upper limit.
- Prioritize clear, readable markup. Move reusable or substantial logic into an appropriate hook or utility.
- Before making a component or composition exceed 150 lines, explain why the extra length is needed and get the user's approval. Some files may reasonably need to be longer when the user approves the reason.
- Prefer feature-specific folders for compositions used by one feature and `src/compositions/shared/` for those reused across features.

## Protected project files

- Do not manually edit generated files, including generated TanStack route-tree files.
- Do not change dependencies, build settings, or deployment configuration unless the user asks.
- Keep changes focused on the user's request. If a requested change appears to require modifying a protected or generated file, explain why and ask before proceeding.
