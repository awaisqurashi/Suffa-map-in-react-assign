import React from 'react'
import Child from './Components/Child'
import './App.css'

  let card = <div className="wrapper">

<div className="card py-3 px-2">

    <div className="about">

        <small className="text-uppercase text-muted">Specialist Gloves</small>
        <h3 className="mb-0">Crimson Web</h3>
        <small className="text-uppercase text-muted">Extraordinary Gloves</small>

        
    </div>

    <hr/>

    <div className="d-flex justify-content-between align-items-center p-2 text-white">

        <h2>$555,00</h2>

        <div className="d-flex flex-column steam-price">

            <div className="d-flex flex-row align-items-center">

                <i className="fa fa-check-circle"></i>
                <small className="ml-1">$661.96</small>
                
            </div>

            <small className="text-muted steam">Steam Price</small>
            
        </div>
        
    </div>

    <hr/>


    <div className="d-flex justify-content-between align-items-center p-2">

        <div className="d-flex flex-row align-items-center">
            <img src="https://img.icons8.com/fluent/96/000000/user-male-circle.png" width="40" />
            <div className="d-flex flex-column ml-2">
                <span>sjored212</span>
                <small className="text-muted seller">seller</small>

                
            </div>
        </div>

        <div className="d-flex flex-row response">
            <div className="d-flex flex-column">

                <span><i className="fa fa-check-circle"></i> 30m</span>
                <small className="margin">Response</small>

                
            </div>

            <div className="d-flex flex-column">

                <span><i className="fa fa-thumbs-up"></i> 30m</span>
                <small className="margin">Positive</small>

                
            </div>



            <div className="d-flex flex-column">

                <span><i className="fa fa-thumbs-down"></i> 30m</span>
                <small className="margin">Negative</small>

                
            </div>



            
            
        </div>
        
    </div>



    <div className="mt-5 p-2">

        <button className="btn btn-primary btn-block cart">Add to cart</button>

        <button className="btn btn-outline-primary btn-block cart"><i className="fa fa-eye text-primary"></i> Inspect in Game</button>
        
    </div>




    
</div>

</div>

let card2 = <div className="wrapper">

<div className="card py-3 px-2">

    <div className="about">

        <small className="text-uppercase text-muted">Specialist Gloves</small>
        <h3 className="mb-0">Crimson Web</h3>
        <small className="text-uppercase text-muted">Extraordinary Gloves</small>

        
    </div>

    <hr/>

    <div className="d-flex justify-content-between align-items-center p-2 text-white">

        <h2>$555,00</h2>

        <div className="d-flex flex-column steam-price">

            <div className="d-flex flex-row align-items-center">

                <i className="fa fa-check-circle"></i>
                <small className="ml-1">$661.96</small>
                
            </div>

            <small className="text-muted steam">Steam Price</small>
            
        </div>
        
    </div>

    <hr/>


    <div className="d-flex justify-content-between align-items-center p-2">

        <div className="d-flex flex-row align-items-center">
            <img src="https://img.icons8.com/fluent/96/000000/user-male-circle.png" width="40" />
            <div className="d-flex flex-column ml-2">
                <span>sjored212</span>
                <small className="text-muted seller">seller</small>

                
            </div>
        </div>

        <div className="d-flex flex-row response">
            <div className="d-flex flex-column">

                <span><i className="fa fa-check-circle"></i> 30m</span>
                <small className="margin">Response</small>

                
            </div>

            <div className="d-flex flex-column">

                <span><i className="fa fa-thumbs-up"></i> 30m</span>
                <small className="margin">Positive</small>

                
            </div>



            <div className="d-flex flex-column">

                <span><i className="fa fa-thumbs-down"></i> 30m</span>
                <small className="margin">Negative</small>

                
            </div>



            
            
        </div>
        
    </div>



    <div className="mt-5 p-2">

        <button className="btn btn-primary btn-block cart">Add to cart</button>

        <button className="btn btn-outline-primary btn-block cart"><i className="fa fa-eye text-primary"></i> Inspect in Game</button>
        
    </div>




    
</div>

</div>

let cardArray = [card, card2]
console.log(card,card2)

function App() {
  return (
    <div>
      <h1> We used map method and child component to
         create bootstrap product cards and data 
          passed Using props and 
          saved in an object.</h1>
      {cardArray.map((item)=>{
        return  < Child key={item} cardData={item}/>
      })}
    </div>
  )
}

export default App