import { Profile } from "@/components/Profile";
import { Bento } from "@/components/Bento";

export default function Home() {
  return (
    <main className="page">
      <Profile />
      <Bento />
    </main>
  );
}
