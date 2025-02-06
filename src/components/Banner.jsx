import banner from "/bannervintage.jpg"
export default function Banner() {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <img
        src={banner}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "grayscale(10%) contrast(70%)", // Adjusting for more color while keeping a grainy effect
        }}
      />
      <h1
        style={{
          position: "absolute",
          top: "75%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#f5f5f5",
          fontSize: "40px",
          lineHeight: "1.1",
          filter: "grayscale(100%)", // Making the text fully grayscale
        }}
      >
        IMAGINE WEARING A GOOD FEELING
      </h1>
      <button
        style={{
          position: "absolute",
          top: "85%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "20px 60px",
          backgroundColor: "#f5f5f5", // Making the button blend with the background
          color: "black", // Keeping the text color consistent
          border: "none",
          filter: "grayscale(100%)", // Making the button text fully grayscale
        }}
      >
        shop now
      </button>
    </div>
  )
}
