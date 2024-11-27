import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

// Initialize Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Get all subscribers
export const getSubscribers = async () => {
  "use server";
  const { data, error } = await supabase.from("subscriptions").select("email");
  return data;
};

// Add a new subscriber
export const addSubscriber = async (formData) => {
  "use server";
  const { error } = await supabase
    .from("subscriptions")
    .insert({ email: formData.get("email") });
  revalidatePath("/");
};

// Delete a subscriber
export const deleteSubscriber = async (formData) => {
  "use server";
  const { error } = await supabase
    .from("subscriptions")
    .delete()
    .eq("email", formData.get("subscriber"));
  revalidatePath("/");
};
