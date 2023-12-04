// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { z } from 'zod';

/** Identifier type for actor */
export type ActorId = number & { __flavor?: 'ActorId' };

/** Represents the table public.actor */
export default interface Actor {
  /** Database type: pg_catalog.int4 */
  actor_id: ActorId;

  /** Database type: pg_catalog.varchar */
  first_name: string;

  /** Database type: pg_catalog.varchar */
  last_name: string;

  /** Database type: pg_catalog.timestamp */
  last_update: Date;
}

/** Represents the initializer for the table public.actor */
export interface ActorInitializer {
  /**
   * Database type: pg_catalog.int4
   * Default value: nextval('actor_actor_id_seq'::regclass)
   */
  actor_id?: ActorId;

  /** Database type: pg_catalog.varchar */
  first_name: string;

  /** Database type: pg_catalog.varchar */
  last_name: string;

  /**
   * Database type: pg_catalog.timestamp
   * Default value: now()
   */
  last_update?: Date;
}

/** Represents the mutator for the table public.actor */
export interface ActorMutator {
  /** Database type: pg_catalog.int4 */
  actor_id?: ActorId;

  /** Database type: pg_catalog.varchar */
  first_name?: string;

  /** Database type: pg_catalog.varchar */
  last_name?: string;

  /** Database type: pg_catalog.timestamp */
  last_update?: Date;
}

export const actorId = z.number() as unknown as z.Schema<ActorId>;

export const actor =
z.object({
  actor_id: actorId,
  first_name: z.string(),
  last_name: z.string(),
  last_update: z.date(),
}) as unknown as z.Schema<Actor>

export const actorInitializer =
z.object({
  actor_id: actorId.optional(),
  first_name: z.string(),
  last_name: z.string(),
  last_update: z.date().optional(),
}) as unknown as z.Schema<ActorInitializer>

export const actorMutator =
z.object({
  actor_id: actorId.optional(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  last_update: z.date().optional(),
}) as unknown as z.Schema<ActorMutator>
