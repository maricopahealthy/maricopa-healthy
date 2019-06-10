import React from 'react'

class AddMarket extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleAdd(){
        //send get request to retrieve new id
    }
    render(){
        return(<div>
            <form onSubmit={this.handleAdd}>
                <input type={"text"} name={"name"} placeholder={"Name of Market"}/>
                <input type={"text"} name={"thumbnail"} placeholder={"Thumbnail Image"}/>
                <input type={"text"} name={"street_address"} placeholder={"Street Address"}/>
                <input type={"date"} name={"created_at"}/>

                <input type={"text"} name={"payment_methods"} placeholder={"payment_methods"}/>
                <input type={"tel"} name={"phone_number"} />
                <input type={"text"} name={"state"} value={"AZ"}/>
                <input type={"text"} name={"website"} placeholder={"Website URL"}/>
                <input type={"text"} name={"zipcode"} placeholder={"zipcode"}/>
                <button type={"submit"}>Add Market</button>
            </form>
        </div>)
    }
}

export default AddMarket