import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <figure className="my-8">
      <div className="rounded-xl overflow-hidden border border-[var(--color-beige-dark)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img {...props} className="w-full h-auto" loading="lazy" alt={props.alt ?? ""} />
      </div>
      {props.alt && (
        <figcaption className="mt-2 text-center text-xs text-[var(--color-muted)]">
          {props.alt}
        </figcaption>
      )}
    </figure>
  ),
  video: (props: React.VideoHTMLAttributes<HTMLVideoElement>) => (
    <figure className="my-8">
      <div className="rounded-xl overflow-hidden border border-[var(--color-beige-dark)]">
        <video {...props} className="w-full h-auto" />
      </div>
    </figure>
  ),
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-[var(--color-beige-dark)]">
      <table {...props} className="w-full text-sm" />
    </div>
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th
      {...props}
      className="px-4 py-3 text-left text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider bg-[var(--color-card)] border-b border-[var(--color-beige-dark)]"
    />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td
      {...props}
      className="px-4 py-3 text-sm border-b border-[var(--color-beige-dark)]"
    />
  ),
};

interface MDXContentProps {
  source: string;
}

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <article className="prose prose-lg max-w-none">
      <MDXRemote source={source} components={components} />
    </article>
  );
}
