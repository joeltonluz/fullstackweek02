"use client";

import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { formatCurrency } from "@/helpers/formatCurrency";
import { ProductWithTotalPrice } from "@/helpers/product";
import { MinusIcon, PlusIcon, TruckIcon } from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
  product: Pick<
    ProductWithTotalPrice,
    "basePrice" | "description" | "discountPercentage" | "totalPrice" | "name"
  >;
}

const ProductInfo = ({
  product: { basePrice, description, discountPercentage, totalPrice, name },
}: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleClickQuantity = (increase: boolean) => {
    if (increase) setQuantity((prev) => prev + 1);
    else setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{name}</h2>
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">{formatCurrency(totalPrice)}</h1>
        {discountPercentage > 0 && (
          <DiscountBadge>{discountPercentage}</DiscountBadge>
        )}
      </div>

      {discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75 text-red-500">
          {formatCurrency(Number(basePrice))}
        </p>
      )}

      <div className="flex items-center mt-4 gap-2">
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={() => handleClickQuantity(false)}
        >
          <MinusIcon size={16} />
        </Button>

        <span className="px-2">{quantity}</span>

        <Button
          size={"icon"}
          variant={"outline"}
          onClick={() => handleClickQuantity(true)}
        >
          <PlusIcon size={16} />
        </Button>
      </div>

      <div className="flex flex-col gap-3 mt-8">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify opacity-70 text-sm">{description}</p>
      </div>

      <Button className="mt-8 uppercase font-bold">
        Adicionar ao carrinho
      </Button>

      <div className="flex items-center px-5 py-2 justify-between bg-primary-foreground mt-8 rounded-lg">
        <div className="flex items-center gap-2">
          <TruckIcon />
          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via{" "}
              <span className="font-bold text-yellow-300 bg-primary rounded px-1">
                SEDEX 10
              </span>
            </p>
            <p className="text-xs text-primary">
              Envio para <span className="font-bold">todo Brasil</span>{" "}
            </p>
          </div>
        </div>
        <p className="text-xs font-bold">Frete Grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
