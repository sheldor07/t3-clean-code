// T3 Clean Code: product analytics is removed.
//
// Upstream buffered usage events here and posted them to `ingest.t3.codes`, which kept a copy
// and forwarded them to PostHog. This fork keeps the service interface, so the many call sites
// that report events still compile, but nothing is buffered, nothing is identified, and there
// is no HTTP client: every method is a no-op. There is no setting or environment variable that
// turns it back on.
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";

/** Kept for call sites that describe an install owner. Never sent anywhere. */
export interface TelemetryOwner {
  readonly source: "connect" | "openai" | "claude" | "device";
  readonly ownerId: string;
}

export class AnalyticsService extends Context.Service<
  AnalyticsService,
  {
    /** Always false: no event is ever queued or sent. */
    readonly record: (
      event: string,
      properties?: Readonly<Record<string, unknown>>,
    ) => Effect.Effect<boolean>;

    readonly flush: Effect.Effect<void>;

    readonly recordOwners: (
      owners: ReadonlyArray<TelemetryOwner>,
      observedBy: "server" | "client",
    ) => Effect.Effect<void>;
  }
>()("t3/telemetry/AnalyticsService") {}

/** @public */
export const make = Effect.succeed(
  AnalyticsService.of({
    record: Effect.fn("AnalyticsService.record")(function* () {
      return false;
    }),
    flush: Effect.void,
    recordOwners: Effect.fn("AnalyticsService.recordOwners")(function* () {}),
  }),
);

export const layer = Layer.effect(AnalyticsService, make);
