const left = ["Track Your Order", "Clubhouse", "FAQ", "Contact"]

const middle = [
  "Privacy Policy",
  "Shipping Policy",
  "Refund Policy",
  "Terms of Service",
]

export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "340px",
        background: "whitesmoke",
        gap: "60px",
        color: "grey",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "300px",
          fontSize: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: " column",
            gap: "12px",
            color: "grey",
          }}
        >
          {left.map((item, index) => {
            return (
              <p style={{ cursor: "pointer" }} key={index}>
                {item}
              </p>
            )
          })}
        </div>

        <div style={{ display: "flex", flexDirection: " column", gap: "12px" }}>
          {middle.map((item, index) => {
            return (
              <p style={{ cursor: "pointer" }} key={index}>
                {item}
              </p>
            )
          })}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: " column",
            gap: "20px",
            color: "grey",
          }}
        >
          <p style={{ maxWidth: "400px" }}>
            Sign up and get 10% off on your first order with us! Stay updated
            about the latest releases and get exclusive deals
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "300px",
            }}
          >
            <input
              style={{
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
                cursor: "text",
                color: "black",
                fontSize: "12px",
              }}
              placeholder='Enter your email'
              type='email'
            />
            <hr
              style={{
                border: "none",
                height: "2px",
                backgroundColor: "black",
              }}
            />
          </div>

          <div style={{ display: "flex", gap: "20px" }}>
            <p style={{ cursor: "pointer" }}>instagram</p>
            <p style={{ cursor: "pointer" }}>pinterest</p>
            <p style={{ cursor: "pointer" }}>tiktok</p>
          </div>
        </div>
      </div>

      <p style={{ fontSize: "12px", color: "grey" }}>
        @ 2025 VINTAGE CLUB ALL RIGHTS RESERVED.
      </p>
    </div>
  )
}
