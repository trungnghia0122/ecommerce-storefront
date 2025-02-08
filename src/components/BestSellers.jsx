import Card from "./ui/Card"

const items = [
  {
    name: "BOXY DOUBLE ZIP - BLACK",
    price: "$110.00",
  },
  {
    name: "BOXY DOUBLE ZIP - RED",
    price: "$110.00",
  },
  {
    name: "BOXY DOUBLE ZIP - BLUE",
    price: "$110.00",
  },
  {
    name: "BOXY DOUBLE ZIP - BLUE",
    price: "$110.00",
  },
]

export default function BestSellers() {
  return (
    <div
      style={{
        marginTop: "70px",
        marginBottom: "70px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <h1 style={{ fontSize: "16px" }}>BEST SELLERS</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {items.map((item, index) => {
          return <Card key={index} name={item.name} price={item.price} />
        })}
      </div>
    </div>
  )
}
