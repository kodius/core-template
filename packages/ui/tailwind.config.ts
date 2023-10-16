import type { Config } from "tailwindcss";
import { shadcnTailwindConfig } from "tailwind-config/tailwind.config";

const config: Pick<Config, "presets"> = {
  presets: [shadcnTailwindConfig],
};

export default config;
