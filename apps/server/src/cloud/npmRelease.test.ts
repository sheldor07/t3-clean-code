import { expect, it } from "@effect/vitest";
import * as Effect from "effect/Effect";

import * as NpmRelease from "./npmRelease.ts";

it.effect("never finds an upstream t3 release on npm", () =>
  Effect.gen(function* () {
    const releases = yield* NpmRelease.NpmRelease;
    expect(yield* releases.get({ spec: "latest" } as never)).toBeNull();
    expect(yield* releases.get({ spec: "0.1.11" } as never)).toBeNull();
  }).pipe(Effect.provide(NpmRelease.layer)),
);
