import React from 'react'

const SimilarProductCard = () => {
  return (
    <div>
        <div>
      <div className="group px-4 relative">
        <div
          className="card"
        >
          
            <img
              className="card-media object-top"
              src={"https://res.cloudinary.com/dkrwrboka/image/upload/v1742792322/l-shopsy-popcon-formal-shirt-webric-original-imah8sbvrtrzjr6m_db1jck.webp"}
              alt=""
            />
         

        </div>
        <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
          <div className="name">
            <h1>H&M</h1>
            <p>Black & BrownShirt</p>
          </div>
          <div className="price flex items-center gap-3">
            <span className="font-sans text-gray-800">₹ 400</span>
            <span className="thin-line-through text-gray-400">₹ 999</span>
            <span className="text-green-700 font-semibold">60%</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SimilarProductCard