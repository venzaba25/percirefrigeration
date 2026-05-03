# Perci Refrigeration & Airconditioning Services

HVAC company website for Perci Refrigeration & Airconditioning Services, Cebu.

## Development

This artifact runs via the Replit workflow system, which automatically injects required environment variables. **Do not run `pnpm dev` or `pnpm build` directly** without setting these variables first:

```sh
PORT=<port>  BASE_PATH=/  pnpm --filter @workspace/perci-hvac run dev
PORT=<port>  BASE_PATH=/  pnpm --filter @workspace/perci-hvac run build
```

Use the Replit workflow (`artifacts/perci-hvac: web`) to start the dev server — it wires up `PORT` and `BASE_PATH` automatically.
