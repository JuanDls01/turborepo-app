import { Pressable, PressableProps, StyleSheet, View } from "react-native";

type VariantProps<T> = {
  [K in keyof T]?: keyof T[K];
};

export interface ButtonProps
  extends PressableProps,
    React.RefAttributes<View>,
    VariantProps<typeof buttonVariants> {}

export const Button = ({
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) => {
  return (
    <Pressable
      {...props}
      style={[
        styles.base,
        buttonVariants.variant[variant],
        buttonVariants.size[size],
      ]}
    />
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});

const buttonVariants = {
  variant: {
    primary: { backgroundColor: "#007AFF" },
    secondary: { backgroundColor: "#4CAF50" },
    outline: {
      backgroundColor: "transparent",
      borderWidth: 2,
      borderColor: "#007AFF",
    },
  },
  size: {
    sm: { paddingVertical: 6, paddingHorizontal: 12 },
    md: { paddingVertical: 10, paddingHorizontal: 16 },
    lg: { paddingVertical: 14, paddingHorizontal: 20 },
  },
};
