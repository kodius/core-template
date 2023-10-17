import { shadcnTailwindConfig } from "tailwind-config/tailwind.config"
import type { Config } from "tailwindcss"

const config: Pick<Config, "presets"> = {
  presets: [shadcnTailwindConfig],
}

export default config
