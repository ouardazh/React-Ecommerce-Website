import './OrderForm.css'

function OrderForm(){
    return(
        <div className='containerOrderForm'>
        <h3 className='orderTitle'>CHECKOUT / PLACE ORDER</h3>
        <p>Complete the details below to complete your beauty purchase.</p>
        <form action="">

            <label htmlFor="">Full Name *</label> <br />
            <input type="text" placeholder='e.g.Ananya Sharma'/> <br /><br />

            <label htmlFor="">Email Address *</label> <br />
            <input type="email" placeholder='anayna@example.com' />  <br /><br />

            <label htmlFor="">Select Product *</label> <br />
            <select name="" id="">
                <option value="">10% Niacinamide Face Serum</option>
                <option value="">Oil Control Face Wash with Salicylic Acid</option>
                <option value="">Velvet Matte Lipstick</option>
                <option value="">Gentle Cleanser</option>
                <option value="">Nourishing Hair Care Oil</option>
            </select>
             <br /><br />

            <label htmlFor="">Quantity *</label> <br />
            <input type="number" />
            <br />
            <button className='confirmOrder'>CONFIRM ORDER</button>

        </form>
        </div>
    )
}
export default OrderForm;