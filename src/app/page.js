import { getSubscribers, deleteSubscriber } from "../lib/supabase";
import SubForm from "@/components/SubForm";

export default async function Home() {
  const subscribers = await getSubscribers();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <SubForm />
      <ul>
        {subscribers.map((subscriber) => {
          return (
            <form key={subscriber.email} action={deleteSubscriber}>
              <li className="border border-slate-500 bg-slate-100 rounded-xl p-3 w-80 mb-2 flex justify-between">
                {subscriber.email}
                <button className="bg-red-600 border-red-900 border-2 p-2 rounded-xl text-white">
                  DELETE
                </button>
              </li>
              <input type="hidden" name="subscriber" value={subscriber.email} />
            </form>
          );
        })}
      </ul>
    </div>
  );
}
