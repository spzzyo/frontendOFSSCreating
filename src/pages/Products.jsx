



// import React, { useEffect, useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [emiOptions, setEmiOptions] = useState([]);
//   const [selectedEmiOption, setSelectedEmiOption] = useState(null);
//   const [loadingModal, setLoadingModal] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     fetch("http://localhost:8080/api/products")
//       .then((res) => res.json())
//       .then((data) => {
//         const withCounts = data.map((p) => ({ ...p, count: 0 }));
//         setProducts(withCounts);
//       })
//       .catch((err) => console.error("Error fetching products:", err));
//   }, []);

//   const handleIncreaseClick = (product) => {
//     setProducts((prev) =>
//       prev.map((p) => (p.id === product.id ? { ...p, count: p.count + 1 } : p))
//     );

//     setSelectedProduct(product);
//     setIsModalOpen(true);
//     setLoadingModal(true);

//     fetch(`http://localhost:8080/api/emi/${product.id}?cardId=1`)
//       .then((res) => res.json())
//       .then((data) => {
//         setEmiOptions(data);
//         setLoadingModal(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching EMI options:", err);
//         setEmiOptions([]);
//         setLoadingModal(false);
//       });
//   };

// // const handleConfirmPurchase = () => {
// //   if (!selectedEmiOption || !selectedProduct) {
// //     alert("Please select an EMI plan before proceeding.");
// //     return;
// //   }

// //   const payload = {
// //     userId: 4,          // fixed for now
// //     cardId: 1,          // fixed for now
// //     tenurePeriod: selectedEmiOption.tenureMonths,
// //     processingFee: selectedEmiOption.processingFee,
// //     items: [
// //       {
// //         productId: selectedProduct.id,
// //         quantity: 1, // default since you increment by 1
// //         unitPrice: selectedProduct.cost
// //       }
// //     ]
// //   };

// //   // ✅ Log payload before sending
// //   console.log("Submitting purchase payload:", JSON.stringify(payload, null, 2));

// //   fetch("http://localhost:8080/api/emi", {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify(payload),
// //   })
// //     .then(async (res) => {
// //       const responseData = await res.json().catch(() => null); // try parsing JSON if available
// //       console.log("Server response:", res.status, responseData);

// //       if (res.ok) {
// //         alert("Purchase confirmed successfully!");
// //         setIsModalOpen(false);
// //         setSelectedEmiOption(null);
// //       } else {
// //         alert("Failed to confirm purchase.");
// //       }
// //     })
// //     .catch((err) => {
// //       console.error("Error confirming purchase:", err);
// //       alert("Error confirming purchase.");
// //     });
// // };


// const handleConfirmPurchase = () => {
//   if (!selectedEmiOption || !selectedProduct) {
//     alert("Please select an EMI plan before proceeding.");
//     return;
//   }

//   // Show loader inside modal
//   setProcessingTransaction(true);

//   // Simulate 3-second transaction delay
//   setTimeout(() => {
//     const payload = {
//       userId: 4,
//       cardId: 1,
//       tenurePeriod: selectedEmiOption.tenureMonths,
//       processingFee: selectedEmiOption.processingFee,
//       items: [
//         {
//           productId: selectedProduct.id,
//           quantity: 1,
//           unitPrice: selectedProduct.cost,
//         },
//       ],
//     };

//     console.log("Submitting purchase payload:", JSON.stringify(payload, null, 2));

//     fetch("http://localhost:8080/api/emi", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     })
//       .then(async (res) => {
//         const responseData = await res.json().catch(() => null);
//         console.log("Server response:", res.status, responseData);

//         if (res.ok) {
//           alert("Purchase confirmed successfully!");
//           setIsModalOpen(false);
//           setSelectedEmiOption(null);
//         } else {
//           alert("Failed to confirm purchase.");
//         }
//       })
//       .catch((err) => {
//         console.error("Error confirming purchase:", err);
//         alert("Error confirming purchase.");
//       })
//       .finally(() => setProcessingTransaction(false));
//   }, 3000);
// };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-white">Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-gray-900 p-5 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
//           >
//             <h2 className="text-xl font-semibold mb-2 text-white">
//               {product.productName}
//             </h2>
//             <p className="text-gray-300 mb-1">{product.productDetails}</p>
//             <p className="text-gray-400 mb-1">Category: {product.category}</p>
//             <p className="text-gray-400 mb-1">Stock: {product.productStock}</p>
//             <p className="text-gray-400 mb-3">Cost: ₹{product.cost}</p>
//             <p className="text-gray-200 mb-3">Count: {product.count}</p>
//             <Button
//               onClick={() => handleIncreaseClick(product)}
//               className="bg-green-600 hover:bg-green-700 w-full"
//             >
//               Increase Count & View EMI
//             </Button>
//           </div>
//         ))}
//       </div>

//       {/* ShadCN Modal */}
//       <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
//         <DialogContent className="sm:max-w-3xl">
//           <DialogHeader>
//             <DialogTitle>
//               {selectedProduct?.productName} EMI Options
//             </DialogTitle>
//             <DialogDescription>
//               {loadingModal
//                 ? "Loading EMI options..."
//                 : "Select a suitable EMI plan below."}
//             </DialogDescription>
//           </DialogHeader>
// {/* 
//           {!loadingModal && emiOptions.length > 0 && (
//             <div className="mt-4 overflow-x-auto">
//               <table className="table-auto w-full text-left border-collapse">
//                 <thead>
//                   <tr>
//                     <th className="px-4 py-2 border-b border-gray-600">
//                       Tenure (Months)
//                     </th>
//                     <th className="px-4 py-2 border-b border-gray-600">
//                       Monthly Installment
//                     </th>
//                     <th className="px-4 py-2 border-b border-gray-600">
//                       Processing Fee
//                     </th>
//                     <th className="px-4 py-2 border-b border-gray-600">
//                       Total Payable
//                     </th>
//                     <th className="px-4 py-2 border-b border-gray-600">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {emiOptions.map((option, index) => (
//                     <tr
//                       key={index}
//                       className={
//                         selectedEmiOption === option
//                           ? "bg-green-800"
//                           : "hover:bg-gray-800"
//                       }
//                     >
//                       <td className="px-4 py-2 border-b border-gray-700">
//                         {option.tenureMonths}
//                       </td>
//                       <td className="px-4 py-2 border-b border-gray-700">
//                         ₹{option.monthlyInstallment}
//                       </td>
//                       <td className="px-4 py-2 border-b border-gray-700">
//                         ₹{option.processingFee}
//                       </td>
//                       <td className="px-4 py-2 border-b border-gray-700">
//                         ₹{option.totalPayable}
//                       </td>
//                       <td className="px-4 py-2 border-b border-gray-700">
//                         <Button
//                           size="sm"
//                           variant="secondary"
//                           onClick={() => setSelectedEmiOption(option)}
//                         >
//                           {selectedEmiOption === option ? "Selected" : "Select"}
//                         </Button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )} */}

//           {!loadingModal && (
//   <>
//     {processingTransaction ? (
//       <div className="flex flex-col items-center justify-center py-10">
//         <div className="text-white text-lg mb-4">Processing transaction...</div>
//         <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     ) : emiOptions.length > 0 ? (
//       <div className="mt-4 overflow-x-auto">
//         <table className="table-auto w-full text-left border-collapse">
//           <thead>
//             <tr>
//               <th className="px-4 py-2 border-b border-gray-600">Tenure (Months)</th>
//               <th className="px-4 py-2 border-b border-gray-600">Monthly Installment</th>
//               <th className="px-4 py-2 border-b border-gray-600">Processing Fee</th>
//               <th className="px-4 py-2 border-b border-gray-600">Total Payable</th>
//               <th className="px-4 py-2 border-b border-gray-600">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {emiOptions.map((option, index) => (
//               <tr
//                 key={index}
//                 className={selectedEmiOption === option ? "bg-green-800" : "hover:bg-gray-800"}
//               >
//                 <td className="px-4 py-2 border-b border-gray-700">{option.tenureMonths}</td>
//                 <td className="px-4 py-2 border-b border-gray-700">₹{option.monthlyInstallment}</td>
//                 <td className="px-4 py-2 border-b border-gray-700">₹{option.processingFee}</td>
//                 <td className="px-4 py-2 border-b border-gray-700">₹{option.totalPayable}</td>
//                 <td className="px-4 py-2 border-b border-gray-700">
//                   <Button
//                     size="sm"
//                     variant="secondary"
//                     onClick={() => setSelectedEmiOption(option)}
//                   >
//                     {selectedEmiOption === option ? "Selected" : "Select"}
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     ) : (
//       <p className="mt-4 text-gray-400">No EMI options available for this product.</p>
//     )}
//   </>
// )}


//           {!loadingModal && emiOptions.length === 0 && (
//             <p className="mt-4 text-gray-400">
//               No EMI options available for this product.
//             </p>
//           )}

//           <DialogFooter>
//             <Button
//               variant="outline"
//               onClick={() => setIsModalOpen(false)}
//               className="mr-2"
//             >
//               Close
//             </Button>
//             {selectedEmiOption && (
//               <Button
//                 className="bg-green-600 hover:bg-green-700"
//                 onClick={handleConfirmPurchase}
//               >
//                 Confirm Purchase
//               </Button>
//             )}
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default Products;


import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [emiOptions, setEmiOptions] = useState([]);
  const [selectedEmiOption, setSelectedEmiOption] = useState(null);
  const [loadingModal, setLoadingModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [processingTransaction, setProcessingTransaction] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then((data) => {
        const withCounts = data.map((p) => ({ ...p, count: 0 }));
        setProducts(withCounts);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleIncreaseClick = (product) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === product.id ? { ...p, count: p.count + 1 } : p))
    );

    setSelectedProduct(product);
    setIsModalOpen(true);
    setLoadingModal(true);

    fetch(`http://localhost:8080/api/emi/${product.id}?cardId=1`)
      .then((res) => res.json())
      .then((data) => {
        setEmiOptions(data);
        setLoadingModal(false);
      })
      .catch((err) => {
        console.error("Error fetching EMI options:", err);
        setEmiOptions([]);
        setLoadingModal(false);
      });
  };

  const handleConfirmPurchase = () => {
    if (!selectedEmiOption || !selectedProduct) {
      alert("Please select an EMI plan before proceeding.");
      return;
    }

    setProcessingTransaction(true);

    // 3-second transaction animation
    setTimeout(() => {
      const payload = {
        userId: 4,
        cardId: 1,
        tenurePeriod: selectedEmiOption.tenureMonths,
        processingFee: selectedEmiOption.processingFee,
        items: [
          {
            productId: selectedProduct.id,
            quantity: 1,
            unitPrice: selectedProduct.cost,
          },
        ],
      };

      console.log("Submitting purchase payload:", JSON.stringify(payload, null, 2));

      fetch("http://localhost:8080/api/emi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then(async (res) => {
          const responseData = await res.json().catch(() => null);
          console.log("Server response:", res.status, responseData);

          if (res.ok) {
            alert("Purchase confirmed successfully!");
            setIsModalOpen(false);
            setSelectedEmiOption(null);
          } else {
            alert("Failed to confirm purchase.");
          }
        })
        .catch((err) => {
          console.error("Error confirming purchase:", err);
          alert("Error confirming purchase.");
        })
        .finally(() => setProcessingTransaction(false));
    }, 3000);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-white">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-900 p-5 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2 text-white">{product.productName}</h2>
            <p className="text-gray-300 mb-1">{product.productDetails}</p>
            <p className="text-gray-400 mb-1">Category: {product.category}</p>
            <p className="text-gray-400 mb-1">Stock: {product.productStock}</p>
            <p className="text-gray-400 mb-3">Cost: ₹{product.cost}</p>
            <p className="text-gray-200 mb-3">Count: {product.count}</p>
            <Button
              onClick={() => handleIncreaseClick(product)}
              className="bg-green-600 hover:bg-green-700 w-full"
            >
              Increase Count & View EMI
            </Button>
          </div>
        ))}
      </div>

      {/* ShadCN Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedProduct?.productName} EMI Options</DialogTitle>
            <DialogDescription>
              {loadingModal ? "Loading EMI options..." : "Select a suitable EMI plan below."}
            </DialogDescription>
          </DialogHeader>

          {!loadingModal && (
            <>
              {processingTransaction ? (
  <div className="flex flex-col items-center justify-center py-10">
    <div className="text-white text-lg mb-4">Processing transaction...</div>

    {/* Virtual card swipe animation */}
    <div className="relative w-64 h-32 bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-4">
      <div className="absolute w-20 h-32 bg-green-500 rounded-xl animate-slide-left"></div>
      <div className="absolute top-2 left-4 text-white font-semibold text-lg">
        Virtual Card
      </div>
    </div>

    {/* Progress bar */}
    <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
      <div className="h-2 bg-green-500 animate-progress"></div>
    </div>
  </div>
) :  emiOptions.length > 0 ? (
                <div className="mt-4 overflow-x-auto">
                  <table className="table-auto w-full text-left border-collapse">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 border-b border-gray-600">Tenure (Months)</th>
                        <th className="px-4 py-2 border-b border-gray-600">Monthly Installment</th>
                        <th className="px-4 py-2 border-b border-gray-600">Processing Fee</th>
                        <th className="px-4 py-2 border-b border-gray-600">Total Payable</th>
                        <th className="px-4 py-2 border-b border-gray-600">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {emiOptions.map((option, index) => (
                        <tr
                          key={index}
                          className={selectedEmiOption === option ? "bg-green-800" : "hover:bg-gray-800"}
                        >
                          <td className="px-4 py-2 border-b border-gray-700">{option.tenureMonths}</td>
                          <td className="px-4 py-2 border-b border-gray-700">₹{option.monthlyInstallment}</td>
                          <td className="px-4 py-2 border-b border-gray-700">₹{option.processingFee}</td>
                          <td className="px-4 py-2 border-b border-gray-700">₹{option.totalPayable}</td>
                          <td className="px-4 py-2 border-b border-gray-700">
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={() => setSelectedEmiOption(option)}
                            >
                              {selectedEmiOption === option ? "Selected" : "Select"}
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="mt-4 text-gray-400">No EMI options available for this product.</p>
              )}
            </>
          )}

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsModalOpen(false)}
              className="mr-2"
            >
              Close
            </Button>
            {selectedEmiOption && !processingTransaction && (
              <Button
                className="bg-green-600 hover:bg-green-700"
                onClick={handleConfirmPurchase}
              >
                Confirm Purchase
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Products;
