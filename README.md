# @multisystem/ui

Shared UI component library for the multisystem monorepo.

## Installation

This package is intended for internal use within the monorepo and is auto-linked via pnpm workspaces.

```bash
# Install dependencies in each app
cd hub && pnpm install
cd shopflow && pnpm install
cd workify && pnpm install
```

## Usage

Import components from the shared package:

```tsx
import { Button, Card, Input, Badge } from "@multisystem/ui";
import "@multisystem/ui/styles.css";

export function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button>Submit</Button>
      <Badge>New</Badge>
    </Card>
  );
}
```

## Components

All components are built with Radix UI primitives and styled with Tailwind CSS.

- **Alert** - Display alert messages
- **Alert Dialog** - Modal dialogs for critical actions
- **Badge** - Small status indicators
- **Button** - Interactive buttons with variants
- **Card** - Container component
- **Checkbox** - Form checkboxes
- **Dialog** - Modal dialogs
- **Dropdown Menu** - Contextual menus
- **Input** - Text input fields
- **Label** - Form labels
- **Scroll Area** - Scrollable containers
- **Select** - Dropdown selects
- **Separator** - Visual dividers
- **Skeleton** - Loading placeholders
- **Switch** - Toggle switches
- **Table** - Data tables
- **Textarea** - Multi-line text input

## Theming

The package uses CSS variables for theming. Import the global styles in your app:

```css
@import "@multisystem/ui/styles.css";
```

## Development

Components follow shadcn/ui patterns with Radix UI and class-variance-authority.
