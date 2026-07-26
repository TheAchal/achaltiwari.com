// Shared visual for the Open Graph / Twitter share card.
// Returns a satori-compatible element (every node uses display:flex).
// NOTE: satori's default font lacks arrow glyphs: use "0 to 1", not "0→1".

export function OgCard() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#08080b",
        padding: "72px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            display: "flex",
            width: "48px",
            height: "48px",
            borderRadius: "10px",
            backgroundColor: "#e8974a",
            color: "#08080b",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "30px",
            fontWeight: 700,
          }}
        >
          A
        </div>
        <div
          style={{
            display: "flex",
            color: "#b8bec9",
            fontSize: "23px",
            letterSpacing: "2px",
            fontWeight: 600,
          }}
        >
          PRODUCT MANAGER · BUILDS 0 TO 1 · DIRECTS AI
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            color: "#e8974a",
            fontSize: "72px",
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          Achal Tiwari
        </div>
        <div
          style={{
            display: "flex",
            color: "#f3f3f6",
            fontSize: "40px",
            fontWeight: 400,
            marginTop: "16px",
            maxWidth: "920px",
          }}
        >
          I ship AI products, 0 to 1. Fast.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "12px" }}>
          {["10K+ users", "12.9% free-to-paid", "profitable in 5 weeks"].map(
            (t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  border: "1px solid #1b1b22",
                  backgroundColor: "#0e0e13",
                  color: "#9a9aa8",
                  fontSize: "22px",
                  padding: "10px 18px",
                  borderRadius: "999px",
                }}
              >
                {t}
              </div>
            )
          )}
        </div>
        <div style={{ display: "flex", color: "#9a9aa8", fontSize: "22px" }}>
          achaltiwari.com
        </div>
      </div>
    </div>
  );
}
