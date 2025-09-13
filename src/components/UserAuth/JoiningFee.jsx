import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function JoiningFee() {
  const navigate = useNavigate();
  const [method, setMethod] = useState("upi");
  const [upi, setUpi] = useState({ id: "" });
  const [card, setCard] = useState({ name: "", number: "", expiry: "", cvv: "" });
  const [nb, setNb] = useState({ bank: "" });

  const isUpiValid = useMemo(() => /\S+@\w+/.test(upi.id.trim()), [upi]);
  const isCardValid = useMemo(() => {
    const numberOk = /^\d{12,19}$/.test(card.number.replace(/\s/g, ""));
    const expiryOk = /^(0[1-9]|1[0-2])\/\d{2}$/.test(card.expiry);
    const cvvOk = /^\d{3,4}$/.test(card.cvv);
    const nameOk = card.name.trim().length >= 2;
    return numberOk && expiryOk && cvvOk && nameOk;
  }, [card]);
  const isNbValid = useMemo(() => !!nb.bank, [nb]);

  const canPay =
    (method === "upi" && isUpiValid) ||
    (method === "card" && isCardValid) ||
    (method === "netbanking" && isNbValid);

  const handlePay = (e) => {
    e.preventDefault();
    if (!canPay) return;
    const payload =
      method === "upi" ? { method, ...upi } :
      method === "card" ? { method, ...card } :
      { method, ...nb };

    console.log("Pay payload:", payload);
    alert("Yayyy Done Payment will notify soon.");
  };

  const shell = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    backgroundColor: "#0a0a0a",
    fontFamily: "Arial, sans-serif",
  };
  const container = {
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: "minmax(260px, 1fr) 2fr",
    backgroundColor: "#0a0a0a",
    border: "2px solid #047857",
    borderRadius: "1rem",
    padding: "2rem",
    width: "100%",
    maxWidth: "70rem",
    margin: "0 1rem",
  };
  const cardBox = {
    border: "1px solid #047857",
    borderRadius: "0.75rem",
    padding: "1.25rem",
    background: "#041c18",
    color: "#d1d5db",
  };
  const h1 = { fontSize: "1.8rem", fontWeight: "bold", color: "#10b981", marginBottom: "0.25rem" };
  const sub = { color: "#d1d5db", marginBottom: "1.25rem" };
  const label = {
    display: "block",
    fontSize: "0.82rem",
    fontWeight: 500,
    color: "#d1d5db",
    marginBottom: "0.45rem",
  };
  const input = {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#0a0a0a",
    border: "1px solid #047857",
    borderRadius: "0.5rem",
    color: "white",
    fontSize: "0.95rem",
    boxSizing: "border-box",
  };
  const tab = (active) => ({
    background: active ? "#10b981" : "#0a0a0a",
    color: active ? "white" : "#d1d5db",
    border: "1px solid #047857",
    borderRadius: "0.5rem",
    padding: "0.6rem 0.9rem",
    fontWeight: 600,
    cursor: "pointer",
  });

  return (
    <div style={shell}>
      <div style={container}>
        <aside style={{ border: "1px solid #047857", borderRadius: "0.75rem", padding: "1.25rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <h2 style={{ ...h1, fontSize: "1.4rem" }}>Your Plan</h2>
            <div style={cardBox}>
              <div style={{ fontSize: "2rem", fontWeight: 700, color: "#c8ffe9", textAlign: "center" }}>
                ₹499
              </div>
              <div style={{ textAlign: "center", marginTop: "0.35rem", color: "#9bdcc4" }}>
                One-time non-refundable joining fee
              </div>
            </div>
          </div>

          <div style={{ marginTop: "1.25rem" }}>
            <h3 style={{ ...h1, fontSize: "1.1rem" }}>Benefits</h3>
            <ul style={{ color: "#b2f5dc", paddingLeft: "1rem", lineHeight: 1.6 }}>
              <li>Instant account activation</li>
              <li>Secure document verification</li>
              <li>Priority support</li>
            </ul>
          </div>

          <div style={{ marginTop: "1.25rem" }}>
            <button
              onClick={() => navigate("/login")}
              style={{
                width: "100%",
                background: "#0a0a0a",
                color: "#10b981",
                border: "1px solid #047857",
                borderRadius: "0.5rem",
                padding: "0.75rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              ← Back to Login
            </button>
          </div>
        </aside>

        <section>
          <header style={{ marginBottom: "1rem" }}>
            <div style={h1}>Joining Fee Payment</div>
            <div style={sub}>
              To activate your account, please pay the one-time joining fee.
            </div>
          </header>

          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
            <button style={tab(method === "upi")} onClick={() => setMethod("upi")}>UPI</button>
            <button style={tab(method === "card")} onClick={() => setMethod("card")}>Card</button>
            <button style={tab(method === "netbanking")} onClick={() => setMethod("netbanking")}>
              NetBanking
            </button>
          </div>

          <form onSubmit={handlePay} style={{ display: "grid", gap: "1rem" }}>
            {method === "upi" && (
              <div style={{ ...cardBox, background: "#0a0f0e" }}>
                <label style={label}>UPI ID *</label>
                <input
                  style={input}
                  placeholder="e.g., username@okicici"
                  value={upi.id}
                  onChange={(e) => setUpi({ id: e.target.value })}
                />
                {!isUpiValid && upi.id && (
                  <div style={{ color: "#fca5a5", marginTop: "0.35rem", fontSize: "0.85rem" }}>
                    Enter a valid UPI ID (e.g., name@bank).
                  </div>
                )}
              </div>
            )}

            {method === "card" && (
              <div style={{ ...cardBox, background: "#0a0f0e" }}>
                <div style={{ display: "grid", gap: "1rem" }}>
                  <div>
                    <label style={label}>Name on Card *</label>
                    <input
                      style={input}
                      placeholder="Full name"
                      value={card.name}
                      onChange={(e) => setCard((p) => ({ ...p, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label style={label}>Card Number *</label>
                    <input
                      style={input}
                      inputMode="numeric"
                      placeholder="1234 5678 9012 3456"
                      value={card.number}
                      onChange={(e) =>
                        setCard((p) => ({ ...p, number: e.target.value.replace(/[^\d ]/g, "") }))
                      }
                    />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label style={label}>Expiry (MM/YY) *</label>
                      <input
                        style={input}
                        placeholder="MM/YY"
                        value={card.expiry}
                        onChange={(e) =>
                          setCard((p) => ({ ...p, expiry: e.target.value.toUpperCase() }))
                        }
                      />
                    </div>
                    <div>
                      <label style={label}>CVV *</label>
                      <input
                        style={input}
                        inputMode="numeric"
                        placeholder="3 or 4 digits"
                        value={card.cvv}
                        onChange={(e) =>
                          setCard((p) => ({ ...p, cvv: e.target.value.replace(/\D/g, "") }))
                        }
                      />
                    </div>
                  </div>
                  {!isCardValid && (card.name || card.number || card.expiry || card.cvv) && (
                    <div style={{ color: "#fca5a5", fontSize: "0.85rem" }}>
                      Please check card details (number, expiry, CVV, name).
                    </div>
                  )}
                </div>
              </div>
            )}

            {method === "netbanking" && (
              <div style={{ ...cardBox, background: "#0a0f0e" }}>
                <label style={label}>Select Bank *</label>
                <select
                  style={{ ...input, color: nb.bank ? "white" : "#9ca3af" }}
                  value={nb.bank}
                  onChange={(e) => setNb({ bank: e.target.value })}
                >
                  <option value="">Choose your bank</option>
                  <option>SBI</option>
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>Axis Bank</option>
                  <option>Kotak Mahindra</option>
                </select>
                {!isNbValid && (
                  <div style={{ color: "#fca5a5", marginTop: "0.35rem", fontSize: "0.85rem" }}>
                    Please select a bank.
                  </div>
                )}
              </div>
            )}

            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
              <button
                type="submit"
                onClick={() => navigate("/login")}
                disabled={!canPay}
                style={{
                  backgroundColor: canPay ? "#10b981" : "#064e3b",
                  color: "white",
                  fontWeight: 700,
                  padding: "0.9rem 1.6rem",
                  borderRadius: "0.6rem",
                  border: "none",
                  cursor: canPay ? "pointer" : "not-allowed",
                }}
              >
                Pay Now
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}