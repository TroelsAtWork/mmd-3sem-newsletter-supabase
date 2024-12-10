"use client";
import { addSubscriber } from "../lib/supabase";
import { useActionState } from "react";

const SubForm = () => {
  const [state, formAction, isPending] = useActionState(addSubscriber, null);
  console.log("state: ", state);
  return (
    <section>
      <form action={formAction}>
        <input
          type="text"
          name="email"
          placeholder="e-mail"
          className="border border-slate-500 p-3 mr-2 rounded-xl"
        />
        <button
          disabled={isPending}
          className="bg-green-400 border border-green-400 p-3 rounded-xl text-white"
        >
          {isPending ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {state && (
        <div className="p-3 mt-2 border text-center rounded-xl bg-slate-100">
          <span>{state}</span>
        </div>
      )}
    </section>
  );
};

export default SubForm;
