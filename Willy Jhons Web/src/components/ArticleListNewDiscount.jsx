


export const ArticleListNewDiscount = ({articles}) => {
  return (
    <>
         

<div className="containerBestSeller">
  {articles.map((articles) => (
    <div key={articles.id} className="containerProducts">
      <img src={articles.image} alt="" className="product"/>
      <table>
        <thead>
          <tr>
            <th className="productName">{articles.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="productDescription">{articles.description0} </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="productDescription">{articles.description1}</td>
            <td className='productPriceBefore'>{articles.priceBefore}</td>
            <td className="productPrice">{articles.price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ))}
</div>
    </>
  )
}
