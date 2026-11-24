import { describe, expect, it } from "@effect/vitest";
import * as Effect from "effect/Effect";

import * as AnalyticsService from "./AnalyticsService.ts";

describe("AnalyticsService (T3 Clean Code)", () => {
  it.effect("never queues or sends an event", () =>
    Effect.gen(function* () {
      const analytics = yield* AnalyticsService.AnalyticsService;
      expect(yield* analytics.record("provider.turn.completed", { model: "any" })).toBe(false);
      yield* analytics.recordOwners([{ source: "openai", ownerId: "a".repeat(64) }], "server");
      yield* analytics.flush;
    }).pipe(Effect.provide(AnalyticsService.layer)),
  );

  it("needs no HTTP client, config, or identity to build", () => {
    // Compile-time check: the layer has no requirements, so it cannot reach the network.
    const layer: import("effect/Layer").Layer<AnalyticsService.AnalyticsService> =
      AnalyticsService.layer;
    expect(layer).toBeDefined();
  });
});
