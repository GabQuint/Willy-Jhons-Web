import '../css/styles_main_screen_best_seller.css'
export const BestSeller = () => {
  return (
    <>
    
    <h2>Lo más vendido</h2>
    
    <div className="containerBestSeller">
    <div className="container-product0">
        <img src="/src/assets/products/anilloDelLeon.jpg" alt="" className='product'/>
       <table>
        <thead>
        <tr>
          <th className='productName'>Anillo del Leon</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td className='productDescription'>Acero Inoxidable </td>
        </tr>
        </tbody>
        <tbody>
        <tr>
        <td className='productDescription'>Baño de oro</td>
        <td className='productPrice'>8.99$</td>
        </tr>
        </tbody>
       </table>
    </div>
    <div className="container-product1">
        <img src="/src/assets/products/anilloPlataOro.jpg" alt=""  className='product'/>
        <table>
          <thead>
        <tr>
          <th className='productName'>Anillo plata y oro</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td className='productDescription'>Acero Inoxidable </td>
        </tr>
        </tbody>
        <tbody>
        <tr>
        <td className='productDescription'>Baño de oro</td>
        <td className='productPrice'>19.99$</td>
        </tr>
        </tbody>
       </table>
       
    </div>
    <div className="container-product2">
        <img src="/src/assets/products/anilloCorazon.jpg" alt=""  className='product'/>
        <table>
          <thead>
        <tr>
          <th className='productName'>Anillo corazón</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td className='productDescription'>Anillo de plata</td>
        </tr>
        </tbody>
        <tbody>
        <tr>
        <td className='productDescription'>Piedras incrustradas</td>
        <td className='productPrice'>29.99$</td>
        </tr>
        </tbody>
       </table>
      
    </div>
    <div className="container-product3">
        <img src="/src/assets/products/anilloColores.jpg" alt=""  className='product'/>
        <table>
          <thead>
        <tr>
          <th className='productName'>Anillos varios</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td className='productDescription'>Acero Inoxidable </td>
        </tr>
        </tbody>
        <tbody>
        <tr>
        <td className='productDescription'>Piedra incrustradas</td>
        <td className='productPrice'>9.99$</td>
        </tr>
        </tbody>
       </table>
       
    </div>
    </div>
    </>
  )
}
