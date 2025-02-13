import React from 'react'
import { Row , Col , Container } from 'react-bootstrap'
export default function ProductCategory() {
  return (
    <section style={{marginTop:"10rem"}}>
          <Row className='justify-content-center'>
              <h2 className='text-center'>Add Product Category</h2>
               <Col md={6}>
                    <label htmlFor="">Category Name</label>
                    <input type="text"id='' style={{width:"100%"}} className='mb-4' placeholder='Product Name'/>
                    <label htmlFor="">Description</label>
                    <textarea name="" rows={5} cols={10} id=""style={{width:"100%"}}placeholder='Description'></textarea>
                   <button className='btn btn-secondary mt-3 p-3' style={{width:"100%"}} >
                       Add
                   </button>
               </Col>
          </Row>
    </section>
  )
}
