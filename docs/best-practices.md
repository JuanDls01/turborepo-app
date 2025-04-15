# Best Pracices

## File Naming Conventions

1. **Components**

- Use kebab-case for files: `user-profile-form.tsx`
- Use PascalCase for component names: `UserProfileForm`
- Components names patterns: BASE + COMPOSITE + SUFFIX
  - `BASE`: The core entity or subject the component relates to (e.g., `User`, `Product`, `Dashboard`).
  - `COMPOSITE`: Additional information describing the component’s role or relation (e.g., `Profile`, `Header`, `Messages`).
  - `SUFFIX`: The type of UI element or its role in the system (e.g., `Card`, `List`, `Form`).

2. **Utilities and Hooks**

- Use kebab-case for files: `use-exercise.ts`
- Prefix hooks with `use`: `useExercise`

3. **Types**

- Use kebab-case for files: `exercise-types.ts`
- Use PascalCase for type names: `Exercise`

## Prefix's for booleans

1. **IS** for simple states:

- ❌ active
- ✅ isActive

2. **HAS** for ownership:

- ❌ subsciption
- ✅ hasSubscription

3. **SHOULD** for expected behavior:

- ❌ retry
- ✅ shouldRetry

4. **CAN** for capabilities:

- ❌ edit
- ✅ canEdit
