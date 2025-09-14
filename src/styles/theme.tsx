import { createTheme, MantineColorsTuple } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

const primary: MantineColorsTuple = [
  "#f1f0ea",
  "#e0ddcf",
  "#cfcfcf",
  "#b0aeb5",
  "#958b95",
  "#7c6f7c",
  "#5f505f",
  "#474448",
  "#2d232e",
  "#1a1a1a",
];

export const theme = createTheme({
  fontFamily: "var(--font-sans)",
  headings: {
    fontFamily: "var(--font-sans)",
    sizes: {
      h1: { fontSize: "2rem", fontWeight: "700" },
      h2: { fontSize: "1.75rem", fontWeight: "600" },
      h3: { fontSize: "1.5rem", fontWeight: "600" },
      h4: { fontSize: "1.125rem", fontWeight: "600" },
    },
  },
  colors: {
    primary,
  },
  primaryColor: "primary",
  primaryShade: 4,
  defaultRadius: 12,
  components: {
    Button: {
      defaultProps: {
        radius: 6,
        size: "md",
        classNames: {
          root: "min-w-fit data-[variant=3d]:border-0 data-[variant=3d]:border-b-6 data-[variant=3d]:active:border-b-2 data-[variant=3d]:active:translate-y-[2px] data-[variant=3d]:border-(--mantine-primary-color-7)",
        },
      },
    },
    TextInput: {
      defaultProps: {
        size: "xl",
        classNames: {
          label: "data-[size=xl]:text-sm text-gray-700",
        },
      },
    },
    Textarea: {
      defaultProps: {
        size: "xl",
        classNames: {
          label: "data-[size=xl]:text-sm text-gray-700",
        },
      },
    },
    Input: {
      defaultProps: {
        classNames: {
          input: "border-2 border-[#F0F0F0]",
        },
      },
    },
    Modal: {
      defaultProps: {
        centered: true,
      },
    },
    NumberInput: {
      defaultProps: {
        size: "xl",
        hideControls: true,
        classNames: {
          label:
            "data-[size=lg]:text-xs data-[size=xl]:text-sm data-[size=lg]:mb-2 text-gray-700",
        },
      },
    },
    PinInput: {
      defaultProps: {
        size: "lg",
      },
    },
    Select: {
      defaultProps: {
        size: "sm",
        radius: "md",
        classNames: {
          label: "data-[size=lg]:text-xs data-[size=lg]:mb-2 text-gray-700",
        },
      },
    },
    Autocomplete: {
      defaultProps: {
        rightSection: <IconChevronDown size={20} strokeWidth={1.5} />,
        rightSectionPointerEvents: "none",
      },
    },
    Text: {
      defaultProps: {
        className: "[--mantine-color-dimmed:var(--color-muted-foreground)]",
      },
    },
    Carousel: {
      defaultProps: {
        withControls: false,
      },
    },
    ActionIcon: {
      defaultProps: {
        radius: "md",
      },
    },
  },
});
