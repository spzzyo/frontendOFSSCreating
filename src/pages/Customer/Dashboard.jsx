// import { ChartAreaInteractive } from "@/components/chart-area-interactive"
// import { DataTable } from "@/components/data-table"
// import { SectionCards } from "@/components/section-cards"



// export default function Page() {
//   return (

      
//         <div className="flex flex-1 flex-col">
//           <div className="@container/main flex flex-1 flex-col gap-2">
//             <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
//               <SectionCards />
//               <div className="px-4 lg:px-6">
//                 <ChartAreaInteractive />
//               </div>
//               {/* <DataTable data={data} /> */}
//             </div>
//           </div>
//         </div>
   
//   )
// }



import React, { useMemo, useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";


import { format, isThisMonth, parseISO } from "date-fns";


function isNextMonth(date, referenceDate = new Date()) {
  const d = date instanceof Date ? date : parseISO(date);
  const ref = referenceDate;

  const nextMonth = (ref.getMonth() + 1) % 12;
  const nextMonthYear = ref.getMonth() === 11 ? ref.getFullYear() + 1 : ref.getFullYear();

  return d.getMonth() === nextMonth && d.getFullYear() === nextMonthYear;
}

export default function Dashboard() {
  const [installments, setInstallments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  const CardMetal = ({ variant = "gold", title, tagline, onApply }) => {
  const isGold = variant === "gold";

  const metal = isGold
    ? {
        // Warm brushed gold
        grad: "linear-gradient(135deg, #6e5718, #c7a53a 35%, #f3e2a1 55%, #8c6f1f 85%)",
        grain:
          "radial-gradient(1200px 600px at -10% 120%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(1200px 600px at 110% -10%, rgba(255,255,255,0.06), transparent 60%)",
        edge: "#b08d2b",
        text: "#fff",
        glow: "rgba(255, 243, 209, 0.6)",
      }
    : {
        // Cool brushed titanium
        grad: "linear-gradient(135deg, #2d2f32, #5c5f66 35%, #cdd0d6 55%, #3a3d42 85%)",
        grain:
          "radial-gradient(1200px 600px at -10% 120%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(1200px 600px at 110% -10%, rgba(255,255,255,0.06), transparent 60%)",
        edge: "#7a7f88",
        text: "#f7f7f7",
        glow: "rgba(220, 226, 240, 0.6)",
      };

  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Card container */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="relative mx-auto w-full max-w-[520px] rounded-[24px] p-[1px] overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${metal.edge}55, transparent)`,
          boxShadow: `0 30px 80px -30px ${metal.edge}55`,
        }}
      >
        {/* Subtle glowing border */}
        <div
          className="absolute inset-0 rounded-[24px] pointer-events-none"
          style={{
            boxShadow: `0 0 0 1px ${metal.edge}55 inset, 0 0 60px ${metal.glow}`,
            filter: "blur(0.3px)",
          }}
        />

        {/* Card body */}
        <div
          className="relative rounded-[22px] overflow-hidden"
          style={{
            background: `${metal.grad}`,
          }}
        >
          {/* Surface grain/texture */}
          <div
            className="absolute inset-0 opacity-[0.25] pointer-events-none"
            style={{ background: metal.grain, mixBlendMode: "overlay" }}
          />
          {/* Soft vignette for depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(120% 120% at 100% 0%, rgba(0,0,0,0.35) 0%, transparent 40%), radial-gradient(120% 120% at 0% 100%, rgba(0,0,0,0.35) 0%, transparent 40%)",
            }}
          />
          {/* Animated shine sweep */}
          <motion.div
            className="absolute -inset-1 pointer-events-none"
            style={{
              background:
                "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.28) 45%, transparent 60%)",
              filter: "blur(6px)",
              opacity: 0.35,
            }}
            animate={{ x: ["-10%", "110%"] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.2 }}
          />

          {/* Content */}
          <div className="relative p-6 sm:p-7">
            {/* Top row: brand + contactless */}
            <div className="flex items-center justify-between">
              <span
                className="font-semibold tracking-wide"
                style={{ color: metal.text }}
              >
                Online Finance
              </span>
              {/* Contactless icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M7.5 7.5c3.8 2.2 3.8 6.8 0 9" stroke={metal.text} strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M11 6c5 3 5 9 0 12" stroke={metal.text} strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M14.5 4.5c6.1 3.7 6.1 11.3 0 15" stroke={metal.text} strokeOpacity="0.35" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Chip + network row */}
            <div className="mt-6 flex items-center justify-between">
              {/* Chip */}
              <div
                className="rounded-[6px] w-12 h-9"
                style={{
                  background:
                    "linear-gradient(135deg, #c9a55a, #fbe5b7 45%, #b98c3a 90%)",
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.2)",
                }}
              />
              {/* Network circles */}
              <div className="flex items-center gap-1.5">
                <div
                  className="w-6 h-6 rounded-full"
                  style={{ background: isGold ? "#dcb64b" : "#cdd0d6", opacity: 0.9 }}
                />
                <div
                  className="w-6 h-6 rounded-full -ml-2"
                  style={{ background: isGold ? "#b68d2c" : "#a6abb3", opacity: 0.85 }}
                />
              </div>
            </div>

            {/* Number */}
            <div
              className="mt-6 font-[600] tracking-[0.22em] select-none"
              style={{ color: metal.text, opacity: 0.95, fontVariantNumeric: "tabular-nums" }}
            >
                ••••  •••• ••••  •••• 
            </div>

            {/* Name / Expiry */}
            <div className="mt-6 flex items-end justify-between">
              <div className="text-sm" style={{ color: metal.text, opacity: 0.9 }}>
                <div className="uppercase tracking-wider opacity-70 text-[11px]">Cardholder</div>
                <div className="font-semibold mt-1">ALEXANDER P</div>
              </div>
          
            </div>
          </div>
        </div>
      </motion.div>

  
    </motion.div>
  );
};


  // Example balance/info, should come from own API if available
  const cardBalance = 250000.12;
  const cardLimit = 500000.00;
  const statementDue = "2025-10-05";

  // Fetch installments from endpoint
  useEffect(() => {
    async function fetchInstallments() {
      setLoading(true);
      setLoadError(null);
      try {
        const resp = await fetch("http://localhost:8080/user/4/installments");
        if (!resp.ok) throw new Error("Failed to fetch installment data.");
        const data = await resp.json();
        setInstallments(data);
      } catch (e) {
        setLoadError(e.message || "Error loading installments.");
      } finally {
        setLoading(false);
      }
    }
    fetchInstallments();
  }, []);

  // Filter by due in this or next month and "Pending" paymentStatus
  const upcoming = useMemo(() => {
    const now = new Date();
    return installments.filter((p) => {
      if (p.paymentStatus !== "Pending") return false;
      const dueDate = parseISO(p.dueDate);
      return isThisMonth(dueDate) || isNextMonth(dueDate, now);
    });
  }, [installments]);

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col gap-10 p-8">
      {/* Top Row: Card & Balance/Info */}
      <div className="max-w-5xl mx-auto w-full flex flex-col lg:flex-row gap-8">
        {/* Metal card (custom) */}
        <div className="flex-[1.2]">
          <CardMetal variant="gold" title="Online Finance" tagline="Elite Card" />
        </div>

        {/* Balance and Card specifics */}
        <Card className="flex-1 bg-neutral-900 border-neutral-800 shadow-md rounded-2xl flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="text-lg font-bold tracking-tight text-neutral-200">
              Current Balance
            </CardTitle>
            <CardDescription className="text-neutral-400">
              As of today
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              <div className="text-4xl font-semibold text-neutral-100">
                ₹ {cardBalance.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
              </div>
              <div className="text-sm text-neutral-400 flex gap-2 pt-2">
                <span>
                  Limit: <span className="text-base text-neutral-100">₹ {cardLimit.toLocaleString()}</span>
                </span>
                <Badge variant="outline" className="ml-2 border-neutral-700 text-neutral-400 bg-neutral-800">
                  Elite Tier
                </Badge>
              </div>
              <div className="pt-4 text-xs text-neutral-400">
                Next Statement Due: <span className="font-medium text-neutral-100">{format(parseISO(statementDue), "dd MMMM yyyy")}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" className="bg-neutral-800 border-neutral-700 text-neutral-200 hover:bg-neutral-700">
              View Statement
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Payments list */}
      <div className="max-w-5xl mx-auto w-full mt-2">
        <Card className="bg-neutral-900 border-neutral-800 shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-lg text-neutral-200 font-semibold">
              Upcoming Payments
            </CardTitle>
            <CardDescription className="text-neutral-400">
              Due this or next month
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex flex-col gap-4">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-14 w-full rounded-lg" />
                ))}
              </div>
            ) : loadError ? (
              <div className="py-6 text-red-400 text-center">{loadError}</div>
            ) : (
              <ScrollArea className="h-[180px] w-full pr-2">
                {upcoming.length === 0 ? (
                  <div className="text-neutral-400 text-center py-6">
                    No upcoming payments found.
                  </div>
                ) : (
                  <ul className="divide-y divide-neutral-800">
                    {upcoming.map((pay) => (
                      <li key={pay.scheduleId} className="flex items-center justify-between py-3 px-1">
                        <div>
                          <div className="font-medium text-neutral-100">
                            Installment {pay.installmentNo}
                          </div>
                          <div className="text-xs text-neutral-400">
                            Due: {format(parseISO(pay.dueDate), "dd MMM yyyy")}
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg text-neutral-100 font-semibold">
                            ₹ {pay.installmentAmount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                          </span>
                          <Badge className="bg-yellow-900/30 border border-yellow-900/30 text-yellow-200 font-medium px-4 py-1 rounded-xl">
                            Pending
                          </Badge>
                          <Button size="sm" variant="ghost" className="border border-neutral-800 text-neutral-200 hover:bg-neutral-800">
                            Pay Now
                          </Button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </ScrollArea>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}