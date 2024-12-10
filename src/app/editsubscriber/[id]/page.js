const page = async ({ params }) => {
  const { id } = await params;
  return (
    <form>
      <input
        type="text"
        name="email"
        placeholder="e-mail"
        className="border border-slate-500 p-3 mr-2 rounded-xl"
      />
    </form>
  );
};

export default page;
