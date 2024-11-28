import {
  addSubscriber,
  getSubscribers,
  deleteSubscriber,
} from "../lib/supabase";

export default async function Home() {
  const subscribers = await getSubscribers();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <form action={addSubscriber}>
        <input
          type="text"
          name="email"
          placeholder="e-mail"
          className="border border-slate-500 p-3 mr-2 rounded-xl"
        />
        <button className="bg-green-400 border border-green-400 p-3 rounded-xl text-white">
          Subscribe
        </button>
      </form>
      <ul>
        {subscribers.map((subscriber) => {
          return (
            <form key={subscriber.id} action={deleteSubscriber}>
              <li className="border border-slate-500 bg-slate-100 rounded-xl p-3 w-80 mb-2 flex justify-between">
                {subscriber.email}
                <button className="bg-red-500 rounded-xl p-2 text-white">
                  Delete
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
