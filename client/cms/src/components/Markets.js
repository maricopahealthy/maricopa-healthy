import React from 'react'
import CurrentMarkets from './CurrentMarkets'
import EditMarket from './EditMarket'
import AddMarket from './AddMarket'
import featureList from "../utils/featureList";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";

class Markets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            markets: [],
        }
        this.handlePageClick = this.handlePageClick.bind(this)
    }
    handlePageClick(e) {
        let pageClicked = e.selected;
        // let wordsUsedForSearch = this.state.searchData;
        // this.getSearchResults(wordsUsedForSearch, pageClicked);
    }

    componentDidMount() {
        fetch('http://localhost:9000/markets')
            .then(res => res.json())
            .then(markets => this.setState({markets}))
    }

    render() {
        return (<div className={"markets-container"}>
                <Link to={'/build/markets/add'}>
                    <button>
                        Add New Market
                    </button>
                </Link>
                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    pageCount={Math.ceil(this.state.markets.length / 10)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    // onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                />
                <CurrentMarkets markets={this.state.markets}/>
            </div>
        )
    }

}

export default Markets