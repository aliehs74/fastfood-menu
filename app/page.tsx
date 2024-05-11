import Category from "@/components/Category/Category";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function Home() {
  return (
    <main className="container w-[80vw] min-h-screen bg-zinc-50 mx-auto rounded-md -mt-10 z-10 relative px-5 ">
      {/* CategoryList and search */}
      <section className="flex h-fit align-middle my-auto py-2">
        <Category />
        <SearchBar />
      </section>

      {/* food items */}
      <section className="py-2 bg-red-200">body</section>
    </main>
  );
}
