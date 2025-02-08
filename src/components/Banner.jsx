import banner from "/bannervintage.jpg"
export default function Banner() {
  return (
    <div style={{ position: "relative", height: "94vh" }}>
      <img
        src={banner}
        style={{
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "grayscale(10%) contrast(70%)", // Adjusting for more color while keeping a grainy effect
        }}
      />
      <h1
        style={{
          position: "absolute",
          top: "78%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#f5f5f5",
          fontSize: "20px",
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
          padding: "12px 40px",
          backgroundColor: "#f5f5f5", // Making the button blend with the background
          color: "black", // Keeping the text color consistent
          border: "none",
          filter: "grayscale(100%)", // Making the button text fully grayscale
          transition: "background-color 0.3s ease, color 0.3s ease", // Adding transition for hover effect
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "black" // Change background on hover
          e.currentTarget.style.color = "white" // Change text color on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#f5f5f5" // Revert background on mouse leave
          e.currentTarget.style.color = "black" // Revert text color on mouse leave
        }}
      >
        shop now
      </button>
    </div>
  )
}
