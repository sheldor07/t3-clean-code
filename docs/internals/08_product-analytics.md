# Product analytics

T3 Clean Code sends no product analytics. [`AnalyticsService`](../../apps/server/src/telemetry/AnalyticsService.ts)
keeps its interface so upstream call sites merge cleanly, but its layer has no requirements: no
HTTP client, no config, no identity. Keep it that way. A change that gives the layer a requirement
is a change that can reach the network.

The same rule covers relay tracing: [`RelayTracing.layer`](../../packages/shared/src/relayTracing.ts)
ignores its config and never provides an exporting tracer.
