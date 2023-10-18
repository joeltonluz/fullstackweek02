import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="flex flex-col">
        <Card className="bg-secondary flex h-[150px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg">
          {/* IMAGEM */}
          <Image
            src={category.imageUrl}
            alt={category.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            style={{
              objectFit: "contain",
            }}
          />
        </Card>

        <div className="rounded-bl-lg rounded-br-lg bg- py-3">
          <p className="text-center text-sm font-semibold bg-background">
            {category.name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
