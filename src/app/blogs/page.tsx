import BlogCard from "@/components/BlogCard";
import PageHeading from "@/components/PageHeading";
import { blogs } from "@/constants";

const BlogPage = () => {
  return (
    <section className="container py-5">
      <PageHeading
        title="My Blogs"
        subTitle=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ducimus laboriosam eaque praesentium adipisci sequi!"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 mt-5">
        {blogs.map(
          (
            {
              id,
              title,
              shortDes,
              thumbnail,
              category,
              tags,
              publishedDate,
              authorName,
            },
            index
          ) => (
            <BlogCard
              key={index}
              id={id}
              title={title}
              shortDes={shortDes}
              thumbnail={thumbnail}
              category={category}
              tags={tags}
              publishedDate={publishedDate}
              authorName={authorName}
            />
          )
        )}
      </div>
    </section>
  );
};

export default BlogPage;
