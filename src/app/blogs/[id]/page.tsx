import { Separator } from "@/components/ui/separator";
import { blogs } from "@/constants";
import { BlogType } from "@/types";
import { Calendar, UserCircle } from "lucide-react";
import Image from "next/image";

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const blogId = (await params).id;
  const blog: BlogType | undefined = blogs.find(
    (blog) => blog.id === Number(blogId)
  );

  return (
    <div className="container py-5">
      <div className="bg-secondary w-full max-h-screen border border-muted-foreground/10 p-5 rounded-md">
        <figure className="rounded-lg overflow-hidden relative">
          {blog && (
            <Image
              src={blog && blog?.thumbnail}
              width={1024}
              height={460}
              alt={blog?.title}
              className="w-full h-auto lg:h-[560px] object-cover object-center"
            />
          )}
          <span className="absolute top-2 right-2 bg-custom-yellow py-1 px-2 text-sm rounded-full text-background">
            {blog?.category}
          </span>
        </figure>
        <div className="mt-5">
          <div className="flex gap-3 mb-5">
            <p className="text-sm text-muted-foreground flex gap-1 items-center hover:text-custom-yellow duration-200">
              <span>
                <UserCircle size={16} />
              </span>
              {blog?.authorName}
            </p>
            <p className="text-sm text-muted-foreground flex gap-1 items-center hover:text-custom-yellow duration-200">
              <span>
                <Calendar size={16} />
              </span>{" "}
              {blog?.publishedDate.toLocaleDateString()}
            </p>
          </div>
          <h2 className="text-xl lg:text-2xl font-medium">{blog?.title}</h2>
          <p className="text-muted-foreground mt-5">{blog?.description}</p>
          <Separator className="w-full h-1 mt-5 mb-2 bg-muted-foreground/10" />

          <div className="flex gap-2 mt-1">
            {blog &&
              blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-transparent border border-muted-foreground/20  hover:bg-custom-yellow hover:text-background hover:border-custom-yellow transition-all duration-300 px-2 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
