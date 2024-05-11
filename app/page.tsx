import Category from "@/components/Category/Category";

export default function Home() {
  return (
    <main className="container w-[80vw] min-h-screen bg-zinc-50 mx-auto rounded-md -mt-10 z-10 relative">
      {/* CategoryList and search */}
      <section className="">
        <Category />
      </section>

      {/* food items */}
      <section className=""></section>
    </main>
  );
}
