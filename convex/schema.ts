import { defineTable, defineSchema } from 'convex/server';
import {v} from "convex/values"
export default defineSchema({
    users:defineTable({
        name: v.string(),
        email: v.string(),
        tokenIdentifier: v.string(),
        imageUrl: v.optional(v.string()),
    }).index("by_token", ["tokenIdentifier"])
    .index("by_email", ["email"])
    .searchIndex("search_name", {searchField:"name"})
    .searchIndex("search_email", {searchField:"email"}),

    expenses:defineTable({
        description:v.string(),
        amount:v.number(),
        category:v.optional(v.string()),
        date:v.number(),
        paidByUserId:v.string(),
        splitType:v.string(),       //equal, percentage, or custom
        splits:v.array(v.object({   //money divide between users
            userId:v.id("users"),
            amount:v.number(),
            paid:v.boolean(),
        })),
        groupId:v.optional(v.id("groups")),
        createdBy:v.id("users"),
    })
    .index("by_group", ["groupId"])
    .index("by_user_and_group", ["paidByUserId", "groupId"])
    .index("by_date", ["date"]),

    groups:defineTable({
        name:v.string(),
        description:v.optional(v.string()),
        createdBy:v.id("users"),
        members:v.array(
            v.object({
                userId: v.id("users"),
                role: v.string(), //admin or user
                joinedAt: v.number(), //timestamp of when the user joined 
            })
    ),
    }),

    settlements:defineTable({
        amount:v.number(),
        note:v.optional(v.string()),
        date:v.number(),
        paidByUserId:v.id("users"),
        receivedByUserId:v.id("users"),
        groupId:v.optional(v.id("groups")),
        expenseId:v.optional(v.array(v.id("expenses"))), //if this is a settlement for an expense, then this will be set
        createdBy:v.id("users"),
    })
    .index("by_group", ["groupId"])
    .index("by_user_and_group", ["paidByUserId", "groupId"])
    .index("by_date", ["date"])
    .index("by_received_and_group", ["receivedByUserId", "groupId"]),

});

