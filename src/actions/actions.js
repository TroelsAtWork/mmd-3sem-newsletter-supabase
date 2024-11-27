import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export const subscribe = async (formData) => {
  "use server";
  const { error } = await supabase
    .from("subscriptions")
    .insert({ email: formData.get("email") });
  revalidatePath("/");
};
