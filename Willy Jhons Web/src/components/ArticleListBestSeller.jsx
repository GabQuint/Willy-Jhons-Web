import data from "../data/bestSellerData";

export const ArticleListBestSeller = () => {
  return (
    <>
     <h2>Lo más vendido</h2>

<div className="containerBestSeller">
  {data.map((item) => (
    <div key={item.id} className="containerProducts">
      <img src={item.image} alt="" className="product"/>
      <table>
        <thead>
          <tr>
            <th className="productName">{item.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="productDescription">{item.description0} </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="productDescription">{item.description1}</td>
            <td className="productPrice">{item.price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ))}
</div>
    </>
  )
}
