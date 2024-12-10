"use server";
import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

// Initialize Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Get all subscribers
export const getSubscribers = async () => {
  const { data, error } = await supabase.from("subscriptions").select("email");
  return data;
};

// Check if the email is already subscribed
export const isSubscribed = async (email) => {
  const { data, error } = await supabase
    .from("subscriptions")
    .select("email")
    .eq("email", email);
  return data.length > 0;
};

//Add a new subscriber
export const addSubscriber = async (prevState, formData) => {
  const email = formData.get("email");
  if (await isSubscribed(email)) return "You are already subscribed!";
  if (!email) return "Please enter your email!";

  try {
    const { error } = await supabase
      .from("subscriptions")
      .insert({ email: email });
    if (error) throw error;
    revalidatePath("/");
  } catch (error) {
    console.log("error: ", error);
    if (error.code == "23505") return "You are already subscribed!";
  }
};

// Delete a subscriber
export const deleteSubscriber = async (formData) => {
  const { error } = await supabase
    .from("subscriptions")
    .delete()
    .eq("email", formData.get("subscriber"));

  revalidatePath("/");
};
