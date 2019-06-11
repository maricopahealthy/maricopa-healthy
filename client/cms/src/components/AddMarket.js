import React from 'react'

class AddMarket extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            thumbnail: '',
            street_address: '',
            created_at: '',
            payment_methods: '',
            phone_number: '',
            state: '',
            website: '',
            zipcode: ''
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleAdd(){
        this.setState({
            created_at: new Date()

        })

    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(<div>
            <form onSubmit={this.handleAdd}>
                <input type={"text"} name={"name"} placeholder={"Name of Market"} onChange={this.handleChange}/>
                <input type={"text"} name={"thumbnail"} placeholder={"Thumbnail Image"} onChange={this.handleChange}/>
                <input type={"text"} name={"street_address"} placeholder={"Street Address"} onChange={this.handleChange}/>

                <input type={"text"} name={"payment_methods"} placeholder={"payment_methods"} onChange={this.handleChange}/>
                <input type={"tel"} name={"phone_number"} onChange={this.handleChange}/>
                <input type={"text"} name={"state"} value={"AZ"} onChange={this.handleChange}/>
                <input type={"text"} name={"website"} placeholder={"Website URL"} onChange={this.handleChange}/>
                <input type={"text"} name={"zipcode"} placeholder={"zipcode"} onChange={this.handleChange}/>
                <button type={"submit"}>Add Market</button>
            </form>
        </div>)
    }
}

export default AddMarket