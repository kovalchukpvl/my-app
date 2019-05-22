import React from 'react';
import ElementList from './ElementList';
// import arrowup from '../img/arrowup.png';



class ListContent extends React.Component {

    state = {

    }

    constructor(props) {
        super(props);
        this.state = {
            thisDay: [],
            beforeDay: [],
            checkList: false,
            checkListBefore: false,

        };
    }

    componentDidMount() {
        this.fetchThisDay();
        this.fetchBeforeDay();

    }

    fetchThisDay() {
        fetch('https://api.tvmaze.com/schedule?country=US&date=' + this.props.dataClick.format('YYYY-MM-DD'))
            .then(response => response.json())
            .then(data =>
                this.setState({
                    thisDay: data,
                    isLoading: false,
                })
            )
    }


    fetchBeforeDay() {
        fetch('https://api.tvmaze.com/schedule?country=US&date=' + this.props.dataClick.subtract(1, 'days').startOf('day').format('YYYY-MM-DD'))
            .then(response => response.json())
            .then(data =>
                this.setState({
                    beforeDay: data,
                    isLoading: false,
                })
            )
    }



    ListCheck() {

        this.setState((prevstate, props) => ({ ...prevstate, checkList: !this.state.checkList }));
    }

    ListCheckBefore() {
        this.setState((prevstate, props) => ({ ...prevstate, checkListBefore: !this.state.checkListBefore }));
    }

    MovieMore() {
        if (!this.state.checkList) {
            // return 'More serial (' + this.state.thisDay.length + ') ∨';
            return 'More serial (+20) ∨';
        } else {
            return 'The main thing ∧';
        }
    }

    MovieMoreBefore() {
        if (!this.state.checkListBefore) {
            // return 'More serial (' + this.state.beforeDay.length + ') ∨';
            return 'More serial (+20) ∨';
        } else {
            return 'The main thing ∧';
        }
    }

    render() {


        var temp = [];
        var thisD = this.state.thisDay;
     
        if (!this.state.checkList) {

            temp = thisD.slice(0, 3);
            console.log(temp);
        } else {
            temp = thisD.slice(0, 20);
            console.log(temp);
        }

        

        var out = temp.map(movie => {
            return (
                <ElementList
                    key={movie.id}
                    show={movie.show}
                    img={movie.show.image}
                    year={movie.season}
                ></ElementList>

            );
        })

        //----------------------------------------------

      

        var tempBefore = [];
        var BeforeD = this.state.beforeDay;
        if (!this.state.checkListBefore) {

            tempBefore = BeforeD.slice(0, 4);
        } else {
            tempBefore = BeforeD.slice(0, 20);
        }


        var outBefore = tempBefore.map(movie => {
            return (
                <ElementList
                    key={movie.id}
                    show={movie.show}
                    img={movie.show.image}
                    year={movie.season}
                ></ElementList>

            );
        })



        return (
            <div className="movie-list">
                <h2 className="movie-first-data">{this.props.dataClick.format('D MMM YYYY')}</h2>
                {out}
                <p className="movie-more" onClick={this.ListCheck.bind(this)}>{this.MovieMore()}</p>
                <h2 className="movie-first-data">{this.props.dataClick.subtract(1, 'days').startOf('day').format('D MMM YYYY')}</h2>
                {outBefore}
                <p className="movie-more" onClick={this.ListCheckBefore.bind(this)}>{this.MovieMoreBefore()}</p>
            </div>
        )



    }
}

export default ListContent;