export default function Card(props) {
  const { name, price } = props

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div
        style={{
          height: "400px",
          width: "300px",
          backgroundColor: "whitesmoke",
        }}
      />
      <p style={{ fontSize: "12px" }}>{name}</p>
      <p style={{ fontSize: "12px" }}>{price}</p>
    </div>
  )
}
