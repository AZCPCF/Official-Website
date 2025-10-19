import MDXContent from "@/components/mdx-content";
import { redirect } from "@/i18n/navigation";
import { getMdxData } from "@/lib/get-mdx-data";
import { getLocale } from "next-intl/server";
import { DocumentNotFoundComponent } from "./_components/not-found";
import { getDocPath } from "@/lib/get-docs-path";

const DOCS_DEFAULT_PAGE = "/docs/getting-started/introduction";

export default async function ShowDocumentPage({
  params,
}: {
  params: { slug?: string[] };
}) {
  const locale = await getLocale();
  const slug = params.slug ?? [];

  if (slug.length === 0) {
    redirect({ href: DOCS_DEFAULT_PAGE, locale });
    return null;
  }

  const filePath = await getDocPath(slug, locale);
  if (!filePath) {
    return <DocumentNotFoundComponent />;
  }

  const relativePath = filePath.replace(`${process.cwd()}/`, "");

  try {
    const { content } = await getMdxData(filePath);
    return (
      <div className="prose lg:prose-xl sm:container mx-auto sm:px-0 px-1 py-5 pt-8 text-xl">
        <MDXContent source={content} />
        <div className="mt-8 flex justify-end">
          <a
            className="text-sm text-primary hover:underline"
            href={`https://github.com/cyrus-lang/Official-Website/edit/v2/${relativePath}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Edit this page on GitHub
          </a>
        </div>
      </div>
    );
  } catch (error) {
    console.error(`Error loading MDX content from ${filePath}:`, error);
    return <DocumentNotFoundComponent />;
  }
}
