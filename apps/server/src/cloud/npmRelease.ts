// T3 Clean Code: the server never looks up or installs the `t3` package from npm.
//
// That package is upstream T3 Code. Upstream used this lookup to move a server to the
// connecting client's version, which here would replace a clean server with an upstream
// build that has analytics. Every lookup reports "no such release".
import { type ServerNpmReleaseError, type ServerNpmReleaseInput } from "@t3tools/contracts";
import type { ServerNpmRelease } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";

export class NpmRelease extends Context.Service<
  NpmRelease,
  {
    readonly get: (
      input: ServerNpmReleaseInput,
    ) => Effect.Effect<ServerNpmRelease | null, ServerNpmReleaseError>;
  }
>()("t3/cloud/npmRelease") {}

export const make = Effect.fn("NpmRelease.make")(function* () {
  return NpmRelease.of({
    get: Effect.fn("NpmRelease.get")(function* () {
      return null;
    }),
  });
});

export const layer = Layer.effect(NpmRelease, make());
