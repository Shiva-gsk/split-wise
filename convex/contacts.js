import { query } from "./_generated/server";
import { internal } from "./_generated/api";

export const getContacts = query({
  handler: async (ctx) => {
    const currUser = await ctx.runQuery(internal.user.getCurrentUser);
    
    const expensesYouPaid = await ctx.db
      .query("expenses")
      .withIndex("by_user_and_group", (q) => q.eq("paidByUserId", currUser._id).eq("groupId", undefined))
      .collect();

    const expensesNotPaidByYou = (await ctx.db
      .query("expenses")
      .withIndex("by_group", (q) => q.eq("groupId", undefined))
      .collect()).filter((e)=> e.paidByUserId !== currUser._id && e.splits.some((s) => s.userId === currUser._id));

    const expenses = [...expensesYouPaid, ...expensesNotPaidByYou];

  },
});