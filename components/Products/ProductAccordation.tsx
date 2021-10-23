/* eslint-disable react/no-unescaped-entities */
const ProductAccord = () => {
  return (
    <div className="accordion py-5" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Details & Care Tips
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Shipping, Delivery & Return
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            Your order will be shipped to the addresses specified by you during the order process. The delivery takes up to 15 calendar days. Moshions is not responsible for any loss of the products following shipment from premises to your delivery address. We encourage you to immediately indicate when you receive a damaged package or refuse it altogether.
            <br />
            <a href="#" target="_blank">Learn More</a><br /><br />
            Please note that you may be required to pay import duties and taxes, which are levied once a shipment reaches your destination.
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductAccord