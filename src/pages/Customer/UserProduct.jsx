import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

function groupByCategory(products) {
  const grouped = {};
  products.forEach(product => {
    const category = product.category || "Uncategorized";
    if (!grouped[category]) grouped[category] = [];
    grouped[category].push(product);
  });
  return grouped;
}

const UserProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = 4;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/user/${userId}/products`
        );
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [userId]);

  // Group products by category for display
  const groupedProducts = groupByCategory(products);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-neutral-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-neutral-200 tracking-tight">
          Your Products
        </h1>

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-60 w-full rounded-xl" />
            ))}
          </div>
        )}

        {error && (
          <div className="flex justify-center mt-16">
            <p className="text-red-400 text-lg">{error}</p>
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="flex flex-col items-center mt-20">
            <svg width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-6">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" />
            </svg>
            <p className="text-neutral-400 text-lg">No products purchased yet.</p>
          </div>
        )}

        {/* Loop through categories */}
        {!loading && !error && products.length > 0 && (
          <div className="space-y-12">
            {Object.keys(groupedProducts).map(category => (
              <div key={category}>
                <h2 className="text-2xl font-semibold text-neutral-300 mb-4 pl-1">
                  {category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {groupedProducts[category].map(product => (
                    <Card
                      key={product.id}
                      className="bg-neutral-900 border border-neutral-800 shadow-md rounded-2xl transition-transform duration-200 hover:shadow-lg hover:-translate-y-1"
                    >
                      <CardContent className="p-0 flex flex-col h-full">
                        <div className="rounded-t-2xl overflow-hidden h-40 w-full flex items-center justify-center bg-neutral-800">
                          {product.imageUrl
                            ? (
                              <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="object-cover w-full h-full"
                              />
                            ) : (
                              <div className="flex-1 flex items-center justify-center text-neutral-600">
                                <svg width="56" height="56" fill="none" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                  <rect x="7" y="7" width="42" height="42" rx="8" />
                                </svg>
                              </div>
                            )
                          }
                        </div>
                        <div className="flex flex-col flex-1 p-5">
                          <h3 className="text-lg font-semibold text-neutral-100 mb-1 truncate">{product.name}</h3>
                          <p className="text-neutral-400 mb-4 text-sm">
                            Price: <span className="font-medium text-neutral-100">${product.price.toFixed(2)}</span>
                          </p>
                          <Badge className="bg-neutral-800 text-neutral-400 border border-neutral-700 px-3 py-1 text-xs rounded-full select-none pointer-events-none opacity-80 mt-auto">
                            Purchased
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProduct;