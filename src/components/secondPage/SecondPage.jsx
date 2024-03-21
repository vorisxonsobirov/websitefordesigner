import React from 'react'
import "../secondPage/secondPage.css"
import img2 from "../../assets/fs3tG9xVDUnmFcj2WaHEnskrdmY.jpg"


const SecondPage = () => {
  return (
    <>
    <div className="container">
            <div className="main_holder">



                <div className="img_holder">
                      <div className="card_img">
                        <img src={img2} alt="" />
                        <div className="txt_bio">
                            <p>LAC SUPERIEUR</p>
                            <span>Lorem ipsum dolor sit amet consectetur .</span>
                        </div>
                        
                      </div>
                      <div className="vertikal_card ">
                      <div className=" gorizantal">
                        <div className="txt_bio">
                            <p>LAC SUPERIEUR</p>
                            <span>Lorem ipsum dolor sit amet consectetur .</span>
                        </div>
                      <img src={img2} alt="" />

                      </div>
                      <div className="h400_flex">
                          <div className="card_img h400">
                       
                        <div className="txt_bio">
                            <p>LAC SUPERIEUR</p>
                            <span>Lorem ipsum dolor sit amet consectetur .</span>
                        </div>
                         <img src={img2} alt="" />
                      </div>
                      <div className="card_img h400">
                       
                        <div className="txt_bio">
                            <p>LAC SUPERIEUR</p>
                            <span>Lorem ipsum dolor sit amet consectetur .</span>
                        </div>
                         <img src={img2} alt="" />
                      </div>
                      </div>
                    
                      </div>
                </div>


                <div className="text_holder">

                </div>
            </div>
    </div>
    </>
  )
}

export default SecondPage
