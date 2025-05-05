import { BlogType } from "@/types";
import { Calendar, UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogCard: React.FC<BlogType> = ({
  id,
  title,
  shortDes,
  category,
  thumbnail,
  publishedDate,
  authorName,
}) => {
  return (
    <div className="bg-secondary p-5 rounded-md shadow-custom border border-muted-foreground/10">
      <Link href={`/blogs/${id}`} className="relative block">
        <Image
          src={thumbnail}
          alt={title}
          width={360}
          height={360}
          className="w-full rounded-md"
        />
        <span className="absolute top-2 right-2 bg-custom-yellow py-1 px-2 text-xs rounded-full text-background">
          {category}
        </span>
      </Link>
      <div className="mt-3">
        <Link href={`/blogs/${id}`}>
          <h2 className="text-lg lg:text-xl font-medium">{title}</h2>
        </Link>
        <p className="text-sm text-muted-foreground mt-1">{shortDes}</p>
        <div className="flex gap-3">
          <p className="text-sm text-muted-foreground mt-5 flex gap-1 items-center hover:text-custom-yellow duration-200">
            <span>
              <Calendar size={16} />
            </span>{" "}
            {publishedDate.toLocaleDateString()}
          </p>
          <p className="text-sm text-muted-foreground mt-5 flex gap-1 items-center hover:text-custom-yellow duration-200">
            <span>
              <UserCircle size={16} />
            </span>
            {authorName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
