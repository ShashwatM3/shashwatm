import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs — Shashwat Mahalanobis",
  description: "Writing by Shashwat Mahalanobis.",
};

const posts = [
  {
    href: "/blogs/computer-use-tasks/",
    title: "Eleven tasks for computer-use agents",
    description:
      "Eleven tasks across hospitality, store operations, music, video and design—and the failure modes their trajectories reveal.",
    thumbnail: "/blogs/computer-use-tasks/assets/trajectory-numbers.svg",
    labels: ["Computer use", "Task engineering"],
  },
];

export default function Blogs() {
  return (
    <main className="min-h-screen bg-black text-neutral-100 font-[family-name:var(--font-geist-sans)]">
      <div className="mx-auto w-[88vw] max-w-5xl pt-16 pb-32">
        <Link href="/" className="text-sm text-neutral-500 hover:text-white transition-colors">
          Shashwat Mahalanobis
        </Link>
        <h1 className="mt-16 mb-12 text-5xl sm:text-7xl font-medium tracking-tight">Blogs</h1>
        <ul className="border-t border-neutral-800">
          {posts.map((post) => (
            <li key={post.href} className="border-b border-neutral-800">
              <a href={post.href} className="group grid gap-6 py-10 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.thumbnail}
                  alt=""
                  className="aspect-[8/3] w-full rounded-sm bg-neutral-950 object-cover opacity-90 transition-opacity group-hover:opacity-100"
                />
                <div className="flex flex-col justify-center">
                  <div className="mb-4 flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-[0.12em] text-neutral-500">
                    {post.labels.map((label) => (
                      <span key={label}>{label}</span>
                    ))}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-medium tracking-tight group-hover:underline underline-offset-4 decoration-1">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-neutral-400 leading-relaxed">{post.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
