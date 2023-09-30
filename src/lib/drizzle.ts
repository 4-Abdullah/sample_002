import{
    pgTable,
    serial,
    text,
    varchar,
    timestamp,
    boolean,
}   from "drizzle-orm/pg-core";
import {sql} from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
// Types
import { InferModel } from "drizzle-orm";
export const todoTable = pgTable("todo", {
    id: serial("id").primaryKey(),
    task: varchar("task", { length: 255 }).notNull()
})

export type Todo = InferModel<typeof todoTable>;
export type NewTodo = InferModel<typeof todoTable, "insert">;

export const db = drizzle(sql);
